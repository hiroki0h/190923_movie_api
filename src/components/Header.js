import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { menuOpen } from '../store/modules/INIT';
import styled from 'styled-components';
import Nav from './Nav'

class Header extends Component {
  menuOpen = () => {
    this.props.menuOpen();
  }
  render(){
    const { openMenu } = this.props;
    return(
    <HeaderBox>
      <HeaderBoxInner>
        <HeaderLink to="/">MOVIES</HeaderLink>
        <SearchLink to="/search" className="search">Search</SearchLink>
        <Button type="button" className="menu" onClick={this.menuOpen}>Menu</Button>
        { !openMenu && <Nav/> }
      </HeaderBoxInner>
    </HeaderBox>
    )
  }
}
const HeaderBox = styled.header`
  width:100%;
  padding:0 20px;
  background:#030f03; 
  position:fixed;
  z-index:99;
`;
const HeaderBoxInner = styled.div`
  max-width:1280px;
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
  font-size:0;
  background:pink;
  position:absolute;
  top:0;
  right:60px;
  ::before {
    content:'';
    width:50px;
    height:50px;
    background:url(https://img.icons8.com/ios-glyphs/90/000000/search.png);
    background-size:100%;
    display:block;
  }
`;
const Button = styled.button`
  width:50px;
  height:50px;
  background:pink;
  position:absolute;
  top:0;
  right:0;
`;
const mapStateToProps = ({ INIT }) => ({
  openMenu : INIT.openMenu
});
const mapDispatchToProps = { menuOpen };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);