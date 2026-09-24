import { company } from '@/lib/company'

// GTM head snippet — renders in <head>.
export function GTMHeadScript() {
  const id = company.gtmId
  const script = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`

  return (
    <script
      id="gtm-head"
      dangerouslySetInnerHTML={{ __html: script }}
    />
  )
}

// GTM body snippet — renders immediately after <body>.
export function GTMBodyScript() {
  const id = company.gtmId
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${id}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="GTM noscript"
      />
    </noscript>
  )
}
