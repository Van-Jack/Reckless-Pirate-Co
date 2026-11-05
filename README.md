[README.md](https://github.com/user-attachments/files/34402479/README.md)
# Reckless Pirate Academy — Modular GitHub Pages Website

The **home page and both working courses** are preserved from the original website. Each upcoming course is still marked **Coming Soon**.

## Files

- `index.html` — home page and quiz screen layouts; loads the other files.
- `css/style.css` — wooden ship / grungy pirate design.
- `js/config.js` — public Google Apps Script results endpoint.
- `js/quiz.js` — quiz screens, grading presentation, and result submission.
- `courses/requirements.js` — TornStats required, Discord optional onboarding.
- `courses/basics.js` — all 12 approved Basics Test questions.
- `courses/chaining.js`, `war-tactics.js`, `gym-training.js`, `organized-crimes.js` — placeholders for upcoming courses.

## Install in your EXISTING repository

1. Download and extract the ZIP package.
2. In your GitHub repository, replace the placeholder content of each matching course file and `css/style.css`, `js/quiz.js`. Create `js/config.js`.
3. **Replace `index.html` LAST**. Keep every filename and folder exactly as shown.
4. Commit changes on `main`. GitHub Pages deploys automatically.
5. Hard refresh the public website and test both onboarding and Basics, then check the Basics Test Google Sheet tab after a test.

You may upload these files using GitHub's **Add file → Upload files** command, as long as paths are preserved, or edit each file in the GitHub web editor.

## Updating later

- To change Basics questions: edit only `courses/basics.js`.
- To update TornStats/Discord: edit only `courses/requirements.js`.
- To change the theme: edit only `css/style.css`.
- To change submission settings: edit `js/config.js`.

Future courses have placeholder files and visible Coming Soon cards. **Adding quiz questions to a placeholder alone will not activate the course yet**: when each course is built, we will also enable it in the quiz engine/home page and add its server-side answer key to Google Apps Script. This prevents ungraded results from being sent as if they were verified.

## Google Sheets

The web-app endpoint is configured in `js/config.js`. The `Torn City Basics` course sends answer indices to the Google Apps Script, which should grade and append them in the `Basics Test` tab. The website currently cannot verify that a submission was saved; check Sheets after a test. New courses need their own answer key in the Apps Script before their scores can be recorded.

No domain purchase or paid hosting is required. Never upload private Torn API keys or credentials to this public GitHub repository.

## November onboarding change
TornStats is the required first step. Discord is a second, optional but strongly recommended screen with an explicit Skip Discord button. Requirements confirmations are self-reported and are not sent to Google Sheets.
