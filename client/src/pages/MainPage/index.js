import React, { useCallback, useEffect, useState } from 'react';
import LayoutStyle from '../../layout';
import axios from 'axios';
import { Col, Row } from 'antd';
import { MainStyle, ProductList } from './style';
import ImageSlider from '../../components/ImageSlider';
import { Category, Price } from './Data';
import CheckboxList from '../../components/Checkbox';
import RadioboxList from '../../components/Radiobox';
import SearchFeature from '../../components/SearchFeature';

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(4);
  const [postSize, setPostSize] = useState(0);
  const [Filters, setFilters] = useState({
    category: [],
    price: [],
  });
  const [searchTerm, setSearchTerm] = useState('');

  const getProduct = useCallback(
    (body) => {
      axios.post('api/product/products', body).then((response) => {
        if (response.data.success) {
          if (body.loadMore) {
            setProducts([...products, ...response.data.productInfo]);
          } else {
            setProducts(response.data.productInfo);
          }
          setPostSize(response.data.postSize);
        } else {
          alert('상품 목록을 가져오지 못 했습니다.');
        }
      });
    },
    [products],
  );

  useEffect(() => {
    let body = {
      skip: Skip,
      limit,
    };
    getProduct(body);
  }, []);

  const loadMore = () => {
    let skip = Skip + limit;
    let body = {
      skip,
      limit,
      loadMore: true,
    };
    getProduct(body);
    setSkip(skip);
  };

  const renderList = products.map((prod, index) => {
    return (
      <Col lg={6} md={8} sm={12} xs={24} key={index}>
        <a href={`/${prod._id}`}>
          <ProductList>
            <ImageSlider images={prod.images} />
            <div className="description">
              <strong>{prod.title}</strong>
              <p>{prod.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
            </div>
          </ProductList>
        </a>
      </Col>
    );
  });

  const showFilteredResults = useCallback(
    (filters) => {
      const body = {
        skip: 0,
        limit,
        filters: filters,
      };
      getProduct(body);
      setSkip(0);
    },
    [getProduct, limit],
  );

  // filter 유저가 체크한 목록들이 담겨져 있음
  const handleFilter = useCallback(
    (filters, key) => {
      const newFilters = { ...Filters };
      newFilters[key] = filters;
      showFilteredResults(newFilters);

      if (key === 'price') {
        let priceValue = handlePrice(filters);
        newFilters[key] = priceValue; //[0, 9999]
      }

      showFilteredResults(newFilters);
      setFilters(newFilters);
    },
    [showFilteredResults, Filters],
  );

  const handlePrice = (value) => {
    const data = Price;
    let arr = [];
    for (let key in data) {
      if (data[key]._id === Number(value)) {
        arr = data[key].array; //[0, 9999]
      }
    }

    return arr;
  };

  const updateSearch = useCallback(
    (newSearch) => {
      let body = {
        skip: 0,
        limit,
        filters: Filters,
        searchTerm: newSearch,
      };
      setSkip(0);
      setSearchTerm(newSearch);
      getProduct(body);
    },
    [limit, Filters, getProduct],
  );

  return (
    <LayoutStyle>
      <MainStyle>
        <h1>상품 목록</h1>
        <Row className="selectGroup">
          <Col lg={24} md={24} xs={24} className="search">
            <SearchFeature updateSearch={updateSearch} />
          </Col>
          <Col lg={12} md={12} xs={24} className="category">
            <CheckboxList
              list={Category}
              handleFilter={(filters) => handleFilter(filters, 'category')}
            />
          </Col>
          <Col lg={12} md={12} xs={24} className="price">
            <RadioboxList list={Price} handleFilter={(filters) => handleFilter(filters, 'price')} />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>{renderList}</Row>

        <div className="btn">{postSize >= limit && <button onClick={loadMore}>더보기</button>}</div>
      </MainStyle>
    </LayoutStyle>
  );
};

export default MainPage;
