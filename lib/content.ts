export type Club = { slug: string; number: string; name: string; area: string; city?: string; language?: string; format?: 'In person' | 'Online' | 'Hybrid'; meeting?: string; venue?: string; description?: string; website?: string };
// Names, club numbers, and areas transcribed from the roster supplied on 8 October 2026.
// Meeting arrangements and public contacts have not yet been supplied.
export const clubs: Club[] = [
  { slug: 'technipfmc-nj', number: '04329121', name: 'TechnipFMC NJ Toastmasters', area: '01' },
  { slug: 'flex-ptp', number: '07430237', name: 'FLEX PTP TOASTMASTERS CLUB', area: '01' },
  { slug: 'just-for-you', number: '28675335', name: 'Just For You Toastmasters Club', area: '01' },
  { slug: 'bcs', number: '28679786', name: 'BCS Toastmasters Club', area: '01' },
  { slug: 'johor-bahru', number: '00008406', name: 'Johor Bahru Toastmasters Club', area: '02' },
  { slug: 'utm', number: '01329493', name: 'UTM Toastmasters Club', area: '02' },
  { slug: 'iskandar-puteri', number: '01475566', name: 'Iskandar Puteri Toastmasters Club', area: '02' },
  { slug: 'sutera-utama', number: '07474313', name: 'Sutera Utama Toastmasters Club', area: '02' },
  { slug: 'homlux', number: '28678982', name: 'Homlux Toastmasters Club', area: '02' },
  { slug: 'mim-johor-bahru', number: '00001888', name: 'MIM Toastmasters Club of Johor Bahru', area: '03' },
  { slug: 'johor-jaya', number: '00002196', name: 'Johor Jaya Toastmasters Club', area: '03' },
  { slug: 'cima-johor', number: '00798899', name: 'CIMA Johor Toastmasters', area: '03' },
  { slug: 'mmhe-pasir-gudang', number: '07157275', name: 'MMHE Pasir Gudang Toastmasters Club', area: '03' },
  { slug: 'kluang', number: '00007389', name: 'Kluang Toastmasters Club', area: '04' },
  { slug: 'jb-city', number: '00007669', name: 'JB City Toastmasters Club', area: '04' },
  { slug: 'sacred-heart', number: '00009449', name: 'Sacred Heart Toastmasters Club', area: '04' },
  { slug: 'bahasa-melayu-johor-darul-tazim', number: '01678271', name: "Kelab Toastmasters Bahasa Melayu Johor Darul Ta’zim", area: '04' },
];
export const posts = [
  { slug: 'your-first-toastmasters-meeting', title: 'Your first meeting, without the mystery.', category: 'Getting started', readTime: '3 min read', summary: 'A little preparation goes a long way. Here is what to expect when you visit a Toastmasters club.', paragraphs: ['Visiting a club is a chance to discover whether its atmosphere, meeting schedule, and learning experience suit you. Contact the club before attending to confirm the location, start time, guest arrangements, and any visitor fees.', 'A typical meeting brings together prepared speeches, impromptu speaking, and feedback. The agenda varies by club. You can ask the meeting host to explain the roles and how guests can participate.', 'You do not need a polished speech to visit. Introduce yourself, listen, and take part at a pace that feels comfortable. If you are invited to speak, ask the host about your options.', 'After the meeting, talk with a member about membership, meeting frequency, and learning goals. Consider visiting more than one club before deciding which community fits you best.'] },
  { slug: 'prepare-a-memorable-speech', title: 'One idea. One story. A stronger speech.', category: 'Speaking skills', readTime: '3 min read', summary: 'Make your next speech easier to follow with a clear message and a story that gives it life.', paragraphs: ['Before writing your opening, decide what you want listeners to remember. Put that idea into one sentence. It becomes a useful test for every example you include.', 'Choose a story that supports your message. Describe the situation, the choice you faced, and what changed. Concrete details help people picture the moment.', 'Read your draft aloud and time it. Spoken language often works better with shorter sentences and deliberate pauses. Leave room to breathe.', 'Ask for feedback on one specific skill, such as the clarity of your main point or your use of pauses. Use that feedback to guide your next speech.'] },
  { slug: 'feedback-that-helps', title: 'Turn feedback into a next step.', category: 'Leadership', readTime: '2 min read', summary: 'A thoughtful evaluation helps a speaker see what worked and what to try next.', paragraphs: ['Start by listening for the speaker’s purpose. Useful feedback connects what you observed with the effect it had on you as a listener.', 'Be specific. Instead of saying an opening was good, explain which detail caught your attention. Give the speaker something they can repeat.', 'Choose one or two improvements and suggest a practical way to try them. Too many suggestions can make it difficult to decide where to begin.', 'End with encouragement grounded in what you heard. A helpful evaluation gives the speaker both confidence and a clear next step.'] },
];
