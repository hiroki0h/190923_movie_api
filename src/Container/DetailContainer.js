import React, { Component } from 'react';
import { moviesApi } from '../Api';
import Detail from '../components/Detail';

class DetailContainer extends Component { 
  state = {
    isLoading : false,
    result : {},
  }
  getMovies = async (movieID) => { 
    const result = await moviesApi.movieDetail(movieID);
    this.setState({ 
      result : result.data,
      isLoading : true
    });
    // console.log(result);
    // console.log(result.data.id);
  }
  componentDidMount(){
    const { match } = this.props;
    const movieID = Number(match.params.id);
    this.getMovies(movieID);
  }
  // 업데이트 되었을때!!!
  componentDidUpdate(prevProps, prevState) {
    const { match } = this.props;
    const movieID = Number(match.params.id);
    if(prevProps !== movieID){
      this.getMovies(movieID);
    }
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
    )
  }
}
export default DetailContainer;