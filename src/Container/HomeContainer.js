import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import Slider from 'react-slick';
import styled from 'styled-components';
import ListTheme from '../assets/ListTheme';
import Loader from '../components/Loader';
import List from '../components/List';
import Home from '../components/Home';
import PaginationContainer from './PaginationContainer';

class HomeContainer extends Component { 
  state = {
    isLoading : false,
    // 현재 보여지는 페이지
    pageNum : 5,
    pageLength : '',
    moviesResult : [],
    nowPlaying : [],
    popular : [],
    upcoming : [],
    showUp : ['nowPlaying', 'popular', 'upcoming']
  }
  getMainMovies = async (pageNum) => { // 이 함수는 비동기입니다 ( 기다려주세요 )
// 페이지 네임이 home 일때는 전체가 나왔으면 좋겟당
    // axios가 끝날때까지 기다리세요
    // async를 넣지 않으면 await를 쓸 수 없음
    // async await는 javascript한테 getMovies가 시간이 필요하니 기다려 달라는 것
    const { data: { results : nowPlayingList }} = await moviesApi.nowPlaying(pageNum);
    const { data: { results : popularList }} = await moviesApi.popular(pageNum);
    const { data: { results : upcomingList }} = await moviesApi.upComing(pageNum);
    this.setState({
      isLoading : true,
      nowPlaying : [...nowPlayingList], 
      popular : [...popularList], 
      upcoming : [...upcomingList]
      });
  }
  getPageMovies = async (pageNum, pagename) => { 
    const { data: { results : moviesResult, total_pages : pageLength} } = await moviesApi.movieList(pageNum, pagename);
    this.setState({
      isLoading : true,
      pageLength : [...pageLength],
      moviesResult : [...moviesResult]
    });
  }

  componentDidMount(){
    // hook 쓰면 this가 사라진다!!!!!
    // 여기에 state 받아오잖아ㅜㅜ 쓰란말이야ㅠㅠㅜㅜ
    console.log('pagename - '+this.props.pagename);
    if(this.props.pagename === 'home'){
      console.log('ssssssssssssssc');
      this.getMainMovies(this.state.pageNum);
    }else{
      this.getPageMovies(this.state.pageNum, this.props.pagename);
      console.log('c');
    }
  }
  render(){
    const { isLoading, nowPlaying, popular, upcoming, moviesResult, showUp } = this.state;
    const { pagename, match } = this.props;    
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
      speed: 500
    };
    const paramsName = match.params.name
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
              {/* {showUp.map((list, index) => ( */}
                {/* <div>
                  <h2><Link to={`/${popular}`}>{popular}</Link></h2>
                  <SliderList className="list clearfix">
                    <Slider {...settings}> */}
                      <Home
                        popular={popular}
                        nowPlaying={nowPlaying}
                        upcoming={upcoming}
                        pagename={pagename}
                      />13
                    {/* </Slider>
                  </SliderList>
                </div> */}
              {/* ))} */}
            </>
            :
            <>
              <List
                pagename={pagename}
                moviesResult={moviesResult}
              />
              <PaginationContainer/>
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
const SliderList = styled.div`
button {color:#fff;}
`;

const mapStateToProps = ({ INIT }) => ({
  pagename : INIT.pagename
});
const mapDispatchToProps = { };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);