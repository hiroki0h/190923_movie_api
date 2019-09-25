import React, { Component } from 'react';
import styled from 'styled-components';
import HomeContainer from '../Container/HomeContainer';
import Pagination from './Pagination';
// https://kokohapps.tistory.com/entry/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-smooth-scroll-%EB%90%98%EB%8A%94-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94-%EB%A7%8C%EB%93%A4%EB%A0%A4%EA%B3%A0-%ED%95%9C-%EC%82%BD%EC%A7%88
class Home extends Component { 
  render(){
    return(
      <div>
        <HomeContainer/>
        <Pagination/>
      </div>
    )
  }
}
export default Home;

