import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
// import { request } from './../config/request';

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    render: (name) => renderName(name),
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
    title: 'Password',
    dataIndex: 'password',
    key: '4',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 150,
    render: () => <div className='btns'><button className='deleteBtn'>Delete</button><button className='editBtn'>Edit</button></div>,
  },
];
const renderName = (nestedData) => {
  return nestedData.firstname;
};
const renderNestedData = (nestedData) => {
  return nestedData.city;
};




const SecondTableData = () => {
  const [data,setData]= useState();
  
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/users').then(res => {setData(res.data);});
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
export default SecondTableData;