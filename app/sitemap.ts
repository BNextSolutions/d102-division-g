import type { MetadataRoute } from 'next';
import {clubs,posts} from '@/lib/content';
import {siteUrl} from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap{return ['','/clubs','/blog','/about','/visit','/why-us','/connect-with-us',...clubs.map(c=>`/clubs/${c.slug}`),...posts.map(p=>`/blog/${p.slug}`)].flatMap(path=>['', '/zh', '/ms'].map(prefix=>({url:siteUrl+prefix+path,alternates:{languages:{'en-MY':siteUrl+path,'zh-Hans':siteUrl+'/zh'+path,'ms-MY':siteUrl+'/ms'+path}}})));}
