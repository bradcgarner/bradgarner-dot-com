import { 
  convertHowToArrToElementsAndSteps 
}                         from 'the-superior-snippet';
import { fontsToLoadArr } from '../common-styles';
import { thisUrl }        from './_general';
import { consultants }    from './consultants';
import { resources }      from './resources';
import { contact }        from './contact';
import { gallery }        from './gallery';
import { grow }           from './grow';

const plantContent = {
  meta: {
    path:     'plant-an-urban-meadow', // this is the id of the div for scrolling purposes.
    h1Tag:  'How To Start An Urban Meadow',
    // limit title to 55 characters
    seoTitle:       'Plant An Urban Meadow',
    specialCardTitle: 'Plant An Urban Meadow',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Plant An Urban Meadow',
    image:       'https://cdn.buttercms.com/cQvAkswYSYuURCNOWjRC',
    alt:         'winter seed pod closeup of species such as Allium',
    hrefLang:    'en',
    categories: [],
    tags: [],
  },
  fontsToLoad: fontsToLoadArr.slice(0,2),
};

const howToArr = [
  {
    element: 'text',
    text: 'So you don’t have an urban meadow, but you’re curious about the idea.  !! Where to start!?! !!',
  },
  {
    element: 'p-link',
    text: [
      '!! "How can I start an urban meadow?" !! is probably the hardest question, not because of the technical challenge, but more due to the mental challenge.  As a trained landscape architect, with highly relevant experience, I wasn\'t sure how to start my own urban meadow (which is painfully obvious in ',
      {
        href: `${thisUrl}/post/case-study-garner-residence`,
        text: 'my case study',
        title: 'Case Study: Garner Residence',
      },
      ').  I want to help you do better than I did.'
    ],
  },
  {
    element: 'image',
    src: 'https://cdn.buttercms.com/5yiSLE88SPmN5qjZXeU0',
    caption: '',
    alt: 'yellow and pink wildflowers in roadside meadow',
  },
  {
    element: 'h2',
    text: 'Steps to Start an Urban Meadow'
  },
  {
    element: 'text',
    text: [
      'The steps below outline a process for planning, designing, and starting an urban meadow.  They are generally in order, but do not consider the order absolute. For example, "Ask for help" is not the first step, but if you want to do that first, that\'s OK.',
      'Most steps listed link to blog posts that cover a topic in greater detail.',
    ],
  },
  'STEPS',
  {
    element: 'how-to-step',
    name: 'Set goals for your urban meadow',
    text: [
      'Why do you want an urban meadow? What do you want it to do? Clear goals are necessary for success. Read about a few goals in ',
      {
        href: `${thisUrl}/under-construction`,//post/setting-goals-for-an-urban-meadow`,
        text: 'this post about setting goals for an urban meadow',
        title: 'Setting Goals for an Urban Meadow',
      },
      '. Get clear on whether you want to create habitat, to reduce maintenance, aesthetics, all of these, or something else?'
    ],
    src: 'https://cdn.buttercms.com/5hsPbCgROyotFy769oSS', // single image this step, in live site below text above
    caption: '', // live only
    alt: 'chalkboard with text "what are your goals"', // live only
  },
  {
    element: 'p-link',
    text: [
      'Without clear goals, an urban meadow can be a disaster.  Just check out ',
      {
        href: `${thisUrl}/post/case-study-garner-residence`,
        text: 'my case study',
        title: 'Case Study: Garner Residence',
      },
      ' as an example.  Get clear on your goals as the first step to success!'
    ]
  },
  {
    element: 'how-to-step',
    name: 'Decide how much meadow to plant',
    text: [ // format how-to-step text as p-link
      'You can start with a small project, or large, or somwhere inbetween. Some common options are to ',
      {
        href: `${thisUrl}/under-construction`,//post/design-and-build-a-full-meadow`,
        text: 'design and build a full meadow',
        title: 'How To Design and Build a Full Meadow',
      },
      ', ',
      {
        href: `${thisUrl}/under-construction`,//post/convert-an-ornamental-planting-to-a-meadow`,
        text: 'convert an ornamental planting to a meadow',
        title: 'How To Convert an Ornamental Planting to a Meadow',
      },
      ', or ',
      {
        href: `${thisUrl}/under-construction`,//post/start-a-meadow-border`,
        text: 'start a meadow border',
        title: 'How To Start a Meadow Border',
      },
      '.',
    ],
    url: `${thisUrl}/${plantContent.meta.path}?step=decide-how-much`,
    src: 'https://cdn.buttercms.com/5NEZNfZETBOqY0fZjlgo', // single image this step, in live site below text above
    caption: '', // live only
    alt: 'Lurie Garden late summer', // live only
  },
  {
    element: 'p-link',
    text: [
      'Even if you want a large urban meadow, for your home, at your office building, in your local park, it can be a great idea to start small. Starting small can be a great way to ',
      {
        href: `${thisUrl}/under-construction`,//post/check-out-urban-meadows-near-you`,
        text: 'see what works',
        title: 'Check Out Urban Meadows Near You',
      },
      ' and what doesn\'t work, before you make the same mistake. When you see success, it\'s fine to copy it!',
    ],
  },
  {
    element: 'how-to-step',
    name: 'Pick a place for your meadow',
    text: [
      'Decide where to ',
      {
        href: `${thisUrl}/under-construction`,//post/site-an-urban-meadow`,
        text: 'locate your urban meadow',
        title: 'Site An Urban Meadow',
      },
      '. Now that you have set goals, and have done a little homework on what works near you, it is time to pick a place.  Every decision after this will be influenced by the characteristics of the place you choose.'
      
    ],
    src: 'https://cdn.buttercms.com/GBpYvYUjT4Sjq6t9UJnO', // single image this step, in live site below text above
    caption: 'A large urban meadow / rain garden (background) at the Silver Spring United Methodist Church, Silver Spring, Montgomery County, Maryland', // live only
    alt: 'silver spring united methodist church', // live only
  },
  {
    element: 'p-link',
    text: [
      'There is no single site characteristic that is ideal for an urban meadow, as ',
      {
        href: `${thisUrl}/under-construction`,//post/meadows-can-be-found-everywhere`,
        text: 'meadows can be found in almost any environment',
        title: 'Meadows Can Be Found Everywhere!',
      },
      '! Hot, cold, wet, dry, sunny, shady, sloped, or flat.  The types of plants vary, and even the local terminology for meadows varies, but these open, mostly herbaceous landscapes can be found worldwide.'
    ]
  },
  {
    element: 'how-to-step',
    name: 'Check out the soil',
    text: [
      {
        href: `${thisUrl}/under-construction`,//post/plan-an-urban-meadow-investigate-the-soil`,
        text: 'Investigate the soil',
        title: 'Investigate the Soil',
      },
      ' where you will locate your meadow. Dig a few holes about 30 cm (1 foot) deep, and pay attention to a few key characteristics of the soil.'
    ],
    src: 'https://cdn.buttercms.com/2WSqM3zRMuf54s95aeUr', // single image this step, in live site below text above
    caption: '', // live only
    alt: 'person digging shovel into soil within turfgrass area', // live only
  },
  {
    element: 'p-link',
    text: [
      'Write down a few observations about the soil.  If you are going to ask for help ',
      {
        href: `${thisUrl}/${consultants.meta.path}`,
        text: '(and we recommend you do!)',
      },
      ', this information will be invaluable. The ',
      { 
        href: `${thisUrl}/under-construction`,//post/plan-an-urban-meadow-investigate-the-soil`,
        text: 'investigate the soil',
        title: 'Investigate the Soil',
      },
      ' article covers these steps in detail. What is the soil texture? Is the soil well drained or poorly draining?  What is growing there now? (That tells us a lot.) If the soil has an odor, what does it smell like?  You will probably see at least 2 layers of soil, probably a darker layer on the top (topsoil) and then a layer below it (subsoil). How thick is the top layer? Take a closeup photo of each layer soil.'
    ],
  },
  {
    element: 'how-to-step',
    name: 'See what works in similar conditions around you',
    text: [
      `Of course, you could skip this and just ask for help, but since you are reading this, presumably you’re interesting in learning: What looks good? What is attracting bees and butterflies? What is blooming at which times of year? What has been there for at least a few years and is growing vigorously? `,
    {
      href: `${thisUrl}/under-construction`,//post/check-out-urban-meadows-near-you`,
      text: 'See what works around you.',
      title: 'Check Out Urban Meadows Near You',
    },
  ],
    src: 'https://cdn.buttercms.com/d2qIbSngTRWd6oazQMNT', // single image this step, in live site below text above
    caption: '', // live only
    alt: 'people inspecting bioretention meadow', // live only
  },
  {
    element: 'how-to-step',
    name: 'Ask for help',
    text: [
      'By now, you have probably done a good bit of homework (thank you!) and now is a great time to ask for help. You can find an ',
      { 
        href: `${thisUrl}/${consultants.path}`,
        text: 'urban meadow consultant',
        title: 'Find an Urban Meadow Consultant',
      },
      ' on this site, or consult a local landscape architect, horticulturalist, a knowledgable neighbor, or a local garden center for advice.'
    ],
    src: 'https://cdn.buttercms.com/WmJedVcFQNiatigSrDrr', // single image this step, in live site below text above
    caption: '', // live only
    alt: 'REPLACE THIS', // live only
  },
  {
    element: 'p-link',
    text: [
      'When finding help, be sure to look for somone with expertise in ecological planting.  Most garden centers, many designers, and even your neighbor with the green thumb, might provide "traditional" horticultural advice, some of which is applicable (e.g. pick the right plant for the right place), but they might not be familiar with many native plants or strategies to design and maintain ecologically (minimal fertilizer, little or no chemicals).',
      'A great way - but a time-consuming way - to get some help is to educate yourself.  We try to provide a lot of ',
      {
        href: `${thisUrl}/${resources.path}`,
        text: 'great resources',
      },
      ' on this site. If you don\'t find what you need, to save some time, you can click ',
      {
        href: `${thisUrl}/${contact.path}?consultant=any`,
        text: 'contact us',
      },
      ' and briefly describe what type of resource you\'re looking for, and we will try to match you with a ',
      {
        href: `${thisUrl}/${consultants.meta.path}`,
        text: 'consultant',
      },
      ' who can help.'
    ],
  },
  {
    element: 'how-to-step',
    name: 'Consider heights and massing',
    text: [
      'Decide how tall the meadow should be, and relationship of different plant sizes and heights. The book ',
      {
        href: 'https://www.amazon.com/gp/product/1604695536/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1604695536&linkCode=as2&tag=urbanmeadow-20&linkId=7c2cfc621b597d37a3bc31fe98109e2b',
        text: 'Planting In A Post-Wild World',
        title: 'Book: Planting In A Post-Wild World'
      },
      ' is a great resource!',
    ],
    src: 'https://cdn.buttercms.com/l9rzKLYQ1W4BgJu20xBw', // single image this step, in live site below text above
    caption: '', // live only
    alt: 'meadow planting showing various heights, including groundcover level', // live only
  },
  {
    element: 'p-link',
    text: [
      'The article ',
      {
        href: `${thisUrl}/under-construction`,//post/urban-meadow-plant-heights-and-massing`,
        text: 'Urban Meadow Plant Heights and Massing',
        title: 'Urban Meadow Plant Heights and Massing',
      },
      ' is a good guide. You can see several different examples of heights in the ',
      {
        href: `${thisUrl}/${gallery.path}`,
        text: gallery.meta.h1Tag,
        title: gallery.meta.h1Tag,
      },
      ' page.',
    ],
  },
  {
    element: 'how-to-step',
    name: 'Plant in spring or fall',
    text: [
      'Finally, planting! Plant meadow plants in spring or fall, avoiding the heat of summer or harshness of winter.',
    ],
    src: 'https://cdn.buttercms.com/bK6K3HuTte8A8bPQIJQY', // single image this step, in live site below text above
    caption: '', // live only
    alt: 'hand dripping water onto seedline planted in rich soil', // live only
  },
  {
    element: 'p-link',
    text: [
      'You will probably start with small plants, either ',
      {
        href: 'https://www.northcreeknurseries.com/Landscape-Plugs',
        text: '"landscape plug"',
        title: 'Landscape Plugs',
      },
      ' size on the small end, to a #2 (or 2-gallon) size on the high end. Small plants are often best, as they readily adapt to their new environs.  But small plants can be tender, so planting when not-too-hot and not-too-cold is important.',
    ],
  },
  {
    element: 'p-link',
    text: [
      'Always water thoroughly after planting, regardless of time of year. Generally keep plants well watered for the first season until their roots spread into adjacent soil.'
    ],
  },
  {
    element: 'how-to-step',
    name: 'Use multiple levels of plants',
    text: [
      'Don\'t forget the groundcovers! Plant taller meadow plant and low-growing plants.  The book ',
      {
        href: 'https://www.amazon.com/gp/product/1604695536/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1604695536&linkCode=as2&tag=urbanmeadow-20&linkId=7c2cfc621b597d37a3bc31fe98109e2b',
        text: 'Planting In A Post-Wild World',
        title: 'Book: Planting In A Post-Wild World'
      },
      ' is probably the best resource to illustrate this layering approach.'
    ],
    src: 'https://cdn.buttercms.com/VDZoFeaQv6HL1bnD8HKN', // single image this step, in live site below text above
    caption: '', // live only
    alt: 'meadow planting showing various heights, including groundcover level', // live only
  },
  {
    element: 'p-link',
    text: [
      'A simplified explanation of this layering is to think of your meadow planting in a few different layers, say starting with a mid-range layer that might be comprised of ',
      {
        href: 'https://www.northcreeknurseries.com/plantName/Rudbeckia-fulgida-Goldsturm',
        text: 'Rudbeckia fulgida (black-eyed susans)',
        title: 'North Creek Nurseries: Rudbeckia fulgida'
,      },
      ' and ',
      {
        href: 'https://www.northcreeknurseries.com/plantName/Andropogon-virginicus-',
        text: 'Andropogon virginicus (broomsedge)',
        title: 'North Creek Nurseries: Andropogon virginicus'
,      },
      '. This mid-height layer is about 60-90 cm (2-3 feet) tall.',
    ],
  },
  {
    element: 'p-link',
    text: [
      'But below these plants, you want a groundcover to provide "green mulch" and additional stormwater, habitat, and microclimate benefits. Taller plants will cast some shade on the groundcover, but not for a year or two, so maybe your groundcover is ',
      {
        href: 'https://www.northcreeknurseries.com/plantName/Rubus-calycinoides-',
        text: 'Rubus calycinoides (creeping raspberry)',
        title: 'North Creek Nurseries: Rubus calycinoides'
,      },
      ', a beautiful evergreen sun- and shade-tolerant groundcover that fills the height range of 10-15 cm (4-6 inches). The short groundcover will also probably have short roots that do not compete with the taller plants for water and nutrients. The leaves of the groundcover plant help keep the soil cool and moist for all other plants.',
    ],
  },
  {
    element: 'p-link',
    text: [
      'Finally, you might want an accent layer that pops up above the mid-height plants. That could be ',
      {
        href: 'https://www.northcreeknurseries.com/plantName/Asclepias-syriaca-',
        text: 'Asclepias syriaca (common milkweed)',
        title: 'North Creek Nurseries: Asclepias syriaca'
,      },
      ', which occupies a different space above ground and below ground versus the other plants on the list, and which has flowers that attract different pollintors.  Aesthetically, the pink milkweed flowers will pop up above the black-eyed Susans, for greater interest.',
    ],
  },
  {
    element: 'text',
    text: 'This layering for optimal benefit and stability is one of the key differences between urban meadows and traditional landscapes.',
  },
  {
    element: 'p-link',
    text: [
      'After planting, enjoy! But all landscapes require care, especially when young.  Read ',
      {
        href: `${thisUrl}/${grow.path}`,
        text: 'growing and maintaining an urban meadow',
        title: grow.meta.h1Tag,
      },
      ' to continue the journey.'
    ],
  },
  {
    element: 'image',
    src: 'https://cdn.buttercms.com/kxq7Q6C7QXyBXhi01p85',
    alt: 'mixed',
  },
];

const {
  elements, 
  steps,
} = convertHowToArrToElementsAndSteps(howToArr);

export const plant = {
  ...plantContent,
  elements,
  data: {
		name: plantContent.meta.h1Tag,
		description: 'Learn how to get started with an urban meadow. This covers planning, design, and planting installation.',
		totalTime: '', // DURATION: https://en.wikipedia.org/wiki/ISO_8601
		src: plantContent.meta.image,
		height: 630,
		width: 1200,
		video: {
			name: '',
			description: '',
			thumbnailUrl: '',
			uploadDate: '',
			duration: '', // DURATION: https://en.wikipedia.org/wiki/ISO_8601
			embedUrl: '',
		},
		// supplies: [''],
		// tools: [''],
    steps,
  },
};

/* plant.
  elements: [

    {
      element: 'text',
      text: `



For the rest of us who want to start small, there are a few other approaches that I recommend.

One of the great things about meadows is that most meadow plants will spread, either by seeding, or by growing large clumps that can be divided, or by rhizomes (underground stems) that spread horizontally.  So starting small can be very smart.
 




******************

Decide how much you want to tackle
      Can be a bit like teenager when starting
      
      Everything
      A border
      A clump
      Mixed approach
      
      Mixed approach is what I did
      All groundcovers
      Added very few taller plants (later)
      Let the taller plants take over
      
      Assess the soil
      
      Assess current weed pressure
      
      Plant
      Use layers
      
      Fast spreaders vs dense plantings va those that spread or seed aggressively later
      
      Consider heights
      
      Open closed
      
      Year-round aesthetics
      
      Year-round habitat
      
      Some ornamental element
      
      Flowers
      
      Color and texture
      
      Water
      
      Weed
      
      Change plants that do not work
      Add plants
      `
    }
  ]

}; */