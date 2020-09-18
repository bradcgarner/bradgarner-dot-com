'use strict';

const tryToMakeInputSafe = string => {
  if(typeof string !== 'string'){
    return '';
  }
  let safeString = string;
  if(typeof string === 'string' && string.includes('\'')){
    safeString = safeString.split('\'').join('');
  }
  if(safeString.includes('--')){
    safeString = safeString.split('--').join('~');
  }
  if(safeString.includes('union')){
    safeString = safeString.split('union').join('u~nion');
  }
  return safeString;
};

module.exports = {
  tryToMakeInputSafe,
};