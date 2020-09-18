'use strict';

const { thisUrl } = require('../content/_general');

const structuredDataConfig = {
  siteName:       'Urban Meadow',
  organization:   'Urban Meadow',
  baseUrl:        thisUrl,
  logoUrl:        'https://cdn.buttercms.com/Y2yKHiNTSs2UIqwDaXSF',
  articleName:    'Urban Meadow Blog',
  articlePath:    'post',
  termPathPrefix: '?term=',
  faqPathPrefix:  '?question=',
};

module.exports = {
  structuredDataConfig,
};