import React              from 'react';
import LazyLoad           from 'react-lazyload';
import {
  calcMinimumWindowDimensions, smoothScroll
}                         from 'browser-helpers';
import content            from '../../helpers/content';
import { 
  bgBlue0,
  bgBlue5, 
  boxShadow }             from '../../helpers/common-styles';
import FakeNavBar         from '../_general/fake-nav-bar';
import { createElements } from '../../helpers/html-cms/format-html';
import SocialFollow       from '../social/follow';
import { socialHandles }  from '../../helpers/content/social-handles';

const landingIdPrefix = 'landing-element-';

export default class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndices: {},
    };
  }

  selectActiveIndex(i, cssWidthOuter){
    if(cssWidthOuter > 500){
      this.setState({
        activeIndices: {
          [i]: true,
        }
      });
      smoothScroll.scrollTo(`${landingIdPrefix}${i}`);
      setTimeout(()=>{
        smoothScroll.scrollTo(`${landingIdPrefix}${i}`);
      }, 1000);
    } else {
      const activeIndices = {...this.state.activeIndices};
      activeIndices[`${i}`] = !activeIndices[`${i}`];
      this.setState({activeIndices});
    }
  }

  render(){

    const win = typeof window !== 'undefined' ? window : {};
    const {
      cssWidthOuter
    } = calcMinimumWindowDimensions(win);

    const _c = content || {};

    const landingCss = {
      display: 'flex',
      width: '100%',
      marginTop: '80px',
      alignItems: 'center',
      flexDirection: 'column',
    };

    const home = _c.home || {};

    const elements = Array.isArray(home.elements) ?
      home.elements : [];

    const elementContainerCss = {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      overflow: 'hidden',
    };

    const imageWidth  = 350;
    const imageHeight   = imageWidth/1.91;

    const elementTextContainerCss = {
      position: 'relative',
      flex: 1,
      marginLeft: 25,
    };

    const h2Css = {
      fontSize: 18,
      fontStyle: 'italic',
      opacity: 0.8,
    };

    return <header className='landing'
      style={landingCss}>

      {
        cssWidthOuter <= 500 ?
        <h2 className='h2' style={h2Css}>
          Researcher
        </h2> : null 
      }
      {
        cssWidthOuter <= 500 ?
        <h2 className='h2' style={h2Css}>
          Environmentalist
        </h2> : null 
      }
      {
        cssWidthOuter <= 500 ?
        <h2 className='h2' style={h2Css}>
          Programmer
        </h2> : null 
      }

      <div style={elementContainerCss} 
        className="main-elements-container">
        { 
          elements.map((c,i) => {

            const isActive = this.state.activeIndices[`${i}`];

            const activeContainerClass = isActive ? 
              'container-div-active' : 
              'container-div-inactive';

            const imageContainerClass = isActive ?
              'image-container-active' :
              'image-container-inactive';

            const titleClass = isActive ?
              'element-title-active' :
              'element-title-inactive';

            const shortClass = isActive ?
              'short-text-active' :
              'short-text-inactive';

            const longClass = isActive ?
              'long-text-active' :
              'long-text-inactive';

            const socialContainerClass = isActive ?
              'social-container-active' :
              'social-container-inactive';


            return <div key={i} 
              id={`${landingIdPrefix}${i}`}
              onClick={()=>this.selectActiveIndex(i, cssWidthOuter)}
              className={`container-div ${activeContainerClass}`}>
              <div className={`image-container ${imageContainerClass}`} >
                <LazyLoad offset={200} height={imageHeight}>
                  {
                    c.url ? <a href={c.url}
                      title={c.urlTitle}
                      target='_blank'>
                       <img className='image' 
                        src={c.src}
                        alt={c.alt} />
                    </a> :
                    <img className='image' 
                      src={c.src}
                      alt={c.alt} />
                  }
                </LazyLoad>
                <h2 className={`element-title ${titleClass}`}>
                  {c.title}
                </h2>
                {
                  c.handle ? <div 
                   className={`social-container ${socialContainerClass}`}>
                  <SocialFollow 
                    socialHandles={socialHandles[c.handle]}/>
                  </div> : null 
                }
                
              </div>
              <div className='element-text-container'
                style={elementTextContainerCss}>
                <h3 className={`short-text ${shortClass}`} >
                  {c.shortText}
                </h3>
                <div className={`long-text ${longClass}`} >
                  {
                    createElements(c.elements)
                  }
                </div>
              </div>
            </div>
          })
        }

      </div>

      <FakeNavBar/>

      <style jsx>{`
        .container-div {
          display: flex;
          padding: 20px;
          width: 100%;
          cursor: pointer;
          flex-direction: column;
          transition: all 2s;
          transition: padding 0s;
        }
        .container-div-active {
          margin-top: 40px;
          padding-top: 120px;
          margin-bottom: 40px;
          height: auto;
          overflow: visible;
          ${boxShadow}
          background-color: ${bgBlue0};
          border-top: 1px solid #ccc;
        }
        .container-div-inactive {
          margin-top: 20px;
          padding-top: 20px;
          margin-bottom: 25px;
          height: auto;
          overflow: hidden;
          border: 1px solid white;
        }
        @media (min-width: 500px){
          .container-div {
            flex-direction: row !important;
          }
        }
        .image-container {
          flex-direction: column;
          width: ${imageWidth}px;
        }
        .image {
          width: ${imageWidth}px;
          object-fit: contain;
        }
        .element-title {
          color: #231f20;
          margin-bottom: 15px;
          width: ${imageWidth}px;
          transition: all 1.2s;
        }
        .element-title-active {
          font-size: 28px;
          font-weight: bold;
          margin-left: 50px;
        }
        .element-title-inactive {
          font-size: 20px;
          font-weight: initial;
          margin-left: 0;
        }
        .short-text-active {
          position: absolute;
          top: -150vh;
          left: -200vw;
          font-size: 100;
          opacity: 0;
          margin: 0;
          letter-spacing: 1em;
        }
        .short-text-inactive {
          font-size: 24;
          color: ${bgBlue5};
          position: ${cssWidthOuter > 500 ? 'absolute' : 'relative'};
          opacity: 1;
          top: 0;
          left: 0;
          margin: 0;
          letter-spacing: initial;
        }
        .long-text {
          flex-direction: column;
        }
        .long-text-p {
          margin-bottom: 8px;
        }
        .long-text-active {
          position: relative;
          top: 0;
          left: 0;
          margin-left: 40px;
          opacity: 1;
          font-size: 16;
          width: 100%;
        }
        .long-text-inactive {
          opacity: 0;
          position: absolute;
          top: 150vh;
          left: 200vw;
          width: 100%;
          font-size: 1;
        }
        @media (min-width: 500px){
          .short-text {
            margin-left: 40px;
          }
        }

        .short-text {
          transition: all 1.2s;
        }
        .long-text {
          transition: all 800ms;
        }
        .container-div:hover {
          background-color: #dff4f1;
        }

        .social-container {
          width: 100%;
          transition: all 3s;
        }
        .social-container-active {
          opacity: 1;
        }
        .social-container-inactive {
          opacity: 0;
        }
      `}</style>
    </header>
  }
}