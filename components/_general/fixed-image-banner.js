import React          from 'react';
import { detect }     from 'detect-browser';
import LazyLoad       from 'react-lazyload';
import { 
  isPrimitiveNumber } from 'conjunction-junction';

export default function FixedImageBanner(props) {

  const os = detect().os;

  const win = typeof window !== 'undefined' ? window : {};
  const width = win.innerWidth;

  if(!width || width < 700){
    if(React.isValidElement(props.narrowScreenFallback)){
      return props.narrowScreenFallback;
    }
    return null;
  }
  if(os === 'iOS'){
    return null;
  }

  const height = isPrimitiveNumber(props.height) ? `${props.height}px` :
    typeof props.height === 'string' ? props.height :
    '200px' ;

  return <LazyLoad height={height}>
    <div className='fixed-image'>
      <style jsx>{`
        .fixed-image {
          display: none; /* hide as default */
          background-image: url(${props.url});
          background-size: cover;
          background-attachment: fixed;
          width: 100vw;
          height: ${height};
          margin-top: 40px;
          position: relative;
        }
        @media(min-width: 500px){
          .fixed-image {
            display: block; /* show on wide screens */
          }
        }
        @media(max-height: 500px){
          .fixed-image {
            display: none; /* unless wide screens are phone landscape */
          }
        }
      `}</style>
    </div>
  </LazyLoad>

}