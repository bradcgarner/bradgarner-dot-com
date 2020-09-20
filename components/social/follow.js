import {
  Npm, Github
} from 'something-rather-iconic';
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from 'react-share';
import { InstagramIcon,
  YoutubeIcon, 
  SoundCloudIcon } from './custom';
import { 
  followFacebook, 
  followInstagram,
  followLinkedin, 
  followPinterest, 
  followSoundcloud, 
  followTwitter, 
  followYoutube, 
  followGithub,
  followNpm,
} from '../../helpers/browser/tag-manager';
import { followStyle } from '../../helpers/common-styles';

export default function SocialFollow(props) {

  const size  = 40;
  const round = true;
  const socialHandles = props.socialHandles || {};

const platforms = [
  { 
    icon: <FacebookIcon size={size} round={round}/>,
    name: 'facebook',
    className: followFacebook, 
  },
  { 
    icon: <InstagramIcon style={{height: size, width: size}}/>,
    name: 'instagram',
    className: followInstagram,  
  },
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
    icon: <SoundCloudIcon style={{height: size, width: size}}/>,
    name: 'soundcloud',
    className: followSoundcloud,
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
  {
    icon: <Npm style={{height: size, width: size, fill: 'red'}} />,
    name: 'npm',
    className: followNpm,
  },
  {
    icon: <Github style={{height: size, width: size}} />,
    name: 'github',
    className: followGithub,
  },
];

  const buttons = platforms.map((p,i)=>{
    const handle = socialHandles[p.name] || {};
    const url = handle.url || '' ;
    if(!url) return null;
    return <div key={i} 
      className={`social-icon-wrapper social-button ${p.className}`}
      style={{height: size, flexGrow: 0}}>
      <a href={url} target='_blank' style={p.name && props[p.name] ? {color: props[p.name]} : {}}
        title={handle.title}>
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
  });

  if(socialHandles.main){
    buttons.unshift(<div key='main' 
      className='social-icon-wrapper social-button main'
      style={{height: size, flexGrow: 0}}>
      <a href={socialHandles.main.url} target='_blank' 
        title={socialHandles.main.title}>
        <img style={{height: size, width: size}}
          src={socialHandles.main.src} 
          alt={socialHandles.main.alt} />
      </a>
      <style jsx>{`
        .social-button {
          margin: 0 10px 10px 10px;
        }
        .social-button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>)
  }

  return <div className='follow'>
    {buttons}
    <style jsx>{`
      .follow {
        ${props.followStyle || followStyle}
      }

      @media (min-width: 630px) {
        .follow {
          ${props.followStyleWide || followStyle}
        }
      }
    `}</style>
  </div>
};