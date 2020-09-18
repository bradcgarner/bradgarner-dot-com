import { 
  calcMinimumWindowDimensions
}                        from 'browser-helpers';
import { detect }        from 'detect-browser';
import { queryStrings } from './query-strings';

export const calcCardsWide = () => {
  if(typeof window === 'undefined') return '';
  const win = typeof window !== 'undefined' ? window : {} ;
  const { cssWidthOuter } = calcMinimumWindowDimensions(win);

  const h = cssWidthOuter >= 1160 ? 420 : 320 ;
  const w = (0.7142 * h) + 20;
  const isHome = !win.location ? false : win.location.pathname === '/' ? true : false ;
  const widthAdj = isHome ? cssWidthOuter : 0.75 * cssWidthOuter ;
  const cardsWide = Math.floor(widthAdj/w);
  return cardsWide;
}

export const detectBrowser = () => {
  const b = detect();
  if(typeof window !== 'undefined' && 
  window.localStorage && 
  queryStrings.debugBrowser && 
  window.localStorage[queryStrings.debugBrowser.k] === 
  queryStrings.debugBrowser.v){
    console.log('detected browser',b);
  }
  if(b){
    return b;
  }
  return {};
}