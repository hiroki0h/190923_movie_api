import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { connect } from 'react-redux';
import ListTheme from '../assets/ListTheme';
import Loader from '../components/Loader';
import List from '../components/List';
import { currentPage, makeLastPage, startEndPage } from '../store/modules/INIT';

class PageContainer extends Component { 
  state = {
    isLoading : false,
    totalPages : 0,
    moviesResult : []
  }
  getPageMovies = async (current, category) => { 
    const { data: { results : moviesResult, total_pages: pageLength } } 
    = await moviesApi.movieList(current, category);
    this.setState({
      isLoading : true,
      totalPages : pageLength,
      moviesResult : [...moviesResult]
    });
  }
  // 처음 로딩 되었을때!!!!
  componentDidMount(){
    const category = this.props.match.url.split('/')[1];
    this.getPageMovies(this.props.current, category);
  }
  // 업데이트 되었을때!!!
  componentDidUpdate(prevProps, prevState) {
      const { history } = this.props;
      const category = this.props.match.url.split('/')[1];
      const pageNum = Number(this.props.match.url.split('/')[2]);
    if(prevProps !== 'home' || prevProps !== pageNum){
      if(isNaN(pageNum)){
      // 페이지 넘버가 숫자가 아닐때!!!
        history.push('/Notfound')
      }else{
        this.getPageMovies(pageNum, category);
      }
    }
  }
  render(){
    const { isLoading, moviesResult, totalPages } = this.state;
    const { title, current, match } = this.props;
    const asd = match.url.split('/')[0];
    const category = match.url.split('/')[1];
    const pageNum = Number(this.props.match.url.split('/')[2]);
    return(
      <>
        <ListTheme/>
        {!isLoading
          ? <Loader/>
          :<List
              title={title}
              moviesResult={moviesResult}
              totalPages={totalPages}
              current={current}
              category={category}
              pageNum={pageNum}
              asd={asd}
            />
        }
      </>
    )
  }
}
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
)(PageContainer);