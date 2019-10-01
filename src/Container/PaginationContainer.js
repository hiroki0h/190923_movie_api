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
  pageUpdate = (num) => {
    this.props.currentPage(num)
    console.log('lastPage');
  }
  render(){
    const { totalPages, start, end, category } = this.props;
    const pageArray = [];
    for (let i = 0; i < totalPages; i++){
      pageArray.push(i + 1);
    }
    const target = pageArray.slice(start, end);
    console.log(target);
    return(
      <Pagination
      target={target}
      category={category}
      firstPage={this.props.firstPage}
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