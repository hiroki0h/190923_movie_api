import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Dotdotdot from 'react-dotdotdot';
import NoPoster from "../assets/images/noPoster.png";
import PaginationContainer from '../Container/PaginationContainer';

class List extends Component {
  render(){
    const { title, moviesResult, totalPages, current, category, pageNum } = this.props;
    return(
      <>
        <div>
          <h2>{title}</h2>
            <div className="list clearfix">
              {moviesResult.map(item => (
                <div key={item.id} className="movies_list">
                  <Link to={`/detail/${item.id}`}> {/* 절대경로로 적어주어야 한다구 */}
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
              <PaginationContainer
                totalPages={totalPages}
                current={current}
                category={category}
                pageNum={pageNum}
              />
        </div>
      </>
    )
  }
}
export default List;