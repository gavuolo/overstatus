import { createGlobalStyle } from "styled-components";
import { theme } from "./Colors";

const GlobalStyle = createGlobalStyle`
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
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
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

//minhas
*{
	user-select: none;
	box-sizing: border-box;
	font-family: "BigNoodle";
	font-weight: normal;
}
p {
	font-family:'BigNoodle';
	font-weight: normal;
	color: #000000;
	font-size: 20px;
}//textos de destaques
h3{ 
	font-family: "Open Sans", sans-serif;
	font-weight: 500;
	user-select: text;
	line-height: 1.2
} //textos de leitura longa
h1{
	font-family:'BigNoodleOblique';
	font-size: 35px;
} //titulos
h2{ 
	font-family:'BigNoodleOblique';
	font-size: 20px;
} //subtitulos
body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: ${theme.primary};        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: ${theme.orange};    /* color of the scroll thumb */
  border: 4px solid ${theme.primary};
  
}

`;

export default GlobalStyle;