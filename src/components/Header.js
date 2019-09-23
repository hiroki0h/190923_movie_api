import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

class Header extends Component {
  render(){
    return(
    <HeaderBox>
      <HeaderBoxInner>
        <HeaderLink to="/">MOVIES</HeaderLink>
        <SearchLink to="/search" className="search">Search</SearchLink>
        <Button type="button" className="menu">Menu</Button>
      </HeaderBoxInner>
    </HeaderBox>
    )
  }
}
const HeaderBox = styled.header`
  width:100%;
  padding:0 20px;
  background:rgb(3, 15, 3);
`;
const HeaderBoxInner = styled.div`
  max-width:960px;
  height:50px;
  margin:0 auto;
  position:relative;
`;
const HeaderLink = styled(Link)`
  line-height:50px;
  font-size:20px;
  font-weight:900;
  color:#fff;
  display:inline-block;
`;
const SearchLink = styled(Link)`
  width:50px;
  height:50px;
  background:pink;
  position:absolute;
  top:0;
  right:60px;
`;
const Button = styled.button`
  width:50px;
  height:50px;
  background:pink;
  position:absolute;
  top:0;
  right:0;
`;
export default Header;