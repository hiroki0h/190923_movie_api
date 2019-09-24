import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components';

class Nav extends Component {
  render(){
    return(
    <NAV>
      <ul>
        <li>
       {/* 특정 class 적용해라 -  activeClassName , exact : 정확히 매칭될때만 실행*/}
          <NavLink exact to="/" activeClassName="active">Now Playing</NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">Popular</NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">Up Coming</NavLink>
        </li>
      </ul>
    </NAV>
    )
  }
}
const NAV = styled.nav`
  width:100%;
  height:100%;  
  background:#030f03;
  position:fixed;
  left:0;
  z-index:9;
  ul {
    width:50%;
    padding-top:50px;
    transform:translateX(-50%);
    position:absolute;
    top:0;
    left:50%;
    li {
      margin-bottom:20px;
      text-align:center;
      a {
        padding:10px 0;
        border-bottom:1px solid transparent;
        color:#aaa;
        font-weight:bold;
        font-size:40px;
        display:block;
      }
      .active {
        /* border-bottom:1px solid #fff; */
      }
      :hover a {
        color:#fff;
        border-bottom:1px solid #fff;
        transition:all .8s ease-out;
      }
    }
  }
`;
export default Nav;
// https://reactjsexample.com/tag/scroll/
// https://reactjsexample.com/scroll-to-a-position-in-react/