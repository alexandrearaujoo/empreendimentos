'use client';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        list-style: none;
        text-decoration: none;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        background-color: #F8F7FC;
        position: relative;
        height: 100vh;
        overflow-x: hidden;
    }
    button{
        cursor: pointer;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

*::-webkit-scrollbar {
  width: 7px;
  width: 7px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #D7E1E3;
}
*::-webkit-scrollbar-track:hover {
  background-color: #B8C0C2;
}
*::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}
*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #4f46bb;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: #8e85ff;
}
*::-webkit-scrollbar-thumb:active {
  background-color: #8e85ff;
}
`;
