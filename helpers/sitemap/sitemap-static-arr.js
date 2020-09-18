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
    changefreq: 'yearly',
    priority: '1.0'
  },
  {
    key: 'about',
    path: 'about',
    lastmod: `${yr}-${mo}-01`,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    key: 'whatIs',
    path: 'what-is-an-urban-meadow',
    lastmod: `${yr}-${mo}-01`,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    key: 'importance',
    path: 'importance-of-urban-meadows',
    lastmod: `${yr}-${mo}-01`,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    key: 'resources',
    path: 'resources',
    lastmod: `${yr}-${mo}-${da}`,
    changefreq: 'always',
    priority: '0.6'
  },
  {
    key: 'blog',
    path: 'blog',
    lastmod: `${yr}-${mo}-${da}`,
    changefreq: 'always',
    priority: '0.6'
  },
  {
    key: 'gallery',
    path: 'gallery-of-urban-meadows',
    lastmod: `${yr}-${mo}-01`,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    key: 'plant',
    path: 'plant-an-urban-meadow',
    lastmod: `${yr}-${mo}-01`,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    key: 'grow',
    path: 'how-to-grow-an-urban-meadow',
    lastmod: `${yr}-${mo}-01`,
    changefreq: 'monthly',
    priority: '0.6',
  },  
  {
    key: 'faq',
    path: 'faq',
    lastmod: `${yr}-01-01`,
    changefreq: 'monthly',
    priority: '0.1'
  },
  {
    key: 'contact',
    path: 'contact',
    lastmod: `${yr}-01-01`,
    changefreq: 'yearly',
    priority: '0.7'
  },
  {
    key: 'dedication',
    path: 'dedication',
    lastmod: `${yr}-01-01`,
    changefreq: 'yearly',
    priority: '0.1'
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