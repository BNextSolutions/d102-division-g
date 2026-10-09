export default function VenueLink({venue}:{venue?:string}){
  if(!venue)return null;
  if(/^Zoom\b/i.test(venue))return <>{venue}</>;
  const query=venue.startsWith('36-2, Jln Permas 10')?'36-2, Jalan Permas 10, Bandar Baru Permas Jaya, Masai, 81750 Johor, Malaysia':venue;
  return <a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`} target="_blank" rel="noreferrer">{venue} ↗</a>;
}
