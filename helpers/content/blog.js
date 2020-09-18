import { fontsToLoadArr } from '../common-styles';

export const blog = {
  meta: {
    path:        'blog',
    h1Tag:        'The Urban Meadow Blog',
    // limit title to 55 characters
    seoTitle:       'The Urban Meadow Blog',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'The Urban Meadow Blog bringing you the latest Urban Meadow news and research!',
    image:       'https://cdn.buttercms.com/k7kEC75S12ikgr6pyFSL',
    alt:         'purple flowers in a meadow landscape near a street',
    hrefLang:    'en',
  },
  fontsToLoad: fontsToLoadArr.slice(0,4),
  // label for topics in sidebar
  topics:  'other posts on these topics', // if a post is opened
  topicsMenu: 'posts on these topics', // if no post opened (i.e. on menu)
  // label for authors in sidebar
  authors: 'more posts by', // will include author name
  // label for recent posts in sidebar
  recents: 'other recent posts',
  // text on link to the blog home page
  linkToMenu: 'Go To Blog Home',
  // very top of sidebar
  thisPostHeader: 'this post',
  categoriesLabel: 'Urban Meadow Categories',
  tagsLabel: 'Disciplinary Topics',
  narrativeShort: 'Click the \'Urban Meadow Categories\' or \'Disciplinary Topics\' icons to filter blog posts below.',
  // message that displays if there are no posts listed
  search: {
    buttonLabel: 'search',
    placeholder: 'search term',
  },
  populatedMessage: {
    searchResults: ['Showing', 'search results for'], // array of 2 will insert quantity between
  },
  emptyMessage: {
    noSelection: 'Select at least one category or topic above (or enter a search term).',
    noResults: 'Sorry, but no blog posts have been written on that topic yet.',
    noSearchResults: 'Sorry, we didn\'t find any posts for',
  },
  authorLookup: {
    'slug-name': 'Anna Zakrisson, PhD and Oscar Warmerdam',
  },
};