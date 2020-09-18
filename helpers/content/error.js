import { thisUrl }        from './_general';

// privacy page and in footer. Note that this page is no-crawl
export const error = {
  meta: {
    // limit title to 55 characters
    seoTitle:       'Oops!',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Urban Meadow is...',
    url:         `${thisUrl}`,
    image:       'https://cdn.buttercms.com/jDSvlqmTsC1gQMDDSefQ',
    alt:         'man collapsed next to lawn mower',
    hrefLang:    'en',
  },
  '404': 'Sorry, but we didn\'t find that page.',
  error: 'Sorry, but there was a problem loading this page.',
};