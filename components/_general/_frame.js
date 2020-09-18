import Head              from 'next/head';
import ReactGA           from 'react-ga';
import { 
  scrollFix, // self-executing
  cleanUri, 
  calcMinimumWindowDimensions,
  parseQueryString }     from 'browser-helpers';  // DO NOT DELETE! This mutates the window object; not invoked in this file
import { 
  fontNormal,
  fontsToLoad,
  globalFontColor, 
  hotButton,
  hotButtonHover, 
  uMGreen,
  mediumGray}       from '../../helpers/common-styles';
import { detectBrowser } from '../../helpers/browser/read-window';
import { queryStrings }  from '../../helpers/browser/query-strings';
import sitemapDynamicObj from '../../helpers/sitemap/sitemap-dynamic-object.json';
import Header            from '../header/_main';
import Footer            from '../footer/_main';

// necessary to over-ride browser defaults for the root component
const layoutStyle = {
  margin: 0,
  padding: 0,
}

export default class Frame extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hideHeader:    typeof window !== 'undefined' && window.location && window.location.hash ? false : typeof this.props.hideHeader === 'boolean' ? this.props.hideHeader : true ,
      scrolledTo:    0 ,
      triggerHeight: 400,
      meta: this.props.meta || {},
      consent: {
        consented:   typeof window === 'undefined' ? false : window.localStorage.getItem('consented') ? true : false ,
        userHistory: true,
        userStats:   true,
        expanded:    false,
      },
      showFooter: false, // show after timeout
    };
    this.hideBar             = this.hideBar.bind(this);
    this.changeConsent       = this.changeConsent.bind(this);
    this.toggleExpand        = this.toggleExpand.bind(this);
    this.showPrivacySettings = this.showPrivacySettings.bind(this);
  }

  componentDidMount(){
    scrollFix();
    this.addScrollListener();
    this.triggerConsentActions();
    window.dataLayer = window.dataLayer || [] ;
    setTimeout(()=>{
      this.setState({
        showFooter: true,
      })
    }, 200);
  }

  toggleExpand(){
    const consent = {...this.state.consent}
    consent.expanded = !consent.expanded;
    this.setState({consent});
  }

  showPrivacySettings(){
    const consent = {
      ...this.state.consent,
      consented: false, 
      expanded: true,
    }
    this.setState({consent});
  }

  componentDidUpdate(){
    if(typeof window !== 'undefined'){
      if(typeof document !== 'undefined'){
        if(document.location){
          const pageName = document.location.pathname;
          if(pageName !== window.sessionStorage.getItem('page')){
            if(this.state.consent.ga){
              this.triggerConsentActions();
            }
          }
        }
      }
    }
    if(this.props.meta !== this.state.meta){
      this.setState({
        meta: this.props.meta,
      });
    }
  }

  calcConsent(){
    if(typeof window !== 'undefined'){
      const userHistory  = window.localStorage.userHistory ? window.localStorage.userHistory : 'true' ;
      const userStats    = window.localStorage.userStats   ? window.localStorage.userStats   : 'true' ;
      const consent = {
        ...this.state.consent,
        userHistory: userHistory === 'true' ? true : false ,
        userStats:   userStats   === 'true' ? true : false ,
      };
      return consent;
    }
  }

  triggerConsentActions(){
    if(typeof window !=='undefined'){

      const consent = this.calcConsent();
      this.setState({consent});
      if(consent.ga){
        this.initializeGA();
      }

      const doNotTrackMe     = queryStrings.doNotTrackMe;
      const pleaseTrackMe    = queryStrings.pleaseTrackMe;
      const debugBrowser     = queryStrings.debugBrowser;
      const stopDebugBrowser = queryStrings.stopDebugBrowser;
      const parsed = parseQueryString();

      if(window.location && window.location.search){
        if(parsed[doNotTrackMe.s] === doNotTrackMe.q){
          window.localStorage.setItem(doNotTrackMe.k, doNotTrackMe.v);
          cleanUri();
        } else if(parsed[pleaseTrackMe.s] === pleaseTrackMe.q){
          window.localStorage.removeItem(pleaseTrackMe.k);
          cleanUri();
        } else if(parsed[debugBrowser.s] === debugBrowser.q){
          window.localStorage.setItem(debugBrowser.k, debugBrowser.v);
          cleanUri();
        } else if(parsed[stopDebugBrowser.s] === stopDebugBrowser.q){
          window.localStorage.removeItem(stopDebugBrowser.k);
          cleanUri();
        }
      }
    }
  }

  changeConsent(newConsent){
    const consent = {
      ...this.state.consent, 
      ...newConsent, 
      consented: true,
      expanded: false,
    };
    this.setState({ consent });
    if(typeof window !== 'undefined'){
      window.localStorage.setItem('consented'  , new Date());
      window.localStorage.setItem('userStats'  , consent.userStats);
      window.localStorage.setItem('userHistory', consent.userHistory);
    }
  }

  initializeGA(){
    if(typeof document !== 'undefined'){
      if(document.location){
        const usersTrafficIsBlocked = typeof window !== 'undefined' && window.localStorage
        && window.localStorage.doNotTrackMe ?
        true :
        false;
        if(!usersTrafficIsBlocked){
          const pageName = document.location.pathname;
          window.sessionStorage.setItem('page', pageName)
          ReactGA.initialize(process.env.GAID);
          ReactGA.pageview(pageName);
        }
      }
    }
  }

  addScrollListener(){
    if(this.props.hideHeader){
      const win = typeof window !== 'undefined' ? window : {};
      const { cssHeightOuter } = calcMinimumWindowDimensions(win);
      const triggerHeight = cssHeightOuter*0.5 || 400;
      this.setState({triggerHeight});
      window.addEventListener('scroll', this.hideBar);
    }
  }

  hideBar() {
    if(window  && this.state){
      if(window.scrollY > this.state.triggerHeight){
        if(this.state.hideHeader){
          this.setState({hideHeader: false});
        }
      } else if(window.scrollY < this.state.triggerHeight){
        if(!this.state.hideHeader){
          this.setState({hideHeader: true});
        }
      }
    }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.hideBar);
  }

  render() {

    const b = detectBrowser();

    const GTMID = process.env.GTMID ;
    const GAID = process.env.GAID ;

    const isNotABrowser = typeof window === 'undefined';
    const usersTrafficIsBlocked =  
      isNotABrowser ? 
      true :
      window.localStorage && window.localStorage.doNotTrackMe ?
      true :
      false;
    if(usersTrafficIsBlocked && !isNotABrowser){
      window[`ga-disable-${GAID}`] = true;
      window[`ga-disable-${GTMID}`] = true;
      if(typeof window !== 'undefined' && 
      window.localStorage && 
      queryStrings.debugBrowser && 
      window.localStorage[queryStrings.debugBrowser.k] === 
      queryStrings.debugBrowser.v){
        console.log('your traffic is blocked from Google Analytics');
      }
    }

    const meta = this.state.meta || {};
    const header = 
      this.state.hideHeader ? 
        null : 
          <Header /> ;
    
    const thisUrl = process.env.THIS_URL;
    const faviconPath = `${thisUrl}/`;

    const footer = this.state.showFooter ?
      <Footer 
      consent            ={this.state.consent}
      showPrivacySettings={this.showPrivacySettings}
      changeConsent      ={this.changeConsent}
      toggleExpand       ={this.toggleExpand}
      post               ={this.props.post} 
      meta               ={this.props.meta} /> : null ;

    const gtmScript = usersTrafficIsBlocked ? null : <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTMID}');`}} /> ;

    const gtmNoScript = usersTrafficIsBlocked ? null : <noscript dangerouslySetInnerHTML={{__html:`<iframe src="https://www.googletagmanager.com/ns.html?id=${GTMID}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} /> ;

    const gtagScript = usersTrafficIsBlocked ? null :
      <script dangerouslySetInnerHTML={{__html: 'function gtag(){dataLayer.push(arguments);}'}}/>

    const polyfillScript = <script 
      crossOrigin="anonymous" 
      src="https://polyfill.io/v3/polyfill.min.js?flags=gated&features=es5%2Ces6%2Ces7&unknown=polyfill"></script>

    const fontsToLoadArr = Array.isArray(this.props.fontsToLoad) ?
      this.props.fontsToLoad : 
      Array.isArray(fontsToLoad) ?
      fontsToLoad :
      [] ;
    const f2l = fontsToLoadArr.join('%7C'); // encoded pipe | character

    const hrefLangs = [];
    if(meta.relatedPages){
      hrefLangs.push(
        <link key='x' rel="alternate" hrefLang={meta.hrefLang} href={meta.url} />
      );
      for(let page in meta.relatedPages){
        if(sitemapDynamicObj[page] && sitemapDynamicObj[page].meta){
          const p = sitemapDynamicObj[page].meta;
          hrefLangs.push(
            <link key={page} rel="alternate" hrefLang={p.hrefLang} href={p.url} />
          );
        }
      }
    } else {
      <link key='x' hrefLang={meta.hrefLang || 'en'} href={meta.url} />
    }

    if(typeof document !== 'undefined' && 
      typeof document.getElementById === 'function'){
      const topLevelHtml = document.getElementById('top-level-html');
      if(topLevelHtml && meta.hrefLang){
        topLevelHtml.lang = meta.hrefLang;
      }
    }

    const fonts = null ; // <link href={`https://fonts.googleapis.com/css?family=${f2l}`} rel="stylesheet" lazyload='true' />
    return <div className='frame' style={layoutStyle}>
      <Head>
        {hrefLangs}
        {/* {polyfillScript} */}
        {gtmScript}
        {gtagScript}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta                              property='og:site_name'   content={meta.siteName}/>
        <meta name    ='twitter:card'                                content={meta.twitterCard}/>
        <meta name    ='twitter:site'                                content={meta.twitterSite} />
        <meta                              property='fb:app_id'      content={meta.fbAppId} />
        <meta                              property='og:type'        content={meta.type}/>
        <title>                                                              {meta.seoTitle}</title>
        <meta                              property='og:title'       content={meta.seoTitle}/>
        <meta name    ='description'                                 content={meta.description} />
        <meta                              property='og:description' content={meta.description}/>
        <meta                              property='og:url'         content={meta.url}/>
        <meta name    ='image'                                       content={meta.image}/>
        <meta                              property="og:image"       content={meta.image} />
        <meta                              property='og:image:alt'   content={meta.alt}/>
        <meta name    ='twitter:image:alt'                           content={meta.alt}/>

        <meta name="p:domain_verify"          content={process.env.PINTEREST_VERIF}/>

        <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIF} />
        
        {
          this.props.structure ?
          <script type="application/ld+json">
            {JSON.stringify(this.props.structure, null, 2)}
          </script> : null
        }
        
        <link rel="icon" type="image/x-icon" href={`${faviconPath}favicon.ico`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${faviconPath}apple-touch-icon.png`}/>
        <link rel="icon" type="image/png" sizes="32x32" href={`${faviconPath}favicon-32x32.png`}/>
        <link rel="icon" type="image/png" sizes="16x16" href={`${faviconPath}favicon-16x16.png`}/>
        <link rel="manifest" href={`${faviconPath}site.webmanifest`}/>
        <link rel="mask-icon" href={`${faviconPath}safari-pinned-tab.svg`} color="#73308a"/>
        <meta name="msapplication-TileColor" content="#9f00a7"/>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {gtmNoScript}
      {header}
      {this.props.children}
      {footer}
      {fonts}
      <style jsx global>{`
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, tt, var,
        /* sup, sup, BRAD REMOVED */
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend, caption, 
        /* table, tbody, tfoot, thead, tr, th, td, */
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 16px; /* was 100% */
          ${fontNormal} /* customized default font */
          /*font: inherit;*/
          color: ${globalFontColor}; /* Brad added */
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section, div {
          display: flex; /* was block */
        }
        body {
          line-height: 1;
        }
        h1, h2, h3, h4, h5, h6, p, li, figcaption {
          line-height: 1.4em; /* Brad added */
        }
        ol, ul, li {
          list-style: none;
        }
        blockquote, q {
          quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        /* @@@@@@@@@@ END MYER RESET @@@@@@@@@@@@@ */

        * {
          box-sizing: border-box;
        }
        div::-webkit-scrollbar,
        p::-webkit-scrollbar,
        form::-webkit-scrollbar {
          width: 0 !important;
          display: none;
        }
        div::-moz-scrollbar,
        p::-moz-scrollbar,
        form::-moz-scrollbar {
          width: 0 !important;
          display: none;
        }
        button {
          cursor: pointer;
          font: inherit;
        }
        button:focus {
          outline: none;
        }
        body,
        html {
          overflow-x: hidden;
        }
        a {
          font-size: inherit;
          color: inherit;
        }
        a:visited {
          color: inherit;
        }
        table {
          margin-bottom: 10px;
          margin-top: 10px;
        }
        .frame {
          min-height: 100vh;
          width: 100%;
          width: 100vw;
          flex-direction: column;
        }

        /* THESE ARE GLOBAL BECAUSE USED IN BLOG POSTS */
        a.uMGreen-button {
          ${hotButton}
          padding: 10px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          max-width: 250px;
        }
        a.uMGreen-button:hover {
          ${hotButtonHover}
          border: none;
        }
        /* GLOBALLY USED IN POSTS AND STATIC */
        a.um-link {
          text-decoration: underline;
        }
        a.um-link:hover {
          color: ${uMGreen} !important;
        }
        figcaption,
        figcaption p,
        figcaption span {
          font-size: 13px;
          font-style: italic;
          width: 100%;
          margin-top: 10px;
          margin-bottom: 25px;
          line-height: 17px;
          color: ${mediumGray};
        }
      `}</style>
    </div>
  }
  
}