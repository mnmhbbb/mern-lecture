const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Product } = require('../models/Product');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

// 받아온 파일을 저장
var upload = multer({ storage: storage }).single('file');

// 저장한 정보를 프론트에 전달
router.post('/image', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post('/', (req, res) => {
  const product = new Product(req.body);
  product.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post('/products', (req, res) => {
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let limit = req.body.limit ? parseInt(req.body.limit) : 10;
  let term = req.body.searchTerm;

  let findArgs = {};
  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === 'price') {
        findArgs[key] = {
          $gte: req.body.filters[key][0], //greater than equal
          $lte: req.body.filters[key][1], //less than equal
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  if (term) {
    Product.find(findArgs)
      .find({ $text: { $search: term } }) //
      .populate('writer')
      .skip(skip)
      .limit(limit)
      .exec((err, productInfo) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true, productInfo, postSize: productInfo.length });
      });
  } else {
    Product.find(findArgs)
      .populate('writer')
      .skip(skip)
      .limit(limit)
      .exec((err, productInfo) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true, productInfo, postSize: productInfo.length });
      });
  }
});

router.get('/products_by_id', (req, res) => {
  let type = req.query.type;
  let productId = req.query.id;

  Product.find({ _id: productId })
    .populate('writer')
    .exec((err, product) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send({ success: true, product });
    });
});

module.exports = router;
