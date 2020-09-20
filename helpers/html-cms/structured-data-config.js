'use strict';

const { thisUrl } = require('../content/_general');

const structuredDataConfig = {
  siteName:       'Brad Garner',
  organization:   'Brad Garner',
  baseUrl:        thisUrl,
  logoUrl:        'https://cdn.buttercms.com/Y2yKHiNTSs2UIqwDaXSF',
  articleName:    'Brad Garner Blog',
  articlePath:    'post',
  termPathPrefix: '?term=',
  faqPathPrefix:  '?question=',
};

module.exports = {
  structuredDataConfig,
};