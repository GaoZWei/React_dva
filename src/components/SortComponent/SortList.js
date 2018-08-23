import React from 'react';
import {Layout, Avatar, List} from 'antd';
const {Header}=Layout;

const SortList=({dataSource})=> {
  return (
    <Layout style={{marginLeft: 200, width: 1200}}>
      <Header style={{background: '#aaa', padding: 0, width: 380, textAlign: 'center'}}>头部动态显示点击的栏目</Header>
      <List
        itemLayout="horizontal"
        dataSource={dataSource}
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

    </Layout>);
};
export default SortList;
