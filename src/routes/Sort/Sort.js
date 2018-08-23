import React ,{PropTypes} from 'react';
import {connect} from 'dva';
import {Layout} from 'antd';
import NavComponent from '../../components/NavComponent/NavComponent'
import SortList from '../../components/SortComponent/SortList'

function Sort ({sorts}){
  console.log("sorts=========="+sorts);

  const {list}=sorts;

  const SortListProps = {
    dataSource: list,
  };

  return (
    <Layout>
      <NavComponent/>
      <Layout>
        <SortList {...SortListProps}/>
      </Layout>
    </Layout>
  )
    ;
}
// Sort.propTypes = {
//   sorts: PropTypes.object,
// };

function mapStateToProps({ sorts }) {
  return {sorts};
}

// 建立数据关联关系
export default connect(mapStateToProps)(Sort);
