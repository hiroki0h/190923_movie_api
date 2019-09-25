import React, { Component } from 'react';
// react router에 필요한 거 불러오기
// 404할때는 Switch 불러오기
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Common from './assets/Common';
import Header from './components/Header'
import Popular from './components/Popular'
import UpComing from './components/UpComing'
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
  //     return (window.innerWidth - 1200) / 2;
  //   }else{
  //       return 10;
  //   }
  // };
  render(){
    console.log(topBtnPosition);
    return (
    <Router>
      <Common/>
      <Header/>
      <TopBtn className="top" style={{
        right:topBtnPosition}}>
        <button onClick={this.toTop}>TOP</button>
      </TopBtn>
      <Content>
        {/* Switch 감싸줄 것 */}
        <Switch>
          {/* path - 특정위치에 도달하면 컴포넌트 보여줘라 */}
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/Popular" component={Popular}/>
          <Route exact path="/UpComing" component={UpComing}/>
          <Route path="/search" component={SearchContainer}/>
          <Route path="/search:searchValue" component={SearchContainer}/>
          <Route path="/detail/:id" component={DetailContainer}/>
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
  padding:20px;
  padding-top:50px;
  margin:0 auto;
`;
const TopBtn = styled.div`
  position:fixed;
  top:80px;
  right:30px;
  z-index:999;
  button {
    color:#ffff;
  }
`;
export default App;