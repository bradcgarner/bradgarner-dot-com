import LazyLoad          from 'react-lazyload';

export default function VideoPlaceholderContainer(props){

  return <div className='video-container'>
    <div className='resp-container' >
      <LazyLoad height={'100%'} offset={100}>
        <img className='iframe'
          src={props.url}
          alt={props.alt}/>
      </LazyLoad>
    </div>
    <h3 className='title'>
      {props.title}
    </h3>
    <p className='caption'>
      {props.caption}
    </p>
    <style jsx>{`
      .container {
        margin-top: 100px;
        width: 100%;
        max-width: 1100px;
        flex-direction: column;
      }
      .video-container {
        flex-direction: column;
        margin-bottom: 50px;
      }
      .resp-container {
        position: relative;
        overflow: hidden;
        padding-top: 56.25%; 
        max-height: 56vw;
        margin-bottom: 15px;
        width: 100%;
        background-color: #eee;
      }
      .iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
      .title {
        font-size: 30px;
        margin-bottom: 5px;
      }
      .caption {
        font-size: 14px;
        line-height: 18px;
      }
    `}</style>
  </div>
}