import React from 'react';
import {connect} from 'dva';
import {Layout} from 'antd';
import NavComponent from '../../components/NavComponent/NavComponent'
import SortList from '../../components/SortComponent/SortList'


const Sort = ({dispatch, sort}) => {
  function handleshow(title) {
    dispatch({
      type: 'sort/show',
      payload: title
    })
  }

  return (
    <Layout>
      <NavComponent/>
      <Layout>
        <SortList onshow={handleshow}/>
      </Layout>
    </Layout>
  );

}

export default connect(({ sort }) => ({
  sort,
}))(Sort);
