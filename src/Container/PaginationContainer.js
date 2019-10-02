import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { currentPage, startEndPage } from '../store/modules/INIT';
class PaginationContainer extends Component { 
  getPageList = () => {
    const { currentPage, startEndPage, totalPages, start, end, category, firstPage, current } = this.props;
    let lastPage = 0;
    if(current <= 3){
      lastPage = 5;
    } else if(current + 1 >= totalPages) {
      startEndPage(totalPages - 4);
      // start = totalPages - 4;
      lastPage = totalPages;
    }
    console.log('this.props.lastPage - '+this.props.lastPage);
    console.log('totalPages - '+totalPages);
    this.props.startEndPage();
  }
  render(){
    const { currentPage, startEndPage, totalPages, start, end, category, firstPage, current } = this.props;
    const pageArray = [];
    for (let i = 0; i < totalPages; i++){
      pageArray.push(i + 1);
    }
    // this.setState({
    //   lastPage = totalPages
    // });
    const target = pageArray.slice(start, end);
    console.log('totalPages - '+totalPages);
    console.log('target - '+target);
    return(
      <Pagination
      target={target}
      category={category}
      firstPage={firstPage}
      getPageList={this.getPageList}
      />
    )
  }
};
// 객체가져와  
// 함수 클릭 만들기 
// 페이지 토큰 1~10; 11~20
const mapStateToProps = ({ INIT }) => ({
  current : INIT.current,
  firstPage : INIT.firstPage,
  lastPage : INIT.lastPage,
  start : INIT.start,
  end : INIT.end
});
const mapDispatchToProps = { currentPage, startEndPage };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);