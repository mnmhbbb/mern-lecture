import { Collapse, Radio } from 'antd';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const RadioStyle = styled.div`
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 36px;
  }
`;

const RadioboxList = (props) => {
  const [radioValue, setRadioValue] = useState(0);

  const renderbox = () =>
    props.list &&
    props.list.map((value, index) => (
      <div key={index}>
        <Radio key={index} value={value._id}>
          {value.name}
        </Radio>
      </div>
    ));

  const radioChange = useCallback(
    (e) => {
      setRadioValue(e.target.value);
      props.handleFilter(e.target.value);
    },
    [props],
  );

  return (
    <RadioStyle>
      <Collapse defaultActiveKey={['0']}>
        <Collapse.Panel header="가격 선택" key="1">
          <Radio.Group onChange={radioChange} value={radioValue}>
            {renderbox()}
          </Radio.Group>
        </Collapse.Panel>
      </Collapse>
    </RadioStyle>
  );
};

export default RadioboxList;
