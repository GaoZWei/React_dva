import React from 'react'
import {Layout, Avatar, List} from 'antd';
const {Header}=Layout;
const data = [
  {
    title: '知识点1',
    content:'分享日期1'
  },
  {
    title: '知识点2',
    content:'分享日期2'
  },
  {
    title: '知识点3',
    content:'分享日期3'
  },
  {
    title: '知识点4',
    content:'分享日期4'
  },
  {
    title: '知识点2',
    content:'分享日期2'
  },
  {
    title: '知识点3',
    content:'分享日期3'
  },
  {
    title: '知识点4',
    content:'分享日期4'
  },
];
const ShareList=()=>(
  <Layout style={{marginLeft: 200,width:1200}}>
    <Header style={{background: '#aaa', padding: 0, width: 380, textAlign: 'center'}}>我的分享</Header>
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
export default ShareList;

