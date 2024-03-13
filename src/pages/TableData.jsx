import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { request } from './../config/request';
const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Username',
    width: 100,
    dataIndex: 'username',
    key: 'Username',
    fixed: 'left',
    
  },
  {
    title: 'Email ',
    dataIndex: 'email',
    key: '1',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render: (address) => renderNestedData(address),
    key: '2',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: '3',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: '4',
  },
  {
    title: 'Company',
    dataIndex: 'company',
    render: (address) => renderCompany(address),
    key: '5',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 150,
    render: () => <div className='btns'><button className='deleteBtn'>Delete</button><button className='editBtn'>Edit</button></div>,
  },
];
const renderNestedData = (nestedData) => {
  return nestedData.street;
};
const renderCompany = (nestedData) => {
  return nestedData.name;
};



const TableData = () => {
  const [data,setData]= useState();
  
  useEffect(()=>{
    request.get('/users').then(res => setData(res.data))
  },[])
  console.log(data);
  return <div className='tabledata'>
    <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1300,
    }}
  />
  </div>
};
export default TableData;