export const whatsappNumber = '601160676283';
export const contactDisplay = '+60 11-6067 6283';
export function whatsappUrl(club?: {name:string;number:string}) {
  const message = club
    ? `Hello Division G, I'm interested in visiting ${club.name} (club ${club.number}) in Johor, Malaysia. Could you help me confirm the next meeting and guest arrangements?`
    : "Hello Division G, I'm interested in visiting a Toastmasters club in Johor, Malaysia. Could you help me choose a club and confirm the next meeting and guest arrangements?";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
