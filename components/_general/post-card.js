import Link                from 'next/link';
import LazyLoad            from 'react-lazyload';
import { 
  card,
  accentFontColor, 
  fontReading, 
  globalHeaderColor,
  postTitleReadColor,
  cardHoverColor}          from '../../helpers/common-styles';
import { postLink }        from '../../helpers/browser/tag-manager';
import { calcCardsWide }   from '../../helpers/browser/read-window';
import { formatImageUrl }  from '../../helpers/html-cms/format-image-url';

export default function PostCard(props) {

  const c = props.content;
  const cardHeight    = 320;
  const imageWidth    = 216;
  const imageHeight   = imageWidth/1.91;

  // the following sizes are tested on the longest word we anticipate "Evapotranspiration?".
  const titleFontSize = 19;
  const titleLineHeightPx = 22;
  const titleLines  = 4;

  const cardsWide = calcCardsWide();

  const calcHasRead = c => {
    if(typeof window !== 'undefined' && window.localStorage && window.localStorage.userHistory){
      const key = c.slug ? `post_${c.slug}` : null ;
      if(key){
        const hasRead = window.localStorage[key];
        return hasRead;
      }
    } 
    return false;
  }

  const hasRead = calcHasRead(c);
  const hasReadClass = hasRead ? 'title-read' : '' ;

  const featured_image = formatImageUrl(c.featured_image, imageWidth);

  const header = <div className='header'>
    <div className='title-container'>
      <h4 className={`title ${hasReadClass}`}>
        {c.title}
      </h4>
    </div>

    <div className='image-container'>
      <LazyLoad offset={200} height={imageHeight}>
        <img className='image' 
          src={featured_image}
          alt={c.seo_title} />
      </LazyLoad>
    </div>
    <style jsx>{`
      .header {
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 75px);
        margin-bottom: 5px;
        flex-shrink: 0;
        background: inherit;
      }
      .title-container {
        overflow: hidden;
        margin-bottom: 7px;
        display: block;
        background: inherit;
        height: ${titleLines * titleLineHeightPx}px;
      }
      .title {
        display: block;
        ${fontReading}
        font-size: ${titleFontSize}px;
        width: 100%;
        overflow: hidden;
        position: relative; 
        line-height: ${titleLineHeightPx}px;
        max-height: ${titleLines * titleLineHeightPx}px; 
        text-align: center;  
        margin-right: -${titleFontSize}px;
        padding-right: ${titleFontSize}px;
        padding-left: ${titleFontSize}px;
        color: ${globalHeaderColor};
        background: inherit;
      }
      .title-read {
        color: ${postTitleReadColor};
        opacity: 0.8;
      }
      .title:before {
        content: '...';
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .title:after {
        content: '';
        position: absolute;
        right: 0;
        width: ${titleFontSize}px;
        height: ${titleFontSize}px;
        background: inherit;
      }
      .image-container {
        width: 100%;
        height: ${imageHeight}px;
        max-height: ${imageHeight}px;
        overflow: hidden;
        align-items: flex-end;
        flex: 1;
        background-color: #eee;
      }
      .image {
        width: 100%;
        height: ${imageHeight}px;
        object-fit: contain;
      }
    `}</style>
  </div>

  const win = typeof window !== 'undefined' ? window : {} ;
  const path = win.location && win.location.pathname ? win.location.pathname : '' ;
  const pathClass = path === '/' ? 'home' : path ? path : 'no-path';
  
  return <div className={`card ${postLink} ${pathClass} ${c.slug} card-${props.index}-${cardsWide}`}>
    { c.slug ?
      <Link prefetch={false} href={`/post/${c.slug}`}>
        <div className='card-clickable'>
          {header}
        </div>
      </Link> :
      <div className='card-clickable no-slug'>
        {header}
        <div className='icon-outer-wrapper'>
        </div>
      </div> 
    }
    <style jsx>{`
      .card {
        ${card}
        padding: 0;
        margin: 10px;
        height: ${cardHeight}px;
        width: ${0.7142 * cardHeight}px;
        flex-shrink: 0;
      }
      .card-clickable {
        border-radius: 5px;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 10px 5px;
        cursor: pointer;
        background: inherit;
      }
      .card-clickable:hover {
        background-color: ${cardHoverColor};
      }
      .icon-outer-wrapper {
        padding-left: 20px;
        padding-right: 20px;
      }
    `}</style>
    <style>{`
      .card-clickable:hover .title {
        color: ${accentFontColor};
      }
    `}</style>
  </div>

  }