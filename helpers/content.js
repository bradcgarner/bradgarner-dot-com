import {
  xyz as _xyz, thisUrl}      from './content/_general';
export const xyz = _xyz;
import { home }              from './content/_home';

import { error }             from './content/error';
import { footer }            from './content/footer';
import { privacy }           from './content/privacy';
import { socialHandles }     from './content/social-handles';

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
  error,
  footer,
  privacy,
  socialHandles,
};


for(let page in allTheContent){
  if(allTheContent[page].meta){
    if(allTheContent[page].meta.path){
      allTheContent[page].meta.url = `${thisUrl}/${allTheContent[page].meta.path}`;
    }
  }
}

export default allTheContent;