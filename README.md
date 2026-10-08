# District 102 Division G

Next.js App Router + TypeScript directory and blog. Responsive layouts, directory search and area/language/format filters, club detail pages, journal articles, page metadata, and accessible navigation. Original editorial content; no copied district articles or unverified clubs.

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

Edit `lib/content.ts`. `clubs` intentionally starts empty until the current Division G roster is supplied. For each verified club add a unique URL-safe slug, name, current area, city, language, format (`In person`, `Online`, or `Hybrid`), meeting schedule, venue, description, public HTTPS website/contact link, and verification date. Meeting times are Malaysia time. Avoid publishing private contact information. Club pages are generated automatically.

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

Dependency installation completed with zero reported vulnerabilities. TypeScript checking and the Next.js 16.4.0 production build passed. The generated package-lock.json records the installed versions. Browser QA and Vercel deployment are tracked separately; Vercel requires account sign-in.
