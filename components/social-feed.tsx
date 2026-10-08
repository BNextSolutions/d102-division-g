'use client';
import {useEffect,useRef,useState} from 'react';
import {socialEmbedUrl,type SocialFeed} from '@/lib/social-feeds';
export default function SocialFeedCard({feed}:{feed:SocialFeed}){
  const card=useRef<HTMLElement>(null);
  const [width,setWidth]=useState(0);
  useEffect(()=>{const element=card.current;if(!element)return;const update=()=>setWidth(element.clientWidth);update();const observer=new ResizeObserver(update);observer.observe(element);return ()=>observer.disconnect();},[]);
  const embed=socialEmbedUrl(feed,width||500);
  if(!embed)return null;
  const platform=feed.platform==='facebook'?'Facebook':'Instagram';
  return <article ref={card} className="social-card"><div className="social-card-heading"><p className="eyebrow">{platform}</p><h3>{feed.title}</h3><a className="text-link" href={feed.url} target="_blank" rel="noreferrer">Open on {platform} ↗</a></div>{width>0&&<iframe title={`${feed.title} on ${platform}`} src={embed} loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>}<p className="fine">If the embed is unavailable, open it on {platform}. Visibility depends on the account’s public sharing and embed settings.</p></article>;
}
