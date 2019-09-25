import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Dotdotdot from 'react-dotdotdot';
import styled from 'styled-components';
import Loader from './Loader';
import SearchIcon from "../assets/images/search_icon.png";
import ListTheme from '../assets/ListTheme';

class Search extends Component { 
  render(){
    const { match, isLoading, submitOnSubmit, searchValue, valueChange, searchResult } = this.props;
    console.log('searchResult'+searchResult.length);
    return(
      <>
      {match.params.searchValue}
      <ListTheme/>
      <Form action="" onSubmit={submitOnSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={searchValue}
          onChange={valueChange}
        >{match.params.searchValue}</input>
        <button type="submit">Search</button>
      </Form>
      {(searchResult.length === 0)
      ? ""
      : (!isLoading)
        ? <Loader/>
        :<div>
          <ul className="list clearfix">
            {searchResult.map((
              list, index) => (
                <li key={index}>
                  <Link to={`detail/${list.id}`}>
                    <div className="img_box">
                      <img src={`https://image.tmdb.org/t/p/w500${list.poster_path}`} alt={searchResult.original_title}/>
                    </div>
                    <div className="text_box">
                      <Dotdotdot clamp={3}>
                          <p className="title">{list.title}</p>
                      </Dotdotdot>
                      <Dotdotdot clamp={6}>
                          <p className="overview">{list.overview}</p>
                      </Dotdotdot>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      }
      </>
    )
  }
};
const Form = styled.form`
margin-top:50px;
position:relative;
  input {
    width:100%;
    padding:0 20px;
    padding-right:50px;
    border:none;
    border-bottom:2px solid #fff;
    font-size:40px;
    color:#fff;
    background:transparent;
  }
  button {
    width:50px;
    height:50px;
    font-size:0;
    position:absolute;
    right:0;
    top:10px;
      ::before {
        content:"";
        width:35px;
        height:35px;
        background:url(${SearchIcon});
        background-size:100%;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        display:block;
      }
    }
`;
const mapStateToProps = ({ INIT }) => ({
  searchInput : INIT.searchInput
});
const mapDispatchToProps = {  };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);