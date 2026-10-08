import Link from 'next/link';
import { notFound } from 'next/navigation';
import { clubs } from '@/lib/content';
export function generateStaticParams(){return clubs.map(c=>({slug:c.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params; return {title:clubs.find(c=>c.slug===slug)?.name??'Club not found'};}
export default async function ClubPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const c=clubs.find(c=>c.slug===slug); if(!c)notFound(); return <article className="section article"><Link href="/clubs" className="text-link">← All clubs</Link><p className="eyebrow">AREA {c.area} · DIVISION G</p><h1>{c.name}</h1><p className="intro">{c.description}</p><dl><dt>Location</dt><dd>{c.city}</dd><dt>Meeting</dt><dd>{c.meeting} · Malaysia time</dd><dt>Venue</dt><dd>{c.venue}</dd><dt>Format / language</dt><dd>{c.format} / {c.language}</dd></dl><a className="button" href={c.website} target="_blank" rel="noreferrer">Contact the club ↗</a><p className="fine">Details verified {c.verifiedOn}. Confirm arrangements with the club before visiting.</p></article>;}
