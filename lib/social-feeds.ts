export type SocialFeed = { id:string; title:string; platform:'facebook'|'instagram'; url:string };
export function socialEmbedUrl(feed:SocialFeed,width=500):string|null{
  try{
    const url=new URL(feed.url);
    if(url.protocol!=='https:')return null;
    if(feed.platform==='facebook'&&['facebook.com','www.facebook.com'].includes(url.hostname)&&url.pathname!=='/'&&!url.pathname.startsWith('/groups/')){
      const params=new URLSearchParams({href:url.href,tabs:'timeline',width:String(Math.max(180,Math.min(500,Math.floor(width)))),height:'600',small_header:'true',adapt_container_width:'true',hide_cover:'false',show_facepile:'false'});
      return `https://www.facebook.com/plugins/page.php?${params}`;
    }
    if(feed.platform==='instagram'&&['instagram.com','www.instagram.com'].includes(url.hostname)){
      const match=url.pathname.match(/^\/(p|reel)\/([A-Za-z0-9_-]+)\/?$/);
      if(match)return `https://www.instagram.com/${match[1]}/${match[2]}/embed/`;
    }
  }catch{return null;}
  return null;
}
