import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  width: 100%;
  height: 46px;
  padding: 1rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

const SearchFeature = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchHandler = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
      props.updateSearch(e.target.value);
    },
    [props],
  );

  return (
    <div>
      <InputStyle placeholder="상품명을 입력하세요." onChange={searchHandler} value={searchTerm} />
    </div>
  );
};

export default SearchFeature;
