import React            from 'react';
import content          from '../helpers/content';
import { getMeta }      from '../helpers/meta';
import { 
  fireNewPageView }     from '../helpers/browser/tag-manager';
import { fontsToLoad }  from '../helpers/common-styles';
import Frame            from '../components/_general/_frame';
import HomeMain      from '../components/home/_main';

export default function HomePage(props) {

  fireNewPageView(false);

  const meta = getMeta('index');

  const c = content.index || {} ;

  return <Frame 
    hideHeader ={false} 
    meta       ={meta}
    fontsToLoad={c.fontsToLoad ? c.fontsToLoad : fontsToLoad} >
    <HomeMain/>
  </Frame>
};