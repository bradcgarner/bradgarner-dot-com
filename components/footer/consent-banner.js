import content             from '../../helpers/content';
import { isObjectLiteral } from 'conjunction-junction';
import { 
  consentFontColor,
  consentButton,
  consentButtonHover,
  accentFontColorHover,
  bgBlue7}    from '../../helpers/common-styles';
import { privacyAll, 
  privacyOpen }            from '../../helpers/browser/tag-manager';
import Cookie              from '../graphics/cookie';

export default function ConsentBanner(props) {
  
  const consentInnerCss = {
    justifyContent: 'center',
    alignItems: 'center',
  };
  const textCss = {
    paddingRight: '7px',
    fontSize: '14px',
    color: consentFontColor,
    textAlign: 'center',
  };
  const detailsButtonCss = {
    color: consentFontColor,
    textAlign: 'center',
    border: 'none',
    backgroundColor: 'transparent',
    textDecoration: 'underline',
    fontSize: '12px',
  };
  const okButtonCss = {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: '14px',
    alignSelf: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: '2px',
    paddingTop: '3px',
    backgroundColor: bgBlueDarker,
    border: '1px solid #ddd',
    color: '#fff',
    paddingLeft: '15px',
    paddingRight: '15px',
    height: '35px',
  };
  const cookieJarCss = {
    display: 'block',
    height: '25px',
    width: '25px',
    marginLeft: '15px',
    marginRight: '15px',
  };
  
  const c = content.privacy || {} ;
  const consent = c.consent || {} ;
  
  const changeConsent = 
    typeof props.changeConsent === 'function' ? 
    props.changeConsent : 
    ()=>{} ;

  const toggleExpand = 
    typeof props.toggleExpand === 'function' ? 
    props.toggleExpand : 
    ()=>{} ;

  const _c = isObjectLiteral(props.consent) ? props.consent : {} ;
  const {consented, userHistory, userStats} = _c;

  const win = typeof window !== 'undefined' ? window : {} ;
  const path = win.location && win.location.pathname ? win.location.pathname : '' ;
  const pathClass = path === '/' ? 'home' : path ? path : 'no-path';

  return <div className="consent-inner" 
    style={consentInnerCss}
    aria-label="notice-message">
    <div className='cookie-jar'
      style={cookieJarCss}>
      <Cookie/>
    </div>
    <p className="text" style={textCss}>
      {consent.bannerMain}
    </p>
    <button
      className={`ok-button privacy ${privacyAll} ${pathClass} false`}
      style={okButtonCss}
      onClick={()=>changeConsent({userHistory: true, userStats: true})}>
      {consent.buttonLabel}
    </button>
    <button
      className={`details-button privacy ${privacyOpen}-banner ${pathClass} ${consented}-${userHistory}-${userStats}`}
      style={detailsButtonCss}
      onClick={()=>toggleExpand(true)}>
      {consent.showMore}
    </button>
    <div className='cookie-jar'
      style={cookieJarCss}>
      <Cookie/>
    </div>
    <style jsx>{`
      .ok-button:hover {
        ${consentButtonHover}
      }
      .details-button:hover {
        color: ${accentFontColorHover};
      }
    `}</style>
  </div>
}