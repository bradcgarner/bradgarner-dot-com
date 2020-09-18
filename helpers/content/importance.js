import ImportanceTable from '../../components/importance/importance-table';
import { centeredAccentTextCSS, fontsToLoadArr } from '../common-styles';
import { consultants } from './consultants';
import { thisUrl } from './_general';

export const importance = {
  meta: {
    path:    'importance-of-urban-meadows',
    h1Tag:  'The Importance of Urban Meadows',
    // limit title to 55 characters
    seoTitle:       'Importance',
    specialCardTitle: 'Why Are Urban Meadows Important?',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Urban meadows enhance biodiversity, help cool cities, provide habitat for birds and pollinators, help manage stormwater, and improve the soil.',
    image:       'https://cdn.buttercms.com/f9WRgWswTLGz6UQgmIWz',
    alt:         'aerial view of Oakland, California showing mostly asphalt and rooftops',
    hrefLang:    'en',
    categories: [],
    tags: [],
  },
  fontsToLoad: fontsToLoadArr.slice(0,2),

  tableColumns: [
		{ 
      key: 'aesthetics',
			header: 'Aesthetics', 
		},
		{ 
      key: 'maint',
			header: 'Maintenance', 
		},
		{ 
      key: 'energy',
			header: 'Energy (gas, electric)', 
		},
		{ 
      key: 'ret',
			header: 'Stormwater retention', 
		},
		{ 
      key: 'det',
			header: 'Stormwater detention', 
		},
		{ 
      key: 'fert',
			header: 'Fertilizer', 
		},
		{ 
      key: 'pest',
		 header: 'Pesticide', 
		},
		{ 
      key: 'herb',
			header: 'Herbicide', 
		},
		{ 
      key: 'pollen',
			header: 'Pollinator habitat', 
		},
		{ 
      key: 'bird',
			header: 'Bird habitat', 
		},
		{ 
      key: 'irrig',
		 header: 'Irrigation', 
		},

	],
	tableRows: [
		{ 
      name: 'Lawn',
      aesthetics: {
        short:'simple, finicky',
        long:'High maintenance and un-natural: Turfgrass lawns provide a simple aesthetic, as all plants are substantially the same color, same texture, and same height. The aesthetics of turfgrass are somewhat "artificial" in that they do not resemble how plants grow in nature, which likely leads to much of their anthropological appeal. But the aesthetics of turfgrass are finicky, and require regular maintenance, else the aesthetics change (typically degrade quickly due to height, irregularity, and/or weeds).'
      },
      maint: {
        short:'',
        long:''
      },
      energy: {
        short:'',
        long:''
      },
      ret: {
        short:'',
        long:''
      },
      det: {
        short:'',
        long:''
      },
      fert: {
        short:'',
        long:''
      },
      pest: {
        short:'',
        long:''
      },
      herb: {
        short:'',
        long:''
      },
      pollen: {
        short:'',
        long:''
      },
      bird: {
        short:'',
        long:''
      },
      irrig: {
        short:'',
        long:''
      },
		},
		{ 
      name: 'Sheared Shrubs', 
		  aesthetics: {
        short:'simple, finicky',
        long:'High maintenance and un-natural: Sheared shrubs provide a simple aesthetic, as plants are shaped geometrically (usually in spheres or rectangles). The appearance is usually one color and substantially one texture, with consistency in height and shape. The aesthetics of sheared shrubs is quite "artificial" in that they do not resemble how plants grow in nature, which likely leads to much of their anthropological appeal. Further the aesthetics of sheared shrubs is finicky, as regular growth "un-does" the work of pruning, leading to a "shaggy" appearance that requires re-pruning (typically degrade quickly due to height, irregularity, and/or weeds).'
      },
      maint: {
        short:'',
        long:''
      },
      energy: {
        short:'',
        long:''
      },
      ret: {
        short:'',
        long:''
      },
      det: {
        short:'',
        long:''
      },
      fert: {
        short:'',
        long:''
      },
      pest: {
        short:'',
        long:''
      },
      herb: {
        short:'',
        long:''
      },
      pollen: {
        short:'',
        long:''
      },
      bird: {
        short:'',
        long:''
      },
      irrig: {
        short:'',
        long:''
      },
	  },
		{ 
      name: 'Annuals', 
		  aesthetics: {
        short:'high, ephemeral',
        long:'It is fair to say that annuals have a very high aesthetic rating, as they are used almost entirely for instant beauty.  We\'ll rate annuals aesthetic as ephemeral, as unless self-seeding, annuals are only visible and/or attractive for one season.'
      },
      maint: {
        short:'',
        long:''
      },
      energy: {
        short:'',
        long:''
      },
      ret: {
        short:'',
        long:''
      },
      det: {
        short:'',
        long:''
      },
      fert: {
        short:'',
        long:''
      },
      pest: {
        short:'',
        long:''
      },
      herb: {
        short:'',
        long:''
      },
      pollen: {
        short:'',
        long:''
      },
      bird: {
        short:'',
        long:''
      },
      irrig: {
        short:'',
        long:''
      },
    },
		{ 
      name: 'Ornamental Perennials',
		  aesthetics: {
        short:'high, seasonal',
        long:''
      },
      maint: {
        short:'',
        long:''
      },
      energy: {
        short:'',
        long:''
      },
      ret: {
        short:'',
        long:''
      },
      det: {
        short:'',
        long:''
      },
      fert: {
        short:'',
        long:''
      },
      pest: {
        short:'',
        long:''
      },
      herb: {
        short:'',
        long:''
      },
      pollen: {
        short:'',
        long:''
      },
      bird: {
        short:'',
        long:''
      },
      irrig: {
        short:'',
        long:''
      }, 
    },
		{ 
      name: 'Native Perennials', 
      aesthetics: {
        short:'complex, seasonal',
        long:''
      },
      maint: {
        short:'',
        long:''
      },
      energy: {
        short:'',
        long:''
      },
      ret: {
        short:'',
        long:''
      },
      det: {
        short:'',
        long:''
      },
      fert: {
        short:'',
        long:''
      },
      pest: {
        short:'',
        long:''
      },
      herb: {
        short:'',
        long:''
      },
      pollen: {
        short:'',
        long:''
      },
      bird: {
        short:'',
        long:''
      },
      irrig: {
        short:'',
        long:''
      },
		},
		{ 
      name: 'Native Grasses',
      aesthetics: {
        short:'complex, seasonally variable',
        long:''
      },
      maint: {
        short:'',
        long:''
      },
      energy: {
        short:'',
        long:''
      },
      ret: {
        short:'',
        long:''
      },
      det: {
        short:'',
        long:''
      },
      fert: {
        short:'',
        long:''
      },
      pest: {
        short:'',
        long:''
      },
      herb: {
        short:'',
        long:''
      },
      pollen: {
        short:'',
        long:''
      },
      bird: {
        short:'',
        long:''
      },
      irrig: {
        short:'',
        long:''
      },
    },
    { 
      name: 'Weeds',
      aesthetics: {
        short:'complex, seasonal',
        long:''
      },
      maint: {
        short:'',
        long:''
      },
      energy: {
        short:'',
        long:''
      },
      ret: {
        short:'',
        long:''
      },
      det: {
        short:'',
        long:''
      },
      fert: {
        short:'',
        long:''
      },
      pest: {
        short:'',
        long:''
      },
      herb: {
        short:'',
        long:''
      },
      pollen: {
        short:'',
        long:''
      },
      bird: {
        short:'',
        long:''
      },
      irrig: {
        short:'',
        long:''
      },
    },
		{ 
      name: 'Meadow',
      aesthetics: {
        short:'highly complex, seasonally variable',
        long:''
      },
      maint: {
        short:'',
        long:''
      },
      energy: {
        short:'',
        long:''
      },
      ret: {
        short:'',
        long:''
      },
      det: {
        short:'',
        long:''
      },
      fert: {
        short:'',
        long:''
      },
      pest: {
        short:'',
        long:''
      },
      herb: {
        short:'',
        long:''
      },
      pollen: {
        short:'',
        long:''
      },
      bird: {
        short:'',
        long:''
      },
      irrig: {
        short:'',
        long:''
      },
    },
    { 
      name: 'Wetland',
      aesthetics: {
        short:'complex, seasonally variable',
        long:''
      },
      maint: {
        short:'',
        long:''
      },
      energy: {
        short:'',
        long:''
      },
      ret: {
        short:'',
        long:''
      },
      det: {
        short:'',
        long:''
      },
      fert: {
        short:'',
        long:''
      },
      pest: {
        short:'',
        long:''
      },
      herb: {
        short:'',
        long:''
      },
      pollen: {
        short:'',
        long:''
      },
      bird: {
        short:'',
        long:''
      },
      irrig: {
        short:'',
        long:''
      },
    },
		{ 
      name: 'Forest', 
		  aesthetics: {
        short:'complex, seasonally variable',
        long:''
      },
      maint: {
        short:'',
        long:''
      },
      energy: {
        short:'',
        long:''
      },
      ret: {
        short:'',
        long:''
      },
      det: {
        short:'',
        long:''
      },
      fert: {
        short:'',
        long:''
      },
      pest: {
        short:'',
        long:''
      },
      herb: {
        short:'',
        long:''
      },
      pollen: {
        short:'',
        long:''
      },
      bird: {
        short:'',
        long:''
      },
      irrig: {
        short:'',
        long:''
      },
		},
  ],
  
  elements: [
    {
      element: 'h2',
      text: 'Why are urban meadows important?',
    },
    {
      element: 'text',
      text: 'Overall, we humans have not been very kind to the environment.  We have cut down forests, paved over prairies, drained wetlands, destroyed habitat, sickened bees, polluted waterways, and even started to upset the climate.  None of these is trivial, we depend upon the environment, a habitable climate, and natural resources for food, water, fresh air, building materials, energy, recreation, beauty, security, and more.  Basically we have a pact with the Earth: respect her, or perish.  Earth will be fine either way.  So it is in our best interest to live in greater harmony with Earth.  Urban meadows are a very small, but imminently do-able, item on that list.',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/tpUuSxlxRLiCxsstjv4m',
      alt:'Lurie Garden in full bloom with Chicago skyline in background',
      caption: 'Lurie Garden is a large, magnificent urban meadow Millennium Park in the heart of Chicago. The garden features many plants native to the prairies of the midwest. The garden\'s "design pays homage to Chicago’s transformation from flat marshland to innovative green city, or \'Urbs in Horto\' (city in a Garden)", and is maintained as a model for sustainable urban horticulture and ecology.',
    },
    {
      element: 'h2',
      text: 'Urban meadows are both symbolic and functional.  Both are important.  Let\'s start with functional.',
    },
    {
      element: 'text',
      text: 'Urban meadows are the natural progression of many efforts to plant native perennials, trends toward use of native grasses in landscapes, and increased interest in having a garden without increased interest in maintaining a garden.  Urbanmeadow.org is all about how to appreciate urban meadows, how to design an urban meadow, how to grow an urban meadow, and living with an urban meadow.  Urban meadows can grow on the tiniest plot of land in front of a townhouse, to massive swaths of land such as Lurie Garden in Chicago\'s Millennium Park, or The High Line in New York City.',
    },
    {
      element: 'text',
      text: 'You might think "How is this any different from just planting native perennials or flowering plants?".  Basically this is just a progression of the same ideas.  The progression is toward thinking of plants not as specimens, or even massings, but as self-sustaining communities.',
    },
    // later link to blog about difference between natives and meadow
    {
      element: 'text',
      text: 'Meadows, wetlands, and forests provide the highest benefits.  Meadows have the most potential for broad adoption in urban areas.',
      textStyle: centeredAccentTextCSS,
    },
    {
      element: 'component',
      component: <ImportanceTable />,
    },
    {
      element: 'text',
      text: 'The table above [will] outline comparative differences between some different horticultural and ecological approaches. A few key takeaways include:',
    },
    {
      element: 'ul',
      list: [
        'The most broadly accepted "conventional" landscapes (mown grass and sheared shrubs) have a very simple aesthetic (low variation in color, texture, shape, seasonal variety).',
        'Conventional landscapes are very high maintenance (high energy, high chemical, high irrigation, and high labor demands).',
        'Conventional landscapes provide negligible ecological benefits (habitat, stormwater, habitat, cooling, etc.).',
        'As landscapes approach a more "natural" form (i.e. similar to found in the wild), the aesthetic becomes more complex.',
        'As landscapes approach a more "natural" form, maintenance needs drop, requirement of energy inputs drop, and ecological value rises.',
        'Meadows, wetlands, and forests provide the highest benefits.  Meadows have the most potential for broad adoption in urban areas.',
      ],
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/F9nhvOMBSpGBQrM9hrsF',
      alt:'colorful sunny urban meadow in front of 1-story home by sidewalk, featuring roses, tall grasses, Sedum, wildflowers',
      caption: 'Urban meadows are beautiful, low-maintenance landscapes that provide ecological benefits.',
    },
    {
      element: 'h2',
      text: 'What do we mean by "self-sustaining communities"?',
    },
    {
      element: 'text',
      text: 'A self-sustaining plant community is a group of plants - usually multiple species - that thrives with little help from us humans.  !! Self-sustenance is important! !!  Let\'s take for instance turfgrass.  Turfgrass relies on people for its very survival, as without the constant mowing, taller plants would take its place.  Without chemicals, often non-turfgrass species such as dandelions take its place.  On the other hand, you can probably picture and old field, or a vacant lot, or an abandoned home where nature is left to "do its own thing", i.e those plants are not relying on humans at all.',
    },
    {
      element: 'text',
      text: 'An urban meadow is a self-sustaining plant community that thrives with little help from us, but which isn\'t so hands-off as to be unruly.  But the important part is that most or all needs of urban meadows are met by the sun, rain, air, and soil.  And that is super important!  !! Traditional landscaping and gardening can have a moderate to high carbon footprint, water requirements, and/or create nutrient pollution.  Self-sustaining plant communities - on the other hand - are carbon sinks. !!',
    },
    // {
    //   element: 'plink',
    //   text: [
    //     'Read more about how ',
    //     { construction
    //       href: `${thisUrl}/post/urban-meadows-are-self-sustaining-communities`,
    //       text: 'urban meadows are self-sustaining communities',
    //     },
    //     '. ',
    //   ],
    // },
    // {
    //   element: 'text', construction
    //   text: 'Link to study on carbon sequestration',
    // },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/m4qQKjkVTEeByWrDEkbO',
      alt:'meadow flowers in dappled sunlight',
      caption: 'Once established, urban meadows have minmal maintenance requirements. If well designed, urban meadows can thrive long-term, with minimal inputs other than the sun and the rain.',
    },
    {
      element: 'h2',
      text: 'Biodiversity',
    },
    {
      element: 'text',
      text: [
        'Urban meadows increase biodiversity.  Biodiversity just means multiple different species, and is usually measured relative to a baseline (such as a natural meadow or forest).  The baseline is often existing diversity, when discussing an "increase" or "decrease" in biodiversity.',
        'For example, if a city has 10,000 elm trees, but only 20 Kentucky coffee trees, then planting more Kentucky coffee trees will increase biodiversity (because there were few, and now there are more).  Similarly, if there are no daisies in an area, and you plant daisies, you have just increased biodiversity.  On the other hand, in a city where the majority of plants present are maple trees, boxwood shrubs, coneflowers, and turfgrass, then planting any more of these plants does not increase biodiversity. ',
        'So why is biodiversity important?  Urban meadows are communities, and communities support each other.  When one species suffers, another might take its place until the population rebounds. There is even a phenomenon where "companion plants" help each other ward off pests.  A diversity of plant species is especially important to support a diversity of microbial, insect, and bird life.  Diversity is the foundation of a successful, resilient ecosystem.',
      ],
    },
    {
      element: 'p-link',
      text: [
        '!! Biodiversity is important because it boosts ecosystem productivity, and renders ecosystems more resilient, !! which ',
        {
          href: 'https://www.globalissues.org/article/170/why-is-biodiversity-important-who-cares',
          text: 'this article',
        },
        ' beautifully explains.'
      ]
    },
    {
      element: 'text',
      text: 'Some conversations within the green roof industry might be good examples for discussing biodiversity.  Sedum is the most common type of green roof plant, and Sedums are usually a very small percentage of any plant community outside of green roofs and some Alpine or semi-arid locations. Sedum green roofs are often criticized for "not providing biodiversity".  But since most places do not already have much Sedum, planting Sedum usually increases biodiversity. Mixing other plants in with the Sedum might increase plant or insect biodiversity even more, depending upon what is already present.',
    },
    {
      element: 'text',
      text: 'So, then, how can we justify a blanket statement that urban meadows increase biodiversity?  That might not always be accurate, particularly if a meadow is growing only species already found in abundance in an area.  "Wild" landscapes are almost certainly a minority of landscapes in any urban area, and !! urban meadows will usually include a few species not found in the surrounding manicured plantings, !! at least not found in any quantities.  Ornamental grasses, coneflowers, black-eyed Susans, and daisies have become common landscape plants, but chances are that their populations are relatively low in any given area, and that adding them to urban meadows will increase populations.  And chances are even greater that !! urban meadows will support some species who find no other home in the city. !!',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/V7GU1dp1Qe6YhW4OyQA3',
      alt:'butterfly on Rudbeckia flower (black-eyed Susan)',
      caption: 'Butterflies, bees, and other pollinators rely on abundance of high quality nectar sources, such as the black-eyed Susan, the state flower of Maryland. Increasing nectar sources native to an area and increasing variety of plants used strengthen both plant communities and associated pollinator communities.',
    },
    {
      element: 'h2',
      text: 'Cooling',
    },
    {
      element: 'text',
      text: 'Plants cool the environment, primarily via evapotranspiration.  Transpiration is a process where plants take up water from the soil and evaporate it via pores in their leaves.  Evapotranspiration is the combination of transpiration + evaporation that occurs just when soil, pavement, leaves, and other wet surfaces dry in the sun.  This process is basically an energy transfer: heat from the sun evaporates water, which enters the atmosphere as a vapor. Evapotranspiration is how urban meadows help so much in cooling.',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/FvW0vJqYQ2ZVl80OgXUt',
      alt:'rooftop meadow on Chicago city hall',
      caption: 'Cities are jungles of concrete, asphalt, and steel. Cities such as Chicago become very hot in the summer, which is expected to increase due to the climate catastrophe. Many other environmental improvements, such as low-energy glass and solar panels, increase ambient air temperatues in cities.  Urban meadows - including rooftop meadows such as the roof of Chicago\'s City Hall - are important tools to lower temperatures in cities and suburbs surrounding cities.',
    },
    {
      element: 'h2',
      text: 'Stormwater',
    },
    {
      element: 'text',
      text: [
        'Stormwater retention and cooling go hand-in-hand.  Stormwater retention is water that is retained, or held, by the plant or the soil and which never runs off.  Retained stormwater is the same water used for evapotranspiration, so stormwater retention and evapotranspiration are the same values, which is why retention and cooling are so closely interlinked.',

        '!! Many meadow plants are ideally suited to provide high retention / evapotranspiration !! due to their leaf structure or root structure.',
      ],
    },
    {
      element: 'p-link',
      text: [ 
        'Another aspect of stormwater is water quality, i.e. the cleanliness of stormwater.  Since self-sustaining plant communities, such as urban meadows, require little or no fertilizer or other chemicals, stormwater is automatically improved versus a traditional lawn.  But plants within urban meadows can usually clean water from other areas as well.  If an urban meadow receives water from an adjacent lawn, driveway, plaza, downspout, etc., then it has potential to clean that water before it flows to a drain or stream.  Contact one of our ',
        {
          href: `${thisUrl}/${consultants.meta.path}`,
          text: 'consultants',
        },
        ' if you need help designing this type of urban meadow bioretention.',
      ],
    },
    {
      element: 'text',
      text: [
        'Another aspect of stormwater is detention, or delay.  This is the slowing of runoff, i.e. runoff still occurs, but more slowly than it would otherwise.  Let\'s say all the retention than can occur has occurred, i.e. the soil is wet, and plants have taken up as much water as they need.  The rest will run off.  Stems and twigs within an urban meadow can slow that water down, which is a benefit to prevent overloading the storm drain all at once.  There are many ways to detain stormwater, and urban meadows might or might not help much, depending upon site-specific conditions.',
      ],
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/ipx7XJg0RVOesNloNXkB',
      alt:'raindrops falling off roof, stormwater runoff',
      caption: 'When water flows off your roof, where does it go? Does it flow directly to the storm drain? Is there potential for a meadow to absorb most of that water?',
    },
    {
      element: 'h2',
      text: 'Environmental Impact',
    },
    {
      element: 'text',
      text: [
        '!! Everything we do has some impact.  Is that impact high or low? Beneficial or detrimental? !!',

        'For example, a weedy area could be converted to a planting bed full of flowers that attract bees and butterflies.  Sounds great, right?! But if the weeds were removed with herbicide, and if the newly planted flowers require much more water than natural rainfall, and if the flowers are fed a steady diet of fertilizer... then this landscape "looks" like it provides environmental benefits, while actually polluting and damaging on-site and offsite ecosystems.',

        '!! Urban meadows have a beneficial environmental impact. !!',

        'Much of the reason for this is visible: more greenery, more biomass, pollinator habitat, etc.  Other reasons for these benefits are largely invisible: minimal or no pesticide, herbicide, fertilizer, or irrigation.',
      ],
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/6qQjeb8TBazH2aX3bRz1',
      alt:'man spraying chemicals on turfgrass lawn',
      caption: 'From the 20th Century until now, the solution to so many problems has been to apply chemicals. You can think of the lawn as a sick patient on life support.  In that analogy, fertilizer, irrigation, herbicides, and pesticides are the life support.  Except in the Scottish highlands, turfgrass is usually un-natural, kept alive by excessive work, and often pollution.  Urban meadows shift that mentality to learning what landscape type is healthiest near you, dispensing of the need for such polluting life support systems.',
    },
    {
      element: 'h2',
      text: 'Erosion Control / Slope Stabilization',
    },
    {
      element: 'text',
      text: 'Urban meadows are great for slope stabilization!  Why? Because many meadow plants, particularly tall grasses, have extensive fibrous root systems that hold together soil. Further, urban meadow plants grow together densely, such that little or no ground is visible; this density of roots, shoots, and stems slows down water, protects the surface of soil, and holds soil in place.',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/EJF4CXq2TmuGab5loHNf',
      alt:'meadow-like slope planting with tall grasses, shrubs, and perennials in front of brick home',
      caption: 'This dense, meadow-like planting stabilizes the slope between this house and the sidewalk.',
    },
    {
      element: 'h2',
      text: 'Aesthetics',
    },
    {
      element: 'text',
      text: 'The greatest controversies I have encountered regarding urban meadows have to do with aesthetics. Some people just don\'t like how they look.  Aesthetics is a tricky measure of importance.  It\'s easy to say that aesthetics really don\'t matter to the environment.  But people tend to have very strong feelings about aesthetics.  Many people experience biophilia, a tendency to be drawn to nature, and react positively toward greenery in the city.  Since people make decisions about the built environment, it is important to take aesthetics into account when designing urban meadows.',
    },
    // {
    //   element: 'p-link',
    //   text: [
    //     'Check out the blog posts ',
    //     { construction
    //       href: `${thisUrl}/post/are-urban-meadows-beautiful-it-depends`,
    //       text: 'Are Urban Meadows Beautiful',
    //     },
    //     ' and ', construction
    //     {
    //       href: `${thisUrl}/post/people-think-i-just-grow-weeds`,
    //       text: 'Some People Think I Just Grow Weeds',
    //     },
    //     '.',
    //   ],
    // },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/DgVRXjRxTuiaxCGHjQ5I',
      alt:'red hibiscus flower in wind, background of Solidago and other wetland meadow plants',
      caption: 'A beautiful red Hibiscus flower within a large bioretention urban meadow in Silver Spring, Maryland. Few would dispute the beauty of this flower. If we choose to see it, there is also much beauty within the bright yellow Solidago (goldenrod) and other wildflowers of this meadow.',
    },
    {
      element: 'h2',
      text: 'Education',
    },
    {
      element: 'text',
      text: [
        '!! Urban meadows can be great educational tools! !! Better ecological education is crucial for human survival, and ecology is an area not traditionally emphasized by many schools.  There are abundant opportunities for schools to design, plant, maintain, monitor, or just appreciate urban meadows as something of a microcosm of ecology.',
        'Urban meadows not only provide tangible benefits, they are small enough that we can understand as a means to better understanding macro-ecology.  It is critical that a majority of the population understands and cares about global environmental threats before there is support to mitigate those threats.',
      ],
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/ltQzCmUTSumxp8Ob2iXV',
      alt:'group of people at bioretention garden',
      caption: 'A group of environmental professionals is touring green infrastructure in Atlanta, GA during StormCon 2019.',
    },
    {
      element: 'h2',
      text: 'Symbolism',
    },
    {
      element: 'text',
      text: 'a personal note from Brad Garner',
      textStyle: 'font-size: 14px; font-style: italic;'
    },
    {
      element: 'text',
      text: 'The symbolism of urban meadows is very important to me.  But less so as an outward symbol ("Look at me! I\'m so green my landscape is tall and messy!") but more as a reminder to self.  Many of the things we do to lessen our ecological footprint are small things, and things that are hard to see.  Using less water in the shower, eating organic, eating less meat, recycling, reducing overall consumption, driving less, composting instead of buying fertilizer, installing solar panels, and voting accordingly.  Some of these are invisible.  Many of these aren\'t great conversation starters.  Some of these may be polarizing to some.  Many of these don\'t feel tangible, and I need to feel and see something that embodies these ideals!',
    },
    {
      element: 'text',
      text: 'Not only are urban meadows functional, they are great visual reminders, and for me a great source of joy.  The colors and textures remind me of fields far from the city.  The upward arching of branches, the irregular contours, and the contrast of light and shadow and bright green and dark purple remind me of edges of a forest.  Bees, birds, and butterflies visit and - with the trickle of a small fountain - create a constant source of activity.  When the wind blows, grasses, stems, leaves, and flowers move just enough to remind me to enjoy the breeze.  When I pull weeds - which is rare these days - I sense the benefits (less work!) from years of paying attention to the plants and cultivating plant communities that thrive and do not invite weeds.  When I come home, I often hear crickets chirping when I approach, a reminder that beneath the foliage lies an ecosystem of microbial life that supports small insects which, in turn, support larger insects.  I\m sure birds eat a few of those.',
    },
    {
      element: 'text',
      text: 'Even though I have probably done more environmental good by covering my roof with solar panels, working from home, and reducing our meat consumption, I get more continued joy from my urban meadow, which provides benefits to the environment and to my psyche.  Isn\'t that sustainability?',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/79FjNXqJTEWjvSUIJTs7',
      alt:'urban meadow on slope with Physocarpus orbiculatus and Soliadog in front of home',
      caption: 'The urban meadow in front of my home in Manor Park, Washington, DC. This landscape is part of my identify, part of my reminder to self, a small part of my environmental commitment, and a large source of joy.',
    },
  ],
};