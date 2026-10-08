'use client';
import Script from 'next/script';
import { useEffect } from 'react';
declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
}
export default function GoogleAnalytics({measurementId}:{measurementId:string}) {
  useEffect(()=>{
    function trackEnquiry(event:MouseEvent){
      const target=event.target;
      if(!(target instanceof Element))return;
      const anchor=target.closest('a');
      if(!anchor)return;
      const url=new URL(anchor.href,window.location.origin);
      if(url.hostname!=='wa.me'&&url.hostname!=='api.whatsapp.com')return;
      window.gtag?.('event','whatsapp_enquiry_click',{send_to:measurementId,page_path:window.location.pathname,transport_type:'beacon'});
    }
    document.addEventListener('click',trackEnquiry);
    return ()=>document.removeEventListener('click',trackEnquiry);
  },[measurementId]);
  return <><Script id="ga4-config" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${measurementId}');`}</Script><Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive"/></>;
}
