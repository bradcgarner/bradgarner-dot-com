import { 
  fontsToLoadArr } from '../common-styles';
import { thisUrl } from './_general';

export const home = {

  // meta tags go in the header, which creates previews in search engines, sharing, etc.
  // post meta tags are per post, using Butter CMS
  meta: {
    // start tags that apply to all pages
    siteName:    'Urban Meadow',
    twitterCard: 'summary_large_image',
    twitterSite: process.env.REACT_APP_TWITTER_ID, // get this from Twitter
    type:        'website',
    seoTitle:    'Urban Meadow',
    siteTitle:   'Urban Meadow', // this is the <title> meta tag
    hrefLang:    'en',
    // end tags that apply to all pages

    // start tags that apply ONLY to the home page (blog posts read these tags from the CMS) (pages missing tags will use the home page tags as default)
    h1Tag:       'Urban Meadow',
    specialCardTitle: 'Urban Meadow Home',
    // limit description to 120-140 characters
      //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Urban meadows are beautiful, low-impact, high-benefit, self-sustaining plant communities.  This site aims to democratize and demystify urban meadows.',
    url:         thisUrl,
    image:       'https://cdn.buttercms.com/WuTLCfCQT9mY30MZlvtB',
    alt:         'native grasses and flowering perennials growing as a plant community',
  },
  fontsToLoad: fontsToLoadArr.slice(0,2),

  cards: [
    {
      src: 'https://cdn.buttercms.com/R8nK4M4YT8CxHnBVdaxA',
      alt: 'Green Roof Diagnostics logo',
      title: 'Bio',
      shortText: 'I am the CEO of Green Roof Diagnostics',
      inlineHeader: 'I am the CEO of Green Roof Diagnostics',
      longText: 'I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  ',
    },
    {
      src: 'https://cdn.buttercms.com/R8nK4M4YT8CxHnBVdaxA',
      alt: 'Green Roof Diagnostics logo',
      title: 'Work',
      url: 'https://www.greenroofdiagnostics.com',
      urlTitle: 'visit Green Roof Diagnostics',
      shortText: 'I am the CEO of Green Roof Diagnostics',
      inlineHeader: 'I am the CEO of Green Roof Diagnostics',
      longText: 'I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  ',
    },
    {
      src: 'https://cdn.buttercms.com/KYEwKpoQNWTCgPb8X5qk',
      alt: 'Urban Meadow logo',
      title: 'Passion',
      url: 'https://www.urbanmeadow.org',
      urlTitle: 'visit Urban Meadow',
      shortText: 'I am the CEO of Green Roof Diagnostics',
      inlineHeader: 'I am the CEO of Green Roof Diagnostics',
      longText: 'I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  ',
    },
    {
      src: 'https://cdn.buttercms.com/AVwAx9LLTf6KbM1F4THl',
      alt: 'The Purple-Roof Concept logo',
      title: 'Innovation',
      url: 'https://www.purple-roof.com',
      urlTitle: 'visit the Purple-Roof Concept site',
      shortText: 'I am the CEO of Green Roof Diagnostics',
      inlineHeader: 'I am the CEO of Green Roof Diagnostics',
      longText: 'I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  ',
    },
    {
      src: 'https://cdn.buttercms.com/AVwAx9LLTf6KbM1F4THl',
      alt: 'The Purple-Roof Concept logo',
      title: 'Modeling',
      shortText: 'I am the CEO of Green Roof Diagnostics',
      inlineHeader: 'I am the CEO of Green Roof Diagnostics',
      longText: 'I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  ',
    },
    {
      src: 'https://cdn.buttercms.com/AVwAx9LLTf6KbM1F4THl',
      alt: 'The Purple-Roof Concept logo',
      title: 'Evapotranspiration',
      shortText: 'I am the CEO of Green Roof Diagnostics',
      inlineHeader: 'I am the CEO of Green Roof Diagnostics',
      longText: 'I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  ',
    },
    {
      src: 'https://cdn.buttercms.com/R8nK4M4YT8CxHnBVdaxA',
      alt: 'Conjunction-Junction logo',
      title: 'Functions!',
      shortText: 'I am the CEO of Green Roof Diagnostics',
      inlineHeader: 'I am the CEO of Green Roof Diagnostics',
      longText: 'I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  ',
    },
    {
      src: 'https://cdn.buttercms.com/R8nK4M4YT8CxHnBVdaxA',
      alt: 'Conjunction-Junction logo',
      title: 'SVGs',
      shortText: 'I am the CEO of Green Roof Diagnostics',
      inlineHeader: 'I am the CEO of Green Roof Diagnostics',
      longText: 'I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  ',
    },
    {
      src: 'https://cdn.buttercms.com/R8nK4M4YT8CxHnBVdaxA',
      alt: 'React Chart.js Preprocessor logo',
      title: 'Graphing',
      shortText: 'I am the CEO of Green Roof Diagnostics',
      inlineHeader: 'I am the CEO of Green Roof Diagnostics',
      longText: 'I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  ',
    },
    {
      src: 'https://cdn.buttercms.com/R8nK4M4YT8CxHnBVdaxA',
      alt: 'React Chart.js Preprocessor logo',
      title: 'Food',
      shortText: 'I am the CEO of Green Roof Diagnostics',
      inlineHeader: 'I am the CEO of Green Roof Diagnostics',
      longText: 'I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  ',
    },
    {
      src: 'https://cdn.buttercms.com/R8nK4M4YT8CxHnBVdaxA',
      alt: 'React Chart.js Preprocessor logo',
      title: 'Coming Out',
      shortText: 'I am the CEO of Green Roof Diagnostics',
      inlineHeader: 'I am the CEO of Green Roof Diagnostics',
      longText: 'I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  ',
    },
    {
      src: 'https://cdn.buttercms.com/R8nK4M4YT8CxHnBVdaxA',
      alt: 'React Chart.js Preprocessor logo',
      title: 'Chesska',
      shortText: 'I am the CEO of Green Roof Diagnostics',
      inlineHeader: 'I am the CEO of Green Roof Diagnostics',
      longText: 'I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics I am the CEO of Green Roof Diagnostics  ',
    },
  ],

  elements: [
    {
      element: 'h2',
      text: 'The Symbolism of Urban Meadows',
    },
    {
      element: 'text',
      text: 'The symbolism of urban meadows is very important to me.  But less so as an outward symbol ("Look at me! I\'m so green my landscape is tall and messy!") but more as a reminder to self.  !! Many of the things we do to lessen our ecological footprint are small things, and things that are hard to see. !! Using less water in the shower, eating organic, eating less meat, recycling, reducing overall consumption, driving less, composting instead of buying fertilizer, installing solar panels, and voting accordingly.  Some of these are invisible.  Many of these aren\'t great conversation starters.  Some of these may be polarizing to some.  Many of these don\'t feel tangible, and !! I need to feel and see something that embodies these ideals! !!',
    },
  ]
};