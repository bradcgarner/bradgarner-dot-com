import Link                from 'next/link';
import { 
  uMGreen, 
  cardShadowColorRGB, 
  uMGreenDarker, 
  uMGreenSlightlyLighter, 
  uMGreenLighter,
  white}  from "../../helpers/common-styles";
import {ChevronDoubleUp} from 'something-rather-iconic';
import content             from '../../helpers/content';


export default function DropDownMenu(props) {

  const top = props.hidden ? `
    top: -800px;
  `: `
    top: 0;
  `;

  const menuContents = <div role='nav' className='menu-contents'>
    
    <div className='menu-group'>
      <div className='button t l b r tl tr bl br full bold' onClick={()=>props.toggleMenu()}>
        <Link prefetch={false} href='/'>
          <a role='link' className='link'>Home</a> 
        </Link>
      </div>
    </div>

    <div className='menu-group'>
      <div className='header full bold' onClick={()=>props.toggleMenu()}>
        <h3 className='h3'>Learn</h3> 
      </div>
      <div className='button t l r tl tr full' onClick={()=>props.toggleMenu()}>
        <Link prefetch={false} href={`/${content.whatIs.meta.path}`}>
          <a role='link' className='link'>What Is An Urban Meadow?</a> 
        </Link>
      </div>
      <div className='button t l b r half' onClick={()=>props.toggleMenu()}>
        <Link prefetch={false} href={`/${content.about.meta.path}`}>
          <a role='link' className='link'>About</a> 
        </Link>
      </div>
      <div className='button t b r half' onClick={()=>props.toggleMenu()}>
        <Link prefetch={false} href={`/${content.importance.meta.path}`}>
          <a role='link' className='link'>Importance</a> 
        </Link>
      </div>
      <div className='button b l r half bl' onClick={()=>props.toggleMenu()}>
        <Link prefetch={false} href={`/${content.faq.meta.path}`}>
          <a role='link' className='link'>FAQ</a> 
        </Link>
      </div>
      <div className='button b r half br' onClick={()=>props.toggleMenu()}>
        <Link prefetch={false} href={`/${content.blog.meta.path}`}>
          <a role='link' className='link'>Blog</a> 
        </Link>
      </div>
    </div>

    <div className='menu-group'> 
      <div className='header full bold' onClick={()=>props.toggleMenu()}>
        <h3 className='h3'>Do</h3> 
      </div>
      <div className='button t l b r tl half' onClick={()=>props.toggleMenu()}>
        <Link prefetch={false} href={`/${content.plant.meta.path}`}>
          <a role='link' className='link'>Plant</a> 
        </Link>
      </div>
      <div className='button t b r tr half' onClick={()=>props.toggleMenu()}>
        <Link prefetch={false} href={`/${content.grow.meta.path}`}>
          <a role='link' className='link'>Grow</a> 
        </Link>
      </div>
      <div className='button b l r half' onClick={()=>props.toggleMenu()}>
        <Link prefetch={false} href={`/${content.resources.meta.path}`}>
          <a role='link' className='link'>Resources</a> 
        </Link>
      </div>
      <div className='button b r half' onClick={()=>props.toggleMenu()}>
        <Link prefetch={false} href={`/${content.consultants.meta.path}`}>
          <a role='link' className='link'>Consultants</a> 
        </Link>
      </div>
      <div className='button t b l r bl br full' onClick={()=>props.toggleMenu()}>
        <Link prefetch={false} href={`/${content.gallery.meta.path}`}>
          <a role='link' className='link'>Gallery of Urban Meadows</a> 
        </Link>
      </div>
    </div>

    <div className='menu-group'> 
      <div className='button t b l r tl tr bl br full' onClick={()=>props.toggleMenu()}>
        <Link prefetch={false} href={`/${content.contact.meta.path}`}>
          <a role='link' className='link'>Contact Us</a> 
        </Link>
      </div>
    </div>

    <div className='close-button'
      onClick={()=>props.toggleMenu()}>
      <ChevronDoubleUp style={{height:25, width:25}}/>
    </div>

    <style jsx>{`
      .menu-contents {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding-top: 80px; /* to clear bar */
        padding-bottom: 20px;
      }
      .nav-link {
        display: flex;
        align-items: center;
      }
      .menu-group {
        flex-wrap: wrap;
        width: 90%;
        justify-content: space-between;
        margin-bottom: 15px;
      }
      .header,
      .button {
        display: flex;
        align-items: center;
        min-height: 40px;
        align-items: center;
        justify-content: center;
      }
      .button {
        background-color: ${uMGreenSlightlyLighter};
        cursor: pointer;
      }
      .b {
        border-bottom: 1px solid rgba(204, 204, 204, 0.4);
      }
      .r {
        border-right: 1px solid rgba(204, 204, 204, 0.4);
      }
      .l {
        border-left: 1px solid rgba(204, 204, 204, 0.4);
      }
      .t {
        border-top: 1px solid rgba(204, 204, 204, 0.4);
      }
      .tl {
        border-top-left-radius: 10px;
      }
      .tr {
        border-top-right-radius: 10px;
      }
      .bl {
        border-bottom-left-radius: 10px;
      }
      .br {
        border-bottom-right-radius: 10px;
      }
      .half {
        width: 50%;
      }
      .full {
        width: 100%;
      }
      .bold,
      .h3 {
        color: ${uMGreenDarker};
        font-size: 24px;
        font-weight: bold;
      }
      .button:hover {
        background-color: ${uMGreenDarker};
      }
      .link {
        color: ${white};
        text-decoration: none;
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .close-button {
        color: ${uMGreenLighter};
        cursor: pointer;
        width: 30px;
        align-items: center;
        justify-content: center;
      }
      .close-button:hover {
        opacity: 0.8;
      }
    `}</style>
  </div>

  return <div className='menu'
    style={{
      width: '50%',
      minWidth: 240,
      maxWidth: 320,
      backgroundColor: white,
      position: 'absolute',
      top: props.hidden ? -800 : 0,
      right: 0,
      zIndex: -1,
      transition: 'top 1s',
      WebkitTransition: 'top 1s',
      flexDirection: 'column',
      borderRadius: 10,
      borderLeft: `1.25px solid ${uMGreen}`,
      borderBottom: `1.25px solid ${uMGreen}`,
      boxShadow: `rgba(${cardShadowColorRGB}, 0.5) 5px 5px 10px 0px`,
    }}>
      {menuContents}
    <style jsx>{`
      .menu {
        width: 50%;
        min-width: 240px;
        max-width: 320px;
        background-color: ${uMGreen};
        position: absolute;
        ${top}
        right: 0;
        z-index: -1;
        transition: top 1s;
        -webkit-transition: top 1s;
        flex-direction: column;
        border-radius: 10px;
        border-left: 1px solid white;
        box-shadow: rgba(${cardShadowColorRGB}, 0.5) 5px 5px 10px 0px;
     }
      @media print {
        .menu {
          display: none !important;
        }
      }
    `}</style>
  </div>
}