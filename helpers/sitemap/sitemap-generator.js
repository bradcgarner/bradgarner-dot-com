'use strict';

const fs = require('fs');
const fetch = require('isomorphic-unfetch');
const { siteMapStaticArr } = require('./sitemap-static-arr');

const BUTTER = process.env.REACT_APP_BUTTERCMS;
const thisUrl = process.env.THIS_URL;

const today = new Date();
const yr = today.getFullYear();
const mo = today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1 ;
const da = today.getDate() < 10 ? `0${today.getDate()+1}` : today.getDate()+1 ;

const staticJsonArr = Array.isArray(siteMapStaticArr) ? [...siteMapStaticArr] : [];
const sitemapDynamicObj = {};

const languageCodes = {
  german: 'de',
  english: 'en',
};

const staticXmlArr = staticJsonArr.map(p=>{
  return `
    <url>
      <loc>${thisUrl}${p.path ? '/': ''}${p.path}</loc>
      <lastmod>${p.lastmod || '2019-01-01'}</lastmod>
      <changefreq>${p.changefreq || 'yearly'}</changefreq>
      <priority>${p.priority || 0.5}</priority>
    </url>
  `;
});

const staticXmlString = staticXmlArr.join(' ');
let xmlString = '';
let dynamicJsonArrString = '';

const url = `https://api.buttercms.com/v2/posts/?page=1&page_size=100&auth_token=${BUTTER}`;
fetch(url)
  .then(res=>{
    return res.json();
  })
  .then(p=>{
    const posts = Array.isArray(p.data) ? p.data : [] ;
    return posts;
  })
  .then(posts=>{
    const dynamicXml = posts.map(p=>{
      return `
    <url>
      <loc>${thisUrl}/post/${p.slug}</loc>
      <lastmod>${p.updated || p.published}</lastmod>
      <changefreq>yearly</changefreq>
      <priority>1</priority>
    </url>
      `;
    });

    xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticXmlString} 
  ${dynamicXml.join(' ')}
</urlset>`;


    const dynamicJsonArr = posts.map(p=>{
      const lastmod = 
        typeof p.updated === 'string' ? 
          p.updated.slice(0,10) : 
          typeof p.published === 'string' ? 
            p.published.slice(0,10) : 
            `${yr}-${mo}-${da}`;
      const h1Tag = typeof p.title === 'string' ? p.title.split('\'').join('') : 'blog post';
      const description = typeof p.meta_description === 'string' ? p.meta_description.split('\'').join('') : 'no description yet';
      let hrefLang = 'en';
      if(Array.isArray(p.tags)){
        p.tags.forEach(t=>{
          if(languageCodes[t.name]){
            hrefLang = languageCodes[t.name];
          }
        });
      }

      const meta = {
        seoTitle: `${p.seo_title}`,
        description,
        image: p.featured_image,
        alt: h1Tag,
        h1Tag,
        path: `post/${p.slug}`,
        url: `${thisUrl}/post/${p.slug}`,
        categories: p.categories,
        tags: p.tags,
        lastmod,
        slug: p.slug,
        hrefLang,
        changefreq: 'yearly',
        priority: '1.0',
      };
      sitemapDynamicObj[p.slug] = {meta};
      return meta;
    });
    dynamicJsonArrString = JSON.stringify(dynamicJsonArr,null,2);


    return fs.writeFile('public/sitemap.xml', xmlString, function (err) {
      if (err) throw err;
      console.log('Generated dynamic sitemap.xml');
    });
  })
  .then(()=>{
    fs.writeFile('helpers/sitemap/sitemap-dynamic-arr.json', dynamicJsonArrString, function (err) {
      if (err) throw err;
      console.log(`Generated dynamic sitemap-dynamic-arr.json using ${thisUrl}`);
    });

    const sitemapDynamicObjString = JSON.stringify(sitemapDynamicObj, null, 2);
    fs.writeFile('helpers/sitemap/sitemap-dynamic-object.json', sitemapDynamicObjString, function (err) {
      if (err) throw err;
      console.log(`Generated dynamic sitemap-dynamic-object.json using ${thisUrl}`);
    });

  })
  .catch(err=>{
    console.error(err);
  });
