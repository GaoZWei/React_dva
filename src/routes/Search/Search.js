import React from 'react';
import {connect} from 'dva';
import {Layout} from 'antd';
import NavComponent from '../../components/NavComponent/NavComponent'
import SearchInput from '../../components/SearchComponent/SearchInput'
import SearchList from '../../components/SearchComponent/SearchList'
import SearchContent from '../../components/SearchComponent/SearchContent'
import Foot from '../../components/CommonComponent/Foot'

class Search extends React.Component {
  render() {
    return (
      <Layout>
        <NavComponent/>
        <Layout>
          <Layout style={{marginLeft: 200, width: 400, backgroundColor: 'white'}}>
            <Layout style={{alignItems: 'center'}}>
              <SearchInput/>
            </Layout>
            <SearchList/>
          </Layout>
        </Layout>
        <Layout style={{marginLeft: 2, width: 700}}>
          <SearchContent/>
          <Foot/>
        </Layout>
      </Layout>
    );
  }
}

export default connect()(Search);
