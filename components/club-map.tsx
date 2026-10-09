import {copy,type Locale} from '@/lib/languages';
const mapId = '19n-BrOnyeXMQ6Lmo7M8ABiGSt1uIEh8';
export default function ClubMap({locale="en"}:{locale?:Locale}){const t=copy[locale];return <section className="club-map" aria-labelledby="club-map-title"><div className="section-heading"><div><p className="eyebrow">{t.home}</p><h2 id="club-map-title">{t.map}</h2></div><a className="text-link" href={`https://www.google.com/maps/d/viewer?mid=${mapId}&ll=2.0230068,103.3127042&z=10`} target="_blank" rel="noreferrer">{t.openMap} ↗</a></div><iframe title={t.map} src={`https://www.google.com/maps/d/embed?mid=${mapId}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><p className="fine">{t.mapNote}</p></section>;}

