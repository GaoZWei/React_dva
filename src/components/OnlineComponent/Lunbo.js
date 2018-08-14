import React from 'react';
import {Layout, Carousel, Card} from 'antd';
import styles from './online.css';

const Lunbo = () => {
  return (<Carousel autoplay className={styles.lunbo}>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3 >3</h3></div>
    <div><h3 >4</h3></div>
  </Carousel>)
};

export default Lunbo;
