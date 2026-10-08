import Directory from '@/components/directory';
import { clubs } from '@/lib/content';
export const metadata={title:'Find a club'};
export default function Clubs(){return <section className="section page-section"><p className="eyebrow">THE DIVISION G DIRECTORY</p><h1>Find your people.</h1><p className="intro">Find a meeting that fits your life. Explore your options, then contact the club to plan a visit.</p><Directory clubs={clubs}/></section>;}
