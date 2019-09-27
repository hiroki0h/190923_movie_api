import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { Link, Redirect } from 'react-router-dom'
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
    pageNum : 5,
    moviesResult : []
  }
  getMovies = async (pagename, pageNum) => { // 이 함수는 비동기입니다 ( 기다려주세요 )
    // axios가 끝날때까지 기다리세요
    // async를 넣지 않으면 await를 쓸 수 없음
    // async await는 javascript한테 getMovies가 시간이 필요하니 기다려 달라는 것


    
    //   const { data: { results : moviesResult }} = await moviesApi.nowPlaying(pageNum);
    //   const { data: { results : moviesResult }} = await moviesApi.upComing(pageNum);
      const { data: { results : moviesResult }} = await moviesApi.popular(pageNum);
  


    // const { data: { results : moviesResult }} = await moviesApi. ;
    console.log( );
    this.setState({
      isLoading : true,
      moviesResult : [...moviesResult]
    });
  }
  componentDidMount(){
    // hook 쓰면 this가 사라진다!!!!!
    // 여기에 state 받아오잖아ㅜㅜ 쓰란말이야ㅠㅠㅜㅜ
    console.log(this.props.pagename);
    this.getMovies(this.state.pageNum);
  }
  render(){
    // const { isLoading, nowPlaying, popular, upComing } = this.state;
    const { isLoading, moviesResult } = this.state;
    const { pagename } = this.props;
    console.log('pagename - '+typeof pagename);
    console.log('upcoming - '+typeof moviesResult);
    return(
      <>
      <ListTheme/>
      {!isLoading
        ? <Loader/>
        : <>
            <div>
              <h2>Up Coming</h2>
              <ul className="list clearfix">
                  {moviesResult.map(item => (
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
            <PaginationContainer
              isLoading={isLoading}
              moviesResult={moviesResult}
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