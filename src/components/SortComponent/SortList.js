import React from 'react';
import {Layout, Avatar, List} from 'antd';
const {Header}=Layout;
const data = [
  {
    title: 'Java 知识点',
    content:'1213456789'
  },
  {
    title: 'Android 知识点',
    content:'123456789'
  },
  {
    title: 'Web知识点',
    content:'1123456'
  },
  {
    title: 'javascript知识点',
    content:'1123456'
  },
];
const SortList=({onShow,sort})=> {
  const column=data;
  return (
    <Layout style={{marginLeft: 200, width: 1200}}>
      <Header style={{background: '#aaa', padding: 0, width: 380, textAlign: 'center'}}>头部动态显示点击的栏目</Header>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={column => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
              title={<a href="https://ant.design">{column.title}</a>}
              description={column.content}
            />
          </List.Item>
        )}
      />

    </Layout>);
};
export default SortList;
