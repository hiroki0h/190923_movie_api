import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import media from 'styled-media-query';
import Dotdotdot from 'react-dotdotdot';
// import Slider from 'react-slick';
import 'react-animated-slider/build/horizontal.css';
import ListTheme from '../assets/ListTheme';
import Pagination from '../components/Pagination';

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
      <ListTheme/>
        <div>
          <h2>Now Playing</h2>
          {/* <ul className="list clearfix">
              {nowPlaying.map(item => (
                  <li key={item.id}>
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
                  </li>
              ))}
          </ul> */}
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
        <Pagination/>
      </>
    )
  }
  // https://reactjsexample.com/animated-slider-carousel-component-for-react/
  // https://eb1.it/react-animated-slider/
  // https://react-slick.neostack.com/docs/get-started/
}
export default HomeContainer;
//   huge: '1440px',
//   large: '1170px',
//   medium: '768px',
//   small: '450px',