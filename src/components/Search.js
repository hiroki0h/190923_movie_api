import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Dotdotdot from 'react-dotdotdot';
import styled from 'styled-components';
import Loader from './Loader';
import SearchIcon from "../assets/images/search_icon.png";
import ListTheme from '../assets/ListTheme';
import NoPoster from "../assets/images/noPoster.png";

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
      {isLoading
        ? <Loader/>
        :<Results>
          {searchResult.length === 0
          ?
          <>
            <p>Sorry, no results were found</p>
            <p>Make sure all words are spelled correctly or try using different keywords.</p>
          </>
          :
          <>
            <p className="results">Your Search for ' {searchValue} ' Returned {searchResult.length} Results</p>

            <ul className="list clearfix">
              {searchResult.map((
                list, index) => (
                  <li key={index}>
                    <Link to={`detail/${list.id}`}>
                      <div className="img_box">
                        {list.poster_path === null
                          ?<img src={NoPoster} alt="" className="no_poster"/>
                          :<img src={`https://image.tmdb.org/t/p/w500${list.poster_path}`} alt={searchResult.original_title}/>
                        }
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
          </>
          }
        </Results>
      }
      </>
    )
  }
};
const Results = styled.div`
padding-top:50px;
  .results {font-size:30px;
    span {font-weight:900;}
  }
  .list {padding-top:50px;}
`;
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
    :focus {background:transparent;}
  }
  button {
    width:50px;
    height:50px;
    font-size:0;
    position:absolute;
    right:0;
    top:0;
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