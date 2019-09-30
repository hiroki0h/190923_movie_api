import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { menuOpen, searchOpen } from '../store/modules/INIT';
import styled from 'styled-components';
import Slider from 'react-slick';
import List from '../components/List';

class ListContainer extends Component {
  render(){
    const { pagename, openMenu, nowPlaying, moviesResult, showUp } = this.props;
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
      speed: 500
    };
    console.log(openMenu);
    console.log('pagename - '+pagename);
    return(
      <>
        {pagename === 'home'
        ?
        <>
          {showUp.map((list, index) => (
            <div key={index}>
              <h2><Link to="/">{pagename}</Link></h2>
              <SliderList className="list clearfix">
                <Slider {...settings}>
                  <List
                  />
                </Slider>
              </SliderList>
            </div>
          ))}
        </>
        :
          <div>
            <h2><Link to={`/${pagename}`}>{pagename}</Link></h2>
            <SliderList className="list clearfix">
              <List/>
            </SliderList>
          </div>
        }
      </>
    )
  }
}
const SliderList = styled.div`
button {color:#fff;}
`;
const mapStateToProps = ({ INIT }) => ({
  pagename : INIT.pagename,
  openMenu : INIT.openMenu
});
const mapDispatchToProps = { menuOpen, searchOpen };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);