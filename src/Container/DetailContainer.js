import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

class DetailContainer extends Component { 
  state = {
    result : null
  }
  getMovies = async (movieID) => { 
    const result = await moviesApi.movieDetail(movieID);
    console.log(result);
    console.log(this.state.result);
  }
  componentDidMount(){
    const { match } = this.props;
    const movieID = match.params.id;
    this.getMovies(movieID);
    console.log(match);
    console.log(movieID);
  }
  render(){
    return(
      <>
        <h2>Now Playing</h2>
      </>
    )
  }
}
export default DetailContainer;