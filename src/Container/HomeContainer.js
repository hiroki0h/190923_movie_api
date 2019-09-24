import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import media from 'styled-media-query';
import Dotdotdot from 'react-dotdotdot';
import Slider from 'react-slick';
import 'react-animated-slider/build/horizontal.css';
import ListBg from "../assets/images/list_bg_V.png";
class HomeContainer extends Component { 
  state = {
    isLoading : true,
    nowPlaying : [],
    popular : [],
    upcoming : []
  }
  getMovies = async () => { 
    const { data: { results : nowPlayingList }} = await moviesApi.nowPlaying();
    const { data: { results : popularList }} = await moviesApi.popular();
    const { data: { results : upcomingList }} = await moviesApi.upcoming();
    this.setState({
      nowPlaying : [...nowPlayingList], 
      popular : [...popularList], 
      upcoming : [...upcomingList] 
    });
    console.log(this.state.popular);
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { nowPlaying, popular, upcoming } = this.state;
    return(
      <>
        <div>
          <h2>Now Playing</h2>
          <Ul className="clearfix">
              {nowPlaying.map(item => (
                  <Li key={item.id}>
                    <Link to={`detail/${item.id}`}>
                      <div className="img_box">
                        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.original_title}/>
                      </div>
                      <div className="text_box">
                        <Dotdotdot clamp={3}>
                            <p className="title">{item.title}</p>
                        </Dotdotdot>
                        <Dotdotdot clamp={6}>
                            <p className="overview">{item.overview}</p>
                        </Dotdotdot>
                      </div>
                    </Link>
                  </Li>
              ))}
          </Ul>
        </div>
        {/* <div>
          <h2>Popular</h2>
          <Ul className="clearfix">
            <Slider>
              {popular.map((
              item, index) => (
                <Li key={index}>
                  <Link to={`detail/${item.id}`}>
                    <div className="img_box">
                      <span className="img"></span>
                    </div>
                    <div className="text_box">
                      <p className="title">{item.title}</p>
                    </div>
                  </Link>
                </Li>
              ))}
            </Slider>
          </Ul>
        </div> */}
        {/* <div>
          <h2>Up Coming</h2>
          <Ul className="clearfix">
              {upcoming.map(item => (
                  <Li key={item.id}>
                    <Link to={`detail/${item.id}`}>
                      <div className="img_box">
                        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.original_title}/>
                      </div>
                      <div className="text_box">
                        <Dotdotdot clamp={3}>
                            <p className="title">{item.title}</p>
                        </Dotdotdot>
                        <Dotdotdot clamp={2}>
                            <p className="org_title">{item.original_title}</p>
                        </Dotdotdot>
                      </div>
                    </Link>
                  </Li>
              ))}
          </Ul>
        </div> */}
      </>
    )
  }
  // https://reactjsexample.com/animated-slider-carousel-component-for-react/
  // https://eb1.it/react-animated-slider/
  // https://react-slick.neostack.com/docs/get-started/
}
const Ul = styled.ul`
  padding-top:20px;
  margin-right:-20px;
`;
const Li = styled.li`
  width:25%;
  padding-right:20px;
  margin-bottom:20px;
  float:left;
  :hover .img_box img{
    transform: scale(1.2);
  }
  :hover .img_box::before {
    opacity:1;
    z-index:1;
  }
  :hover .text_box {
    opacity:1;
    z-index:2;
  }
  a {
    color:#fff;
    position:relative;
    display:block;
  }
  .img_box {
    overflow:hidden;
    position:relative;
    ::before {
      content:""; 
      width:100%;
      height:100%; 
      background:url(${ListBg}) repeat-x 0 0;
      position:absolute; 
      top:0; 
      left:0;
      opacity:0;
      display:block; 
      transition:all .2s ease-out;
    }
    img {
      transform: scale(1);
      transition:all .5s ease-out;
    }
  }
  .text_box {
    width:100%;
    padding:20px;
    opacity:0;
    position:absolute;
    bottom:0;
    left:0;
    transition:all .5s ease-out;
    .title {
      font-size:20px;
      font-weight:900;
    }
    .overview {
      padding-top:5px;
      font-size:16px;
      color:#ddd;
    }
  }
  ${media.lessThan('medium')`
    width:33.3333%;
  `}
  ${media.lessThan('small')`
    width:100%;
  `}
`;
export default HomeContainer;
//   huge: '1440px',
//   large: '1170px',
//   medium: '768px',
//   small: '450px',