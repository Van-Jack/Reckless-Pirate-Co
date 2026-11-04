# Reckless Pirate Academy — Free GitHub Pages Starter

This is a single-file static quiz website. It works on desktop and mobile without needing an API key, signup, web server, or paid domain.

## Publish to GitHub Pages (free)

1. Sign in to https://github.com (create a free account if needed).
2. Click **+** → **New repository**.
3. Name it `reckless-pirate-academy` (or another name), set visibility to **Public**, and create it.
4. Select **Add file → Upload files**, then upload **index.html** from this folder (not the ZIP itself). Commit changes.
5. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then **main**, **/(root)** and **Save**.
6. When GitHub publishes the website, the URL will have the format `https://YOUR-USERNAME.github.io/reckless-pirate-academy/` (substitute your actual GitHub username and repository name).
7. Post that URL in your Torn faction mail, announcement, or forum.

It can take a few minutes for the site to become available. GitHub Free requires the repository to be public for GitHub Pages.

## What works now

- 10 beginner-level Torn questions, including one select-all question
- Mobile-friendly pirate theme
- Player name and optional numeric player ID
- Automatic scoring, 8/10 passing requirement
- Review of answers, retry, copy score, print results
- No third-party libraries, cookies, or external network requests

## Important limitations

This version has **no server or database**. Scores are shown to the player but **not automatically saved or reported to faction leaders**. Players can copy their score and send it to leadership, but results are self-reported and not authoritative. The quiz answer key is in the publicly visible JavaScript and is not tamper-resistant. Player names/IDs are also self-reported, not verified through Torn.

For reliable centralized tracking, the next version can connect to a managed submission endpoint (such as a Google Apps Script web app + Google Sheets) with appropriate protections. Do not put secret keys or personal data into a public GitHub Pages repository.

## Customize

- Edit the heading text in `index.html`.
- Change the `questions` JavaScript array near the bottom to edit questions and correct answers.
- Change `points>=8` to another passing threshold if desired.

Unofficial Torn City fan project; not affiliated with Torn.
