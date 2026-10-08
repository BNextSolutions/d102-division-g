import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '@/lib/content';
import {pageMetadata} from '@/lib/seo';
export function generateStaticParams(){return posts.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=posts.find(p=>p.slug===slug);return p?pageMetadata(p.title,p.summary,`/blog/${p.slug}`):{title:'Story not found'};}
export default async function Post({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=posts.find(p=>p.slug===slug);if(!p)notFound();return <article className="section article"><Link href="/blog" className="text-link">← The journal</Link><p className="eyebrow">{p.category} · {p.readTime}</p><h1>{p.title}</h1><p className="intro">{p.summary}</p><div className="prose">{p.paragraphs.map(t=><p key={t}>{t}</p>)}</div><aside className="article-aside"><h2>Put it into practice.</h2><p>Your next meeting is a place to start.</p><Link className="button" href="/visit">Plan a club visit in Johor ↗</Link></aside></article>;}
