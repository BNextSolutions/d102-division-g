# District 102 Division G

Next.js App Router + TypeScript directory and blog. Responsive layouts, directory search and area/language/format filters, club detail pages, journal articles, page metadata, and accessible navigation. Original editorial content; no copied district articles or unverified clubs.

Live site: https://d102-division-g.vercel.app

Public repository: https://github.com/BNextSolutions/d102-division-g

## Visual branding

Aligned to the Toastmasters International Brand Manual, version 2.0 (August 2026): https://content.toastmasters.org/image/upload/02330-001-0001-brand-manual.pdf.

- Primary colors: Loyal Blue `#004165` and True Maroon `#772432`.
- Accent colors: Cool Gray `#A9B2B1` and Happy Yellow `#F2DF74`.
- Approved Loyal Blue gradient: `#004165` to `#006094`; neutral background `#F5F5F5`.
- Montserrat headings and Source Sans 3 body copy are the manual's free alternatives to Gotham and Myriad Pro. Fonts are served locally by Next.js font optimization.
- Official Toastmasters logo is referenced from its official website, with preserved proportions, a width above the 72px minimum, and clear space. The custom Division G logo and decorative letter artwork were removed.
- Official tagline and website disclaimer are included. This implementation is not a claim of review or endorsement by Toastmasters International.

The production build and desktop/mobile browser checks passed, including font and logo loading and no horizontal overflow on the home, directory, journal, club, and article pages.

## Johor SEO and visitor enquiries

The site targets Toastmasters club discovery in Johor, Malaysia. Each page has its own title, description, canonical URL, and social metadata. Organization, WebSite, club Organization, directory ItemList, and visible FAQ structured data describe confirmed facts without invented venues, reviews, schedules, or prices. `/sitemap.xml` lists 25 content pages and `/robots.txt` allows crawling.

The `/visit` page helps prospective members choose a club, confirm arrangements, and prepare an enquiry. Visitor enquiries go to the owner's supplied public WhatsApp number, +60 11-6067 6283. Homepage, visitor page, club pages, and footer links open prefilled drafts; club drafts include the club name and number. The number is a Division G enquiry contact, not a claimed direct number for every club. No enquiry form claims to submit or stores personal data.

For AI search (GEO), the site uses clear regional identity, visible answers, linked club records, and matching structured data. No AI placement or search ranking is guaranteed. Follow-up: provide public club contact links and verified meeting details, connect Google Search Console and submit the sitemap, and measure enquiries through the supplied WhatsApp destination. The sitemap is available without a Search Console integration.

Reference: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide.

## Run locally

Requires Node.js 20.9 or newer.

```powershell
cd division-g-site
npm install
npm run typecheck
npm run build
npm run dev
```

Open http://localhost:3000. Commit the generated package-lock.json after installation. Dependencies use major-bounded ranges so installation can resolve patched versions.

## Update content

Edit `lib/content.ts`. `clubs` contains the 17 clubs from the supplied Division G roster, with club numbers preserved as strings. Location, language, format, schedule, venue, and public contacts remain optional until confirmed. For each verified club add a unique URL-safe slug, name, current area, city, language, format (`In person`, `Online`, or `Hybrid`), meeting schedule, venue, description, public HTTPS website/contact link, and club number. Meeting times are Malaysia time. Avoid publishing private contact information. Club pages are generated automatically.

The `posts` array contains original introductory articles. Add articles with unique slugs, titles, categories, read times, summaries, and paragraph arrays. Changes publish through GitHub commits; there is no admin dashboard or database in this first version.

## GitHub and Vercel

Target public repository: `BNextSolutions/d102-division-g`.

1. Create the public GitHub repository and push this folder as its root. If using the existing parent repository, include this folder and set the Vercel Root Directory to `division-g-site`.
2. In Vercel, choose Add New Project, import the GitHub repository, and select the Next.js preset.
3. Use the default build command (`npm run build`) and output settings. No environment variables are required.
4. Deploy. Future commits to the production branch trigger production deployments; pull requests get previews.
5. Verify mobile layouts, page navigation, article pages, empty directory, unknown URLs, and filters after adding club data.

Before public launch, confirm official Division G status and branding, verify club data, and review articles. Source context: https://d102tm.org/. Framework references: https://nextjs.org/docs/app/getting-started/installation and https://vercel.com/docs/frameworks/full-stack/nextjs.

## Verification status

Dependency installation completed with zero reported vulnerabilities. TypeScript checking and the Next.js 16.4.0 production build passed locally and on Vercel. The generated package-lock.json records the installed versions. Desktop and mobile browser checks passed, including directory interaction, no mobile horizontal overflow, and no observed runtime errors. All seven content routes returned HTTP 200 locally; unknown club/page routes returned HTTP 404. The production homepage returned HTTP 200 without authentication. Vercel is connected to the GitHub repository for future deployments.


## Club workbook import

Meeting schedules, meeting modes, listed locations, and membership access for 16 clubs were imported on 8 October 2026 from the owner-supplied workbook (https://docs.google.com/spreadsheets/d/183qVX__qCmhieQdi8r0YPvSnIdlf-hRv/edit). Names and numbers match the existing roster. The detailed By Day tab provides times and membership access; SY provides club numbers. Homlux is absent and remains pending. FLEX frequency and Johor Jaya venue conflicts are explicitly flagged. Iskandar Puteri is listed as online with a reference address, not a confirmed walk-in venue. Facebook page names are displayed without invented URLs. Meeting languages are not supplied. The workbook itself is not committed.

## 9 October 2026 update

WhatsApp enquiries now use 601160676283. Homlux was removed at the owner’s request; the directory and sitemap contain 16 clubs. The homepage includes Mandarin and Bahasa Melayu invitations with language-specific WhatsApp drafts. These invitations encourage language practice, communication and leadership without assigning unconfirmed meeting languages to clubs. The externally managed Google My Maps remains maintained by its owner.

## Confirmed meeting languages

The owner confirmed on 9 October 2026 that 15 clubs conduct meetings in English and Kelab Toastmasters Bahasa Melayu Johor Darul Ta’zim conducts meetings in Bahasa Melayu. Mandarin content is outreach for Chinese-speaking prospective visitors, not a claim of Mandarin meetings. Language filters, club pages, FAQs, visitor guidance and outreach copy reflect these confirmed languages.
