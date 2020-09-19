import content             from '../../helpers/content';
import { createElements }  from '../../helpers/html-cms/format-html';
import { pageMainInner }   from '../../helpers/common-styles';
import Landing             from './landing';

export default function HomeMain(props) {

  const c    = content || {} ;
  const home = c.home  || {};

  return <div className='home'
    style={{
      display:'flex',
      flexDirection:'column',
      width:'100%',
      alignItems:'center',
    }}>

    <Landing/>

    <div className='home-elements'>
      {createElements(home.elements)}
    </div>
    
    <style jsx>{`
      .home-elements {
        ${pageMainInner}
        min-height: auto;
      }
      .text-above-blog {
        margin-top: 45px;
      }
      @media (min-width: 800px){
        .profile-image-container {
          padding: 0 !important;
        }
      }
    `}</style>
  </div>
    
};