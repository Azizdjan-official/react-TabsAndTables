import React from 'react';
import { Tabs } from 'antd';
import TableData from './TableData';
import SecondTableData from './SecondTableData';
import ThirdTableData from './ThirdTableData';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Table 1',
    children: <TableData />,
  },
  {
    key: '2',
    label: 'Table 2',
    children: <SecondTableData/>,
  },
  {
    key: '3',
    label: 'Table 3',
    children: <ThirdTableData/>,
  },
];
const Tab = () => <div className='tab'>
    <Tabs  defaultActiveKey="1" items={items} onChange={onChange} />
</div>;
export default Tab;