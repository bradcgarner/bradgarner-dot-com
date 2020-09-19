import LazyLoad           from 'react-lazyload';
import Link               from 'next/link';
import content            from '../../helpers/content';
import {
  white,
  followStyle, bgBlue6 }           from '../../helpers/common-styles';
import {  
  scrollPageFooter}       from '../../helpers/browser/tag-manager';
import SocialFollow       from '../social/follow';
import FooterConsent      from './consent';
import { socialHandles } from '../../helpers/content/social-handles';

export default function Footer(props) {

  const _c = content || {};
  const c = _c.index || {};
  const footer  = _c.footer  || {} ;

  const consent = 
    !props.consent ? null : 
    props.consent.consented ? null :
    <FooterConsent 
      consent             ={props.consent}
      toggleExpand        ={props.toggleExpand}
      showPrivacySettings ={props.showPrivacySettings}
      changeConsent       ={props.changeConsent} />

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
        socialHandles  ={socialHandles.brad}
        github = 'white'
        npm    = '#7f0000'
        followStyle    ={followStyle}
        followStyleWide={followStyle} />
    </div>

    <p className='copyright'><small>{footer.copyright}</small></p>

    <style jsx>{`
      .footer {
        justify-content: space-around;
        align-items: center;
        padding: 30px;
				width: 100%;
        height: 100px;
        background-color: ${bgBlue6};
      }
      @media print {
        .footer {
          display: none;
        }
      }
      .seo-divs {
        height: 30px;
        min-width: 100px;
        padding-left: 20px;
        flex-direction: column;
        justify-content: space-around;
      }
      .sitemap-html-xml {
        color: ${white};
        font-size: 10px;
        text-decoration: none;
      }
      .social {
        color: ${white};
        max-width: 40%;
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
  `}</style>
  </footer>;
}
