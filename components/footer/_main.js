import LazyLoad           from 'react-lazyload';
import Link               from 'next/link';
import content            from '../../helpers/content';
import { white}           from '../../helpers/common-styles';
import {  
  scrollPageFooter}       from '../../helpers/browser/tag-manager';
import { thisUrl }        from '../../helpers/content/_general';
import SocialFollow       from '../social/follow';
import FooterConsent      from './consent';

export default function Footer(props) {

  const _c = content || {};
  const c = _c.index || {};
  const footer  = _c.footer  || {} ;

  const navToPath = path => {
    if(typeof window !== 'undefined'){
      window.location.assign(`${thisUrl}/${path}`);
    }
  }

  const consent = 
    !props.consent ? null : 
    props.consent.consented ? null :
    <FooterConsent 
      consent             ={props.consent}
      toggleExpand        ={props.toggleExpand}
      showPrivacySettings ={props.showPrivacySettings}
      changeConsent       ={props.changeConsent} />
  
  const followStyle = `
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  `;
  

  return <footer className='footer' id={scrollPageFooter}>
    {consent}
    <div className='seo-divs'>
      <Link prefetch={false} href={`/sitemap.html`}>
        <a className='sitemap-html-xml'>sitemap.html</a>
      </Link>
      <Link prefetch={false} href={`/sitemap.xml`}>
        <a className='sitemap-html-xml'>sitemap.xml</a>
      </Link>
    </div>
    <div className='social'>
      <SocialFollow 
        followStyle    ={followStyle}
        followStyleWide={followStyle} />
    </div>

    <div className='logo-and-copyright'>
      <LazyLoad>
        <img className='logo'
          src={'https://cdn.buttercms.com/UsSeQdtQIm1XlNhivhnQ          '}
          alt={c.landingImageAlt} />
      </LazyLoad>
      <p className='copyright'><small>{footer.copyright}</small></p>
    </div>

    <style jsx>{`
      .footer {
				display: block;
				width: 100%;
        position: relative;
        height: 60vw;
      }

      @media print {
        .footer {
          display: none;
        }
      }

      .seo-divs {
        position: absolute;
        bottom: 10px;
        left: 0;
        height: 30px;
        min-width: 100px;
        padding-left: 20px;
        flex-direction: column;
        justify-content: space-around;
      }
      @media (min-width: 500px){
        .seo-divs {
          height: 100px;
        }
      }
      .sitemap-html-xml {
        color: ${white};
        font-size: 10px;
        text-decoration: none;
      }
      .social {
        position: absolute;
        bottom: 40px;
        left: 0;
        max-width: 40%;
      }
      @media (min-width: 500px){
        .social {
          bottom: 15px;
          left: 30%;
          max-width: auto;
          min-width: 400px;
        }
      }
      .logo-and-copyright {
        position: absolute;
        right: 15px;
        bottom: 8px;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
      }
      .copyright {
        color: ${white};
        font-size: 12px;
        margin-top: 8px;
      }
      small {
        color: inherit;
        font-size: inherit;
      }
      .logo {
        display: none;
        width: 100%;
        object-fit: contain;
        max-width: 100px;
      }
      @media (min-width: 500px){
        .logo {
          display: flex;
        }
      
      }

      .logo {
        width: 100%;
        object-fit: contain;
      }
  `}</style>
  </footer>;
}
