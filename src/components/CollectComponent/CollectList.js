import React from 'react'
import {Layout, Avatar, List} from 'antd';
const {Header}=Layout;
const data = [
  {
    title: '知识点1',
    content:'收藏日期1'
  },
  {
    title: '知识点2',
    content:'收藏日期2'
  },
  {
    title: '知识点3',
    content:'收藏日期3'
  },
  {
    title: '知识点4',
    content:'收藏日期4'
  },
];
const SortList=()=>(
  <Layout style={{marginLeft: 200,width:1200}}>
    <Header style={{background: '#aaa', padding: 0, width: 380, textAlign: 'center'}}>我的收藏</Header>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.content}
          />
        </List.Item>
      )}
    />

  </Layout>
);
export default SortList;

