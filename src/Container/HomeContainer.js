import React, { Component } from 'react';
import { moviesApi } from '../Api';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import media from 'styled-media-query';

class HomeContainer extends Component { 
  state = {
    isLoading : true,
    movies : [],
    number : 1
  }
  getMovies = async (number) => { 
    const { data: { results : result }} = await moviesApi.popular(number);
    this.setState({ movies : [...result] });
    console.log(this.state.movies);
  }
  componentDidMount(number){
    this.getMovies(number);
  }
  render(){
    const { movies } = this.state;
    return(
      <>
        <h2>Now Playing</h2>
        <Ul className="clearfix">
            {movies.map(item => (
                <Li key={item.id}>
                  <Link to={`detail/${item.id}`}>
                    <div>
                      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title}/>
                    </div>
                    <div>
                      <Title>{item.title}</Title>
                      <OrgTitle>{item.original_title}</OrgTitle>
                    </div>
                  </Link>
                </Li>
            ))}
        </Ul>
      </>
    )
  }
}
const Ul = styled.ul`
  padding-top:20px;
  margin-right:-20px;
`;
const Li = styled.li`
  width:25%;
  padding-right:20px;
  margin-bottom:20px;
  float:left;
  ${media.lessThan('medium')`
    width:33.3333%;
  `}
  ${media.lessThan('small')`
    width:100%;
  `}
`;
const Title = styled.p`
  height:50px;
  overflow:hidden;
  font-size:18px;
  font-weight:900;
  color:#555;
`;
const OrgTitle = styled.p`
  height:38px;
  overflow:hidden;
  font-size:14px;
  color:#888;
`;
export default HomeContainer;
//   huge: '1440px',
//   large: '1170px',
//   medium: '768px',
//   small: '450px',