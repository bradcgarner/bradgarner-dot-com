import Link                from 'next/link';
import { isObjectLiteral } from 'conjunction-junction';
import { scrollToTop }     from 'browser-helpers';
import { navLink }         from '../../helpers/browser/tag-manager';
import content             from '../../helpers/content';
import { 
  headerFontColor, 
  headerFontColorHover }   from '../../helpers/common-styles';
import { 
  ArrUp, 
  BarsSolid }              from 'something-rather-iconic';
import DropDownMenu        from './drop-down-menu';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuHidden: true,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount(){
    const divs   = Array.isArray(content.menu) ? content.menu : [] ;
    const menu   = divs.map(divName=>{
      const theDiv = isObjectLiteral(content[divName]) ? content[divName] : {} ;
      return isObjectLiteral(theDiv.meta) ? theDiv.meta : {} ;
    });
    this.setState({
      divs,
      menu,
    });
    setTimeout(()=>{
      this.setState({
        ready: true,
      })
    }, 500);
  }

  toggleMenu(index){
    if(index === 2){
      this.setState({
        menuHidden: true,
      });
    } else {
      this.setState({
        menuHidden: !this.state.menuHidden,
      });
    }
  }

  scrollToTop() {
    this.setState({
      menuHidden: true,
    });
    scrollToTop();
  }

  render() {   
    
    const c = content.home || {};
        
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
      background: 'linear-gradient(180deg, rgba(255,255,255,1) 100%, rgba(255,255,255,0) 100%)',
      zIndex: 110,
    };
    const homeAndLogoCss = {
      display: 'block',
      alignSelf: 'center',
      width: '130px',
      marginLeft: '15px',
      cursor: 'pointer',
    };
    const navLinksCss = {
      display: 'flex',
      margin: 0,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100%',
      marginRight: '10px',
    };
    const dropDownAndTopCss = {
      flexDirection: 'column',
      color: headerFontColor,
      textDecoration: 'none',
      width: '30px',
      height: '45px',
      marginLeft: '10px',
      marginRight: '15px',
      textAlign: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      listStyle: 'none',
    }

    const iconLabelCss = {
      width: '100%',
      margin: 0,
      textAlign: 'center',
      fontSize: '10px',
      color: 'inherit',
    };

    return <nav className='nav-outer' style={navOuterCss}>
      {
        this.state.ready ?
        <DropDownMenu 
        hidden={this.state.menuHidden}
        toggleMenu={this.toggleMenu} /> : null 
      }

      <div className='nav-bar' style={navBarCss}>
        <div className={`${navLink} main home home`} style={homeAndLogoCss}>
          <Link prefetch={false} href={'/'}>
            <div role='link' className='logo' style={homeAndLogoCss}>
              <img 
                style={{width: '100%'}}
                src={c.headerLogo} 
                alt='urban meadow'
              />
            </div>
          </Link>
        </div>
        <ul role='nav' className='nav-links' style={navLinksCss}>
          <li className={`${navLink} main to-top top`}
            style={{...dropDownAndTopCss, width: '40px'}}
            onClick={()=>this.scrollToTop()}>
            <ArrUp style={{width:40, height:30}}/>
            <p className='icon-label'
              style={iconLabelCss}>
              Top
            </p>
          </li>
          <li className={`${navLink} main drop-down open`}
            style={dropDownAndTopCss}
            onClick={()=>this.toggleMenu()}>
            <BarsSolid style={{width: 30, height:30}}/>
            <p className='icon-label'
              style={iconLabelCss}>
                Menu
            </p>
          </li>

        </ul>
      </div>
  
      <style jsx>{`
        @media print {
          .nav-outer {
            display: none !important;
          }
        }
        .logo:hover {
          opacity: 0.9;
        }
        .top:hover,
        .drop-down:hover {
          color: ${headerFontColorHover};
        }
        @media (min-width: 1100px){
          .nav-bar {
            background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%) !important; 
          }
        }
      `}</style>
    </nav>
  }

  
}