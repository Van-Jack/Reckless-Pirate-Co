[README.md](https://github.com/user-attachments/files/34403023/README.md)
# Reckless Pirate Academy — modular multi-course update

This release makes Basics and Chaining playable using ONE shared quiz engine. It keeps the wood-and-brass styling and TornStats-first onboarding (Discord optional).

## Publish on GitHub
Upload the contents of the package preserving folder names, and replace each existing file. Add the top-level `Google_Apps_Script.gs` to Apps Script, NOT your public GitHub repository. Replace `index.html` LAST, after all `.js` and `.css` files are committed.

## Update Google Apps Script
In your private Google Sheet: Extensions > Apps Script > Code.gs. Replace the existing script with `Google_Apps_Script.gs`. Save. Run `setupCourseTabs` and `testChainingSubmission` manually to verify a Chaining row appears, then remove the test row. In Deploy > Manage deployments, edit your existing deployment, choose New version, and deploy. **Keep the existing /exec URL.**

## Add future courses
Each `courses/*.js` registers its course in `window.ACADEMY_COURSES` and contains `questions` with `topic`, `q`, four `options`, `correct` (0=A, 1=B, 2=C, 3=D), and `why`. Set its questions to a nonempty array. The quiz engine automatically converts its existing Coming Soon card into a clickable course when the question array is populated; **no index.html or quiz.js update needed**. Add the matching answer array to `ANSWER_KEYS` in Google Apps Script, and redeploy a new version. There is no need to edit `js/quiz.js` for future courses.

## Important
GitHub Pages is public. Never publish Google Apps Script source containing secrets, private player records, or API keys. The web app endpoint is public; submissions and self-entered names are not identity-verified. The website cannot confirm receipt of cross-origin form submissions; verify the actual row in Google Sheets.
The Basics three-day eligibility rule is informational, not enforced. Pirates Requirements confirmations are self-reported and not logged.

## Verification
After publishing, check the wooden ship styling; complete a Basics and a Chaining attempt; verify one row appears in each matching tab. The four other courses should remain marked Coming Soon.
