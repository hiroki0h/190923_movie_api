import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { currentPage, startEndPage } from '../store/modules/INIT';
class PaginationContainer extends Component { 
  prevPage = () => {
    console.log('prevPage');
  }
  nextPage = () => {
    console.log('nextPage');
  }
  lastPage = () => {
    console.log('lastPage');
  }
  render(){
    // const { isLoading, nowPlaying, popular, upComing } = this.props;
    const {  upcoming } = this.props;
    // console.log(this.props.firstPage);
    return(
      <Pagination
      firstPage={this.props.firstPage}
      upcoming={this.upcoming}
      prevPage={this.prevPage}
      nextPage={this.nextPage}
      lastPage={this.lastPage}
      />
    )
  }
};
// 객체가져와  
// 함수 클릭 만들기 
// 페이지 토큰 1~10; 11~20
const mapStateToProps = ({ INIT }) => ({
  firstPage : INIT.firstPage,
  start : INIT.start,
  end : INIT.end
});
const mapDispatchToProps = { currentPage, startEndPage };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);