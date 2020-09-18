import content               from '../../helpers/content';
import { 
  uMGreenLighter, 
  black }                    from '../../helpers/common-styles';
import FakeNavBar            from '../_general/fake-nav-bar';
import LandingCards          from './cards';

export default function Landing() {
  const _c = content || {};
  const c = _c.home || {};

  const landingCss = {
    display: 'flex',
    width: '95vw',
    marginTop: '80px',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const landingImageContainerCss = {
    width: '100%',
    overflow: 'hidden',
    maxWidth: 800,
    flexDirection: 'column',
  };

  const landingImageCss = {
    width: '100%',
  };

  const h1Css = {
    fontSize: 30,
    color: black,
    opacity: 0.8,
  };

  const taglineCss = {
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: '2rem',
    marginTop: 20,
    marginBottom: 35,
    color: uMGreenLighter,
  };

  return <header className='landing'
    style={landingCss}>

    <div className='landing-image-container'
      style={landingImageContainerCss}>
      <h1 style={h1Css}>Welcome To <span style={{color:'transparent'}}>urbanmeadow.org</span></h1>
      <img className='landing-image'
        style={landingImageCss}
        src={c.landingImageSrc}
        alt={c.landingImageAlt} />
    </div>

    <h2 className='tagline' style={taglineCss}>
      {c.tagline}
    </h2>
    <LandingCards />

    <FakeNavBar/>

    <style jsx>{`
      @media (min-width: 500px){
        .landing-image-container {
          width: 95%;
        }
      }
    `}</style>
  </header>
}
