import React from 'react';
import {Layout} from 'antd';
import NavComponent from '../../components/NavComponent/NavComponent'
import KnowledgeList from '../../components/KnowledgeComponent/KnowledgeList'
import KnowledgeCnontent from  '../../components/KnowledgeComponent/KnowledgeContent'

class Knowledge extends React.Component {

  render(){
    return(
      <Layout>
        <NavComponent/>
        <Layout style={{marginLeft:2,width:700}}>
          <KnowledgeList/>
        </Layout>
        <Layout style={{marginLeft:2,width:800}}>
          <KnowledgeCnontent />
        </Layout>
      </Layout>
    );
  }
}

export default Knowledge;
