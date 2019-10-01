import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const MainBtnTheme = ({ history }) =>{
    return(
        <BackButton>
            {/* 버튼이 클릭되면 메인 가즈아 */}  
            {/* <button type="button" onClick={()=>{history.push('/')}}>MAIN</button> */}
            <Link to={"/"}>MAIN</Link>
        </BackButton>
    )
};
const BackButton = styled.div`
  margin-top:20px;
  text-align:center;
  a {
    padding:10px 30px;
    border:1px solid #fff;
    border-radius:3px;
    letter-spacing:1.8px;
    font-size:14px;
    font-weight:900;
    color:#fff;
  }
`;
export default MainBtnTheme;