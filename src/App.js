import React, { Component } from 'react';
// react router에 필요한 거 불러오기
// 404할때는 Switch 불러오기
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Common from './assets/Common';
import Header from './components/Header'
import HomeContainer from './Container/HomeContainer'
import Search from './Container/Search'
import DetailContainer from './Container/DetailContainer'

class App extends Component {
  render(){
    return (
      <Router>
      <Common/>
          <Header/>
          <Content>
          {/* path - 특정위치에 도달하면 컴포넌트 보여줘라 */}
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/search" component={Search}/>
            <Route path="/detail/:id" component={DetailContainer}/>
          </Content>
      </Router>
    );
  }
}
const Content = styled.div`
  width:100%;
  max-width:1280px;
  padding:20px;
  margin:0 auto;
`;
export default App;