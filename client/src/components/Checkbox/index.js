import React, { useCallback, useState } from 'react';
import { Checkbox, Collapse } from 'antd';
import { CateStyle } from './style';

const CheckboxList = (props) => {
  const [checked, setChecked] = useState([]);

  const checkToggle = useCallback(
    (value) => {
      const currentIdx = checked.indexOf(value);
      const newArr = [...checked];
      if (currentIdx === -1) {
        newArr.push(value);
      } else {
        newArr.splice(currentIdx, 1);
      }
      setChecked(newArr);
      props.handleFilter(newArr);
    },
    [checked, props],
  );

  const renderCheckbox = () =>
    props.list &&
    props.list.map((value, index) => (
      <div key={index} className="check">
        <Checkbox
          onChange={() => checkToggle(value._id)}
          checked={checked.indexOf(value._id) === -1 ? false : true}
        />
        <span>{value.name}</span>
      </div>
    ));

  return (
    <CateStyle>
      <Collapse defaultActiveKey={['0']}>
        <Collapse.Panel header="카테고리 선택" key="1">
          {renderCheckbox()}
        </Collapse.Panel>
      </Collapse>
    </CateStyle>
  );
};

export default CheckboxList;
