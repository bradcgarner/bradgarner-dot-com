import { isObjectLiteral }      from 'conjunction-junction';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import { 
  shareFacebook, 
  shareLinkedin, 
  sharePinterest, 
  shareReddit, 
  shareTumblr, 
  shareTwitter, 
  shareWhatsapp, 
  shareEmail, 
  scrollPostBottom } from '../../helpers/browser/tag-manager';
import { accentFontColor, sideBarBottomBarBreakpoint } from '../../helpers/common-styles';

export default function SocialShare(props) {

  const size  = 40;
  const round = true;
  const meta  = props.meta || {} ;
  const url   = meta.url;
  const post  = isObjectLiteral(props.post) ?
    props.post : { featured_image: meta.image } ;

  const e = <EmailShareButton url={url}>
    <EmailIcon size={size} round={round}/>
  </EmailShareButton>

  const fb = <FacebookShareButton url={url}>
    <FacebookIcon size={size} round={round}/>
  </FacebookShareButton>

  const li = <LinkedinShareButton url={url}>
    <LinkedinIcon size={size} round={round}/>
  </LinkedinShareButton>

  const pi = <PinterestShareButton url={url}
    media={post.featured_image}>
    <PinterestIcon size={size} round={round}/>
  </PinterestShareButton>

  const re = <RedditShareButton url={url}>
    <RedditIcon size={size} round={round}/>
  </RedditShareButton>

  const tu = <TumblrShareButton url={url}>
    <TumblrIcon size={size} round={round}/>
  </TumblrShareButton>

  const tw = <TwitterShareButton url={url}>
    <TwitterIcon size={size} round={round}/>
  </TwitterShareButton>

  const wa = <WhatsappShareButton url={url}>
    <WhatsappIcon size={size} round={round}/>
  </WhatsappShareButton>

// classNames below must come from and match tag-manager.js
  const platforms = [
    { platform: fb, className: shareFacebook  },
    { platform: li, className: shareLinkedin  },
    { platform: pi, className: sharePinterest },
    { platform: re, className: shareReddit    },
    { platform: tu, className: shareTumblr    },
    { platform: tw, className: shareTwitter   },
    { platform: wa, className: shareWhatsapp  },
    { platform: e , className: shareEmail     },
  ]

  const buttons = platforms.map((p,i)=>{
    return <div key={i} 
      className={`social-icon-wrapper ${p.className} ${post.slug} true`}>
      {p.platform}
      <style jsx>{`
        .social-icon-wrapper {
          width: 60px;
          margin-top: 20px;
          margin-bottom: 20px;
          cursor: pointer;
        }
        .social-icon-wrapper:hover {
          opacity: 0.9;
        }
        @media(min-width: ${sideBarBottomBarBreakpoint}){
          .social-icon-wrapper {
            width: auto;
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  })

  return <div className='sharing' id={scrollPostBottom}>
    <h5 className='header'>
      Did you like this article? Give it a share!
    </h5>
    <div className='button-container'>
      {buttons}
    </div>
    <style jsx>{`
      .sharing {
        flex-direction: column;
        margin: 50px 0;
        width: 100%;
        max-width: 800px;
      }
      .header {
        margin-bottom: 15px;
        color: ${accentFontColor};
      }
      .button-container {
        align-items: center;
        justify-content: space-around;
        flex: 1;
        width: 100%;
        min-width: 200px;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
};