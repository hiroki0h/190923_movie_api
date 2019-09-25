import React, { Component } from 'react';
import styled from 'styled-components';
import HomeContainer from '../Container/HomeContainer';
import Pagination from './Pagination';

class UpComing extends Component { 
  render(){
    return(
      <div>
        <HomeContainer/>
        <Pagination/>
      </div>
    )
  }
}
export default UpComing;