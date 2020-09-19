import { siteMapStaticArr }  from '../helpers/sitemap/sitemap-static-arr';
import siteMapDynamicArr     from '../helpers/sitemap/sitemap-dynamic-arr.json';
import content               from '../helpers/content';
import SiteMapCard           from '../components/_general/sitemap-card';
import { getMeta }           from '../helpers/meta';
import Frame                 from '../components/_general/_frame';
import { fontsToLoadArr } from '../helpers/common-styles';

export default function SiteMapPage() {

  const siteMapStatics = Array.isArray(siteMapStaticArr) ? siteMapStaticArr : [] ;
  const siteMapDynamics = Array.isArray(siteMapDynamicArr) ? siteMapDynamicArr : [] ;
  const sitemapArr = [...siteMapStatics, ...siteMapDynamics];
  const contentObj = content || {} ;

  const metas = sitemapArr.map((thisSitemapObj,i)=>{
    const thisKey = thisSitemapObj.key || 'no-key';
    const thisContent = contentObj[thisKey] || {};
    const thisMeta = thisContent.meta || {};
    const page = {...thisSitemapObj, ...thisMeta};
    return <SiteMapCard
      key={i}
      page ={page}/>});

  const meta = getMeta('sitemap');

  return <Frame 
    hideHeader={false}
    meta={meta}
    fontsToLoadArr={contentObj.sitemap && contentObj.sitemap.fontsToLoadArr ? contentObj.sitemap.fontsToLoadArr : fontsToLoadArr}  >
    <section className='section'>
      {metas}
      <style jsx>{`
        .section {
          flex-wrap: wrap;
          justify-content: center;
          width: 100vw;
          margin-top: 100px;
          flex: 1;
        }
      `}</style>
    </section>
  </Frame>
  
}