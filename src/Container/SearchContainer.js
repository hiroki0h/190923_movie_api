import React, { Component } from 'react';
import Search from '../components/Search';
import { moviesApi } from '../Api';

class SearchContainer extends Component { 
  state = {
    isLoading : false,
    searchValue : "",
    searchResult : []
  }
  // 2
  submitOnSubmit = (e) => {
    e.preventDefault();
    this.searchResult();
  };
  // 1
  valueChange = (e) => {
    console.log( e.target.value );
    this.setState({
      searchValue : e.target.value
    })    
  };
  // 3
  searchResult = async () => { 
    // 검색 받아
    const { searchResult, searchValue } = this.state;
    const {data: { results: result }} = await moviesApi.search(searchValue);
    this.setState({
      searchResult : [...result],
      isLoading: true 
    });
    console.log(result);
    console.log(searchResult);
  }
  render(){
    const { isLoading, searchValue, searchResult } = this.state;
    const { match } =this.props;
    return(
      <>
        <Search 
          match = {match}
          isLoading = {isLoading}
          submitOnSubmit = {this.submitOnSubmit}
          searchValue = {searchValue}
          valueChange = {this.valueChange}
          searchResult = {searchResult}
        />
      </>
    )
  }
};
export default SearchContainer;
