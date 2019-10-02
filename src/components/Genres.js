import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { menuOpen, pagename, searchOpen } from '../store/modules/INIT';
import styled from 'styled-components';

class Genres extends Component {
  render(){
    return(
      <div>
        {/* {match.params.map((item, index) =>
          <p key={index}>{item.id}</p>
        )} */}
      </div>
    )
  }
}
const mapStateToProps = ({ INIT }) => ({
  openMenu : INIT.openMenu
});
const mapDispatchToProps = { menuOpen, pagename, searchOpen };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Genres);