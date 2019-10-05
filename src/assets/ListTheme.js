import { createGlobalStyle } from 'styled-components';
import ListBg from "../assets/images/list_bg_V.png";
const ListTheme = createGlobalStyle`
.list {
  padding-top:20px;
  margin-right:-20px;
  .movies_list ,li {
    width:25%;
    padding-right:20px;
    margin-bottom:20px;
    float:left;
    :hover .img_box img{
      transform: scale(1.2);
    }
    :hover .img_box::before {
      opacity:1;
      z-index:1;
    }
    :hover .text_box {
      opacity:1;
      z-index:2;
    }
    a {
      color:#fff;
      position:relative;
      display:block;
      height:0;
      overflow:hidden;
      padding-bottom:150%;
    }
  }
  &.similar {
    .movies_list ,li {
      a {
        padding-bottom:83%;
      } 
    } 
    /* .text_box {display:none;} */
  }
    .img_box {
      width:100%;
      height:100%; 
      text-align:center;
      position:absolute;
      top:0; 
      left:0;
      ::before {
        content:""; 
        width:100%;
        height:100%; 
        background:url(${ListBg}) repeat-x 0 0;
        background-size:contain;
        position:absolute; 
        top:0; 
        left:0;
        opacity:0;
        display:block; 
        transition:all .2s ease-out;
      }
      img {
        transform: scale(1);
        transition:all .5s ease-out;
      }
      .no_poster {
        width:50%;
        margin-top:30%;
      }
    }
    .text_box {
      width:100%;
      padding:20px;
      opacity:0;
      position:absolute;
      bottom:0;
      left:0;
      transition:all .5s ease-out;
      .title {
        font-size:20px;
        font-weight:900;
      }
      .overview {
        padding-top:5px;
        font-size:16px;
        color:#ddd;
      }
    }
}

@media (max-width:960px ){
  ul.list {
    li {
      width:50%;
    }
  }

}
@media (max-width:768px ){
  ul.list {
    li {
      :hover .img_box img{
        transform:scale(1);
      }
      :hover .img_box::before {
        opacity:0;
      }
      :hover .text_box {
        opacity:0;
      }
    }
  }
  .video_box {display:none;}
}
`;
export default ListTheme;