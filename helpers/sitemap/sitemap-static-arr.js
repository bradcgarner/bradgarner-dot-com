'use strict';

const today = new Date();
const yr = today.getFullYear();
const mo = today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1 ;
const da = today.getDate() < 10 ? `0${today.getDate()+1}` : today.getDate()+1 ;

const siteMapStaticArr = [ // list these in the same order as the menu
  {
    key: 'home',
    path: '',
    lastmod: `${yr}-01-01`,
    changefreq: 'monthly',
    priority: '1.0'
  },
  {
    key: 'resume',
    path: 'resume',
    lastmod: `${yr}-${mo}-01`,
    changefreq: 'yearly',
    priority: '0.6',
  },
  {
    key: 'privacy',
    path: 'privacy',
    lastmod: `${yr}-01-01`,
    changefreq: 'yearly',
    priority: '0.1'
  },
];

module.exports = {
  siteMapStaticArr,
};