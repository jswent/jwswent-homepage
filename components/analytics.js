import Script from 'next/script'

const Analytics = () => {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-N52DQJ522C'
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N52DQJ522C', {
            page_path: window.location.pathname,
          });
        `
        }}
      />
    </>
  )
}

export default Analytics
