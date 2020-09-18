import React                 from 'react';
import Link                  from 'next/link';
import LazyLoad              from 'react-lazyload';
import { 
    boxShadow, 
    accentFontColor, 
    cardHoverColor }         from '../../helpers/common-styles';
import content               from '../../helpers/content';

export default function LandingCards(props) {

  const home = content.home || {};

  const cards = Array.isArray(home.cards) ?
    home.cards : [];

  const cardContainerCss = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    width: '100%',
  };

  const imageWidth  = 284;
  const imageHeight   = imageWidth/1.91;
  const padding = 3;

  const individualCardCss = {
    padding,
    width: imageWidth + (padding*2), // padding * 2
    height: 270,
    margin: '20px 7px 20px 7px',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    cursor: 'pointer',
  };

  return <div style={cardContainerCss} 
    className="main-cards-container">
    { 
      cards.map((p,i) => {

        const thePage = content[p] || {};
        const meta = thePage.meta || {};

        return <Link key={i} 
          prefetch={false} 
          href={`/${meta.path}`}>
          <div key={i}
            style={individualCardCss} 
            className="individual-card">
            <h2 className='card-title'>
              {meta.specialCardTitle || meta.seoTitle}
            </h2>
            <div className='img-container'>
              <LazyLoad offset={200} height={imageHeight}>
                <img className='image' 
                  src={meta.image}
                  alt={meta.alt} />
              </LazyLoad>
            </div>
          </div>
        </Link>
      })
    }
    <style jsx>{`
      @keyframes up {
        from {margin-top: 20px;}
        to {margin-top: 15px;}
      }
      .card-title {
        color: #231f20;
        font-size: 20px;
        margin-bottom: 3px;
        height: 60px;
      }
      .individual-card {
        flex-direction: column;
        ${boxShadow};
        border-radius: 6px;
      }
      .individual-card:hover {
        background-color: ${cardHoverColor};
        animation-name: up;
        animation-duration: 0.5s;
        animation-fill-mode: forwards
      }
      .individual-card:hover .card-title {
        color: ${accentFontColor};
      }
      .img-container {
        width: ${imageWidth}px;
        height: ${imageHeight}px;
        max-height: ${imageHeight}px;
      }
      .image {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    `}</style>
  </div>
};