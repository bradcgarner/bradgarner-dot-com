// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import sitemapDynamicObject from '../helpers/sitemap/sitemap-dynamic-object.json';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    // NOTE THIS ONLY WORKS ON THE SERVER!!!
    const getLang = () => {
      if(this.props.__NEXT_DATA__.props && this.props.__NEXT_DATA__.props.pageProps){
        const p = this.props.__NEXT_DATA__.props.pageProps;
        if(p.post && sitemapDynamicObject && sitemapDynamicObject[p.post.slug]){
          if(sitemapDynamicObject[p.post.slug].meta && sitemapDynamicObject[p.post.slug].meta.hrefLang){
            const lang = sitemapDynamicObject[p.post.slug].meta.hrefLang;
            return lang;
          }
        }
      }
      return 'en';
    };

    return (
      <html id='top-level-html' lang={getLang()}>
        <Head/>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}