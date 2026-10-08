import Link from 'next/link';
import { posts } from '@/lib/content';
export const metadata={title:'Journal'};
export default function Blog(){return <section className="section page-section"><p className="eyebrow">THE DIVISION G JOURNAL</p><h1>Keep growing.<br/><em>Keep sharing.</em></h1><p className="intro">Practical ideas for speaking, leadership, and your first steps into Toastmasters.</p><div className="three-grid">{posts.map((p,i)=><Link className="post-card" href={`/blog/${p.slug}`} key={p.slug}><div className={`post-art art-${i}`} aria-hidden="true"><span>{['“','✦','↗'][i]}</span></div><div className="post-copy"><p className="eyebrow">{p.category} · {p.readTime}</p><h2>{p.title}</h2><p>{p.summary}</p><span className="text-link">Read story ↗</span></div></Link>)}</div></section>;}
