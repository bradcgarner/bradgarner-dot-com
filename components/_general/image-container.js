import LazyLoad      from 'react-lazyload';
import { mediumGray } from '../../helpers/common-styles';

export default function ImageContainer(props){

  const containerStyle = typeof props.containerStyle === 'string' ?
    props.containerStyle : '' ;
  const imageStyle = typeof props.imageStyle === 'string' ?
    props.imageStyle : '' ;

  return <figure className='image-container'>
    <LazyLoad height='100%' offset={100}>
      <img className='image'
        src={props.src}
        alt={props.alt} />
      </LazyLoad>
    <figcaption className='caption'>
      {props.caption}
    </figcaption>
    <style jsx>{`
      .image-container {
        width: 100%;
        flex-direction: column;
        align-items: center;
        ${containerStyle}
      }
      .image {
        object-fit: contain;
        width: 100%;
        ${imageStyle}
      }
    `}</style>
  </figure>
}