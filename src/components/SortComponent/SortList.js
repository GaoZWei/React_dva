import React from 'react';
import {Layout, Avatar, List} from 'antd';
const {Header}=Layout;
const data = [
  {
    title: 'Java 知识点',
  },
  {
    title: 'Android 知识点',
  },
  {
    title: 'Web知识点',
  },
  {
    title: 'javascript知识点',
  },
];
const SortList=()=>(
  <Layout style={{marginLeft: 200,width:1200}}>
    <Header style={{background: '#aaa', padding: 0, width: 380, textAlign: 'center'}}>头部动态显示点击的栏目</Header>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
            title={<a href="https://ant.design">{item.title}</a>}
            description="不同知识点，后来需要从数据库动态加载"
          />
        </List.Item>
      )}
    />

  </Layout>
);
export default SortList;
