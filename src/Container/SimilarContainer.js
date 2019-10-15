import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { connect } from 'react-redux';
import ListTheme from '../assets/ListTheme';
import Loader from '../components/Loader';
import SlideList from '../components/SlideList';
class SimilarContainer extends Component { 
  state = {
    isLoading : false,
    moviesResult : []
  }
  similarMovie = async (movieId) => { 
    const { data: { results : moviesResult } } 
    = await moviesApi.similarMovie(movieId);
    this.setState({
      isLoading : true,
      moviesResult : [...moviesResult]
    });
    // console.log(moviesResult);
  }
  componentDidMount(){
    this.similarMovie(this.props.movieId);
  }
  render(){
    const { isLoading, moviesResult } = this.state;
    return(
      <>
        <ListTheme/>
        {!isLoading
          ? <Loader/>
          : moviesResult.length === 0
            ? ""
            : <SlideList selectName={moviesResult} title='Similar Movies' similar='similar'/>
        }
      </>
    )
  }
}
const mapStateToProps = ({ INIT }) => ({
  current : INIT.current
});
const mapDispatchToProps = { };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarContainer);