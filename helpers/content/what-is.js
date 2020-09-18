import { 
  fontsToLoadArr, 
  defTextStyleObj, 
  uMGreenLighter, 
  centeredAccentTextCSS} from '../common-styles';
import { thisUrl } from './_general';
import { importance } from './importance';
import { gallery } from './gallery';
import { grow } from './grow';
import { plant } from './plant';
import { home } from './_home';
import { resources } from './resources';

export const whatIs = {
  meta: {
    path:        'what-is-an-urban-meadow',
    h1Tag:  'What is an Urban Meadow?',
    // limit title to 55 characters
    seoTitle:       'What is an Urban Meadow?',
    specialCardTitle: 'What is an Urban Meadow?',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'What is an Urban Meadow?',
    image:       'https://cdn.buttercms.com/xfSA37KKQZWJJsfRniKA',
    alt:         'lush urban meadows at rowhouses in Dupont Circle, Washington DC',
    hrefLang:    'en',
    categories: [],
    tags: [],
  },
  fontsToLoad: fontsToLoadArr.slice(0,2),
  elements: [
    {
      element: 'text',
      text: 'To make it easy, this page utilizes photographic examples to show what an urban meadow might look like, what an urban meadow is !! NOT, !! what you !! WILL !! find in an urban meadow, and what you will !! NOT !! find in an urban meadow.'
    },
    {
      element: 'text',
      text: home.tagline,
      textStyle: centeredAccentTextCSS,
    },
    {
      element: 'text',
      text: '!! Urban meadows are smart, sensible ways to preserve or restore natural areas. !!  Urban meadows are not just "greenery".  Much of the greenery or traditional landscape that we see in urban areas relies heavily on maintenance to keep plants the right size, to keep plants alive, to prevent weedy overgrowth. !! Urban meadows far are more than adding green to cities. Urban meadows create natural ecosystems in cities. !!',
    },
    {
      element: 'p-link',
      text:[
        'If you already understand what an urban meadow is, check out ',
        {
          href:`${thisUrl}/${importance.meta.path}`,
          text: 'the importance of urban meadows',
        },
        ', ',
        {
          href: `${thisUrl}/${plant.meta.path}`,
          text: 'how to plan and plant urban meadows',
        },
        ', ',
        {
          href: `${thisUrl}/${grow.meta.path}`,
          text: 'how to grow urban meadows',
        },
        ', and ',
        {
          href: `${thisUrl}/${gallery.meta.path}`,
          text: 'a gallery with many examples of urban meadows',
        },
        '.',
      ],
    },
    {
      element: 'image-pack',
      list: [
        {
          src:'https://cdn.buttercms.com/jbL4OoZRl6YyTsz8vDRT',
          alt:'suburban house behind large lawn and small foundation plantings',
          caption: 'At its most basic level, an urban meadow takes a little bit of this (wild meadow)...',
          imageStyle: 'height: 80%',
        },
        {
          src:'https://cdn.buttercms.com/nt0MrBdbSvCoxxm3orhe',
          alt:'back yard of surburban house with large mown lawn and large rounded sheared hedge',
          caption: '...and inserts it into this (fully developed area, with very little natural or wild space remaining).',
          imageStyle: 'height: 80%',
        },
      ],
    },
    {
      element: 'text',
      text: 'The meadow in the first image above, has likely evolved over hundreds, if not thousands of years. During this evolution plants have flourished if they are best suited to the rainfall patterns, temperatures, drainage patterns, sunlight, wind, and soil of that area. Many species of plants occupy the same area, providing an extremely resilient landscape that is home to a huge diversity of microbes, small insects, large insects, birds, butterflies, and other fauna.',
    },
    {
      element: 'text',
      text: 'In the second image above, the city of Chicago, like many cities, is a dense jungle of concrete, stone, steel, and asphalt, with only tiny fragments remaining of the ecosystems it replaced.  Though dense urban development offers many advantages over sprawl, there are massive downsides to choking out all natural areas.',
    },
    {
      element: 'h3',
      text: 'The High Line: An Exemplary Urban Meadow',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/I5m7HTcTT5esDq0xhxze',
      alt:'green grasses at The High Line in summer',
      caption: 'Urban meadow at the High Line in New York, NY',
    },
    {
      element: 'p-link',
      text: 
      [
        'One of the best-known urban meadows is ',
        {
          href:'https://www.thehighline.org/',
          text: 'the High Line', 
        },
        ' in New York City. We\'ll start here, because it is so visible and well known.'
      ],
    },
    {
      element: 'text',
      text: 'The High Line once was an elevated railroad in lower Manhattan.  The railroad fell into disuse and disrepair.  The elevated railroad\'s gravel bed began to form a sort of soil over the many years, and left in the hands of Mother Nature, this soil began to sprout a wide variety of beautiful plants. Essentially, The High Line became a meadow. This saved the railroad from demolition. A few visionaries saw the potential for this to become a park (with meadow intact, not just hard paving, and not ornamental flowers and shrubbery). A talented design team converted The High Line into one of the world\'s best known parks... and that park happens to be an urban meadow!',
      // ADD NAMES OF DESIGN TEAM AND LINKS TO WEB SITES
    },
    {
      element: 'text',
      text: 'Though The High Line is a wonderful example in so many ways, it is far from a typical case, as The High Line is a highly visited landscape in a dense city.  The High Line is as much "experience" as it is ecosystem, and thus it requires an unusually high maintenance effort for an urban meaodw.',
      // LINK TO ARTICLE ABOUT MAINTENANCE OF THE HIGH LINE
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/NcPD3DpRG6LEGYjRL9TP',
      alt:'brown grasses at The High Line in fall',
      caption: 'Tall grasses and spent wildflowers at The High Line in late summer / early fall',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/3ZyRK136TQOAnWFfwq8O',
      alt:'brown grasses at The High Line in fall',
      caption: 'Tall grasses and spent wildflowers at The High Line in late summer / early fall',
    },
    {
      element: 'text',
      text: 'So what makes The High Line an urban meadow? Let\'s start with the !! least important but most readily apparent attribute: aesthetics. !! In the three photos above, you can see green grasses, brown grasses, several spent flowers, and (if you look hard) a few not-so-showy flowers.  To many people, these look like weeds.  But they are, in fact, highly intentional plantings, designed and selected by very talented horticulturalists, ecologists, and landscape architects.'
      // MORE LINKS TO THESE PROFESSIONALS
    },
    {
      element: 'text',
      text: 'Urban meadows are "natural" or "naturalistic" plantings.  I.e. they grow in masses just as they do in the wild, which has a different look, feel and texture than the manicured landscapes many people are used to.  !! Urban meadows have something of a "hands off" look. !! Most of us have been culturally trained to associate "hands off" with neglect.  And what are neglected, unwanted plants?  Weeds.  To the untrained eye, urban meadows are often perceived as weeds.',
    },
    {
      element: 'text',
      text: 'Aesthetic perceptions are one of the greatest barriers to urban meadow adoption. Smart design + a little education can overcome that barrier.',
      textStyle: centeredAccentTextCSS,
    },
    {
      element: 'text',
      text: 'Since urban meadows are "natural" plantings, they incorporate several naturally occuring plants, i.e. species native to that area.  Urban areas are altered from natural ecosystems, and the constant gaze of human eyes demands a bit more consistent aesthetic than might be possible with only native plants. For those two reasons, urban meadows often incorporate some non-native plants, to create a landscape that is both ecologically functional and attractive to people.',
    },
    {
      element: 'h3',
      text: 'Urban Meadows Closer To Home',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/F9nhvOMBSpGBQrM9hrsF',
      alt:'bright colorful residential urban meadow in summer',
      caption: 'Colorful urban meadow in a residential neighborhood in Washington, DC',
    },
    {
      element: 'text',
      text: 'At the opposite end of the spectrum from The High Line, are urban meadows such as this, in Washington, DC.  This is a bright, beautiful, sunny, colorful, and fun DIY landscape. Homeowners can do this; apartment buildings with a little space at street level can incorporate this; this can be done in planting strips at urban office buildings; a similar approach can be done in parks.  !! Whereas The High Line is visible, it\'s huge and daunting, but you can do this! !!',
      // ADD A LINK TO THIS PROJECT IN THE GALLERY
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/0b7qzYZ3T0mYwjQOk2iO',
      alt:'sidewalk meadow planting',
      caption: 'sidewalk meadow planting',
    },
    {
      element: 'text',
      text: '!! Urban meadows can be large or small! !!  The cute example above is a very small urban meadow on either side of a sidewalk, also in Washington, DC.  This lovely planting was installed and is maintained by a multicultural day care center. There are several native grasses, some Achillea (which is native to many parts of the world), several native Asters, some native Solidago (goldenrod), and a few friendly exotics, including a very fragrant rosemary.',
      // ADD A LINK TO THIS PROJECT IN THE GALLERY
    },
    {
      element: 'text',
      text: 'If you are new to this site and new to the concept of urban meadows, by reading this far, you mgiht be thinking "OK, I\'ve got it. Urban meadows are just messy, and look weedy."  That\'s an understandable first take, but it is very much an oversimplification. Read on!'
    }, // LINK TO ARTICLE PEOPLE THINK I GROW WEEDS
    {
      element: 'h3',
      text: 'What is NOT an Urban Meadow?'
    },
    {
      element: 'text',
      text: 'Sometimes the easiest way to explain what something is, is to illutrate what it is not.  Urban meadows can manifest themselves in many different ways, which can make the difficult to define.  But urban meadows never look anything like the images below.',
    },
    {
      element: 'image-pack',
      list: [
        {
          src:'https://cdn.buttercms.com/U96NAWDUSzGPxEB6NPoQ',
          alt:'suburban house behind large lawn and small foundation plantings',
          caption: 'NOT an urban meadow',
          imageStyle: 'height: 80%',
        },
        {
          src:'https://cdn.buttercms.com/vGJ8nQCh0ClJWWPUqgtQ',
          alt:'back yard of surburban house with large mown lawn and large rounded sheared hedge',
          caption: 'NOT an urban meadow',
          imageStyle: 'height: 80%',
        },
        {
          src:'https://cdn.buttercms.com/BU0gosreQTIVXyKRiOzd',
          alt:'front yard of surburban house with mown lawn and large rounded sheared hedge',
          caption: 'NOT an urban meadow',
          imageStyle: 'height: 80%',
        },
        {
          src:'https://cdn.buttercms.com/WaAe9IijQSWRwZUAAzrp',
          alt:'wide asphalt surburban street with mown lawns on both sides',
          caption: 'NOT an urban meadow',
          imageStyle: 'height: 80%',
        },
      ],
    },
    {
      element: 'text',
      text: 'The four images above show examples of landscapes that are NOT urban meadows, characterized by the predominance of mown lawns, lack of species that provide much habitat value, obsession with tidiness of the landscape (neatly sheared shrubs, carefully trimmed turf), creation of landscapes that require constant maintenance (imagine how any of these look without mowing or pruning for a month or two), and general lack of anything (except one rhododendron) that a bee or butterfly would be attracted to.  All these photos show greenery, but in all cases, what is shown is essentially an ecological wasteland.',
    },
    {
      element: 'text',
      text: 'Urban meadows are the antidote to ecological wastelands.',
      textStyle: centeredAccentTextCSS,
    },
    {
      element: 'h3',
      text: 'What You Will Find in Urban Meadows'
    },
    {
      element: 'text',
      text: 'Successful urban meadows attract and feed bees and butterflies.  But many ornamental plants do the same, even if not planted in so-called meadows.  The difference with urban meadows is that these bee- and butterfly-attracting plants grow in harmony with many other species, as part of a rich ecosystem that starts with the soil.',
    },
    // LINK TO ARTICLE ABOUT SELF-SUSTAINING COMMUNITIES
    {
      element: 'image',
      src:'https://cdn.buttercms.com/xoZo6cTtTXehO1r7efbM',
      alt:'Melangargia galathea',
      caption: 'Melanargia galathea (marbled white butterfly) feeding on a clover blossom',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/VvsoLDnpSjGssr5oZfTH',
      alt:'hands cupping soil',
      caption: 'Healthy soil is the foundation of any ecosystem.',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/UUTCevSQWUk7ijRJ2Rzg',
      alt:'Monarch butterflies feeding on milkweed',
      caption: 'Monarch butterflies feeding on milkweed',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/3hQkulayRSGdxzuRr186',
      alt:'Seed pod opening in fall',
      caption: 'Seed pod opening in fall',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/AsVJRhWRQWnvrjBt4L1P',
      alt:'single bee on white flower',
      caption: 'Single bee on white flower',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/A7IDSttTyiSBaHCZyH5p',
      alt:'two bees on thistle flower',
      caption: 'Two bees on thistle flower',
    },
    {
      element: 'text',
      text: [
        'The several images above zoom in to urban meadows.  When looking at urban meadows from afar, even when just casually passing by them on the street, you might not notice the real benefits.  To understand the benefits, look closely, and consider what is going on.',
        'Benefits other than pollinator habitat might be hard to see.  These include stormwater benefits, cooling effects, building a rich and fertile soil, and doing so without requiring chemical pollutants.  But the presence of pollinators (and birds, and mantises!) is visible! And this visibility is great for geting our attention.'
      ],
    },
    {
      element: 'h3',
      text: 'Lurie Gardens: Another Great Urban Meadow!'
    },
    {
      element: 'text',
      text: 'Another great urban meadow, on par with The High Line, is Lurie Gardens in Chicago\'s Millenium Park. Check it out below and in the gallery of projects.'
    },
    // ADD LINKS TO LURIE GARDENS HOME PAGE, LINK TO GALLERY, LINK TO DESIGN TEAM
    {
      element: 'image',
      src:'https://cdn.buttercms.com/aKFiZxgWRLu4hcVob7Xe',
      alt:'pink coneflowers blooming at urban meadow at Lurie Gardens Millennium Park Chicago',
      caption: 'Pink coneflowers blooming at Lurie Gardens urban meadow in Millennium Park Chicago',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/7lM7H8VuRK60C0UBG8z3',
      alt: 'Yellow achillea blooming at Lurie Gardens urban meadow in Millennium Park Chicago',
      caption: 'Yellow achillea blooming at Lurie Gardens urban meadow in Millennium Park Chicago',    
    },
    {
      element: 'text',
      text: 'Lurie Garden, is designed as a model for sustainable, ecological urban horticulture. From luriegarden.org "Visitors find respite and inspiration in four seasons. In early spring, sun-hungry bulbs and perennials stretch through soil and begin anew. Summer and fall teem with the flutter of butterflies and birds. Winter’s seed heads and ornamental grasses capture snow and ice, creating graceful art forms. Lurie Garden is living art – a palette of texture and color blending Chicago’s unique culture, ecology, history and people."'
    },
    // ADD LINKS TO LURIE GARDENS HOME PAGE, LINK TO GALLERY, LINK TO DESIGN TEAM
    {
      element: 'h3',
      text: 'Urban Meadows are Low Maintenance'
    },
    {
      element: 'text',
      text: 'If you have read this far, hopefully you have a better idea about what an urban meadow looks like, a few ideas about what it does NOT look like, and some idea about its ecological differences.  But you might be thinking "That looks like a lot of work!"  Think again!',
    },
    {
      element: 'text',
      text: [
        'Urban meadows are relatively low maintenance.  Initial planting is similar to any other initial planting (water, weed, some replacements).  But after initial planting, maintenance drops off signifiantly.  This is because urban meadows are natural ecosystems, and nature doesn\'t need our constant help.',
        'Traditional landscapes rely extremely heavily on constant human intervention (maintenance!).  See below for a few visuals of what is NOT required for care of urban meadows.'
      ],
    },
    {
      element: 'image-pack',
      list: [
        {
          src:'https://cdn.buttercms.com/OkX5LIolTFW3dQbaq4DG',
          alt:'man shearing very tall hedge next to lawn',
          caption: 'NOT for urban meadows',
        },
        {
          src:'https://cdn.buttercms.com/rZhcorG3TMyPbBSUVd8v',
          alt:'man with leaf blower in to lawn',
          caption: 'NOT for urban meadows',
        },
        {
          src:'https://cdn.buttercms.com/IhKx7i4SIevstQOvTkRf',
          alt:'man mowing lawn with fence and sparse shrub border',
          caption: 'NOT for urban meadows',
        },
        {
          src:'https://cdn.buttercms.com/xAhN0RMR46ntMkaGaUcA',
          alt:'man collapsed next to lawn mower in lawn',
          caption: 'NOT happening in urban meadows!',
        },
      ],
    },

    {
      element: 'h3',
      text: 'So I Just Stop Mowing and Trimming? Easy. Right?'
    },
    {
      element: 'p-link',
      text: [
        'No, just stopping maintenance is not how meadows are grown.  Sorry, we wish it were that easy.',
        'If you just stop maintenance and let nature go to work, eventually the landscape might reach some productive ecological equilibrium.  But that could take years, or decades!  Meanwhile, weeds or invasive species are likely to flourish until something out-competes them. Before The High Line evolved to a meadow (which was completely removed and re-built when it was converted into a park) it went through a long weedy period.',
        'Check out the pages about ',
        {
          href: `${thisUrl}/${plant.meta.path}`,
          text: 'how to plant an urban meadow, ',
        },
        ' and ',
        {
          href: `${thisUrl}/${grow.meta.path}`,
          text: 'how to grow or care for an urban meadow',
        },
        '.  But just to underscore that urban meadows are NOT weeds, see a few images below.'
      ],
    },
    {
      element: 'image-pack',
      list: [
        {
          src:'https://cdn.buttercms.com/92zn7WI7TTyinUPawCpL',
          alt:'dense shrubs at sidewalk of urban home',
          caption: 'Overgrown shrubs are NOT an urban meadow',
          imageStyle: 'height: 80%',
        },
        {
          src:'https://cdn.buttercms.com/4SLkuEARQEancnsKWJCR',
          alt:'dense shrubs at sidewalk of urban home',
          caption: 'Overgrown shrubs are NOT an urban meadow',
          imageStyle: 'height: 80%',
        },
        {
          src:'https://cdn.buttercms.com/hrNaGJS4RTWWDjenOMVu',
          alt:'weeds at side of house along alley',
          caption: 'Weeds are NOT an urban meadow',
          imageStyle: 'height: 80%',
        },
        {
          src:'https://cdn.buttercms.com/pZKY6BmVRlyoJriUXmU4',
          alt:'crabgrass in full bloom at side of house along alley',
          caption: 'Weeds are NOT an urban meadow',
          imageStyle: 'height: 80%',
        },
      ],
    },
   
    {
      element: 'h3',
      text: 'I Have Ornamental Grasses. That\'s a Meadow, Right?'
    },
    {
      element: 'text',
      text: 'Grasses are a great start, and tall grasses are one of the more common meadow plants, but it\'s just that: a start.',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/zDn8m7vWSR6z2KB5SLfs',
      alt:'mono-species planting of ornamental grasses',
      caption: 'This planting is almost entirely one species of Miscanthus grass, with a little sage on the far right, and some Indiangrass in the back right. Notice how much bare ground (mulch) is visible. This is NOT yet a meadow.',
    },
    {
      element: 'image',
      src:'https://cdn.buttercms.com/I5m7HTcTT5esDq0xhxze',
      alt:'green grasses at The High Line in summer',
      caption: 'Mix of grasses and a few wildflowers at The High Line (repeat of image from top of page).  Notice there is no mulch! There is no need for mulch, as plants cover all available space. This full utilization of space minimizes weeds and maximizes ecological benefits.',
    },
    {
      element: 'text',
      text: 'The pair of images above contrasts two different approaches to growing a grassy landscape.  The first image is just grasses.  The second image is a meadow.  The difference? The second image mixes species together in ways that minimize weeding, maximize seasonal impact, maximize the use of soil, and maximize habitat value for bees and butterflies.',
    },

    {
      element: 'image',
      src:'https://cdn.buttercms.com/kxq7Q6C7QXyBXhi01p85',
      alt:'beautiful meadow with multiple tall grasses, wildflowers, in yellows, oranges, greens, and browns',
      caption: '',
    },
    {
      element: 'p-link',
      text: [
        'Checkout our ',
        {
          href: `${thisUrl}/${resources.path}`,
          text: 'searchable resources page',
          sameTab: true,
        },
        ' for more information.'
      ],
    },
  ],
};