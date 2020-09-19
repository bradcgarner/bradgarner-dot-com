import React               from 'react';
import { isObjectLiteral } from 'conjunction-junction';
import ImageContainer      from '../../components/_general/image-container';
import ImagePack           from '../../components/_general/image-pack';
import { 
  defTextStyle, 
  defUlStyle,
  defEmStyle }             from '../common-styles';
import { fireGtmHover }    from '../browser/tag-manager';
import VideoContainer from '../../components/_general/video-container';

const _formatRawHtmlInner = (string, pStyle, mStyle) => {

  if(typeof string === 'string'){
    const arr1 = string.split('!!');
    const arr2 = [];
    arr1.forEach((s,i)=>{
      if(i===0){
        arr2.push(`<p key=${i} class='text' style="${pStyle}">`);
        arr2.push(s);
      } else if (i%2===1) {
        // is odd
        arr2.push(`<span class='emphasis' style="${mStyle}">`);
        arr2.push(s);
        arr2.push('</span>')
      } else {
        arr2.push(s);
      }
    });
  
    arr2.push('</p>');
  
    const html = arr2.join(' ');
    return html;
  }

  return '';
  
}

export const formatRawHtml = (string, textStyle, emStyle) => {

  const pStyle = typeof textStyle === 'string' ? textStyle : defTextStyle ; 
  const mStyle = typeof emStyle   === 'string' ? emStyle   : defEmStyle   ; 

  const html = Array.isArray(string) ?
    string.map(s=>{
      return _formatRawHtmlInner(s,pStyle,mStyle);
    }).join(' ') :
    typeof string === 'string' ?
    _formatRawHtmlInner(string,pStyle,mStyle) :
    '' ;

  return html;
};

const formatPLinkHtml = (arr, textStyle, emStyle) => {

  const pStyle = typeof textStyle === 'string' ? textStyle : defTextStyle ; 
  const mStyle = typeof emStyle   === 'string' ? emStyle   : defEmStyle   ; 
  
  const arr2 = arr.map(t=>{
    if(typeof t === 'string'){
      const subArr = t.split('!!');
      const subArr2 = [];
      subArr.forEach((s,i)=>{
        if(i===0){
          subArr2.push(s);
        } else if (i%2===1) {
        // is odd
          subArr2.push(` <span class='emphasis' style="${mStyle}">`);
          subArr2.push(s);
          subArr2.push('</span> ')
        } else {
          subArr2.push(s);
        }
      });
      return subArr2.join(' ');
    }

    if(t.href && t.text){
      return `<a href=${t.href} ${t.sameTab ? '' : `target='_blank'`} ${t.title ? `title=${t.title}` : ''} class='um-link'>${t.text}</a>`;
    }
  });

  arr2.unshift(`<p class='p-link-text' style="${pStyle}">`);
  arr2.push('</p>');

  return arr2.join('');
};

export const makeParagraphsEm = (arr, options) => {
  if(!Array.isArray(arr)){
    return null;
  }
  return arr.map((t,i)=>{
    if(typeof t !== 'string'){
      return '';
    }
    const arr = t.split('.');
    const intro = arr[0];
    const rest = arr.slice(1,arr.length-1).join('.');
    return <p key={i} className='text'>
      <span className='em'>{intro}.</span>{rest}
      <style jsx>{`
        .text {
          ${options.textCSS}
        }
        .em {
          ${options.emCSS}
        }
      `}</style>
    </p>
  });
};

export const makeParagraphs = (arr, options) => {
  if(options.emCSS) {
    return makeParagraphsEm(arr, options);
  }
  if(!Array.isArray(arr)){
    return null;
  }
  return arr.map((t,i)=>{
    return <p key={i} className='text'>
      {t}
      <style jsx>{`
        .text {
          ${options.textCSS}
          margin-left: ${options.bulletCSS ? '20px' : 'inherit'};
        }
        .text:after {
          ${options.bulletCSS || ''}
        }
      `}</style>
    </p>
  }); 
};

export const createElements = (arr, _textStyle, _emStyle, _tableStyle, _tdStyle, _olStyle, _ulStyle) => {
  /* Input arr = ['', '', '']
   * or [{
      element: h2, text: '', id: '', style: '' (uses textStyle and emStyle)
      element: h3, text: '', id: '', style: ''
      element: text, text: '' or [''], id: '', textStyle: '', emStyle: '' (local textStyle and emStyle supersede global textStyle and emStyle used)
      ^^^^ text option above !! emphasizes !! between double exclamations
      element: html, html: [''], id: '', style: ''
      
      element: ul, list: [''] || list: [{element: 'ol',list:['']}] id: '', style: {}
      element: ol, list: [''], id: '', style: ''
      element: ul-with-em, list [''], id: '', style: '', nestedLiStyle: ''
      element: ol-with-em, list [''], id: '', style: '', nestedLiStyle: ''

      element: image, src: '', alt: '', caption: '', containerStyle: '', imageStyle: ''
      element: table, table: [[''],[''], id: '', tdStyle: {}, (local tdStyle supersedes global _tdStyle)
    
      element: component, component: <C/>, id: '', style: ''
    }]
   *
   */

  const textStyle  = typeof _textStyle  === 'string' ? _textStyle  : defTextStyle;
  const emStyle    = typeof _emStyle    === 'string' ? _emStyle    : defEmStyle;
  const tableStyle = typeof _tableStyle === 'string' ? _tableStyle : '';
  const tdStyle    = typeof _tdStyle    === 'string' ? _tdStyle    : textStyle;
  const olStyle    = typeof _olStyle    === 'string' ? _olStyle    : defUlStyle;
  const ulStyle    = typeof _ulStyle    === 'string' ? _ulStyle    : defUlStyle;

  const divs = Array.isArray(arr) ? arr.map((c,i)=>{

    const element = 

      typeof c === 'string' ?
        <p key={i} className='text'>
          {c}
          <style jsx>{`
            .text {
              ${textStyle}
            }
          `}</style>
        </p> :
      !isObjectLiteral(c) ? null :

      c.element === 'h2' ?
        <h2 key={i} className='header2'
          id={c.id || `element-id-${i}`}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          {c.text}
          <style jsx>{`
          .header2 {
            ${emStyle}
            font-size: 26px;
            margin-top: 50px;
            margin-bottom: 10px;
            width: 100%;
            ${c.style ? c.style : ''}
          }
        `}</style>
      </h2> :

      c.element === 'h3' ?
        <h3 key={i} className='header3'
          id={c.id || `element-id-${i}`}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          {c.text}
          <style jsx>{`
            .header3 {
              ${emStyle}
              font-size: 22px;
              margin-top: 30px;
              margin-bottom: 5px;
              width: 100%;
              ${c.style ? c.style : ''}
            }
        `}</style>
        </h3> :

      c.element === 'p-link' ?
        <div key={i} className='p-link-text-container'
        id={c.id || `text-id-${i}`}
        onMouseEnter={()=>fireGtmHover(c.id)}>
        {
          Array.isArray(c.text) ?
            <div className='p-link-string-to-html'
              dangerouslySetInnerHTML={{
                __html: formatPLinkHtml(
                  c.text, 
                  c.textStyle || textStyle, 
                  c.emStyle   || emStyle)
              }} /> :
          null 
        }
        {
          // this is for how-to
          c.src && c.caption && c.alt ?
          <ImageContainer
            src    ={c.src}
            caption={c.caption}
            alt    ={c.alt} /> : null
        }
        {
          Array.isArray(c.liveSiteOnly) ?
            <div className='p-link-string-to-html'
              dangerouslySetInnerHTML={{
                __html: formatPLinkHtml(
                  c.liveSiteOnly, 
                  c.textStyle || textStyle, 
                  c.emStyle   || emStyle)
              }} /> :
          null 
        }
        <style jsx>{`
          .p-link-text-container {
            flex-direction: column;
            padding-bottom: 10px;
            width: 100%;
            ${typeof c.style === 'string' ? c.style : ''}
          }
        `}</style>
      </div> :

      c.element === 'text' ?
      <div key={i} className='text-container'
        id={c.id || `text-id-${i}`}
        onMouseEnter={()=>fireGtmHover(c.id)}>
        {
          typeof c.text === 'string' ?
            <div className='string-to-html'
              dangerouslySetInnerHTML={{
                __html: formatRawHtml(
                  c.text, 
                  c.textStyle || textStyle, 
                  c.emStyle   || emStyle)
              }} />:
          !Array.isArray(c.text) ? null :
          c.text.map((line,idx)=>{
            if(typeof line === 'string'){
              const html = formatRawHtml(
                line, 
                c.textStyle || textStyle, 
                c.emStyle   || emStyle)
              return <div key={idx} className='strings-to-html'
              dangerouslySetInnerHTML={{__html: html}} />
            }
            return null;
          })
        }
        <style jsx>{`
          .text-container {
            flex-direction: column;
            padding-bottom: 10px;
            width: 100%;
            ${typeof c.style === 'string' ? c.style : ''}
          }
        `}</style>
      </div> :


      c.element === 'html' ?
      <div key={i} className='html-container'
        id={c.id || `element-id-${i}`}
        onMouseEnter={()=>fireGtmHover(c.id)}>
        {!Array.isArray(c.html) ? null :
        c.html.map((line,idx)=>{
          if(typeof line === 'string'){
            return <div key={idx} className='custom-html'
            dangerouslySetInnerHTML={{__html: line}} />
          }
          return null;
        })}
        <style jsx>{`
          .html-container {
            flex-direction: column;
            padding-bottom: 30px;
            width: 100%;
            ${typeof c.style === 'string' ? c.style : ''}
          }
        `}</style>
      </div> :

      c.element === 'ul' ?
        <ul key={i} className='list'
          style={c.style ? c.style : {}}
          id={c.id || `element-id-${i}`}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          {
            c.list.map((l,j)=>{
              if(typeof l === 'string'){
                return <li key={j} className='ul-li' >
                  {l}
                </li>
              } else if(isObjectLiteral(l) && l.element === 'ol' && Array.isArray(l.list)){
                const olItems = l.list.map((item,k)=>{
                  return <li key={k} className='ol-li' >
                    {item}
                  </li>
                });
                return <li key={j} className='list-nested'>
                  <ol className='ol'>
                    {olItems}
                  </ol>
                </li>
              }
              return null;
            })
          }
          <style jsx>{`
            .list {
              margin-left: 20px;
              width: 100%;
              ${ulStyle}
            }
            .ul-li {
              ${textStyle}
              list-style: initial;
              ${c.ulLiStyle ? c.ulLiStyle : textStyle}
            }
            .ol-li {
              ${textStyle}
              list-style: decimal;
              margin-bottom: 5px;
              ${c.olLiStyle ? c.olLiStyle : textStyle}
            }
            .list-nested {
              margin-left: 20px;
              ${c.nestedLiStyle ? c.nestedLiStyle : textStyle}
            }
          `}</style>
        </ul> :

      c.element === 'ol' ?
        <ol key={i} className='list'
          id={c.id || `element-id-${i}`}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          {c.list.map((l,j)=>{
            return <li key={j} className='ol-li' >
              {l}
            </li>
          })}
          <style jsx>{`
            .list {
              margin-left: 20px;
              width: 100%;
              ${olStyle}
            }
            .ol-li {
              ${textStyle}
              list-style: decimal;
              margin-bottom: 5px;
            }
          `}</style>
        </ol> :
             

      c.element === 'ul-with-em' ?
        <ul key={i} className='list'
          style={c.style ? c.style : {}}
          id={c.id || `element-id-${i}`}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          {
            c.list.map((l,j)=>{
              if(typeof l === 'string'){
                const arr = l.split('!!')

                return <li key={j} className='ul-li' >
                  {
                    arr.map((span,k)=>{
                      if(k%2===0){
                        return <span key={k} className='normal'>{span} </span>
                      }
                      else {
                        return <span key={k} className='em'>{span} </span>
                      }
                    })
                  }
                </li>
              }
              return null;
            })
          }
          <style jsx>{`
            .list {
              margin-left: 20px;
              width: 100%;
              ${ulStyle}
            }
            .ul-li {
              ${textStyle}
              list-style: initial;
            }
            .normal,
            .em {
              font-size: inherit;
              color: inherit;
            }
            .em {
              ${emStyle}
            }
          `}</style>
        </ul> :

      c.element === 'ol-with-em' ?
      <ol key={i} className='list'
        style={c.style ? c.style : {}}
        id={c.id || `element-id-${i}`}
        onMouseEnter={()=>fireGtmHover(c.id)}>
        {
          c.list.map((l,j)=>{
            if(typeof l === 'string'){
              const arr = l.split('!!')

              return <li key={j} className='ol-li' >
                {
                  arr.map((span,k)=>{
                    if(k%2===0){
                      return <span key={k} className='normal'>{span} </span>
                    }
                    else {
                      return <span key={k} className='em'>{span} </span>
                    }
                  })
                }
              </li>
            }
            return null;
          })
        }
        <style jsx>{`
          .list {
            margin-left: 20px;
            width: 100%;
          }
          .ol-li {
            ${textStyle}
            list-style: decimal;
          }
          .normal,
          .em {
            font-size: inherit;
            color: inherit;
          }
          .em {
            ${emStyle}
          }
        `}</style>
      </ol> :

      c.element === 'image' ?
        <ImageContainer
          key={i}
          src           ={c.src}
          alt           ={c.alt}
          caption       ={c.caption}
          containerStyle={c.containerStyle}
          imageStyle    ={c.imageStyle} /> :

      c.element === 'video' ?
        <VideoContainer
          key           ={i}
          url           ={c.url}
          title         ={c.title}
          caption       ={c.caption} /> :

      c.element === 'image-pack' ?
        <ImagePack
          key ={i}
          list={c.list} /> :

      c.element === 'table' && Array.isArray(c.table) ?
        <table key={i} className='table'
          id={c.id || `element-id-${i}`}
          style={c.style ? c.style : {}}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          <tbody>
            {c.table.map((l,j)=>{
              return <tr key={j} className='row' >
                {
                  Array.isArray(l) ?
                    l.map((c,k)=>{
                      return <td key={k} className='td'
                        style={c.tdStyle ? c.tdStyle : {}}>{c}</td>
                    }) :
                  <td></td>
                }
              </tr>
            })}
          </tbody>
          <style jsx>{`
            .table {
              margin-left: 20px;
              margin-bottom: 20px;
              ${tableStyle}
            }
            .td {
              border: 1px solid #ccc;
              padding: 5px;
              ${tdStyle || ''}
            }
          `}</style>
        </table> :

    c.element === 'component' 
      && React.isValidElement(c.component) ?
      c.component :

      null ;

    return element;
  }) : null ;

  return divs;

};
