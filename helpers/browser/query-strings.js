/*
 * KEEP ALL QUERY STRINGS HERE
 * CONSIDER the same for local storage
 * p = page (and component if not the top level for that page)
 * s = string key
 * q = query value
 * k = key in local storage
 * v = value in local storage
 * This is written so short to keep code short where we use it
 */

export const queryStrings = {
  authToken: {
    // authToken is parsed from url - sitewide
    // this is used to allow 3rd-party apps to log in, such as PDF renderers
    p: 'all',
    s: 'authToken',
    q: null,
    k: 'authToken',
    v: true,
  },
  doNotTrackMe: {
    p: 'frame',
    s: 'do-not-track-me',
    q: null,
    k: 'doNotTrackMe',
    v: true,
  },
  pleaseTrackMe: {
    p: 'frame',
    s: 'please-track-me',
    q: null,
    k: 'doNotTrackMe',
    v: false,
  },
  debugBrowser: {
    p: 'frame',
    s: 'debug-browser',
    q: 'true',
    k: 'debugBrowser',
    v: true,
  },
  stopDebugBrowser: {
    p: 'frame',
    s: 'stop-debug-browser',
    q: 'true',
    k: 'debugBrowser',
    v: false,
  },
};