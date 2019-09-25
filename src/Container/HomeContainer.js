import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components';
import media from 'styled-media-query';
import Dotdotdot from 'react-dotdotdot';
// import Slider from 'react-slick';
import 'react-animated-slider/build/horizontal.css';
import ListTheme from '../assets/ListTheme';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';

class HomeContainer extends Component { 
  state = {
    isLoading : false,
    nowPlaying : [],
    popular : [],
    upcoming : []
  }
  getMovies = async () => { 
    const { data: { results : nowPlayingList }} = await moviesApi.nowPlaying();
    const { data: { results : popularList }} = await moviesApi.popular();
    const { data: { results : upcomingList }} = await moviesApi.upcoming();
    this.setState({
      isLoading : true,
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
    const { isLoading, nowPlaying, popular, upcoming } = this.state;
    const { pagename } = this.props;
    return(
      <>
      <ListTheme/>
      {!isLoading
        ? <Loader/>
        :
        ( pagename === 'nowPlaying'
          ?
            <div>
              <h2>Now Playing</h2>
              <ul className="list clearfix">
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
              </ul>
            </div>
          :( pagename === 'popular' )
            ? <div>
                <h2>Popular</h2>
                  <ul className="list clearfix">
                      {popular.map(item => (
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
                  </ul>
              </div> 
          : // upComing
            <div>
              <h2>Up Coming</h2>
              <ul className="list clearfix">
                  {upcoming.map(item => (
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
              </ul>
            </div> 
        )
      }
        <Pagination/>
      </>
    )
  }
  // https://reactjsexample.com/animated-slider-carousel-component-for-react/
  // https://eb1.it/react-animated-slider/
  // https://react-slick.neostack.com/docs/get-started/
}
const mapStateToProps = ({ INIT }) => ({
  pagename : INIT.pagename
});
const mapDispatchToProps = {  };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);