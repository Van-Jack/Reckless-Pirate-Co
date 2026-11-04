# Reckless Pirate Academy — GitHub Pages

A free, mobile-friendly, single-file Torn City faction training website. It runs on GitHub Pages without a paid domain, hosting plan, installation, database, or API key.

## What is included

### Mission 01 — Pirates Requirements (new members)
Two separate onboarding screens, each with links and a completion confirmation:

1. **Discord:** Join https://discord.gg/fbvYz5HYp and link your Torn account. Explains attack alerts, vault withdrawal pings, organized crime alerts, and chain alerts.
2. **TornStats:** Register at https://www.tornstats.com/register and apply to the faction at https://www.tornstats.com/factions/show/7791/apply. Explains why the faction uses TornStats.

This is a **self-confirmation checklist**. The website cannot check whether someone actually joined Discord, linked Torn, or applied to TornStats. Members who haven't completed an item can follow the links and return to confirm.

### Mission 02 — Torn City Basics Test (after more than 3 days in the faction)
- **12 multiple-choice questions**, covering cooldowns, happy jumps, energy, chaining, organized crimes, turtling, and respect.
- **80% pass mark**, meaning **10 or more correct answers out of 12**.
- Shows the **explanation immediately when the first selected answer is correct**. Incorrect selections are locked and marked incorrect; full answers and explanations are shown in the final review. No repeated guessing to earn more points.
- Username and optional Player ID fields, printable review, and a copy-results button.

The **three-day rule is only displayed as policy**, not automatically enforced; this static website does not know how long a member has been in the faction.

## Publish or update on GitHub Pages

1. Extract the ZIP. Open your existing **reckless-pirate-academy** repository on GitHub.
2. Update the `index.html` file **in the root of the repository** (not in a subfolder). On GitHub, select the existing `index.html` and use the pencil / Edit control to replace its contents, or upload the updated file and commit the replacement.
3. Optionally replace `README.md` with this version.
4. Commit to the branch your GitHub Pages settings use (typically `main`).
5. In **Settings → Pages**, choose **Deploy from a branch** → `main` → `/(root)` → **Save**, if not already set.
6. Visit `https://YOUR-GITHUB-USERNAME.github.io/reckless-pirate-academy/` (the exact URL is shown in Settings → Pages).
7. If the previous version is displayed, check **Actions** for successful deployment and hard-refresh (`Ctrl+Shift+R`) or open a private browser window.

**Do not upload the ZIP as the website itself.** Upload the extracted `index.html` and `README.md` files.

## Editing questions later

Open `index.html` in any text editor or directly in GitHub. Find this section in the JavaScript:

`const questions = [`

Each question is a JavaScript object with:
- `topic`: short category heading
- `q`: question text
- `options`: four answers in A, B, C, D order
- `correct`: index of the right answer (A=0, B=1, C=2, D=3)
- `why`: explanation shown on a correct selection and in the end-of-test review

Keep the objects separated by commas, and make sure the final `];` remains. The question count and passing threshold calculate automatically if you add/remove questions.

To change onboarding steps, edit the `const requirements = [` block. Each requirement has a title, instructions, reasons, and completion choices.

## Limitations and privacy

- All code is **public** in a GitHub Pages repository. Never put Discord tokens, Torn API keys, passwords, private member data, or secret answer keys there. On a static page, quiz answers are visible to technically inclined players through the source code; this is a basic training tool, not a secure examination.
- No central submission system: **results and confirmations are not sent to leadership or saved to a database**. Players can copy or print results and share them manually. A server-side service (e.g. Google Apps Script) would be needed to track attempts automatically.
- Entered player names are not verified. This version does not interact with the Torn API.
- No automatic three-day membership check.
- This is an **unofficial Torn City fan project**, not affiliated with Torn.
