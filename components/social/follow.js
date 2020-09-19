import content from '../../helpers/content';

import {
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from 'react-share';
import {
  YoutubeIcon } from './custom';
import { 
  followLinkedin, 
  followPinterest, 
  followTwitter, 
  followYoutube, 
} from '../../helpers/browser/tag-manager';

export default function SocialFollow(props) {

  const size  = 40;
  const round = true;
  const socialHandles = content.socialHandles || {};

const platforms = [
  { 
    icon: <LinkedinIcon size={size} round={round}/>,
    name: 'linkedin',
    className: followLinkedin,
  },
  { 
    icon: <PinterestIcon size={size} round={round}/>,
    name: 'pinterest',
    className: followPinterest,
  },
  { 
    icon: <TwitterIcon size={size} round={round}/>,
    name: 'twitter',
    className: followTwitter,   
  },
  { 
    icon: <YoutubeIcon style={{height: size, width: size}}/>,
    name: 'youtube',
    className: followYoutube,   
  },
];

  const buttons = platforms.map((p,i)=>{
    const url = socialHandles[p.name] ? socialHandles[p.name].url : '' ;
    if(!url) return null;
    return <div key={i} 
      className={`social-icon-wrapper social-button ${p.className}`}
      style={{height: size, flexGrow: 0}}>
      <a href={url} target='_blank' >
        {p.icon}
      </a>
      <style jsx>{`
        .social-button {
          margin: 0 10px 10px 10px;
        }
        .social-button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  })

  return <div className='follow'>
    {buttons}
    <style jsx>{`
      .follow {
        ${props.followStyle}
        padding: 2%; 
      }

      @media (min-width: 500px) {
        .follow {
          ${props.followStyleWide}
        }
      }
    `}</style>
  </div>
};