import type { Metadata } from 'next';
import Link from 'next/link';
import {whatsappUrl,contactDisplay} from '@/lib/contact';
import { Montserrat, Source_Sans_3 } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans', display: 'swap' });
import './globals.css';
import { siteUrl } from '@/lib/seo';
import StructuredData from '@/components/structured-data';
import GoogleAnalytics from '@/components/google-analytics';
const gaMeasurementId=process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const validGaId=gaMeasurementId && /^G-[A-Z0-9]+$/.test(gaMeasurementId) ? gaMeasurementId : null;
export const metadata: Metadata = { metadataBase:new URL(siteUrl), title:{default:'Toastmasters Clubs in Johor, Malaysia | Division G',template:'%s | Division G'}, description:'Find 16 Toastmasters clubs in Johor, Malaysia. Explore District 102 Division G clubs and plan a visit to practise public speaking and leadership.', robots:{index:true,follow:true}, openGraph:{siteName:'Toastmasters Johor · Division G',locale:'en_MY',type:'website'} };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${montserrat.variable} ${sourceSans.variable}`}><body><StructuredData data={{'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':`${siteUrl}/#organization`,name:'Toastmasters District 102 Division G',url:siteUrl,contactPoint:{'@type':'ContactPoint',telephone:'+601160676283',contactType:'visitor enquiries',url:whatsappUrl()},areaServed:{'@type':'AdministrativeArea',name:'Johor, Malaysia'}},{'@type':'WebSite','@id':`${siteUrl}/#website`,url:siteUrl,name:'Toastmasters Clubs in Johor, Malaysia · Division G',publisher:{'@id':`${siteUrl}/#organization`},inLanguage:'en-MY'}]}}/><a className="skip" href="#main">Skip to content</a><header><Link href="/" className="brand"><img className="brand-logo" src="https://www.toastmasters.org/content/images/globals/toastmasters-logo@2x.png" alt="Toastmasters International" width="104" height="88" /><span>DIVISION G<small>DISTRICT 102 · TOASTMASTERS</small></span></Link><nav aria-label="Main navigation"><Link href="/clubs">Find a club</Link><Link href="/blog">Journal</Link><Link href="/about">About us</Link></nav><Link className="button compact" href="/visit">Plan a club visit <span>↗</span></Link></header><main id="main">{children}</main><footer><div><Link href="/" className="footer-title">Where Leaders Are Made</Link><p>Toastmasters in Johor, Malaysia · District 102 · Division G</p><p><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp enquiries: {contactDisplay} ↗</a></p></div><div><Link href="/clubs">Club directory</Link><Link href="/blog">Journal</Link><a href="https://www.facebook.com/tmd102divg" target="_blank" rel="noreferrer">Division G Facebook ↗</a><a href="https://d102tm.org/" target="_blank" rel="noreferrer">District 102 ↗</a></div><p className="fine">The information on this website is for the sole use of Toastmasters’ members, for Toastmasters business only. It is not to be used for solicitation and distribution of non-Toastmasters material or information.</p></footer>{validGaId&&<GoogleAnalytics measurementId={validGaId}/>}</body></html>;
}


