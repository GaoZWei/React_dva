import React from 'react';
import {List, Avatar, Icon} from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
];
const SearchList = () => (
  <List
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    bordered
    dataSource={data}
    renderItem={item => (<List.Item>
      <Icon type="book" style={{fontSize: 16, color: '#08c'}}/>
      {item}</List.Item>)}
  />

);

export default SearchList;
