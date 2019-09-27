import React, { Component } from 'react';
// react router에 필요한 거 불러오기
// 404할때는 Switch 불러오기
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Common from './assets/Common';
import Header from './components/Header'
import HomeContainer from './Container/HomeContainer'
import SearchContainer from './Container/SearchContainer'
import DetailContainer from './Container/DetailContainer'
import Notfound from './components/Notfound';
// import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'

const topBtnPosition = (window.innerWidth - 1350) / 2;
class App extends Component {
  toTop = (e) => {
    scroll.scrollTo(0);
  }
  // topBtnPosition = () => {
  //   if(window.innerWidth >= 1280){
  //     return (window.innerWidth - 1350) / 2;
  //   }else{
  //       return 10;
  //   }
  // };
  render(){
    console.log(topBtnPosition);
    return (
    <Router>
      {/* reset css 추가 */}
      <Common/>
      <Header/>
      <TopBtn className="top" 
        style={{right:topBtnPosition}}>
        <button onClick={this.toTop}>TOP</button>
      </TopBtn>
      <Content>
        {/* Switch 감싸줄 것 */}
        <Switch>
          {/* path - 특정위치에 도달하면 컴포넌트 보여줘라 */}
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/nowPlaying" component={HomeContainer}/>
          <Route exact path="/popular" component={HomeContainer}/>
          <Route exact path="/upcoming" component={HomeContainer}/>
          <Route path="/search" component={SearchContainer}/>
          {/* url 파라미터 넘겨주기 */}
          <Route path="/detail/:id" component={DetailContainer}/>
          {/* Switch가 써지면 매칭하고 나머지는 비교하지 않아 */}
          {/* Route의 path를 다 비교 했는데 일치하는게 없으면 Notfound */}
          <Route component={Notfound}/>
        </Switch>
      </Content>
    </Router>
    );
  }
}
const Content = styled.div`
  width:100%;
  max-width:1280px;
  padding:100px 20px 100px;
  margin:0 auto;
`;
const TopBtn = styled.div`
  position:fixed;
  bottom:50px;
  right:30px;
  z-index:999;
  button {
    color:#ffff;
  }
`;
export default App;