import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { Link } from 'react-router-dom'
import { menuOpen } from '../store/modules/INIT';
import Pagination from '../components/Pagination';

class PaginationContainer extends Component { 
  render(){
    return(
      <Pagination/>
    )
  }
};
export default PaginationContainer;
