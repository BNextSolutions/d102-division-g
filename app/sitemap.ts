import type { MetadataRoute } from 'next';
import {clubs,posts} from '@/lib/content';
import {siteUrl} from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap{return ['','/clubs','/blog','/about','/visit',...clubs.map(c=>`/clubs/${c.slug}`),...posts.map(p=>`/blog/${p.slug}`)].map(path=>({url:siteUrl+path}));}
