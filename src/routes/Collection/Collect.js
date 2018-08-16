import React from 'react'
import {connect} from 'dva';
import {Layout} from 'antd';
import NavComponent from '../../components/NavComponent/NavComponent'
import CollectList from '../../components/CollectComponent/CollectList'

class Collect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <NavComponent/>
        <CollectList/>
      </Layout>
    );
  }
}
export default connect()(Collect);
