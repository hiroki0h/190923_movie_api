import React, { Component } from 'react';
import { moviesApi } from '../Api';
import Detail from '../components/Detail';

class DetailContainer extends Component { 
  state = {
    isLoading : false,
    result : {}
  }
  getMovies = async (movieID) => { 
    const { isLoading } = this.state;
    const result = await moviesApi.movieDetail(movieID);
    this.setState({ 
      result : result.data,
      isLoading : true
    });
    console.log(result);
    console.log(result.data.id);
  }
  componentDidMount(){
    const { match } = this.props;
    const movieID = Number(match.params.id);
    this.getMovies(movieID);
    // console.log(match);
    // console.log(movieID);
    // console.log(typeof movieID);
  }
  render(){
    const { history } = this.props;
    const { isLoading, result } = this.state;
    return(
      <Detail 
        isLoading={isLoading}
        result={result}
        history={history}
      />
      // <PaginationContainer
      //   isLoading={isLoading}
      //   moviesResult={moviesResult}
      // />
    )
  }
}
export default DetailContainer;