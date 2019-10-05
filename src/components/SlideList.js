import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { pagename } from '../store/modules/INIT';
import Dotdotdot from 'react-dotdotdot';
import styled from 'styled-components';
import Slider from 'react-slick';
import NoPoster from "../assets/images/noPoster.png";
import { animateScroll as scroll } from 'react-scroll'

class SlideList extends Component {
  selectThisPage = () => {
    const { pagename, name } = this.props;
    pagename(name);
  }
  toTop = (e) => {
    // scroll.scrollTo(0);
  }
  render(){
    const { name, title, selectName, pageName, similar } = this.props;
    console.log('this page - '+pageName);
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
      speed: 500
    };
    // const { match } = this.props;
    // const category = match.url.split('/')[1];
    // console.log('this category - '+category);
    return(
      <>
      <MovieBox>
        {similar !== "similar"
          ? <h2><Link to={`/${name}/1`} onClick={this.selectThisPage}>{title}</Link></h2>
          : <h3>Similar Movies</h3>
        }
        <SliderList className={similar !== "similar" ? "list clearfix" : "list clearfix similar"}>
          <Slider {...settings}>
              {selectName.map(item => (
                <div key={item.id} className="movies_list">
                  <Link to={`/detail/${item.id}`} onClick={this.toTop}>
                    <div className="img_box">
                      {item.poster_path === null
                        ?<img src={NoPoster} alt="" className="no_poster"/>
                        :<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title}/>
                      }
                    </div>
                    <div className="text_box">
                      {similar !== "similar"
                        ? <>
                            <Dotdotdot clamp={3}>
                                <p className="title">{item.title}</p>
                            </Dotdotdot>
                            <Dotdotdot clamp={6}>
                                <p className="overview">{item.overview}</p>
                            </Dotdotdot>
                          </>
                        :
                          <Dotdotdot clamp={3}>
                              <p className="title">{item.title}</p>
                          </Dotdotdot>
                      }
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
  openMenu : INIT.openMenu,
  pageName : INIT.pageName
});
const mapDispatchToProps = { pagename };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SlideList);