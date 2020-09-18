import { 
  fontsToLoadArr, 
  centeredAccentTextCSS } from '../common-styles';
import { thisUrl }        from './_general';

export const about = {
  meta: {
    path:        'about',
    h1Tag:       'About urbanmeadow.org',
    // limit title to 55 characters
    seoTitle:       'About',
    specialCardTitle: 'About urbanmeadow.org',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Urban meadows enhance biodiversity, help cool cities, provide habitat for birds and pollinators, help manage stormwater, and improve the soil.',
    image:       'https://cdn.buttercms.com/THOw8LuASpm3WTski2Er',
    alt:         'two bees pollinating yellow flowers',
    hrefLang:    'en',
    categories: [],
    tags: [],
  },
  fontsToLoad: fontsToLoadArr.slice(0,2),
  elements: [
    {
      element: 'p-link',
			text: [
        {
          href: `${thisUrl}/dedication`,
          text: 'Urbanmeadow.org is dedicated in the memory of Greg Long',
        },
      ],
      textStyle: centeredAccentTextCSS,
    },
    {
      element: 'author',
      text: 'by Brad Garner',
    },
    {
      element: 'h3',
      text: 'Urban meadows are not widely appreciated.  I want to change that.'
    },

    {
      element: 'p-link',
      text: [
        'I started urbanmeadow.org after about 15 years of ',
        {
          href: `${thisUrl}/post/case-study-garner-residence`,
          text: 'growing my own urban meadow',
        },
        '. Neighbors asked a lot of questions, many of them not so nice.  A few neighbors in particular complained to the city (Washington, DC), and the city issued fines and citations almost every year.  One of my dearest - and most candid - neighbors sees me plucking a few bindweed vines and asks "What are you doing?".  I respond "pulling weeds".  He says "So you gon\' pull the whole damn thing up?".  The same neighbor asks one day, "What the hell is going on over there? It looks like no-one lives there, like you jus\' don\' give a damn! Why the hell you let a bush grow on ya damn house?!" (he is referring to the Virginia creeper shading my south-facing brick wall).',
      ],
    },
    {
      element: 'image',
      src: 'https://cdn.buttercms.com/oTwuAwTjTuu438uhEJrS',
      alt: 'Sorgastrum nutans and Solidago in October urban meadow',
      caption: 'Spikes of Sorgastrum nutans (Indian Grass) and blooms of Solidago (Goldenrod). Yes, that\'s an oak sapling behind them; I let it sprout until I decided against it. Not everyone "gets" this approach.',
    },
    {
      element: 'text',
      text: '!! Eventually I realized that what I\'m doing is really novel to some people. !!  That\'s not surprising given my training and experience in landscape architecture and ecological restoration.  I have designed and overseen restorations of historic Olmsted landscapes that involved massive plantings of wildly diverse plants.  I have read Olmsted writings describing the rationale for these plantings, and how they are intended to evoke certain emotions; vines were often included in the plantings with the intention that vines would climb shrubs to make the foliage even denser, mysterious, and rich.  Much of this work was within 19th Century cities, where residents were in crowded homes, breathing polluted air, and the urban landscape was increasingly brick, stone, and concrete.  These wonderful Olmsted parks that I studied and worked on were refuges in those times: places where the air was cleaner, the vegetation hearkened to a wilder place, the summer temperature was cooler, people could break from the harshness of urban life, and birds, bees, butterflies, and small mammals built homes.',
    },
    {
      element: 'image',
      src: 'https://cdn.buttercms.com/OgBMInhuRYycLZdbAKFo',
      alt: 'Historic wooden bridge over Branch Brook in Branch Brook Park, Newark, New Jersey',
      caption: 'Historic wooden bridge over Branch Brook in the Northern Division of Branch Brook Park, Newark, New Jersey. Olmsted Jr. designed the Northern Division of the park to be the most natural, a true refuge from the city. I worked on the restoration of this park for 10 years.  Dense, often very tall, shrub plantings were integral to the design, comprised predominantly of species native to New Jersey.',
    },
    {
      element: 'image',
      src: 'https://cdn.buttercms.com/3J67HXTUyaYZqfOMu8AH',
      alt: 'Brad Garner in wetland, amongst tall blades',
      caption: 'Another landscape that inspired me: this is me in a flourishing man-made wetland in Nairobi, Kenya. I was there as part of a water resources team. Though much of Nairobi is very green despite perpetual drought, this sewage-treatment wetland was absolutely teeming with life.',
    },
    {
      element: 'image',
      src: 'https://cdn.buttercms.com/i1KdhjqPTIGgN3DMDAdH',
      alt: 'Brad Garner on safari in Kenya',
      caption: 'One final photo of some of the trio of my inspiration: the beauty of savanna. Yes, this is that same trip to Kenya. Up close, most people would not find many of these plants "beautiful", but at this scale, the dry, pale, and very rugged landscape has a certain surreal beauty.',
    },
    {
      element: 'text',
      text: '!! So what do historic parks, crazy-tall wetlands, and savanna have to do with urban meadows? !! In all three of these examples I find a certain authentic beauty. Unsurprisingly, this is because the plants (whether selected by a designer or by nature) are !! authentic to their location. !! We often hear this as "native plants", but I don\'t want to over-emphasize the origin of a species. More importantly, the shape, texture, growth habit, and ecological functions fit the environment where the plants grow. And this is not only beautiful to look at... I think it is beautiful to think about.'
    },
    {
      element: 'h3',
      text: 'My training and experience influence my perceptions of nature. At urbanmeadow.org I hope to help others appreciate urban nature from a different perspective.'
    },
    {
      element: 'text',
      text: 'The problems of Olmsted saw in 19th Century urban America are not the problems we have now.  Or are they?  Most cities are far cleaner - or at least appear far cleaner - than in those industrial times.  Parks are more abundant.  Our overall access to someplace green is higher now than it was then.  And that is great!  But what is the quality of those green spaces?  It depends.  Fortunately many parks - such as Rock Creek Park in DC, or Central Park in New York, are home to wild places and forests.  !! But most of our daily interactions with green spaces are what I might refer to as sterile: mown lawns, "neatly spaced" plants, sheared hedges, or landscapes that just take too much work to keep looking good. !!',
    },
    {
      element: 'image',
      src: 'https://cdn.buttercms.com/0J9aQTZFSUG0k9iMA92I',
      alt: 'purple hibiscus flower bud in wetland urban meadow',
      caption: 'A purple hibiscus flower bud in a stunning rain garden / urban meadow in Silver Spring, Maryland.',
    },
    {
      element: 'text',
      text: '!! Urban meadows are a different way of thinking. !!  And thinking back to the first paragraph, with the odd looks and blunt questions I received about my own urban meadow, I realized that much of the world just has not been exposed to this way of thinking.',
    },
    { 
      element: 'text',
      text:  'There is some rather unfortunate animosity within some landscape and horticultural circles, and I just want to be extremely clear up-front about the stance of urbanmeadow.org on some topics that this site is likely to stir up.  I am not on a crusade to ban lawns; lawns can be great.  I have no desire to get rid of whatever non-urban-meadow landscape that someone else prefers.  Urban meadows are not necessarily better than anything else; they are a choice, and sometimes a good choice, but that is all. I strongly encourage using native plants... when they make sense. And I think there are many nuances around what is "invasive", and you might see some photos on this site with some of the tamer and calmer "invasive species" such as Vinca minor. Let\'s just all agree that we support bees, butterflies, birds, and living in greater harmony with the Earth, and that friendliness and happiness is more likely to bring us converts than dogma.  End of rant.',
    },
    {
      element: 'image',
      src: 'https://cdn.buttercms.com/F9nhvOMBSpGBQrM9hrsF',
      alt: 'residential urban meadow with natives and exotics',
      caption: 'A beautiful residential urban meadow in Washington, DC, incorporating native species and non-native species. Many of these plants attract bees. Urban meadows are a joy to behold, and require far less care than you might expect.',
    },
    {
      element: 'h3',
      text: 'Urbanmeadow.org has two goals:',
    },
    {
      element: 'ol-with-em',
      list: [
        '!! Educate !! people about what an urban meadow is, why urban meadows are important, how to grow an urban meadow, and to see examples of them.',
        '!! Build a community !! of urban meadow supporters who share ideas, and collectively support the first goal.',
      ],
    },
    {
      element: 'text',
      text: 'To accomplish these goals, the first draft of the site includes a lot of information from me, with a focus on my own urban meadow, several other urban meadows (mostly "starter" urban meadows, which is great) in my neighborhood, and projects referred to me by friends and colleagues.  I also include some information about some noteworthy large projects, such as The High Line in New York and Lurie Gardens at Millennium Park in Chicago.',
    },
    {
      element: 'text',
      text: 'In-line with education and community is !! making urban meadows accessible. !! It can be really hard to know where to start. And there can be abundant disappointment in the beginning if you make a wrong turn. The barrier to urban meadows is not cost; it is more likely education. Collectively let\'s educate each other on this, for free, and realize greater adoption.',
    },
    {
      element: 'h3',
      text: 'The site includes three ways to showcase projects.  Submit projects at urbanmeadow.org/contact',
    },
    {
      element: 'ol-with-em',
      list: [
        '!! A gallery. !!  All that is needed is at least one photo and a caption.  But this can expand up to multiple photos and captions.  Projects can be anonymous or include the owner, contractor, designer, address, etc.',
        '!! Case studies. !!  Whereas the gallery is a great way to show what a project looks like (and which pollinators are attracted!), sort of as an idea book, a case study is much better for discussing things like the design process, overcoming obstacles, a particular maintenance practice, or to do a deep dive into a project.',
        '!! Videos.  !! Contact us with ideas.  You send it, we might dress it up, and we\'ll promote it.  You\'ll be fully credited!',
      ],
    },
    {
      element: 'image',
      src: 'https://cdn.buttercms.com/mW9ZejrvQIKcjSI4nooN',
      alt: 'native grasses growing on The Highline Park, New York City',
      caption: 'Projects can be of any scale There is one "tiny" project in the gallery that is only about 4m2 (36 sf). At the other end of the spectrum are massive projects such as the High Line, a 2.4km (1.5 mi) long linear park in New York, NY.  The High Line was probably the the best-known urban meadow in North America.',
    },
    {
      element: 'h3',
      text: 'Urbanmeadow.org includes five other ways to get involved.  Contact us at urbanmeadow.org/contact for details.',
    },
    {
      element: 'ol-with-em',
      list: [
        '!! A blog. !! The blog is totally open-ended as long as the post covers something of importance related to urban meadows.  Don\'t want to write an entire article? Short articles are fine, or we can co-author.  Here\'s a few ideas to get the ball rolling: identifying pollinators, plants you tried that worked or didn\'t, shade meadows, managing public perception, I love urban meadows but my spouse or neighbor hates them, dealing with poor soils, I didn\t know where to get started with a meadow but here\s how I did it, the joy I find in my urban meadow (which can include a park or landscape nearby!), or whatever speaks to you.',
        '!! Resources. !! There are so many great resources available, and this site can function as a clearinghouse for those.  Some of these are hard to find, particularly because they tend to be issued by local jurisdictions.  Send them all!  As the list grows, I will work on sorting, searching, and filtering functions to make these easier to navigate.',
        '!! Consulting. !! I expect many people who visit urbanmeadow.org will want a helping hand.  We have assembled a stellar team of consultants who are able to help in almost any part of the world, with no project too large, and no question too small. Click "consultants" from the menu.',
        '!! Content experts. !! I think it would be nice to identify every pollinator, every bird, and every plant by species.  But I do not have the expertise to do all that, and neither will every other contributor.  Surely someone in the community can help.  If you let us know your expertise and that you\'re willing to help, I might send a specific question in advance of adding content.  If you have certain expertise and see a gap in our content on social media, point it out!  We will cheer you on, and will make the addition/correction.',
        '!! Follow Urban Meadow !! on Twitter, LinkedIn, YouTube, and/or Pinterest (see links in footer).  Please like and share to spread the word.  We\'ll try to provide plenty of light and beautiful content for all to enjoy.  Really, what\'s not to love about urban meadows!',
      ],
    },
    {
      element: 'image',
      src: 'https://cdn.buttercms.com/zAbErdhREGgf42kgLKEw',
      alt: 'bee on a white flower',
      caption: '',
    },
  ],
};