'use strict';

const express     = require('express');
const next        = require('next');
const LRUCache    = require('lru-cache');
const compression = require('compression');

const PORT   = process.env.PORT || 3600;
const dev    = process.env.NODE_ENV !== 'production';
const app    = next({ dev });
const handle = app.getRequestHandler();

const sitemap      = require('./helpers/sitemap/sitemap-generator'); // DO NOT DELETE. DOES NOT NEED TO BE INVOKED.

const thisUrl = process.env.THIS_URL;

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  length: function (n, key) {
    return n.toString().length + key.toString().length;
  },
  max: 100 * 1000 * 1000, // 100MB cache soft limit
  maxAge: 1000 * 60 * 60 * 24 // 24 hours
});

app.prepare()
  .then(() => {
    const server = express();

    if(!dev  && !process.env.LOCAL){
      const enforce = require('express-sslify');
      server.use(enforce.HTTPS({ trustProtoHeader: true }));
    }

    server.use(compression());

    server.use(function forceLiveDomain(req, res, next) {
      // Don't allow user to hit Heroku now that we have a domain
      const requstedUrl = req.get('Host');
      // console.log('requestedUrl', requstedUrl);
      const herokuUrl = 'urban-meadow.herokuapp.com';
      if (requstedUrl === herokuUrl ) {
        // console.log('**** SHOULD REDIRECT requested host', requstedUrl, '>>> herokuUrl', herokuUrl, '>>> thisUrl', thisUrl, '>>> req.originalUrl',req.originalUrl);
        return res.redirect(301, thisUrl + req.originalUrl);
      }

      // let needsRedirect = false;

      // const aliasRedirects = ['www.urban-meadow.org'];
      // aliasRedirects.forEach(url=>{
      //   if(requstedUrl === url){
      //     needsRedirect = true;
      //   }
      // });
      // if(needsRedirect){
      //   return res.redirect(301, thisUrl + req.originalUrl);
      // }

      return next();
    });

    server.get('/', (req, res) => {
      const actualPage = '/';
      renderAndCache(req, res, actualPage);
    });
    server.get('/privacy', (req, res) => {
      const actualPage = '/privacy';
      renderAndCache(req, res, actualPage);
    });
    server.get('/resume', (req, res) => {
      const actualPage = '/resume';
      renderAndCache(req, res, actualPage);
    });
    server.get('/sitemap', (req, res) => {
      const actualPage = '/sitemap';
      renderAndCache(req, res, actualPage);
    });
    server.get('/sitemap.html', (req, res) => {
      const actualPage = '/sitemap';
      renderAndCache(req, res, actualPage);
    });
    
    const robotsOptions = {
      root: __dirname + '/public/',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      }
    };
    server.get('/robots.txt', (req, res) => (
      res.status(200).sendFile('robots.txt', robotsOptions)
    ));

    const xmlOptions = {
      root: __dirname + '/public/',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
      }
    };
    server.get('/browserconfig.xml', (req, res) => (
      res.status(200).sendFile('browserconfig.xml', xmlOptions)
    ));
    server.get('/sitemap.xml', (req, res) => (
      res.status(200).sendFile('sitemap.xml', xmlOptions)
    ));

    const jsonOptions = {
      root: __dirname + '/public/',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      }
    };
    server.get('/site.webmanifest', (req, res) => (
      res.status(200).sendFile('site.webmanifest', jsonOptions)
    ));

    const icoOptions = {
      root: __dirname + '/public/',
      headers: {
        'Content-Type': 'image/ico',
      }
    };
    server.get('/favicon.ico', (req, res) => (
      res.status(200).sendFile('favicon.ico', icoOptions)
    ));

    const imageOptions = {
      root: __dirname + '/public/',
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'max-age=31536000, immutable',
      }
    };
    server.get('/android-chrome-192x192.png', (req, res) => (
      res.status(200).sendFile('android-chrome-192x192.png', imageOptions)
    ));
    server.get('/android-chrome-256x256.png', (req, res) => (
      res.status(200).sendFile('android-chrome-256x256.png', imageOptions)
    ));
    server.get('/apple-touch-icon.png', (req, res) => (
      res.status(200).sendFile('apple-touch-icon.png', imageOptions)
    ));
    server.get('/favicon-16x16.png', (req, res) => (
      res.status(200).sendFile('favicon-16x16.png', imageOptions)
    ));
    server.get('/favicon-32x32.png', (req, res) => (
      res.status(200).sendFile('favicon-32x32.png', imageOptions)
    ));
    server.get('/mstile-150x150.png', (req, res) => (
      res.status(200).sendFile('mstile-150x150.png', imageOptions)
    ));

    const svgOptions = {
      root: __dirname + '/public/',
      headers: {
        'Content-Type': 'image/svg+xml',
      }
    };
    server.get('/safari-pinned-tab.svg', (req, res) => (
      res.status(200).sendFile('safari-pinned-tab.svg', svgOptions)
    ));

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Brad Garner is running on port ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

  /*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey (req) {
  return `${req.url}`
}

async function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    // Let's cache this page
    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}
