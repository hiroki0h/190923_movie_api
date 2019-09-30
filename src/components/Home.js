import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { menuOpen, searchOpen } from '../store/modules/INIT';
import Dotdotdot from 'react-dotdotdot';
import styled from 'styled-components';
import Slider from 'react-slick';
import NoPoster from "../assets/images/noPoster.png";

class Home extends Component {
  render(){
    const { pagename, openMenu, nowPlaying, popular, upcoming } = this.props;
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
      speed: 500
    };
    console.log(openMenu);
    return(
      <>
      <div>
        <h2><Link to={`/${popular}`}>{popular}</Link></h2>
        <SliderList className="list clearfix">
          <Slider {...settings}>
              {popular.map(item => (
                <div key={item.id} className="movies_list">
                  <Link to={`detail/${item.id}`}>
                    <div className="img_box">
                      {item.poster_path === null
                        ?<img src={NoPoster} alt="" className="no_poster"/>
                        :<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title}/>
                      }
                    </div>
                    <div className="text_box">
                      <Dotdotdot clamp={3}>
                          <p className="title">{item.title}</p>
                      </Dotdotdot>
                      <Dotd
                      .01otdot clamp={6}>
                          <p className="overview">{item.overview}</p>
                      </Dotdotdot>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </SliderList>
        </div>
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
)(Home);