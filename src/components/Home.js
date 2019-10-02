import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { pagename } from '../store/modules/INIT';
import Dotdotdot from 'react-dotdotdot';
import styled from 'styled-components';
import Slider from 'react-slick';
import NoPoster from "../assets/images/noPoster.png";

class Home extends Component {
  selectThisPage = () => {
    const { pagename, name } = this.props;
    pagename(name);
  }
  render(){
    const { name, title, selectName } = this.props;
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
      <MovieBox>
        <h2><Link to={`/${name}/1`} onClick={this.selectThisPage}>{title}</Link></h2>
        <SliderList className="list clearfix">
          <Slider {...settings}>
              {selectName.map(item => (
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
            </Slider>
          </SliderList>
        </MovieBox>
      </>
    )
  }
}
const MovieBox = styled.div`
  padding-top:30px;
  :first-child {padding-top:0;}
`;
const SliderList = styled.div`
  margin-right:0;
  position:relative;
  button {color:#fff;}
  .slick-list {padding-bottom:30px !important;}
  .slick-arrow {
    font-size:20px;
    color:#aaa;
    position:absolute;
    bottom:0;
    z-index:7;
    transition:all .5s ease-out;
  :hover {color:#fff;}
  }
  .slick-prev {left:0;}
  .slick-next {right:0;}
`;
const mapStateToProps = ({ INIT }) => ({
  openMenu : INIT.openMenu
});
const mapDispatchToProps = { pagename };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);