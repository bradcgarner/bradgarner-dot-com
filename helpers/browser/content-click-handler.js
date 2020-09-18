import Router                  from 'next/router';

export const contentClickHandler = e => {
    const thisDomain = process.env.THIS_DOMAIN; 

    const targetLink = e.target.closest('a');
    if(!targetLink) return;
    e.preventDefault();
    
    if(targetLink.href.includes(thisDomain)){
      const protocolAndFullPath = targetLink.href.split(thisDomain);
      const fullPath = protocolAndFullPath[1];
      const paths = fullPath.split('/');
      const pathname = `/${paths[1]}`;
      const slug = paths[2];

      if(slug){
        Router.push({
          pathname,
          query: {slug},
          as: fullPath,
        },
        fullPath
        );
      } else {
        Router.push({
          pathname,
        },
        fullPath
        );
      }

      if(typeof window !== 'undefined' && 
        typeof window.scrollTo === 'function'){
        window.scrollTo(0,0);
      }
    } else { // i.e. else if click was on an external link
      window.open(targetLink,'_blank');
    }

  };