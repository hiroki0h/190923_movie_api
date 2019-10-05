import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { connect } from 'react-redux';
import ListTheme from '../assets/ListTheme';
import List from "../components/List";
import Loader from '../components/Loader';

class SeachGenreContainer extends Component { 
  state = {
    isLoading : false,
    totalPages : 0,
    moviesResult : []
  }
  getGenresMovie = async (current, genresId) => { 
    const { data: { results : result, total_pages: pageLength } }  
    =  await moviesApi.genresMovie(current, genresId);
    console.log(genresId);
    this.setState({
      isLoading : true,
      totalPages : pageLength,
      moviesResult : [...result]
    });
  }
  componentDidMount(){
    const { location } = this.props;
    const genresId = location.state.item.id
    this.getGenresMovie(this.props.current, genresId);
  }
  render(){
    const { location, match } =this.props;
    const ca = match.url.split('/')[2];
    const category = match.url.split('/')[2];
    const pageNum = Number(this.props.match.url.split('/')[3]);
    const { isLoading, moviesResult, totalPages } = this.state;
    console.log('totalPages'+totalPages);
    return(
      <>
      <ListTheme/>
        {!isLoading
          ? <Loader/>
          :<List
            title={location.state.item.name}
            moviesResult={moviesResult}
            totalPages={totalPages}
            pageNum={pageNum}
            // current={current}
            category={category}
          />
        }
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
)(SeachGenreContainer);