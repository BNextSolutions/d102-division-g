import Directory from '@/components/directory';
import ClubMap from '@/components/club-map';
import { clubs } from '@/lib/content';
import {pageMetadata,siteUrl} from '@/lib/seo';
import StructuredData from '@/components/structured-data';
export const metadata=pageMetadata('Toastmasters Club Directory in Johor, Malaysia','Browse 17 Toastmasters clubs in Johor, Malaysia, across Division G Areas 01–04. Search by name or club number and plan a visit.','/clubs');
export default function Clubs(){return <section className="section page-section"><p className="eyebrow">THE DIVISION G DIRECTORY</p><h1>Toastmasters clubs in Johor, Malaysia.</h1><p className="intro">Explore 17 clubs across Division G Areas 01–04 in Johor. Search by name or club number, then confirm meeting and visitor arrangements before attending.</p><StructuredData data={{'@context':'https://schema.org','@type':'ItemList',name:'Toastmasters clubs in Johor, Malaysia · Division G',numberOfItems:clubs.length,itemListElement:clubs.map((c,i)=>({'@type':'ListItem',position:i+1,url:`${siteUrl}/clubs/${c.slug}`,name:c.name}))}}/><ClubMap/><Directory clubs={clubs}/></section>;}

