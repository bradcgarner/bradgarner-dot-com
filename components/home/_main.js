import LazyLoad            from 'react-lazyload';
import content             from '../../helpers/content';
import Landing             from './landing';
import PostsList           from './posts-list';
import { createElements }  from '../../helpers/html-cms/format-html';
import { pageMainInner } from '../../helpers/common-styles';

export default function HomeMain(props) {

  const c = content || {} ;

  const b       = c.blog || {} ;
  const blogDiv = b.meta || {} ;
  const home    = c.home || {};

  return <div className='home'
    style={{
      display:'flex',
      flexDirection:'column',
      width:'100%',
      alignItems:'center',
    }}>

    <Landing/>

    <div className='text-above-blog'>
      {createElements(home.textAboveCards)}
    </div>

    <div id={blogDiv.path} >
      <LazyLoad height='70vh'>
        <PostsList />
      </LazyLoad>
    </div>

    <div className='text-below-blog'>
      {createElements(home.textBelowCards)}
    </div>
    
    <style jsx>{`
      .text-above-blog,
      .text-below-blog {
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