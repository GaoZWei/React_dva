import React from 'react';
import {connect} from 'dva';
import {Layout} from 'antd';
import NavComponent from '../../components/NavComponent/NavComponent'
import HotPage from '../../components/HotComponent/HotKnowledge'

class Hot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <NavComponent/>
        <Layout style={{marginLeft:200,width:700}}>
         <HotPage/>
        </Layout>
      </Layout>
    );
  }
}

export default connect()(Hot);
