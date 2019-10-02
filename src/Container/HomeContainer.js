import React, { Component } from 'react';
import { moviesApi } from '../Api';
import ListTheme from '../assets/ListTheme';
import Loader from '../components/Loader';
import Home from '../components/Home';

class HomeContainer extends Component { 
  state = {
    isLoading : false,
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
  // 처음 로딩 되었을때!!!!
  componentDidMount(){
    // hook 쓰면 this가 사라진다!!!!!
    // 여기에 state 받아오잖아ㅜㅜ 쓰란말이야ㅠㅠㅜㅜ
    this.getMainMovies(this.props.current);
  }
  render(){
    const { isLoading, nowPlaying, popular, upcoming } = this.state;
    return(
      <>
        <ListTheme/>
        {!isLoading
          ? <Loader/>
          : <>
              <Home selectName={nowPlaying} name={'now_playing'} title={'Now Playing'}/>
              <Home selectName={popular} name={'popular'} title={'Popular'}/>
              <Home selectName={upcoming} name={'upcoming'} title={'Up Coming'}/>
            </>
        }
      </>
    )
  }
  // https://reactjsexample.com/animated-slider-carousel-component-for-react/
  // https://eb1.it/react-animated-slider/
  // https://react-slick.neostack.com/docs/get-started/
}
export default HomeContainer;