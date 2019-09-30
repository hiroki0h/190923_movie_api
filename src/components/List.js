import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { menuOpen, searchOpen } from '../store/modules/INIT';
import Dotdotdot from 'react-dotdotdot';
import styled from 'styled-components';
import NoPoster from "../assets/images/noPoster.png";
import PaginationContainer from '../Container/PaginationContainer';

class List extends Component {
  render(){
    const { pagename, openMenu, moviesResult } = this.props;
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
      speed: 500
    };
    console.log(openMenu);
    return(
      <>
        <div>
          <h2><Link to={`/${pagename}`}>{pagename}</Link></h2>1111111111111
            <div className="list clearfix">
              {moviesResult.map(item => (
                <div key={item.id} className="movies_list">
                  <Link to={`detail/${item.id}`}>
                    <div className="img_box">
                      {item.poster_path === null
                        ?<img src={NoPoster} alt="" className="no_poster"/>
                        :<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title}/>
                      }
                    </div>
                    <div className="text_box">
                      <Dotdotdot clamp={3}>
                          <p className="title">{item.title}</p>
                      </Dotdotdot>
                      <Dotdotdot clamp={6}>
                          <p className="overview">{item.overview}</p>
                      </Dotdotdot>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {/* <PaginationContainer/> */}
        </div>
      </>
    )
  }
}
const SliderList = styled.div`
button {color:#fff;}
`;
const mapStateToProps = ({ INIT }) => ({
  pagename : INIT.pagename,
  openMenu : INIT.openMenu
});
const mapDispatchToProps = { menuOpen, searchOpen };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);