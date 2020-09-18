export const uMGreen =                 '#276b0b'; //leaves accent 1 did not want to change variables due to potential problem causing throughout the files
export const uMGreenRGB =              '94, 175, 91';
export const uMGreenDarker =           '#416723'; //leaves back
export const umGreenVeryDark = '#2D4818';
export const umGreenYellow = '#8cd622';
export const uMGreenDarkerRGB =        '65, 103, 35';
export const uMGreenLighter =          '#83a94d';
export const uMGreenLighterRGB =       '131, 169, 77';
export const uMGreenSlightlyLighter =  '#588135'; //leaves middle

export const black =                  '#2a171c';
export const darkBrown =              '#3c2727'
export const white =                  '#fff';
export const knaufBlue =              '#009fe3';
export const mediumGray =             '#8a7d7d';

export const accentFontColor =        uMGreen;
export const accentFontColorHover =   mediumGray;

export const headerFontColor =        accentFontColor;
export const headerFontColorHover =   '#a28ba2';
// export const headerBackgroundColor =  '#fafafa';

export const footerBackgroundColor =  '#fafafa';
export const globalFontColor =        darkBrown;
export const globalHeaderColor =      uMGreen;
export const postTitleReadColor =     mediumGray;
export const consentFontColor =       white;
export const dropDownMenuFontColor =  white;
export const dropDownMenuFontColorHover=accentFontColorHover;
export const modalHeaderColor =       accentFontColor;
export const cardHoverColor =         '#f3f5ed';
export const cardShadowColor =        '#2a17ac';
export const cardShadowColorRGB =     '35,31,32';
export const modalBackground =        'rgba(0, 0, 0, 0.4)';
export const disabledButtonColor    = '#c7c8ca';


export const boxShadow = `box-shadow: rgba(${cardShadowColorRGB}, 0.3) 3px 3px 5px 0px;`;
export const insetShadow = `box-shadow: inset 0 0 3px rgba(${cardShadowColorRGB}, 0.3);`
// this is in the Myers reset in _frame.js
export const fontNormal = `
  font-family: Source Sans Pro, sans-serif;
`;
export const fontFinePrint = `
  font-family: Open Sans Condensed, sans-serif;
`;
export const fontFinePrintText = 'Open Sans Condensed, sans-serif';

export const fontBlogMenu = `
  font-family: Open Sans, sans-serif;
`;

// this is in format-html.js
export const fontBlog = `
  font-family: Nanum Gothic, sans-serif
`;
export const fontReading = `
  ${fontBlog};
`;
export const fontReadingObject = {
  fontFamily: 'Nanum Gothic, sans-serif',
};
export const fontAuthor = fontReading;
/* IMPORTANT! THIS GOES IN _FRAME.JS TO LOAD GOOGLE FONTS */
export const fontsToLoadArr = [
  'Nanum+Gothic', // blog
  'Source+Sans+Pro', // normal
  'Open+Sans:700', // blog menu
  'Open+Sans+Condensed:300', // fine print
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
  color: ${uMGreenLighter};
`;

export const centeredAccentTextCSS = `
  color: ${uMGreenLighter};
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
  ${fontNormal}
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
  background-color: ${uMGreen};
  color: #fff;
`;

export const hotButtonHover = `
  border: 1px solid #ddd;
  background-color: rgba(${uMGreenLighterRGB},0.8);
`;

export const consentButton = `
  ${_bigButton}
  background-color: ${uMGreenDarker};
  border: 1px solid #ddd;
  color: #fff;
  padding-left: 15px;
  padding-right: 15px;
  height: 35px;
`;

export const consentButtonHover = `
  background-color: ${uMGreenLighter};
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
  fontFamily:  'Nanum Gothic, sans-serif',
};

export const defUlStyle = `
  margin-left: 30px;
`;
export const defEmStyle = `
  font-size: 14px;
  font-weight: bold;
  color:    #8bad33;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const footerElementMargins = `
  margin: 0 20px 50px 20px;
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

// @@@@@@@@@@ POSTS @@@@@@@@@@

export const postTitle = `
  font-size: 30px;
  text-align: center;
  color: ${globalHeaderColor};
`;
export const postTitleObj = {
  fontSize: 30,
  textAlign: 'center',
  color: globalHeaderColor,
};

export const postMain = `
  flex-direction: column;
  align-items: center;
  width: 75%;
  padding: 40px 20px;
  margin-top: 75px;
`;

export const postMainInner = pageMainInner;
export const postMainInnerObj = pageMainInnerObj;

// @@@@@@@@@@@ BLOG @@@@@@@@

export const sideBarBottomBarBreakpoint = 750;

export const sidebarTitleCSS = `
  overflow: hidden;
  font-size: 14px;
  color: ${accentFontColor};
  padding: 20px 0 10px 0;
  margin: 0;
`;

 export const sidebarUlCSS = `
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: white;
  -moz-box-shadow:    inset 2px 2px 5px -1px ${mediumGray};
  -webkit-box-shadow: inset 2px 2px 5px -1px ${mediumGray};
  box-shadow:         inset 2px 2px 5px -1px ${mediumGray};
  padding: 5px 5px 10px 10px;
`;

export const sidebarLiCSS = `
  padding: 0;
  margin-bottom: 7px;
  margin-top: .2vw;
`;

export const sidebarLiButtonCSS = `
  ${fontBlogMenu}
  font-size: 12px;
  text-align: left;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
`;

export const sidebarLiButtonHoverCSS = `
  color: ${accentFontColor};
`;

// @@@@@@@@@@@ OTHER @@@@@@@@@@

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
  border: 1px solid ${uMGreenLighter};
  ${fontReading};
  box-sizing: border-box;
`;

export const iconStyle = {height: 30, width: 30};
