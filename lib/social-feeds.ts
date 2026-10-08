export type SocialFeed = { id:string; title:string; platform:'facebook'|'instagram'; url:string };
// Add owner-supplied public Facebook Page URLs or Instagram post/reel URLs.
// The order below is the display order; do not infer post dates from this order.
export const socialFeeds:SocialFeed[]=[];
export function socialEmbedUrl(feed:SocialFeed):string|null{
  try{
    const url=new URL(feed.url);
    if(url.protocol!=='https:')return null;
    if(feed.platform==='facebook'&&['facebook.com','www.facebook.com'].includes(url.hostname)&&url.pathname!=='/'){
      const params=new URLSearchParams({href:url.href,tabs:'timeline',width:'500',height:'600',small_header:'true',adapt_container_width:'true',hide_cover:'false',show_facepile:'false'});
      return `https://www.facebook.com/plugins/page.php?${params}`;
    }
    if(feed.platform==='instagram'&&['instagram.com','www.instagram.com'].includes(url.hostname)){
      const match=url.pathname.match(/^\/(p|reel)\/([A-Za-z0-9_-]+)\/?$/);
      if(match)return `https://www.instagram.com/${match[1]}/${match[2]}/embed/`;
    }
  }catch{return null;}
  return null;
}
