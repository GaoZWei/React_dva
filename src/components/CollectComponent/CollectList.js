import React from 'react'
import {Layout, Avatar, List,Button} from 'antd';
import $ from 'jquery';
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
const SortList=()=>{
  function qingqiu(){
    $.ajax({
      url:'http://localhost:8080/knowledgebase/user/user_knowledge_list',
      type:'post',
      dataType: "jsonp",
      jsonp:"callback",
      jsonpCallback:"knowledge",
      data:{
        // account:311,
        // password:123
        id:1
      },
      success:function(result){
        console.log(1)
        console.log(result[0].title)
      },
      // error:function (error) {
      //   console
      //   console.log(error)
      // }
    })
  }
  return(
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
   <Button  onClick={qingqiu} title={123}/>
  </Layout>
);
}
export default SortList;

