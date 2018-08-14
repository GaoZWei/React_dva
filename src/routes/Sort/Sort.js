import React from 'react';
import {connect} from 'dva';
import {Layout} from 'antd';
import NavComponent from '../../components/NavComponent/NavComponent'
import SortList from '../../components/SortComponent/SortList'

class Sort extends React.Component {
  constructor(props) {
    super(props);
  }
render(){
    return(
      <Layout>
        <NavComponent/>
        <Layout>
          <SortList/>
        </Layout>
      </Layout>
    );
}
}

export default Sort;
