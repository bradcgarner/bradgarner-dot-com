import { uMGreen }         from '../../helpers/common-styles';
import ConsentExpanded     from './consent-expanded';
import ConsentBanner       from './consent-banner';

export default function Consent(props) {

  const consentContainerCss = {
    backgroundColor: uMGreen,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100vw',
    zIndex: 5000,
    borderTop: '1px solid white',
  };
  const consentMiddleCss = {
    width: '100%',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const consent = props.consent ? props.consent : {} ;
  const content = consent.expanded ? 
    <ConsentExpanded
      consent       ={props.consent}
      changeConsent ={props.changeConsent} /> : 
    <ConsentBanner 
      consent       ={props.consent}
      changeConsent ={props.changeConsent}
      toggleExpand  ={props.toggleExpand} /> ;

  return <div className="consent-container" 
    style={consentContainerCss}
    role="banner" 
    aria-hidden="false">
    <div className="consent-middle"
      style={consentMiddleCss} 
      role="alertdialog" 
      aria-describedby="notice-message">
      {content}
    </div>
  </div>
};