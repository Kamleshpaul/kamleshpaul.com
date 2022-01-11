import Document, { Head, Html, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#3afe1a" />
          <meta name="description" content="I am Kamlesh Paul. I am a tech enthusiastic and love to learn new technologies and to solve problems. I love to create things which can be art(Photoshop), or technology (code)" />
          <meta name="keywords" content=" Software developer, full stack-designer,Kamlesh Paul, kamlesh, kamlesh paul,Laravel developer, frontend developer, front-end developer" />
          <meta name="author" content="Kamlesh Paul" />
          <meta property="og:url" content="https://kamleshpaul.com/" />
          <meta property="og:title" content="Kamlesh Paul | Software Developer" />
          <meta property="og:description" content=" Software Developer, full stack-designer,Kamlesh Paul, kamlesh, kamlesh paul,Laravel developer, frontend developer, front-end developer" />
          <meta property="og:site_name" content="Kamlesh Paul | Software Developer" />
          <meta property="og:image" content="/website.png" />
          <meta property="og:type" content="Website" />
          <meta property="og:locale" content="en_UK" />
          <meta property="article:author" content="Kamlesh Paul" />
          <meta property="article:tag" content="Software developer, Laravel, kamlesh paul, frontend ,reactjs" />
          <meta name="google-site-verification" content="Rn-uFDnbvQcBtHAI210Is1ep4smHEUUfhET8p3jo93A" />
          <link rel="apple-touch-icon" href="/icon/pwa/apple-touch-icon-180x180.png"></link>
        </Head>
        <body>
          <Main></Main>
        </body>
        <NextScript />
      </Html>
    );
  }
}