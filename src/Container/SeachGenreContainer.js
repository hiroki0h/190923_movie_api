import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { connect } from 'react-redux';
import ListTheme from '../assets/ListTheme';
import List from "../components/List";
import Loader from '../components/Loader';
import PaginationContainer from './PaginationContainer';

class SeachGenreContainer extends Component { 
  state = {
    isLoading : false,
    moviesResult : []
  }
  aaa = async (genresId) => { 
    const { data: { results : result }} =  await moviesApi.genresMovie(genresId);
    console.log(genresId);
    this.setState({
      isLoading : true,
      moviesResult : [...result]
    });
  }
  componentDidMount(){
    const { location } = this.props;
    const genresId = location.state.item.id
    this.aaa(genresId);
  }
  render(){
    const { location } =this.props;
    const { isLoading, moviesResult } = this.state;
    return(
      <>
      <ListTheme/>
        {!isLoading
          ? <Loader/>
          :<>
            <List
                title={location.state.item.name}
                moviesResult={moviesResult}
              />
              {/* <PaginationContainer
                totalPages={totalPages}
                current={current}
                category={category}
              /> */}
          </>
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