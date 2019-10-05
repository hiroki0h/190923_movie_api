import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { menuOpen, genresOpen } from '../store/modules/INIT';
import GenresListContainer from '../Container/GenresListContainer';
import NoPoster from "../assets/images/noPoster.png";
import Slider from 'react-slick';

class Similar extends Component {
  render(){
    const { moviesResult } = this.props;
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
      speed: 500
    };
    return(
      <>
      <div className="list clearfix">
        {moviesResult.map((item, index) => index < 4
          ?
          <div key={item.id} className="movies_list">
            <Link to={`/detail/${item.id}`}> {/* 절대경로로 적어주어야 한다구 */}
              <div className="img_box">
                {item.poster_path === null
                  ?<img src={NoPoster} alt="" className="no_poster"/>
                  :<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title}/>
                }
              </div>
            </Link>
          </div>
          : ""
        )}
        </div>
      </>
    )
  }
}
export default Similar;