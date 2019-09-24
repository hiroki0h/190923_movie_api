import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {  } from '../store/modules/INIT';
import styled from 'styled-components';

class Search extends Component { 
  render(){
    return(
      <Form action="" onSubmit={this.submitOnSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value="Search..."
        ></input>
        <button type="submit">Search</button>
      </Form>
    )
  }
};
const Form = styled.form`
padding-top:50px;
  input {
    width:100%;
    padding:0 20px;
    border:none;
    border-bottom:2px solid #fff;
    font-size:40px;
    color:#fff;
    background:transparent;
  }
`;
export default Search;