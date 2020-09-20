import { fontsToLoadArr }      from '../common-styles';

// privacy page and in footer. Note that this page is no-crawl
export const privacy = {
  meta: {
    path:        'resume',
    // limit title to 55 characters
    h1Tag:       'Brad Garner resume',
    seoTitle:       'Brad Garner resume',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Brad Garner resume',
    image:       'https://cdn.buttercms.com/Yjr3DEkLTy6E0QeAZqRq',
    alt:         'Brad Garner in green roof research laboratory in front of outdoor monitoring platforms',
    hrefLang:    'en',
  },
  
  fontsToLoadArr: fontsToLoadArr.slice(0,3),
};