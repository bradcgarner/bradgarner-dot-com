import React               from 'react';
import content             from '../helpers/content';
import { getMeta }         from '../helpers/meta';
import { 
  fireNewPageView }        from '../helpers/browser/tag-manager';
import { fontsToLoadArr }  from '../helpers/common-styles';
import Frame               from '../components/_general/_frame';
import ResumeMain          from '../components/resume/_main';

export default function ResumePage(props) {

  fireNewPageView(false);

  const meta = getMeta('resume');

  const c = content.index || {} ;

  return <Frame 
    hideHeader ={false} 
    meta       ={meta}
    fontsToLoadArr={c.fontsToLoadArr ? c.fontsToLoadArr : fontsToLoadArr} >
    <ResumeMain/>
  </Frame>
};