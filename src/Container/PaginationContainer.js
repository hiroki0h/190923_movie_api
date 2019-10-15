import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { currentPage, makeLastPage, startEndPage } from '../store/modules/INIT';
class PaginationContainer extends Component { 
  // 여기서 처음 들어왔을때 실행되게 해줘야해!
  constructor(props){
    super(props);
    this.getPageList();
  }
  getPageList = () => {
    const { startEndPage, totalPages, pageNum } = this.props;
    const pageArray = [];
    for (let i = 0; i < totalPages; i++){
      pageArray.push(i + 1);
    }
    if(pageNum === 1){
      startEndPage((0),(5));
    }else if(pageNum > 3 ){
      startEndPage((pageNum-3),(pageNum+2));
      if(pageNum >= (totalPages-2)){
        startEndPage((totalPages-5), (totalPages+1));
      }
    }
  }
  // 업데이트 되었을때!!!
  componentDidUpdate(prevProps, prevState) {
    this.getPageList();
  }
  render(){
    const { asd, totalPages, start, end, category, firstPage, pageNum } = this.props;
    const pageArray = [];
    for (let i = 0; i < totalPages; i++){
      pageArray.push(i + 1);
    }
    const target = pageArray.slice(start, end);
    return(
      <Pagination
        target={target}
        pageNum={pageNum}
        category={category}
        firstPage={firstPage}
        totalPages={totalPages}
        getPageList={this.getPageList}
        asd={asd}
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
const mapDispatchToProps = { currentPage, makeLastPage, startEndPage };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);