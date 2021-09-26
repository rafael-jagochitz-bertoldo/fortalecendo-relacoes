import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --blue:#6C63FF;
    --cyan: #26B6B5;
    --dark-purple:#705168;
    --pink:#FF6584;
    --white:#f5f5f5;    
    --black:#202020;
    --standard-gradient: linear-gradient(107.53deg, #FF6584 0%, #26B6B5 75.71%);
    --standard-shadow: 8px 8px 10px 3px rgba(0,0,0,0.40);
    --inclination-gradient:rotate(-4.88deg);
    --border-rounded: 15px;
	--border-radius: 15px;
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
time, mark, audio, video, input, select {
	margin: 0;
	padding: 0;
	border: 0;
	outline: none;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: "Raleway", sans-serif;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
	font-family: "Raleway", sans-serif;
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
`;

export default GlobalStyle;