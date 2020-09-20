export const bgBlue0                = '#eff5f9';
export const bgBlue1                = '#CAE0ED';
export const bgBlue1RGB             = '202,224,237';
export const bgBlue2                = '#ABC8D9';
export const bgBlue3                = '#8CB0C6';
export const bgBlue4                = '#6E98B2';
export const bgBlue4RGB             = '110,152,178';
export const bgBlue5                = '#4F809F';
export const bgBlue6                = '#30688B';
export const bgBlue6RGB             = '48,104,139';

export const black =                  '#2a171c';
export const darkBrown =              '#3c2727'
export const white =                  '#fff';
export const mediumGray =             '#8a7d7d';

export const accentFontColor =        bgBlue4;
export const accentFontColorHover =   mediumGray;

export const headerFontColor =        accentFontColor;
export const headerFontColorHover =   '#a28ba2';
// export const headerBackgroundColor =  '#fafafa';

export const footerBackgroundColor =  '#fafafa';
export const globalFontColor =        darkBrown;
export const globalHeaderColor =      bgBlue4;
export const consentFontColor =       white;
export const modalHeaderColor =       accentFontColor;
export const cardHoverColor =         '#f3f5ed';
export const cardShadowColor =        '#2a17ac';
export const cardShadowColorRGB =     '35,31,32';
export const modalBackground =        'rgba(0, 0, 0, 0.4)';
export const disabledButtonColor    = '#c7c8ca';


export const boxShadow = `box-shadow: rgba(${cardShadowColorRGB}, 0.3) 3px 3px 5px 0px;`;
export const boxShadowProperty = `rgba(${cardShadowColorRGB}, 0.3) 3px 3px 5px 0px`;
export const insetShadow = `box-shadow: inset 0 0 3px rgba(${cardShadowColorRGB}, 0.3);`
// this is in the Myers reset in _frame.js

export const fontFinePrint = `
  font-family: Open Sans Condensed, sans-serif;
`;
export const fontFinePrintText = 'Open Sans Condensed, sans-serif';

// this is in format-html.js
export const fontMain = `
  font-family: Quicksand, sans-serif
`;
export const fontReading = `
  ${fontMain};
`;

export const fontReadingObject = {
  fontFamily: 'Quicksand, sans-serif',
};
/* IMPORTANT! THIS GOES IN _FRAME.JS TO LOAD GOOGLE FONTS */
export const fontsToLoadArr = [
  'Poppins:300', 
  'Quicksand',
  'Montserrat',
  'Source+Sans+Pro',
  'Open+Sans:700',
  'Open+Sans+Condensed:300',
  'Roboto', // ONLY to check meta tags!!!
  // 'Anton',
  // 'Playfair+Display',
  // 'Inconsolata',// 'Merriweather:300',
  // 'Arima+Madurai:100',
  // 'Bellefair',
];
export const fontsToLoad = fontsToLoadArr.join('%7C'); // encoded pipe | character

// vw not working on SSR
export const section = `
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  width: 100vw;
  padding: 70px 20px 20px 20px;
  margin-bottom: 75px;
  overflow: hidden;
`;
// vw not working on SSR
export const sectionOver900 = `
  padding-left: 10%;
  padding-right: 10%;
  padding-left: 10vw;
  padding-right: 10vw;
`;

export const sectionHeaderCSS = `
  max-width: 500px;
  margin-bottom: 30px;
  font-size: 40px;
  color: ${bgBlue1};
`;

export const centeredAccentTextCSS = `
  color: ${bgBlue1};
  font-size: 20px; 
  text-align: center; 
  font-weight: bold;
  width: 100%;
`;

export const card = `
  flex-direction: column;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  ${boxShadow}
`;

export const modalCard = `
  position: relative;
  -webkit-transform: translate3d(0,0,0);
  height: 70vh;
  width: 90vw;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  ${boxShadow}
  z-index: 9999;
  overflow-y: scroll;
`;

const _bigButton = `
  ${fontMain}
  font-size: 14px;
  align-self: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
  padding-top: 3px;
  border: 1px solid transparent;
`;

export const bigButton = `
  ${_bigButton}
  background-color: ${mediumGray};
  color: #fff;
`;

export const bigButtonHover =`
  border: 1px solid #ddd;
  background-color: #fff;
  color: ${mediumGray};
`;

export const hotButton = `
  ${_bigButton}
  background-color: ${bgBlue4};
  color: #fff;
`;

export const hotButtonHover = `
  border: 1px solid #ddd;
  background-color: rgba(${bgBlue1RGB},0.8);
`;

export const consentButton = `
  ${_bigButton}
  background-color: ${bgBlue6};
  border: 1px solid #ddd;
  color: #fff;
  padding-left: 15px;
  padding-right: 15px;
  height: 35px;
`;

export const consentButtonHover = `
  background-color: ${bgBlue1};
`;

// @@@@@@@@@@ TEXT STYLES @@@@@@@@@@

export const defTextStyle = `
  font-size:   14px;
  text-align:  left;
  color:       ${globalFontColor};
  margin-top: 10px;
  margin-bottom: 10px;
  ${fontReading}
`;

export const defTextStyleObj = {
  fontSize:     14,
  lineHeight:   '18px',
  textAlign:   'left',
  color:        globalFontColor,
  marginTop:    10,
  marginBottom: 10,
  fontFamily:  'Quicksand, sans-serif',
};

export const defUlStyle = `
  margin-left: 30px;
`;
export const defEmStyle = `
  font-size: 20px;
  font-weight: bold;
  color:    ${bgBlue5};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const footerElementMargins = `
  margin: 0 20px 50px 20px;
`;

export const followStyle = `
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 100%;
`;

// @@@@@@@@ STATIC PAGES @@@@@@@

export const pageMainContainer = `
  width: 90%;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-bottom: 50px;
`;

export const pageMain = `
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 40px 20px;
  margin-top: 75px;
`;

export const pageMainObj = {
  display: 'flex', // assume reset has not loaded
  flexDirection: 'column',
  alignItems: 'center',
  width: '90%',
  padding: '40px 20px',
  marginTop: 75,
};
export const pageMainInner = `
  flex-direction: column;
  min-height: 75vh;
  width: 90%;
  max-width: 800px;
`;
export const pageMainInnerObj = {
  display: 'flex', // assume reset has not loaded
  flexDirection: 'column',
  minHeight: '75vh',
  width: '90%',
  maxWidth: 800,
};

export const transparent = `
  opacity: 0.1;
  cursor: initial;
`;

export const formInputField = `
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 250px;
  padding: 5px;
  min-height: 28px;
  border: 1px solid ${bgBlue1};
  ${fontReading};
  box-sizing: border-box;
`;

export const iconStyle = {height: 30, width: 30};
