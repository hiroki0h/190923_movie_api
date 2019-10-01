import React, { Component } from 'react';
import Search from '../components/Search';
import { moviesApi } from '../Api';
import { connect } from 'react-redux';

class SearchContainer extends Component { 
  state = {
    isLoading : false,
    totalPages : 0,
    searchValue : "",
    searchResult : []
  }
  // 2
  submitOnSubmit = (e) => {
    e.preventDefault();
    this.searchResult(this.props.current);
  };
  // 1
  valueChange = (e) => {
    console.log( e.target.value );
    this.setState({
      searchValue : e.target.value
    })    
  };
  // 3
  searchResult = async (current) => { 
    // 검색 받아
    const { searchResult, searchValue } = this.state;
    const {data: { results: result, total_pages: pageLength }} = await moviesApi.search(searchValue,current);
    this.setState({
      searchResult : [...result],
      totalPages : pageLength,
      isLoading: false 
    });
    console.log(searchResult);
  }
  // 업데이트 되었을때!!!
  componentDidUpdate(prevProps, prevState) {
    if(prevProps !== this.props){
      this.searchResult(this.props.current);
    }
  }
  render(){
    const { isLoading, searchValue, searchResult, totalPages } = this.state;
    const { match, current, location } =this.props;
    console.log(current);
    console.log(this.state.totalPages);
    return(
      <>
        <Search 
          current = {current}
          match = {match}
          isLoading = {isLoading}
          submitOnSubmit = {this.submitOnSubmit}
          searchValue = {searchValue}
          valueChange = {this.valueChange}
          searchResult = {searchResult}

          totalPages = {totalPages}
        />
      </>
    )
  }
};
const mapStateToProps = ({ INIT }) => ({
  current : INIT.current
});
const mapDispatchToProps = { };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);