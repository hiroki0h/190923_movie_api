import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { menuOpen, genresOpen } from '../store/modules/INIT';
import GenresListContainer from '../Container/GenresListContainer';

class Nav extends Component {
  menuOpen = (id) => {
    this.props.menuOpen();
  }
  genresListOpen = () => {
    this.props.genresOpen();
  }
  render(){
    const activeStyle = {
      borderBottom:"1px solid #fff",
      color:"#fff"
    };
    return(
      <NAV>
        <div className="nav">
          <ul className="depth1">
            <li>
          {/* 특정 NavLink 적용해라 -  activeStyle , exact : 정확히 매칭될때만 실행*/}
              <NavLink exact to="/now_playing/1" activeStyle={activeStyle} onClick={this.menuOpen}>Now Playing</NavLink>
            </li>
            <li>
              <NavLink to="/popular/1" activeStyle={activeStyle} onClick={this.menuOpen}>Popular</NavLink>
            </li>
            <li>
              <NavLink to="/upcoming/1" activeStyle={activeStyle} onClick={this.menuOpen}>Up Coming</NavLink>
            </li>
            <li>
              <button type="button" onClick={this.genresListOpen}>Genres</button>
              {this.props.accordion
                ? <GenresListContainer menuOpen={this.menuOpen}/>
                : ""
              }
            </li>
            <li>
              <button type="button" onClick={this.genresListOpen}>Language</button>
              {this.props.accordion
                ? <GenresListContainer menuOpen={this.menuOpen}/>
                : ""
              }
            </li>
          </ul>
        </div>
      </NAV>
    )
  }
}
const NAV = styled.nav`
  width:100%;
  height:100%;  
  overflow-y:auto;
  background:#030f03;
  position:fixed;
  left:0;
  z-index:9;
  .nav {
  width:100%;
  height:100%;
  position:absolute;
  }
  .depth1 {
    width:50%;
    padding-top:50px;
    margin-bottom:50px;
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
      button {
        width:100%;
        line-height:77px;
        border-bottom:1px solid transparent;
        color:#aaa;
        font-weight:bold;
        font-size:40px;
        display:block;
      }
      .active {
        border-bottom:1px solid #fff;
      }
      :hover > a {
        color:#fff;
        border-bottom:1px solid #fff;
        transition:all .8s ease-out;
      }
      :hover > button {
        color:#fff;
        border-bottom:1px solid #fff;
        transition:all .8s ease-out;
      }
    }
  }
  .depth2 {
    padding-top:20px;
    li {
      width:25%;
      float:left;
      a {
        
        padding:0;
        font-size:25px;
      }
    }

  }
`;
const mapStateToProps = ({ INIT }) => ({
  openMenu : INIT.openMenu,
  accordion : INIT.accordion
});
const mapDispatchToProps = { menuOpen, genresOpen };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
// https://reactjsexample.com/tag/scroll/
// https://reactjsexample.com/scroll-to-a-position-in-react/