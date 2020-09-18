import { isObjectLiteral } from 'conjunction-junction';
import content             from './content';
import sitemapDynamicObj   from './sitemap/sitemap-dynamic-object.json';

const thisUrl = process.env.THIS_URL;

export const getMeta = (path, post) => {

  // shortcut for static pages
  if(sitemapDynamicObj[path] && sitemapDynamicObj[path].meta){
    return sitemapDynamicObj[path].meta;
  }

  // below is a fallback in case the sitemap generator
  // has not run yet (like if a new post goes live before server reset)

  const h = isObjectLiteral(content.home) ? content.home : {} ;
  const metaDef  = isObjectLiteral(h.meta) ? h.meta : {} ;
  const thisPage = isObjectLiteral(content[path]) ? content[path] : {} ;
  const metaThis = isObjectLiteral(thisPage.meta) ? thisPage.meta : {} ;

  const metaPost = 
    post && post.slug && sitemapDynamicObj[post.slug] && 
    isObjectLiteral(sitemapDynamicObj[post.slug].meta) ?
    sitemapDynamicObj[post.slug].meta :
    isObjectLiteral(post) ? {
      seoTitle:      post.seo_title,
      h1Tag:         post.title,
      url:           `${thisUrl}/post/${post.slug}`,
      description:   post.meta_description,
      image:         post.featured_image,
      alt:           post.slug,
    } : {} ;
  
  const meta = {
    ...metaDef, 
    ...metaThis, 
    ...metaPost, 
  };
  return meta;
};