import { fontsToLoadArr } from '../common-styles';
import { thisUrl } from './_general';
import { whatIs } from './what-is';

export const faq = {
  meta: {
    path:        'faq',
    h1Tag:       'Frequently Asked Questions About Urban Meadows',
    // limit title to 55 characters
    seoTitle:       'About',
    specialCardTitle: 'About urbanmeadow.org',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Urbanmeadow.org is a project blah blah',
    image:       'https://cdn.buttercms.com/rIW0ybM1QuF1Rf62ILEv',
    alt:         'melangargia galathea feeding nectar flower',
    hrefLang:    'en',
    categories: [],
    tags: [],
  },
  fontsToLoad: fontsToLoadArr.slice(0,2),
  elements: [

		  /* input: [
		{
      question: '', // just text, no formatting
      answer: { 
        answerBasic: '',     // can include <br>, <ol>, <ul>, <li>, <strong>
                      // live site parses; structured data uses verbatim
				answerLiveOnly: '', // text that appears after basic on the live site only, not in structured data
				answerSrc: '',      // url of image in answer that appears on the live site only, not in structured data
				answerAlt: '',       // alt tag for image (live site only)
				answerA1: '',        // E.g. To learn more read // no formatting in any below
        answerHref: '',      // https://www.example.com
        answerHrefText: '',  // this article
        answerA2: ''         // about green roof detention.
      } // additional text NOT to include in structure data
    }
	] */

		{
			question: 'What is an urban meadow?',
			answer: { 
				answerBasic: 'An urban meadow is a low-impact, self-sustaining plant community provides ecological benefit.',
				answerLiveOnly: null,
				answerA1: 'Check out',
				answerHref: `${thisUrl}/${whatIs.meta.path}`,
				answerHrefText: 'this article',
				answerA2: 'to learn more',
			},
		},
		{
			answer: { 
				answerBasic: null,
				answerLiveOnly: 'Whoa!  Let\'s break that down!',
			},
		},
		{
			question: 'Are "urban meadows" only for cities?',
			answer: { 
				answerBasic: 'A meadow in any developed area can be considered an "urban meadow"; this includes suburbs.  These meadow-type plantings are most needed in areas where development has disturbed most wild areas, hence the focus on "urban" meadows.',
				answerLiveOnly: 'Of course, meadows and ecological plantings are great in rural areas too!  But rural areas usually support these types of plant communities naturally.',
				answerSrc: 'https://cdn.buttercms.com/GCxt1s6uR9207J3lovsU',
				answerAlt: '',
				answerA1: null,
				answerHref: null,
				answerHrefText: null,
				answerA2: null,
			},
		},
		{
			question: 'What is a meadow?',
			answer: { 
				answerBasic: 'Wikipedia https://en.wikipedia.org/wiki/Meadow defines a meadow as "an open habitat, or field, vegetated by grass, herbs and other non-woody plants. They may be sparsely covered with trees or shrubs, as long as they maintain an open character. ... They are largely composed of species native to the region, with only limited human intervention."  We think that is a pretty good definition.  But urban meadows are not for purists, so we\'ll extend our definition of "meadow" to include areas with shade, and to green roofs.  Mostly native, mostly open, and limited human intervention are good hallmarks.',
				answerLiveOnly: null,
				answerA1: null,
				answerHref: null,
				answerHrefText: null,
				answerA2: null,
			},
		},
		{
			question: 'What does "low-impact" mean?',
			answer: { 
				answerBasic: 'Low-impact generally means limited negative consequences.  Why would we even need to say that?  Sadly, much of traditional landscape maintenance and gardening does result in some negative consequences, mostly due to use of herbicides, fungicides, pesticides, and fertilizers.  Of course, any of those could possibly have a justified use, in limited quantities, hopefully as a last resort.  In contrast, one landscape type in particular creates some of the most egregious negative consequences: turfgrass lawns, which use high quantities of any or all of the aforementioned chemicals.  A true urban meadow steward will avoid use of chemicals and any other negative impacts.',
				answerLiveOnly: null,
				answerA1: null,
				answerHref: null,
				answerHrefText: null,
				answerA2: null,
			},
		},
		{
			question: 'How are urban meadows "self-sustaining"?',
			answer: { 
				answerBasic: 'Picking up on the definition of "meadow" above, this just means with "limited human intervention".  I.e. the plants are able to take care of themselves with only the rain, air, sunshine, soil, and maybe a little trimming and composting from us.  Successful urban meadows will thrive with just a little help from their human friends.',
				answerLiveOnly: null,
				answerA1: null,
				answerHref: null,
				answerHrefText: null,
				answerA2: null,
			},
		},
		{
			question: 'What is a "plant community"?',
			answer: { 
				answerBasic: 'Just like a community of people contains more than one person, a community of plants contains more than one species.  Typically this includes some layering of plants, such that there is a very low groundcover layer, and then 2 or 3 or more layers that predominantly occupy various heights above the soil.  Plants in communities "get along" with each other, minimally compete for resources, and generally support each other.  Plant communities are usually quite dense when they mature, such that very little soil is visible, which prevents intrusion of unwanted plants (weeds).',
				answerLiveOnly: null,
				answerA1: null,
				answerHref: null,
				answerHrefText: null,
				answerA2: null,
			},
		},
		{
			question: 'What are the "ecological benefits" of urban meadows?',
			answer: { 
				answerBasic: 'Urban meadows are ideally more than just beautiful, but also provide some sort of benefit to the environment, the most common of which is pollinator habitat.  Habitat can be a place to forage, rest, or nest.  If bees are visiting flowers, those flowers are providing some habitat.  If birds are nesting in an urban meadow, that\'s another example of habitat.  Habitat is a benefit.  But other benefits could be stormwater, cooling the local area, preventing erosion, or enriching the soil.  Ideally multiple ecological benefits are achieved by any given urban meadow.',
				answerLiveOnly: null,
				answerA1: null,
				answerHref: null,
				answerHrefText: null,
				answerA2: null,
			},
		},
  ],
};