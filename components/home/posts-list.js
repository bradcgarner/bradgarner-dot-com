import { detect }          from 'detect-browser';
import { isObjectLiteral } from 'conjunction-junction';
import Link                from 'next/link';
import fetch               from 'isomorphic-unfetch';
import content             from '../../helpers/content';
import { 
  linkStatic, 
  carouselNav, 
  fireGtmHover }           from '../../helpers/browser/tag-manager';
import { 
  section, 
  accentFontColor, 
  sectionHeaderCSS, 
  sectionOver900,
  accentFontColorHover,
  uMGreenLighter,
  uMGreenDarker }          from '../../helpers/common-styles';
import PostCard            from '../_general/post-card';
import { 
  CaretRight, 
  CaretLeft }              from 'something-rather-iconic';
import { formatButterUrl } from '../../helpers/html-cms/fetch-butter';
  
export default class BlogList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: this.props.posts,
      os: detect().os,
      isMobile: true,
    };
  }
  componentDidMount(){
    const mobile = {
      'iOS': true,
      'Android OS': true,
      'BlackBerry OS': true,
      'Windows Mobile': true,
      'Amazon OS': true,
    };
    const isMobile = mobile[this.state.os];
    this.setState({isMobile});

    const url = formatButterUrl({})
    return fetch(url)
      .then(res=>{
        return res.json();
      })
      .then(fetched=>{
        this.setState({posts: fetched.data});
      })
      .catch(err=>{
        console.error(err);
      })
  }

  render() {

    const d    = isObjectLiteral(content.blog) ? content.blog : {} ;
    const blogDiv = isObjectLiteral(d.meta) ? d.meta : {} ;

    const postCards = 
      Array.isArray(this.state.posts) ? 
      this.state.posts.map((c,i)=>{
        return <PostCard key={i} index={i + 1} content={c}/>
      }) : [] ;

    const blog = isObjectLiteral(content.blog) ? content.blog : {} ;
  
    const arrowCss = `
      position: absolute;
      top: 0;
      height: 100%;
      width: 50px;
      z-index: 99;
      color: ${uMGreenLighter};
      justify-content: center;
      align-items: center;
      cursor: pointer;
    `;
    
    const arrLeft =  this.state.isMobile ? null :
      <div className={`arrow arrow-left ${carouselNav} blog-list left true`}
        onClick={()=>scrollCardHolder(-200)}>
        <CaretLeft style={{height: 100, width: 45}}/>  
        <style jsx>{`
          .arrow {
            ${arrowCss}
          }
          .arrow:hover {
            color: ${uMGreenDarker}
          }
          .arrow-left {
            left: 20px;
          }
        `}</style>
      </div> ;

    const arrRight = this.state.isMobile ? null :
      <div className={`arrow arrow-right ${carouselNav} blog-list right true`}
        onClick={()=>scrollCardHolder( 200)}>
        <CaretRight style={{height: 100, width: 45}}/> 
        <style jsx>{`
          .arrow {
            ${arrowCss}
          }
          .arrow:hover {
            color: ${uMGreenDarker}
          }
          .arrow-right {
            right: 20px;
          }
        `}</style>
      </div> ;

    const scrollCardHolder = x => {
      document.getElementById('card-holder').scrollBy(x, 0);
    };

    return <section className='section'
      onMouseEnter={()=>fireGtmHover(blogDiv.id)}>
      <h2 className='header'>{blogDiv.h1Tag}</h2>
      <div className='cards' id='card-holder'
        onScroll={()=>fireGtmHover(blogDiv.id, 'scroll')}>
        {postCards}
        {arrLeft}
        {arrRight}
      </div>
      <Link prefetch={false} href='/blog'>
        <p className={`link-to-menu ${linkStatic} home blog fixed`}>
          {blog.linkToMenu}
        </p>
      </Link>

      <style jsx>{`
        .section {
          ${section}
          flex-direction: column;
          position: relative;
          margin-bottom: 25px;
        }
        .header {
          ${sectionHeaderCSS}
        }
        @media (min-width: 900px){
          .section {
            ${sectionOver900}
          }
        }
        .cards {
          min-height: 330px;
          margin-bottom: 25px;
          overflow-x: scroll;
        }
        .link-to-menu {
          text-align: center;
          font-style: italic;
          font-weight: bold;
          cursor: pointer;
          color: ${uMGreenLighter};
          font-size: 22px;
        }
        .link-to-menu:hover {
          color: ${uMGreenDarker}
        }
      `}</style>
    </section>;
  }
}