import { createGlobalStyle } from 'styled-components';
import ListBg from "../assets/images/list_bg_V.png";
const ListTheme = createGlobalStyle`
ul.list {
  padding-top:20px;
  margin-right:-20px;
  li {
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
    }
    .img_box {
      height:0;
      overflow:hidden;
      padding-bottom:150%;
      text-align:center;
      position:relative;
      ::before {
        content:""; 
        width:100%;
        height:100%; 
        background:url(${ListBg}) repeat-x 0 0;
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