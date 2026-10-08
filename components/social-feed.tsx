import {socialEmbedUrl,type SocialFeed} from '@/lib/social-feeds';
export default function SocialFeedCard({feed}:{feed:SocialFeed}){
  const embed=socialEmbedUrl(feed);
  if(!embed)return null;
  const platform=feed.platform==='facebook'?'Facebook':'Instagram';
  return <article className="social-card"><div className="social-card-heading"><p className="eyebrow">{platform}</p><h3>{feed.title}</h3><a className="text-link" href={feed.url} target="_blank" rel="noreferrer">Open on {platform} ↗</a></div><iframe title={`${feed.title} on ${platform}`} src={embed} loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/><p className="fine">If the embed is unavailable, open it on {platform}. Visibility depends on the account’s public sharing and embed settings.</p></article>;
}
