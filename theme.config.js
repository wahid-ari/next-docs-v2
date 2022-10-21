import { useRouter } from 'next/router'

const Logo = ({ height }) => (
  <svg height={height} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

export default {
  projectLink: 'https://github.com/wahid-ari/next-docs-v2',
  github: 'https://github.com/wahid-ari/next-docs-v2',
  docsRepositoryBase: 'https://github.com/wahid-ari/next-docs-v2/blob/main',
  search: true,
  titleSuffix: ' – Next Docs v2',
  unstable_flexsearch: true,
  // unstable_faviconGlyph: '⚫️',
  floatTOC: true,
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      "Give us feedback ➔"
    );
  },
  feedbackLabels: "feedback",
  logo: () => {
    const { route } = useRouter()
    return (
      <>
        <Logo height={18} />
        {/* {route === '/' ? null : ( */}
        <span
          className='mx-2 font-extrabold select-none'
          title='Next Docs v2'
          style={{ whiteSpace: 'nowrap' }}
        >
          Next Docs v2
        </span>
        {/* )} */}
      </>
    )
  },
  head: ({ title, meta }) => {
    const ogImage =
      'https://repository-images.githubusercontent.com/429536908/62a4e686-8613-4b45-b7bb-fa35b558ae8e'

    return (
      <>
        {/* 
        <meta name='twitter:image' content={ogImage} />
        <meta name='og:image' content={ogImage} /> */}

        <meta httpEquiv="Content-Language" content="en" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content={meta.description || "Next Docs v2"} />
        <meta name="og:description" content={meta.description || "Next Docs v2"} />
        <meta name="og:title" content={title ? title + " - Next Docs v2" : "Next Docs v2"} />
        <meta name="og:image" content="https://next-docs-v2.vercel.app/og.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="next-docs-v2.vercel.app" />
        <meta name='twitter:site' content='@wahiidari' />
        <meta name="twitter:url" content="https://next-docs-v2.vercel.app" />
        <meta name="twitter:image" content="https://next-docs-v2.vercel.app/og.png" />

        <meta name="apple-mobile-web-app-title" content="Next Docs v2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </>
    )
  },
  footerText: ({ locale }) => {
    return (
      // <p className='no-underline text-current font-semibold'>
      //   Made by{' '}
      //   <a
      //     href='https://twitter.com/shuding_'
      //     target='_blank'
      //     rel='noopener'
      //     className='no-underline font-semibold'
      //   >
      //     @shuding_
      //   </a>
      //   , deployed on{' '}
      //   <a
      //     href='https://vercel.com/?utm_source=cobe'
      //     target='_blank'
      //     rel='noopener'
      //     className='no-underline font-semibold'
      //   >
      //     Vercel
      //   </a>
      //   .
      // </p>
      <p className='no-underline text-current font-medium'>
        MIT 2022 © Next Docs v2.
      </p>
    )
  },
  footerEditLink: () => {
    const { route } = useRouter()
    if (route.includes('/showcases/')) {
      return null
    }
    return 'Edit this page on GitHub ➔'
  },
  gitTimestamp: false,
}
