import Link                from 'next/link';
import { 
  calcMinimumWindowDimensions, 
  scrollToTop }            from 'browser-helpers';
import { navLink }         from '../../helpers/browser/tag-manager';
import { 
  bgBlue3,
  bgBlue6 }                from '../../helpers/common-styles';
import { 
  ArrUp, 
  Home }                   from 'something-rather-iconic';

export default function Header(){
    
  const win = typeof window !== 'undefined' ? window : {};
  const {
    cssWidthOuter
  } = calcMinimumWindowDimensions(win);


  const navOuterCss = {
    display: 'flex',
    position: 'fixed',
    top: 0,
    width: '100%',
    height: 60,
    zIndex: 999999,
  };
  const navBarCss = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    top: 0,
    left: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(180deg, rgba(255,255,255,1) 100%, rgba(255,255,255,0) 100%)',
    zIndex: 110,
  };
  const homeAndIconCss = {
    display: 'block',
    alignSelf: 'center',
    height: 40,
    width: 40,
    marginLeft: 15,
    marginRight: 15,
    cursor: 'pointer',
    color: bgBlue3,
  };
  const h1Css = {
    fontSize: 24,
  };
  const h2Css = {
    fontSize: 18,
    fontStyle: 'italic',
    opacity: 0.8,
  };

  return <nav className='nav-outer' style={navOuterCss}>

    <div className='nav-bar' style={navBarCss}>
      <div className='icon' style={homeAndIconCss}>
        <Link prefetch={false} href={'/'}>
          <Home style={{height:40,width:40}} />
        </Link>
      </div>
      <h1 className='h1' style={h1Css}>
        Brad Garner
      </h1>
      {
        cssWidthOuter > 500 ?
        <h2 className='h2' style={h2Css}>
          Researcher
        </h2> : null 
      }
      {
        cssWidthOuter > 500 ?
        <h2 className='h2' style={h2Css}>
          Environmentalist
        </h2> : null 
      }
      {
        cssWidthOuter > 500 ?
        <h2 className='h2' style={h2Css}>
          Programmer
        </h2> : null 
      }
      <div role='nav' className='icon' 
        style={homeAndIconCss}
        onClick={()=>scrollToTop()}>
          <ArrUp style={{width:40, height:30}}/>
      </div>
    </div>

    <style jsx>{`
      @media print {
        .nav-outer {
          display: none !important;
        }
      }
      .icon:hover {
        color: ${bgBlue6} !important;
      }
      @media (min-width: 1100px){
        .nav-bar {
          background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%) !important; 
        }
      }
    `}</style>
  </nav>
}