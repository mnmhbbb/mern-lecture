import axios from 'axios';
import React, { useCallback, useState } from 'react';
import FileUpload from '../../components/FileUpload';
import { useInput } from '../../hooks/useInput';
import LayoutStyle from '../../layout';
import { UploadStyle } from './style';

const category = [
  { key: 1, value: '디지털/가전' },
  { key: 2, value: '가구/인테리어' },
  { key: 3, value: '도서/티켓/음반' },
  { key: 4, value: '생활/가공식품' },
  { key: 5, value: '패션/잡화' },
  { key: 6, value: '게임/취미' },
  { key: 7, value: '뷰티/미용' },
  { key: 8, value: '반려동물용품' },
  { key: 9, value: '스포츠/레저' },
  { key: 10, value: '기타' },
];

const UploadPage = (props) => {
  const [title, titleChange] = useInput('');
  const [description, descriptionChange] = useInput('');
  const [price, priceChange] = useInput(0);
  const [cate, cateChange] = useInput(1);
  const [images, setImages] = useState([]);

  const updateImages = useCallback((image) => {
    setImages(image);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!title || !description || !price || !images) {
        alert('모든 내용을 채워야 합니다.');
      } else {
        const body = {
          writer: props.user.userData._id,
          title: title,
          description: description,
          price: price,
          category: cate,
          images: images,
        };

        axios.post('api/product', body).then((response) => {
          if (response.data.success) {
            alert('상품이 등록되었습니다.');
            props.history.push('/');
          } else {
            alert('상품 등록 에러');
          }
        });
      }
    },
    [title, description, price, cate, images, props.user.userData._id, props.history],
  );

  return (
    <LayoutStyle>
      <UploadStyle>
        <h2>상품 업로드</h2>
        <form onSubmit={onSubmit}>
          <FileUpload updateImages={updateImages} />
          <div className="items">
            <div>
              <input type="text" placeholder="상품명" value={title || ''} onChange={titleChange} />
            </div>
            <div>
              <textarea
                placeholder="상품 설명"
                value={description || ''}
                onChange={descriptionChange}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="상품 가격"
                value={price || ''}
                onChange={priceChange}
              />
            </div>
            <div className="cate">
              <label>카테고리 선택</label>
              <select value={cate} onChange={cateChange}>
                {category.map((items) => (
                  <option key={items.key} value={items.key}>
                    {items.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="btn">
              <button type="submit">등록하기</button>
            </div>
          </div>
        </form>
      </UploadStyle>
    </LayoutStyle>
  );
};

export default UploadPage;
