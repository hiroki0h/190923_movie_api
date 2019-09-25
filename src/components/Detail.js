import React, { Component } from 'react';
import styled from 'styled-components';
import ListBg from "../assets/images/list_bg_H.png";
import MainBtnTheme from "../components/MainBtnTheme";
import Loader from './Loader';
import Dotdotdot from 'react-dotdotdot';

class Detail extends Component { 
  render(){
    const { isLoading, result, history } = this.props;
    console.log(result.videos);
    return(
      <>
      {!isLoading
        ? <Loader/>
        :
        <>
          <DetailBox>
            <div className="img_box">
              <div className="img" style={{
                background:`url(https://image.tmdb.org/t/p/w500${result.poster_path}) no-repeat`,
                backgroundSize:'100%'}}>
              </div>
            </div>
            <div className="text_box">
              <div className="table_cell">
                <h2 className="title">{result.title}</h2>
                <p className="org_title">{result.original_title}</p>
                <div className="info">
                  {/* <span className="runtime">{result.runtime}min</span> */}
                  <span className="release">{result.release_date}</span>
                </div>
                <p className="vote">
                  <span className="rating"></span>
                  {result.vote_average.length > 0 
                    ? `${result.vote_average} / 10 `
                    : "Not Yet Rating"
                  }
                </p>
                <p className="genres">
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                  )}
                </p>
                <p className="overview">{result.overview}</p>
                {/* video */}
                <div className="video_box clearfix">
                  <h3>Videos</h3>  
                  {result.videos.results.length > 0 && 
                      result.videos.results.map((video, index) =>(
                        <div className="video" key={index}>
                          <Dotdotdot clamp={3}>
                              <p>{video.name}</p>
                          </Dotdotdot>
                          <iframe src={`https://www.youtube.com/embed/${video.key}`} title={video.name}>
                          </iframe>
                        </div>
                    ))}
                </div>
              </div>
            </div>
          </DetailBox>
          {/* 버튼이 클릭되면 main 페이지를 불러달라 */}
            <MainBtnTheme history={history}/>
        </>
      }
      </>
    )
  }
}
const DetailBox = styled.div`
  width:100%;
  height:0;
  padding-bottom:90%;
  position:relative;
.img_box {
  width:55%;
  position:absolute;
  top:0;
  right:0;
  ::before {
    content:""; 
    width:100%;
    height:100%; 
    background:url(${ListBg}) repeat-y 0 0; 
    position:absolute; 
    top:0; 
    left:0;
    display:block; 
  }
  .img {
    width:100%;
    height:0;
    padding-bottom:150%;
  }
}
.text_box {
  width:55%;    
  height:100%;
  position:absolute;
  top:0;
  left:0;
  display:table;
  .table_cell {
    padding-right:10px;
    vertical-align:middle;
    display:table-cell;
    p {font-size:20px;}
    .title {font-size:30px;}
    .org_title {color:#555;}
    .info {
      padding-top:10px;
      padding-right:4%;
      text-align:right;
      .runtime {}
      .release {}
      }
    }
    .overview {padding-top:20px; font-size:20px;}
    .vote {
      padding-top:20px;
      .rating {
        width:20px;
        height:20px;
        margin-right:10px;
        vertical-align:middle;
        background:pink;
        display:inline-block;
      }
    }
    .release {}
      .video_box {
        padding-top:50px; 
        h3 {font-size:20px;}
        .video {
          max-width:310px;
          padding-top:10px;
          margin-right:20px;
          margin-bottom:20px;
          float:left;
          p {padding-bottom:10px;}
          iframe {box-shadow:5px 5px 10px #545454;}
        }
  }
}
`;
export default Detail;