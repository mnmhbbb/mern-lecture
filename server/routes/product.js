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
  // product collection에 들어있는 모든 상품 정보 가져오기
  Product.find()
    .populate('writer')
    .exec((err, productInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true, productInfo });
    });
});

module.exports = router;
