// Sets Consent Mode v2 defaults BEFORE CookieYes and GTM.
//
// Using an external src (not dangerouslySetInnerHTML) so Next.js App Router
// places it in the same "external scripts" cluster as the CookieYes script
// and respects JSX order. Inline dangerouslySetInnerHTML scripts are emitted
// after all metadata tags in the static HTML output, which would put them
// after the CookieYes <script> tag even though the JSX order is correct.
export function ConsentInit() {
  return (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script
      id="consent-init"
      src="/consent-init.js"
    />
  )
}
