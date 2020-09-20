import { fontsToLoadArr }      from '../common-styles';
import { thisUrl, thisDomain } from './_general';

// privacy page and in footer. Note that this page is no-crawl
export const privacy = {
  meta: {
    path:        'privacy',
    // limit title to 55 characters
    h1Tag:       'BradGarner.com Terms & Conditions and Privacy Policy',
    seoTitle:       'BradGarner.com Terms & Conditions and Privacy Policy',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'BradGarner.com Terms & Conditions and Privacy Policy.',
    image:       'https://cdn.buttercms.com/Yjr3DEkLTy6E0QeAZqRq',
    alt:         'Brad Garner in green roof research laboratory in front of outdoor monitoring platforms',
    hrefLang:    'en',
  },
  
  fontsToLoadArr: fontsToLoadArr.slice(0,2),
  consent: {
    bannerMain: 'This site uses cookies to improve your experience.',
    buttonLabel: 'Got It!',
    showMore: 'Show Options',
  },
  theCompany: 'bradgarner.com',
  thisDomain,
  thisUrl,
  lastUpdate: 'August 1, 2020',
  lastUpdateTs: new Date(2020,8,1),
  deleteMessage: 'Delete all cookies? This cannot be un-done.',
  // button in footer
  policyButtonLabel: 'privacy policy',
  // button in footer to open expanded consent footer
  settingsButtonLabel: 'privacy settings',
  // button from expanded consent footer
  policyExpandedLabel: 'Read our full privacy policy.',
  // header at top of privacy page
  // content of page is our privacy policy, in full length legal text
};