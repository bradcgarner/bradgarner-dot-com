import { 
  fontsToLoadArr } from '../common-styles';
import { thisUrl } from './_general';
import { importance } from './importance';

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

  tagline: 'Urban meadows are low-impact, self-sustaining plant communities that provide ecological benefits.',
  landingImageSrc: 'https://cdn.buttercms.com/KYEwKpoQNWTCgPb8X5qk',
  landingImageAlt: 'welcome to urbanmeadow.org (logo)',

  headerLogo: 'https://cdn.buttercms.com/qPxD3nyLQq2sQTEFarX1',
  fixedImageBanner: 'https://cdn.buttercms.com/NZDQ0PGgT92NR6Fr3tGv',
  narrowScreenFallback: 'https://cdn.buttercms.com/hmqnQUcfTQmkGZBa2tBq',
  narrowScreenFallbackAlt: 'alt tag',

  textAboveCards: [
    {
      element: 'h2',
      text: 'Urban Meadows: Alternative and Evolution',
    },
    {
      element: 'text',
      text: 'Lawns are great for playing ball, enjoying a picnic, and places for kids and dogs to run.  And "flower gardens" are beautiful, but can be a lot of work.  Traditional maintenance of both lawns and gardens often uses a lot of chemical pesticide, herbicide, fungicide, and elbow grease.',
    },
    {
      element: 'text',
      text: 'In recent years many designers and homeowners have realized the benefits of growing plants that are native to their region, and providing habitat for birds, butterflies, and bees. These plantings can be just as beautiful as the roses that grandma fed with high nitrogen fertilizer and sprinkled with Sevin dust, but without all the harmful side effects.',
    },
    {
      element: 'text',
      text: 'Let\'s take this one step further: urban meadows. When people ask me "How can you tell an urban meadow from any other planting?" my response is usually !! "In urban meadows, the plants grow tightly together, just like they do in nature.  You don\'t see any mulch or bare ground. Also, if you look down into the plants, you\'ll see multiple levels, like a groundcover below a goldenrod. Urban meadows don\'t look overly manicured... because they aren\'t! And you\'ll usually see bees and butterflies." !!',
    },
    {
      element: 'text',
      text: 'Let\'s say you planted a pollinator garden with wildflowers and grasses native to your area.  If it is successful, the plants will probably spread and grow together. Some beneficial volunteer plants might sprout. You see, it wants to be a meadow, if only you\'ll let it.  This site is all about appreciating, starting, nurturing, and celebrating these beautiful, self-sustaining, and somewhat tousled landscapes.',
    },
  ],

  cards: [
    'whatIs',
    'about',
    'importance',
    'plant',
    'grow',
    'gallery',
    'resources',
    'consultants',
  ],

  textBelowCards: [
    {
      element: 'h2',
      text: 'The Symbolism of Urban Meadows',
    },
    {
      element: 'component',
      component: <p key='excerpt'>Excerpted from <a href={`${thisUrl}/${importance.meta.path}`} target='_blank' style={{fontStyle: 'italic'}}>Why Are Urban Meadows Important?</a> by Brad Garner.</p>
    },
    {
      element: 'text',
      text: 'The symbolism of urban meadows is very important to me.  But less so as an outward symbol ("Look at me! I\'m so green my landscape is tall and messy!") but more as a reminder to self.  !! Many of the things we do to lessen our ecological footprint are small things, and things that are hard to see. !! Using less water in the shower, eating organic, eating less meat, recycling, reducing overall consumption, driving less, composting instead of buying fertilizer, installing solar panels, and voting accordingly.  Some of these are invisible.  Many of these aren\'t great conversation starters.  Some of these may be polarizing to some.  Many of these don\'t feel tangible, and !! I need to feel and see something that embodies these ideals! !!',
    },
    {
      element: 'text',
      text: '!! Not only are urban meadows functional, they are great visual reminders, and for me a great source of joy. !! The colors and textures remind me of fields far from the city.  The upward arching of branches, the irregular contours, and the contrast of light and shadow and bright green and dark purple remind me of edges of a forest.  Bees, birds, and butterflies visit and - with the trickle of a small fountain - create a constant source of activity.  When the wind blows, grasses, stems, leaves, and flowers move just enough to remind me to enjoy the breeze.  When I pull weeds - which is rare these days - I sense the benefits (less work!) from years of paying attention to the plants and cultivating plant communities that thrive and do not invite weeds.  When I come home, I often hear crickets chirping when I approach, a reminder that beneath the foliage lies a microbial ecosystem that supports small insects which, in turn, support larger insects.  I\m sure birds eat a few of those.',
    },
    {
      element: 'text',
      text: 'Even though I have probably done more environmental good by covering my roof with solar panels, working from home, and reducing our meat consumption, !! I get the most continued joy from my urban meadow, !! which provides benefits to the environment and to my psyche.  !! Isn\'t that sustainability? !! ',
    },
  ]
};