import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components';
import ListTheme from '../assets/ListTheme';
import Loader from '../components/Loader';
import List from '../components/List';
import Home from '../components/Home';
import PaginationContainer from './PaginationContainer';

class HomeContainer extends Component { 
  state = {
    isLoading : false,
    totalPages : 0,
    moviesResult : [],
    nowPlaying : [],
    popular : [],
    upcoming : []
  }
  getMainMovies = async (current) => { // 이 함수는 비동기입니다 ( 기다려주세요 )
// 페이지 네임이 home 일때는 전체가 나왔으면 좋겟당
    // axios가 끝날때까지 기다리세요
    // async를 넣지 않으면 await를 쓸 수 없음
    // async await는 javascript한테 getMovies가 시간이 필요하니 기다려 달라는 것
    const { data: { results : nowPlayingList }} = await moviesApi.nowPlaying(current);
    const { data: { results : popularList }} = await moviesApi.popular(current);
    const { data: { results : upcomingList }} = await moviesApi.upComing(current);
    this.setState({
      isLoading : true,
      nowPlaying : [...nowPlayingList], 
      popular : [...popularList], 
      upcoming : [...upcomingList]
    });
  }
  getPageMovies = async (current, pagename) => { 
    const { data: { results : moviesResult, total_pages: pageLength } } 
    = await moviesApi.movieList(current, pagename);
    this.setState({
      isLoading : true,
      totalPages : pageLength,
      moviesResult : [...moviesResult]
    });
  }
  // 처음 로딩 되었을때!!!!
  componentDidMount(){
    // hook 쓰면 this가 사라진다!!!!!
    // 여기에 state 받아오잖아ㅜㅜ 쓰란말이야ㅠㅠㅜㅜ
    console.log('pagename - '+this.props.pagename);
    if(this.props.pagename === 'home'){
      this.getMainMovies(this.props.current);
    }else{
// 다른 페이지에서 새로고침을 하면 초기state home으로 들어간다
      this.getPageMovies(this.props.current, this.props.pagename);
      console.log('now');
    }
  }
  // 업데이트 되었을때!!!
  componentDidUpdate(prevProps, prevState) {
    if(prevProps !== 'home'){
      this.getPageMovies(this.props.current, this.props.pagename);
    }
  }
  render(){
    console.log('pagename - '+this.props.pagename);
    const { isLoading, nowPlaying, popular, upcoming, moviesResult, totalPages } = this.state;
    const { pagename, current, match } = this.props;
    const category = match.url.split('/')[1];
    return(
      <>
        <ListTheme/>
        {!isLoading
          ? <Loader/>
          :
          <>
            {pagename === 'home'
            ?
            <>
              <Home selectName={nowPlaying} name={'now_playing'} title={'Now Playing'}/>
              <Home selectName={popular} name={'popular'} title={'Popular'}/>
              <Home selectName={upcoming} name={'upcoming'} title={'Up Coming'}/>
            </>
            :
            <>
              <List
                pagename={pagename}
                moviesResult={moviesResult}
              />
              <PaginationContainer
                totalPages={totalPages}
                current={current}
                category={category}
              />
            </>
            }
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
  pagename : INIT.pagename,
  current : INIT.current
});
const mapDispatchToProps = { };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);