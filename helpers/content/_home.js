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
    description: 'Brad Garner is a researcher, environmentalist, and computer programmer committed to using his skills to better the environment.',
    url:         thisUrl,
    image:       'https://cdn.buttercms.com/Yjr3DEkLTy6E0QeAZqRq',
    alt:         'Brad Garner in green roof research laboratory in front of outdoor monitoring platforms',
  },
  fontsToLoadArr: fontsToLoadArr.slice(0,2),

  elements: [
    {
      src: 'https://cdn.buttercms.com/rB7BOsmiTqKjQsvvuxs5',
      alt: 'Brad Garner in green roof research laboratory in front of outdoor monitoring platforms',
      title: 'Bio',
      shortText: 'A little about me',
      elements: [
        '!! I suppose environmental technologist !! might be the most succinct description of my career. ',
        
        'In reverse chronology: I manage a tech-heavy green infrastructure research firm, Green Roof Diagnostics, where we focus on improving the science of green roofs and other green infrastructure.',
        
        'Before that I was in green roof construction, working with the amazingly talented Ben Eiben, whom I helped by researching his ideas and developing those into green roof products that altered the trajectory of green roof stormwater management.',

        'Before that I practiced landscape architecture, including a decade restoring historic Olmsted parks, and multiple US Embassy projects that took me to around the world.',

        'Before that, while studying landscape architecture, I obtained two minors: pottery and computer science. I never did anything with the pottery, but the CS background is now central to my work.',

        'And before that, I was the weird kid who preferred plants to people and preferred rainstorms to sports. I loved when a big rain would flood the field behind our house, cause the ditches and creeks to rise, and create massive powerful flows through culverts. I would go wade in that until it subsided.',
      ],
      handle: 'brad',
    },
    {
      src: 'https://cdn.buttercms.com/ZtqLDLe8T2KhhhvZYZ2L',
      alt: 'Green Roof Diagnostics logo',
      title: 'Work',
      url: 'https://www.greenroofdiagnostics.com',
      urlTitle: 'visit Green Roof Diagnostics',
      shortText: 'Green Roof Diagnostics',
      elements: [
        '!! I am so fortunate to lead the amazingly talented and dedicated team of Green Roof Diagnostics, !! including Dr. Anna Zakrisson, Dr. Scott Jeffers, and my right-hand-man Derek Hidalgo. We are researchers, hydrologists, biologists, modelers, technicians, and technologists who are working to quantify and improve the benefits of green infrastructure.',

        'This work is by far the most challenging, most rewarding, and most fun I have ever had. And I could not ask to work with better people. Click the icon at left to learn more about Green Roof Diagnostics.',

        {
          element: 'video',
          url: 'https://www.youtube.com/embed/z5ujmrn2-7g',
          title: 'World-Class Green Roof Research - For a Better Future!',
          caption: 'Short video by GRD\'s lab technican, Derek Hidalgo, about his passion for this work',
        },

        {
          element: 'video',
          url: 'https://www.youtube.com/embed/XqpvGqO3En4',
          caption: 'In this video, produced by Purple-Roof, I discuss a bit of the environmental challenges that GRD is trying to face.',
          title: 'Next-Generation Vegetated Roofs',
        }
      ],
      handle: 'grd',
    },
    {
      src: 'https://cdn.buttercms.com/vhphlSnnSfC8Bsp7r3CK',
      alt: 'Wildflowers with blue sky background',
      title: 'Environment',
      // url: 'https://www.urbanmeadow.org',
      // urlTitle: 'visit Urban Meadow',
      shortText: 'A passion for the environment',
      elements: [
        '!! My first passion is for the environment. !! This passion has grown and changed from when I was a little boy in the rural south chopping brush, camping in the woods, transplanting shrubs, rooting cuttings, wading into storm drain culverts during storms, and generally just not spending much time indoors.',

        'That early passion was carefree. By college in the 1990s I became very aware of our environmental crises, and committed my career to help combat that: first via responsible landscape architecture, and later via green roofs. Neither of those saves the planet. But we need to do the big things, small things, and everything inbetween.',
        
        'My current passion is less optimistic than decades past. I am still optimistic, but no longer believe preventing climate change is the main goal. The main goal is adapting to the damage we have already done (and stop making it worse!). My work at Green Roof Diagnostics is focusing on quantifying precise benefits of green infrastructure, which hotter and wetter or drier cities will need. My passion project, Urban Meadow, is along the same lines.'
      ],
      handle: 'brad',
    },
    {
      src: 'https://cdn.buttercms.com/KYEwKpoQNWTCgPb8X5qk',
      alt: 'Urban Meadow logo',
      title: 'Passion',
      url: 'https://www.urbanmeadow.org',
      urlTitle: 'visit Urban Meadow',
      shortText: 'Something a little shaggy',
      elements: [
        '!! Urbanmeadow.org is a passion project for me. !! Urban meadows are low-maintenance, low-impact, high-habitat-value plant communities. My house is behind one. You can have one. Your neighborhood park or school can have one. Urban meadows are great ways to make a meaningful environmental difference, but urban meadows are misunderstood. Urbanmeadow.org seeks to demystify and democratize this landscape type.',
        {
          element: 'image',
          src: 'https://cdn.buttercms.com/WuTLCfCQT9mY30MZlvtB',
          alt: 'native grasses and wildflowers in a meadow',
          caption: '',
        },
        [
          'I am so fortunate to work with a wonderful group of people on Urbanmeadow.org! Check out ',
          {
            href: 'https://www.urbanmeadow.org/urban-meadow-consultants',
            text: 'the Urban Meadow Consultants'
          },
          ' page to see a list of some amazingly talented people who are experts at various aspects of urban meadows. (And contact one if you need help!)  Some other amazing people are helping me with the ',
          {
            href: 'https://www.urbanmeadow.org/blog',
            text: 'Urban Meadow Blog'
          },
          '.'
        ]
      ],
      handle: 'urbanmeadow',
    },
    {
      src: 'https://cdn.buttercms.com/r61SSHI4TDKegJEce4QM',
      alt: 'screenshot of programming in Javascript using Visual Studio Code',
      title: 'Technology',
      // url: 'https://www.urbanmeadow.org',
      // urlTitle: 'visit Urban Meadow',
      shortText: 'Leveraging technology',
      elements: [
        '!! Technology is amazing. !! The first time I ever stayed up - completely unaware of the time - working until 3 am was while working on a Pascal project in college. I ended up with a minor in computer science, but just as a hobby. Even back in the early 1990s I had a strong affinity toward programming because I felt like it was a logical extension of our own intelligence.',

        'As I entered the non-computer-science workforce, I sort of forced programming into my landscape architectural role. I built a mini-CRM to track projects, a cost estimation tool, tools to help with grading, and was the cheerleader for AutoCad standards and templates.  All that was logical to me so that creative people could be creative, and so that machines could do the repetitive and precise. I was the oddball.',
        
        'Finally I am in a firm where technology is central. I have never wanted to be a specialist at technology. I want to be a specialist at leveraging technology for environmental benefit.'
      ],
      handle: 'brad',
    },
    {
      src: 'https://cdn.buttercms.com/AVwAx9LLTf6KbM1F4THl',
      alt: 'The Purple-Roof Concept logo',
      title: 'Innovation',
      url: 'https://www.purple-roof.com',
      urlTitle: 'visit Purple-Roof.com',
      shortText: 'Amazing New Technology!',
      elements: [
        '!! Development and testing of the Purple-Roof Concept was Green Roof Diagnostic’s first big project. !! This is a concept for improving the stormwater performance of green roofs by adding friction. The friction slows water to create stormwater detention.',

        'When we first started testing this in 2017, we expected some modest performance that might slightly reduce the size of a stormwater tank. As we proceeded, ideas flowed, and performance was different from expectations... it was far better! After over 1,000 tests and the eyes of a handful of PhD hydrologists, we were able to get the new technology into EPA SWMM modeling.',
        
        'This technology offers great promise to reduce localized flooding and combined sewer overflows in cities. I am so pleased to have been a part of this!',

        {
          element: 'video',
          url: 'https://www.youtube.com/embed/u7VygyBbSxI',
          title: 'Purple-Roof Hydrology Explained',
          caption: 'This video explains the Purple-Roof Concept. Enjoy!',
        },

        [
          'The Purple-Roof Concept was invented by ',
          {
            href: 'https://www.linkedin.com/in/oscar-warmerdam-a7531016/',
            text: 'Oscar Warmerdam', 
          },
          'with a healthy dose of inspiration from ',
          {
            href: 'https://www.robinsondesignengineers.com/',
            text: 'Joshua Robinson',
          },
          '. Oscar is a true visionary who thinks on a grand scale about the environment and the green infrastructure industry. Though Oscar founded Green Roof Diagnostics, he handed it over to me to run it as an independent, unbiased research institute. To paraphrase Sting "if you love something, set it free", and that\'s just what Oscar did by separating GRD from Purple, so that both can flourish in their own ways.  I\'m so lucky to work with both teams.',
        ],
      ],
      handle: 'purple',
    },
    {
      src: 'https://cdn.buttercms.com/IdEFjOH2T6lsPzmvz4TQ',
      alt: 'The Purple-Roof Concept logo',
      title: 'Environmental Sensors',
      shortText: 'Environmental sensors',
      elements: [
        '!! My work at Green Roof Diagnostics involves a lot of IoT !! (internet of things) environmental sensors. My very first task at GRD was wiring and programming the lab and outdoor platforms. The real fun was building StormWatch, GRD’s internal monitoring software.',

        'StormWatch collects the data, handles data quality control, pre-analyzes the data, manages all user custom input (such as which profiles are being tested at what storm intensity). More recently StormWatch is allowing us to remotely control the lab, and it is semi-automatically parameterizing data for use in modeling. All that from a bunch of sensors and wires. Nerds have all the fun!!',
      ],
      handle: 'grd',
    },
    {
      src: 'https://cdn.buttercms.com/qEGrkJ8ITbuLaVHHWKVI',
      alt: 'Graph of green roof evapotranspiration / retention modeler',
      title: 'Evapotranspiration',
      shortText: 'Making ET accessible',
      elements: [
        '!! Evapotranspiration is so important to green infrastructure, but poorly understood. !! A fundamental difference between green infrastructure and gray infrastructure, is that green infrastructure provides retention (prevents runoff).  How? Evapotranspiration (ET).',

        'Despite ET\'s importance, it remains misunderstood. Modeling is critical to understanding and using ET data.',

        'The first hydrologic modeler I built was this relatively simple one. This modeler uses annual weather data at a daily timestep to estimate evapotransipiration if different green roof systems.',

        'This was the first time I ever wrote code to perform equations from scientific publications. Also the first time I had worked with the daunting Penman-Monteith method. I also found out how messy weather data is, and built a stochastic weather generator to convert messy hourly or daily weather and annual stats into a clean weather data set that conforms to the stats.',
        
        'We are validating this model via a multi-year platform monitoring program.',

        {
          element: 'video',
          url: 'https://www.youtube.com/embed/g9dm8vNgI_g',
          title: 'Retention Modeler Teaser',
        },
        [
          'The very short video above is a teaser for the retention modeler I built. Click the YouTube icon (above left) to go to Purple-Roof\'s channel, where you can find a more in-depth video about this.  Of course, you can use the modeler at ',
          {
            href: 'https://www.purple-roof.com/model',
            text: 'this link',
          },
          '.'
        ],
      ],
      handle: 'grd',
    },
    {
      src: 'https://cdn.buttercms.com/g8BezoSUCIFb9Re0RyCQ',
      alt: 'Diesel engine train chugging down the track',
      title: 'Javascript libraries',
      shortText: 'Conjunction junction, what\'s your function?',
      elements: [
        '!! I often put chunks of my work into libraries !! so that I can use it in multiple applications.',
        
        'When I first started at GRD, I decided Node.js would be our primary language... cue the criticsm, but I can defend it... and I discovered some unmet needs.',

        'One need was for a date-time library. Yes, there are many already. I like none of them. All the IoT sensor data uses timestamps for everything, and I needed something really easy and completely reliable. So I built it.',

        'Then I discovered that I couldn\'t find a library with all the unit conversions I need. I need some doozies, like gallons per minute per foot to liters per second per hectare.  At this point, conjunction-junction was created: a library of pure Javascript helper functions tailored to scientific work.',

        'My libraries at the NPM link at left (sorry, have not had time to document them all... will accept open-source help!)',
      ],
      handle: 'brad',
    },
    {
      src: 'https://cdn.buttercms.com/6OAOovfhSViFjMIyHJ6H',
      alt: 'screenshot of SVG green roof construction details',
      title: 'SVGs',
      shortText: 'Shhh... I\'m having an affair with SVGs!',
      elements: [
        '!! Visualization is so important for science. !! You can probably tell from much of my site so far that a lot of what I do involves numbers, i.e. a lot of what I do is really hard to see and communicate.  That is one reason graphing is so important.',
        [
          'But far better than graphs are visual representations of the real world, and that is why I absolutely fell in love with SVGs.  SVG is part code / part image, so it is easily manipulated via numbers.',
          'The drawing you see above left is an example of ',
          {
            href: 'https://www.purple-roof.com/details',
            text: 'green roof construction details at purple-roof.com',
          },
          ' which is an activated SVG connected to a database of each layer within the profile.  Think of it as GIS (geographic information systems) but for green roofs.',
        ],
        // {
        //   element: 'video',
        //   url: '',
        //   title: '',
        //   caption: '',
        // }
      ],
    },
    {
      src: 'https://cdn.buttercms.com/3pjfHu4R0SZfu70HzZ6h',
      alt: 'graph of calibration of detention hydrologic model nine storms',
      title: 'Hydrologic Modeling',
      shortText: 'Continuous Flow Retention and Detention Modeling',
      elements: [
        [
          '!! The most exciting part of my work is modeling! !! Though I am not a hydrologist, I am the interface between hydrologists, research, and programming.  I\'m Lucky to have some great mentors, like Charlie Miller, and work with one of the world\'s best green roof modelers, ',
          {
            href: '',
            text: 'Dr. Scott Jeffers',
          },
          '.',
        ],
        {
          element: 'video',
          url: 'https://www.youtube.com/embed/B-P5prVl9Yk',
          title: 'The Green Roof Kicks Out Your Tank',
          caption: 'Sorry, I do not have a video that shows hydrologic modeling, but I can show you this video that shows the end results: a green roof that can replace a stormwater tank.',
        }
      ],
    },
    {
      src: 'https://cdn.buttercms.com/k4bHfgJ8S0e1Ipqu6W0i',
      alt: 'line graph using react-chart-js-preprocessor',
      title: 'Graphing',
      shortText: 'Graphs are my most important tool',
      elements: [
        '!! Graphs are my most important tool !! so in 2018 I focused very acutely on building a graphing tool that is optimized for my needs. I started with Chart.js, since it does what I need... but it is so hard to use! Specifically Chart.js requires the developer to create a fairly massive configuration, and in a deeply nested format. Further, it does not "fail nicely" if you made a mistake in the config.',

        'At Green Roof Diagnostics, we are always expanding the structure of our rapidly growing data set, and we have diverse data presentation needs.  So I need something that will be infinitely flexible.',

        'To solve this I created react-chart-js-preprocessor.  This preprocessor requires the data as array of objects, and each property of each object converted into axes according to unit, selectors, etc. To maintain this, I keep a database of all properties, and assign them units, definitions, and labels (which is necessary anyway for scientific documentation and collaboration).',

        'React-chart-js-preprocessor + conjunction-junction have filled the gaps I needed to fill to work with scientific data in Javascript.',
      ],
      handle: 'purple',
    },
    {
      src: 'https://cdn.buttercms.com/ovAt4BDzRpum9Ye4eqRu',
      alt: 'white plate with baked salmon and piled high with sauteed vegetables',
      title: 'Food',
      shortText: 'Food should be easy, fun, and nourishing',
      elements: [
        '!! I love food. !! (And I look like I love food!) During the pandemic I started making some simple videos about everyday cuisine. I think it is often hard to cook, because of lack of ideas, lack of know-how, or lack of energy. My specialty is to use whatever is fresh and make it into something delicious with minimal effort. I don’t know if that cuisine has a name.',

        'If you like my videos, please subscribe. And let me know if you have any requests.',

        {
          element: 'video',
          url: 'https://www.youtube.com/embed/ero86FbbK3g',
          title: 'Garlic Scape Pasta',
          caption: 'One of our favorite veggies is garlic scapes, the crack of vegetables.  Here\'s the #1 way to cook garlic scapes.',
        }
      ],
      handle: 'brad',
    },
    {
      src: 'https://cdn.buttercms.com/IKWlcLbTSuaVeW1TX3Es',
      alt: 'Brad Garner and husband being silly',
      title: 'Love',
      shortText: 'This is my personal website. It\'s not all business.',
      elements: [
        '!! There is no story of me that does not involve my husband, Greg. !! Greg and I met about 2 years after I moved to DC, when we were both only a few years out of college, and we have spent our entire adult lives together.',
        'Greg is my best friend, and probably the only person on the planet who would put up with my nonsense.',
        {
          element: 'image',
          src: 'https://cdn.buttercms.com/4Qufn8o0QHGI1s7163BO',
          caption: 'Greg and me with our neighbors, Sharon and Ann, at the 2018 Gay Pride parade in Amsterdam'
        },
        {
          element: 'image',
          src: 'https://img.podcastone.com/images/new/jandkhdla/JimmyAlexander-FinalJumpingLogo-960x250.png',
          alt: 'Out with Jimmy Alexander',
        },
        {
          element: 'p-link',
          text: [
            'In summer 2020 I had the privilege to be on Jimmy Alexander\'s podcast ',
            {
              href: 'https://www.podcastone.com/Out-with-Jimmy-Alexander',
              text: 'Out With Jimmy',
            },
            ' where we talk about my coming out story, and finding love - and learning to love myself - as a gay man.  Check out the full episode ',
            {
              href: 'https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLmh1YmJhcmRwb2RjYXN0cy5jb20vT3V0V2l0aEppbW15QWxleGFuZGVy/episode/OGJlMzhlYzUtMjU2Zi00YWEzLWFkYmEtZjU3ODczYjUyYTg3',
              text: 'here!'
            },
          ],
        },
      ],
      handle: 'brad',
    },
    // {
    //   src: 'https://cdn.buttercms.com/R8nK4M4YT8CxHnBVdaxA',
    //   alt: 'React Chart.js Preprocessor logo',
    //   title: 'Chesska',
    //   shortText: 'My daughter',
    //   elements: [
    //     '',
    //     ''
    //   ],
    //   handle: 'brad',
    // },

  ].map(c=>{
    const elements = Array.isArray(c.elements) ?
    c.elements.map(e=>{
      if(typeof e === 'string'){
        return {
          element: 'p-link',
          text: [e],
        };
      } else if (Array.isArray(e)){
        return {
          element: 'p-link',
          text: e,
        };
      } else {
        return e;
      }
    }) : [] ;
    return {
      ...c,
      elements,
    };
  }),
};