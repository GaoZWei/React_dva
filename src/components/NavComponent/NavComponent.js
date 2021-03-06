import React from 'react';
import {Layout,Menu,Icon,Avatar} from 'antd';
import NavLeft from './NavLeft'
import logo from '../../assets/logo.png'
const {Sider} = Layout;


const NavComponent=()=>(
    <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}>
      <img src={logo} alt={'logo'} style={{width:50,height:50,marginLeft:62,marginTop:20,marginBottom:20}}/>
      <div className="logo"/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <NavLeft target="/sort" linkText={<span><Icon type="user"/>
            <span className="nav-text">知识点分类</span></span>}/>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLeft target="/knowledge" linkText={<span>
          <Icon type="video-camera"/>
          <span className="nav-text">知识点</span>
            </span>}/>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLeft target="/addknowledge" linkText={<span>
          <Icon type="upload"/>
          <span className="nav-text">添加</span></span>}/>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLeft target="/search" linkText={
            <span>
              <Icon type="bar-chart"/>
              <span className="nav-text">搜索</span></span>}/>
        </Menu.Item>
        <Menu.Item key="5">
            <NavLeft target="/share" linkText={<span>
          <Icon type="cloud-o"/>
          <span className="nav-text">我的分享</span></span>}/>
        </Menu.Item>

        <Menu.Item key="6">
            <NavLeft target="/online" linkText={<span>
          <Icon type="appstore-o"/>
          <span className="nav-text">在线知识库</span></span>}/>
        </Menu.Item>
        <Menu.Item key="7">
            <NavLeft target="/hot" linkText={<span>
          <Icon type="team"/>
          <span className="nav-text">热门知识点</span></span>}/>
        </Menu.Item>
        <Menu.Item key="8">
            <NavLeft target="/collect" linkText={<span>
          <Icon type="shop"/>
          <span className="nav-text">我的收藏</span></span>}/>
        </Menu.Item>
      </Menu>
      <Avatar
        style={{color: '#f56a00', backgroundColor: '#fde3cf',marginLeft:68,marginTop:30}}>高</Avatar>
    </Sider>

);
export default NavComponent;
