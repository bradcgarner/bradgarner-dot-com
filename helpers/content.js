import {
  xyz as _xyz, thisUrl}               from './content/_general';
export const xyz = _xyz;
import { home }              from './content/_home';

import { about }             from './content/about';
import { blog }              from './content/blog';
import { consultants }       from './content/consultants';
import { contact }           from './content/contact';
import { dedication }        from './content/dedication';
import { editContent }       from './content/edit-content';
import { error }             from './content/error';
import { faq }               from './content/faq';
import { footer }            from './content/footer';
import { gallery }           from './content/gallery';
import { grow }              from './content/grow';
import { importance }        from './content/importance'
import { plant }             from './content/plant';
import { post }              from './content/post';
import { privacy }           from './content/privacy';
import { resources }         from './content/resources';
import { sitemap }           from './content/sitemap';
import { socialHandles }     from './content/social-handles';
import { whatIs }            from './content/what-is';

import {   
  allCategoriesObject,
  allTagsObject }            from './content/cats-and-tags';
import sitemapDynamicObj     from './sitemap/sitemap-dynamic-object';

/*
 * This file - with few, small exceptions - includes ALL "static" content for the Urban Meadow site, i.e. all content that is not a blog post or image or file.
 * Blog posts and images are in the CMS.
 * Files (such as Word documents for spec downloads), are saved at ____ (currently TBD).
 * When editing this file MAINTAIN FILE STRUCTURE!!!
 * The site is hard-coded to read the structure of this file, structure mostly being object structure (data types, what is an object, what are object keys, etc)
 * Arrays may change length. Array length is not object structure.  E.g. if there are 2 lines of text in an array, and we want 5 lines, change to 5 lines; this does not affect "structure".
 * ALL OTHER COMMENTS ARE IN-LINE
 */

const allTheContent = {

  ...sitemapDynamicObj, // this lists ALL blog posts

  _blank: {
    header: 'THIS IS A BLANK PAGE!!!',
    text: '...better start writing!',
  },

  home,

  about,
  blog,
  consultants,
  contact,
  dedication,
  editContent,
  error,
  faq,
  footer,
  gallery,
  grow,
  importance,
  plant,
  post,
  privacy,
  resources,
  sitemap,
  socialHandles,
  whatIs,

  allCategoriesObject,
  allTagsObject,
  };


for(let page in allTheContent){
  if(allTheContent[page].meta){
    if(allTheContent[page].meta.path){
      allTheContent[page].meta.url = `${thisUrl}/${allTheContent[page].meta.path}`;
    }
  }
}

export default allTheContent;