import React from 'react';
import {connect} from 'dva';
import {Layout} from 'antd';
import NavComponent from '../../components/NavComponent/NavComponent'
import AddKnowledgeComponent from '../../components/KnowledgeComponent/AddKnowledgeComponent'
class AddKnowledge extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Layout>
        <NavComponent/>

        <Layout style={{marginLeft:200,marginRight:200,width:700}}>
          <AddKnowledgeComponent/>
        </Layout>
      </Layout>
    );
  }
}

export default AddKnowledge;
