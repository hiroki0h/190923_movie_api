import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { moviesApi } from '../Api';
import SeachGenreContainer from './SeachGenreContainer';

class GenresListContainer extends Component { 
  state = {
    isLoading : false,
    genresList : []
  }
  genreMenuList = async () => { 
    const { data: { genres : result }} = await await moviesApi.genresList();
    this.setState({
      isLoading : true,
      genresList : [...result]
    });
  }
  componentDidMount(){
    this.genreMenuList();
  }
  render(){
    const { genresList } = this.state;
    const { menuOpen } = this.props;
    console.log(genresList);
    return(
      <ul className="depth2 clearfix">
        {genresList.map((item, index) =>
          <li key={index}>
    {/* !!!!! link를 통해 이렇게 값 넘긴다 !!!!! */}
            <Link to={{
                  pathname : `/genres/${item.name}/1`,
                  state : {item:item}
                }}
                onClick={menuOpen}>
              {item.name}
            </Link>
          </li>
        )}
      </ul>
    )
  }
};
export default GenresListContainer;