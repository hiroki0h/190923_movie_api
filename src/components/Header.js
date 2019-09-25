import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { menuOpen } from '../store/modules/INIT';
import styled from 'styled-components';
import Nav from './Nav'
import SearchIcon from "../assets/images/search_icon.png";

class Header extends Component {
  menuOpen = () => {
    this.props.menuOpen();
  }
  render(){
    const { openMenu } = this.props;
    return(
    <HeaderBox >
      <HeaderBoxInner>
        <HeaderLink to="/">MOVIES</HeaderLink>
        <SearchLink to="/search" className="search">Search</SearchLink>
        <Button 
          type="button" 
          className="menu" 
          onClick={this.menuOpen}>
            <span className={!openMenu ? "munu_icon openMenu" : "munu_icon"} ></span>
          Menu
        </Button>
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
  position:absolute;
  top:0;
  right:60px;
  ::before {
    content:'';
    width:35px;
    height:35px;
    background:url(${SearchIcon});
    background-size:100%;
    position:absolute;
    top:8px;
    left:8px;
    display:block;
  }
`;
const Button = styled.button`
  width:50px;
  height:50px;
  font-size:0;
  position:absolute;
  top:0;
  right:0;
    .munu_icon {
      width:30px;
      height:2px;
      border-radius:4px;
      background:#fff;
      display:block;
      position:relative;
      top:-9px;
      left:50%;
      transform:translateX(-50%);
      transition-duration:0.3s;
      ::before {
        content:"";
        width:30px;
        height:2px;
        border-radius:4px;
        background:#fff;
        position:absolute;
        top:10px;
        left:0;
        display:block;
        transition-duration:0.5s;
      }
      ::after {
        content:"";
        width:30px;
        height:2px;
        border-radius:4px;
        background:#fff;
        position:absolute;
        top:20px;
        left:0;
        display:block;
        transition-duration:0.5s;
      }
    }
    /* openMenu */
    .munu_icon.openMenu {
      background:transparent;
      ::before {
        transform:rotateZ(45deg) scaleX(1.25);
      }
      ::after {
        transform:rotateZ(-45deg) scaleX(1.25) translate(6px,-7px);
      }
    }
`;
const mapStateToProps = ({ INIT }) => ({
  openMenu : INIT.openMenu
});
const mapDispatchToProps = { menuOpen };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
