# Reckless Pirate Academy — GitHub Pages + Google Sheets

The website is hosted for free on GitHub Pages. Test results can be recorded in a **single private Google Spreadsheet**, with separate tabs for each test.

## Tabs

- Pirates Requirements (reserved — confirmation submission is not yet connected)
- Basics Test (active — 12-question Basics Test)
- Chaining (reserved)
- War Tactics (reserved)
- Gym Training (reserved)
- Organized Crimes (reserved)

The four upcoming tests appear on the home page as **Coming Soon** cards. They are not clickable until their questions have been written and connected. Reserved tabs are created now, but will not receive scores until their courses have been added to the website and configured with server-side grading keys in the Apps Script.

## Set up or update the Google Sheets collector

1. Open your Google spreadsheet, then select **Extensions → Apps Script**.
2. Replace the contents of `Code.gs` with the supplied `Google_Apps_Script.gs` file, then click **Save**.
3. At the top of the Apps Script editor, select the function **setupCourseTabs** and click **Run**. Authorize it if prompted. The six tabs will appear in the spreadsheet. If an old `Results` tab exists and `Basics Test` does not, the function renames it, preserving historical data.
4. Select **Deploy → Manage deployments**, edit the existing web app deployment, choose a **New version**, and click **Deploy**. If you have not deployed before, select **Deploy → New deployment → Web app**, **Execute as: Me**, **Who has access: Anyone**.
5. Copy the deployment URL ending in `/exec` if it changed.
6. The supplied `index.html` already contains the Apps Script deployment URL you provided. If you redeploy under a new URL, update `RESULTS_WEB_APP_URL` in `index.html`.
7. Upload any changed website files to the `main` branch of your GitHub Pages repository.
8. Submit a test attempt, then check the **Basics Test** tab for a new row.

### Adding the next course

Give the course an exact name in `COURSE_TABS`, add its 0-based answer key to `ANSWER_KEYS`, and make the website submit the same `course` name and answer indices. The script will automatically route its submissions into its corresponding tab.

**Security:** GitHub Pages is public and the submission URL accepts unverified data. The submitted username/player ID is not proof of Torn identity. Keep the spreadsheet private, never publish private API keys, and verify important records with faction members.

## This update

The home page now shows Pirates Requirements, Basics Test, and four upcoming courses (Chaining, War Tactics, Gym Training, Organized Crimes). The Basics Test home card no longer advertises an 80% pass requirement; the underlying grading threshold remains 80%. Existing tests and questions are unchanged.


## Grungy pirate ship theme

The main `index.html` includes a wooden ship plank background, weathered deck panels, rope-toned borders and antique brass buttons. All background effects are drawn in CSS, so there are no additional image files or image hosting costs. Fonts use free Google Fonts with local serif fallbacks.

To update GitHub Pages, replace `index.html` in the root of the existing repository and commit to `main`. No new branch or repo is needed. Keep the existing Google Apps Script deployed for results.
