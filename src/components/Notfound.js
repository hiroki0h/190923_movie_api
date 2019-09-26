import React from 'react';
import styled from 'styled-components';
import MainBtnTheme from "./MainBtnTheme";
import Error404 from "../assets/images/404.png";

const Notfound = ({ history }) =>{
  return(
    <>
      <ImgBox>
        <img src={Error404} alt="Page not Found" />
      </ImgBox>
      <ErrorText>Page not Found</ErrorText>
      <MainBtnTheme history={history}/>
    </>
  )
};
const ImgBox = styled.div`
  width:280px;
  margin:0 auto;
  margin-top:50px;
`;
const ErrorText = styled.h2`
  padding-top:50px;
  margin-bottom:50px;
  letter-spacing:0.3em;
  text-align:center;
  font-size:40px;
  color:#fff;
`;
export default Notfound;