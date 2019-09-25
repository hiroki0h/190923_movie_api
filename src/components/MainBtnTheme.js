import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const MainBtnTheme = ({ history }) =>{
    return(
        <BackButton>
            <button type="button" onClick={()=>{history.push('/')}}>MAIN</button>
        </BackButton>
    )
};
const BackButton = styled.div`
  margin-top:20px;
  text-align:center;
  button {
    padding:10px 30px;
    border:1px solid #fff;
    border-radius:3px;
    font-size:14px;
    font-weight:900;
    color:#fff;
  }
`;
export default MainBtnTheme;