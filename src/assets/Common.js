import { createGlobalStyle } from 'styled-components';

const Common = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap');
    html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    abbr, address, cite, code,
    del, dfn, em, img, ins, kbd, q, samp,
    small, strong, sub, sup, var,
    b, i,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section, summary,
    time, mark, audio, video {
        margin:0; padding:0; box-sizing:border-box;
    }
    
    article,aside,details,figcaption,figure,
    footer,header,hgroup,menu,nav,section {
        display:block;
    }
    
    body {
        font:13px/1.4 'Shadows Into Light', cursive;
        color:#333;
    }
    
    input, select, button, textarea{
        box-sizing:border-box;
        font:14px/1 'Shadows Into Light', cursive;
    }
    
    nav ul {
        list-style:none;
    }
    table {
        border-collapse:collapse;
        border:0 none;
    }
    input, select {
        vertical-align:middle;
    }
    input{
        margin:0;
    }
    img, fieldset {
        border:0;
    } 
    ul, ol, li{
        list-style-type:none;
    }
    li img{
        vertical-align:top;
    }
    button { 
        padding:0;
        border:0;
        background:transparent;
        cursor:pointer;
    }
    a{
        text-decoration:none;
    }
    img{
        vertical-align:middle;
        font-size:0;
        width:100%;
    }
    .clearfix:after {content:""; display:block; clear:both; visibility:hidden; line-height:0; height:0;}
    .clearfix {display:block;}
    .blind {position:absolute; left:-99999px; top:-9999999px; font-size:1px;}
    .inner {max-width:1000px; margin:0 auto;}  
    body {color:#fff; background:#030f03;}
`;

export default Common;