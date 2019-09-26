import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Dotdotdot from 'react-dotdotdot';
// import Slider from 'react-slick';
import 'react-animated-slider/build/horizontal.css';
import ListTheme from '../assets/ListTheme';
import PaginationContainer from '../Container/PaginationContainer';
import Loader from '../components/Loader';
import NoPoster from "../assets/images/noPoster.png";

class HomeContainer extends Component { 
  state = {
    isLoading : false,
    // 현재 보여지는 페이지
    pageNum : 10,
    nowPlaying : [],
    popular : [],
    upComing : []
  }
  getMovies = async (pageNum) => { // 이 함수는 비동기입니다 ( 기다려주세요 )
    // axios가 끝날때까지 기다리세요
    // async를 넣지 않으면 await를 쓸 수 없음
    // async await는 javascript한테 getMovies가 시간이 필요하니 기다려 달라는 것
    const { data: { results : nowPlayingList }} = await moviesApi.nowPlaying(pageNum);
    const { data: { results : popularList }} = await moviesApi.popular(pageNum);
    const { data: { results : upcomingList }} = await moviesApi.upcoming(pageNum);
    this.setState({
      isLoading : true,
    // axios에서 불러온 nowPlayingList
      nowPlaying : [...nowPlayingList], 
      popular : [...popularList], 
      upComing : [...upcomingList] 
    });
    // console.log(this.state.popular);
    // console.log(this.state.upComing);
    // console.log(this.state.nowPlaying);
  }
  componentDidMount(){
    // hook 쓰면 this가 사라진다!!!!!
    // 여기에 state 받아오잖아ㅜㅜ 쓰란말이야ㅠㅠㅜㅜ
    this.getMovies(this.state.pageNum);
  }
  render(){
    const { isLoading, nowPlaying, popular, upComing } = this.state;
    const { pagename } = this.props;
    console.log('pagename - '+typeof pagename);
    console.log('upComing - '+typeof upComing);
    return(
      <>
      {/* 하나로 정리할 것 !!!! */}
      <ListTheme/>
      {!isLoading
        ? <Loader/>
        :
        <>
          { pagename === 'upComing'
            ?
              <div>
                <h2>Up Coming</h2>
                <ul className="list clearfix">
                    {upComing.map(item => (
                        <li key={item.id}>
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
                                  {item.poster_path === null
                                    ?<img src={NoPoster} alt="" className="no_poster"/>
                                    :<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title}/>
                                  }
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
            : // nowPlaying
              <div>
                <h2>Now Playing</h2>
                <ul className="list clearfix">
                    {nowPlaying.map(item => (
                        <li key={item.id}>
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
                              <Dotdotdot clamp={6}>
                                  <p className="overview">{item.overview}</p>
                              </Dotdotdot>
                            </div>
                          </Link>
                        </li>
                    ))}
                </ul>
              </div> 
          }
          <PaginationContainer
            isLoading={isLoading}
            nowPlaying={nowPlaying}
            popular={popular}
            upComing={upComing}
          />
        </>
      }
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