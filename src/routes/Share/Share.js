import React from 'react'
import {connect} from 'dva';
import {Layout} from 'antd';
import NavComponent from '../../components/NavComponent/NavComponent'
import ShareList from '../../components/ShareComponent/ShareList'

class Collect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <NavComponent/>
        <ShareList/>
      </Layout>
    );
  }
}

export default connect()(Collect);
