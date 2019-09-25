import React from 'react';
import styled from 'styled-components';
import MainBtnTheme from "./MainBtnTheme";

const Notfound = ({ history }) =>{
  return(
    <>
      <ErrorText>Page not Found</ErrorText>
      <MainBtnTheme history={history}/>
    </>
  )
};
const ErrorText = styled.h2`
  padding-top:50px;
  margin-bottom:50px;
  letter-spacing:0.3em;
  text-align:center;
  font-size:40px;
  color:#fff;
`;
export default Notfound;