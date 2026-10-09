'use client';
import {copy,type Locale} from '@/lib/languages';
import {useEffect,useRef,useState} from 'react';
import {socialEmbedUrl,type SocialFeed} from '@/lib/social-feeds';
export default function SocialFeedCard({feed,locale="en"}:{feed:SocialFeed;locale?:Locale}){
  const t=copy[locale];
  const card=useRef<HTMLElement>(null);
  const [width,setWidth]=useState(0);
  const [reload,setReload]=useState(0);
  useEffect(()=>{const element=card.current;if(!element)return;const update=()=>setWidth(element.clientWidth);update();const observer=new ResizeObserver(update);observer.observe(element);return ()=>observer.disconnect();},[]);
  const embed=socialEmbedUrl(feed,width||500);
  if(!embed)return null;
  const platform=feed.platform==='facebook'?'Facebook':'Instagram';
  return <article ref={card} className="social-card"><div className="social-card-heading"><p className="eyebrow">{platform}</p><h3>{feed.title}</h3><a className="text-link" href={feed.url} target="_blank" rel="noreferrer">{feed.platform==="facebook"?t.openSocial:`Open on ${platform}`} ↗</a><p><button type="button" className="button compact" onClick={()=>setReload(value=>value+1)}>{t.reload}</button></p></div>{width>0&&<iframe key={reload} title={`${feed.title} on ${platform}`} src={embed} loading="eager" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>}<p className="fine">{t.socialNote}</p></article>;
}
