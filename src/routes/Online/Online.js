import React from 'react';
import {connect} from 'dva';
import {Layout} from 'antd';
import NavComponent from '../../components/NavComponent/NavComponent'
import Lunbo from '../../components/OnlineComponent/Lunbo';
import styles from '../../components/OnlineComponent/online.css'

require('../../components/OnlineComponent/online.css')

class Online extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Layout>
        <NavComponent/>
        <Layout style={{marginTop:20,border:20,backgroundColor:"yellow",height:600}}>
          <Lunbo/>
        </Layout>


      </Layout>
    );
  }
}

export default Online;
