import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Detail from '../components/Detail';

class DetailContainer extends Component { 
  state = {
    result : {}
  }
  getMovies = async (movieID) => { 
    const result = await moviesApi.movieDetail(movieID);
    this.setState({ result : result.data });
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
    const { result } = this.state;
    console.log(result.id);
    return(
      <>
        <Detail 
          result={result}
          history={history}
        />
      </>
    )
  }
}
export default DetailContainer;