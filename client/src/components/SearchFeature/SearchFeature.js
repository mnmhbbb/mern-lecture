import { Input } from 'antd';
import React, { useCallback, useState } from 'react';

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
      <Input placeholder="상품명을 입력하세요." onChange={searchHandler} value={searchTerm} />
    </div>
  );
};

export default SearchFeature;
