// Reckless Pirate Academy — War Tactics (12 questions)
// Only question 1 requires a correct answer before advancing.
// The quiz engine records the FIRST selected answer for scoring and Google Sheets.
window.ACADEMY_COURSES['war-tactics'] = {
  id: 'war-tactics',
  title: 'War Tactics',
  course: 'War Tactics',
  mission: 'Mission 04 · War Tactics',
  description: '12 questions covering war tools, targets, turtling, chaining, assists, and coordinated attacks.',
  notice: 'Question 1 requires a correct answer before advancing. All other questions reveal the correct answer immediately; your first selections are recorded.',
  passingPercent: 80,
  requireCorrectToAdvance: false,
  questions: [
    {
      topic: "War Tools & Preparation",
      requireCorrectToAdvance: true,
      q: "Before a Ranked War, which tools can help you identify suitable opponents?",
      options: ["FFScouter, Torn PDA, and compatible war userscripts.", "Torn’s item market, casino, and travel agency.", "Only an opponent’s Torn level and current life.", "TornStats alone, without checking battle-stat estimates or war information."],
      correct: 0,
      why: "CaptReckless257 pays for FFScouter access for the faction. FFScouter provides estimates of opponent strength and Fair Fight potential; these are predictions, not guaranteed stats. Torn PDA offers mobile tools for finding targets and following war activity, while compatible desktop userscripts can add estimates, filters, and convenient links to Torn. Use these tools together to make better decisions and avoid wasting energy."
    },
    {
      topic: "Target Selection",
      q: "During a Ranked War, what is the best way to choose an opponent to attack?",
      options: ["Always attack the highest-level opponent available because they award the most war score.", "Attack opponents randomly because every attack contributes to the war, even if you lose.", "Use tools like FFScouter and Torn PDA to identify opponents you can reliably defeat while maximizing your war score.", "Only attack opponents who are currently online because they provide more war score."],
      correct: 2,
      why: "Use estimated battle strength and other available information to identify opponents you can defeat consistently. Successful attacks against suitable targets are more useful than spending energy on repeated losses. FFScouter estimates can be wrong, so share surprising matchups with the crew and adjust your target choices."
    },
    {
      topic: "Leave vs. Hospitalize",
      q: "During a Ranked War, you should generally leave enemy faction players on the street UNLESS...",
      options: ["You want to earn more war score by hospitalizing them.", "The opponent is an active threat to our faction, and hospitalizing them will prevent them from attacking our members for a longer period.", "The opponent has a higher level than you.", "You want to prevent your faction members from attacking the same opponent."],
      correct: 1,
      why: "Leaving opponents on the street usually allows them to recover sooner and become available for additional scoring attacks. Hospitalizing can be tactically valuable when an enemy is repeatedly attacking our members or is a major threat. The goal is to keep manageable targets available while limiting dangerous opponents’ opportunities to attack."
    },
    {
      topic: "Turtling",
      q: "During a Ranked War, when should you be turtling (staying hospitalized or traveling)?",
      options: ["Only when faction leadership specifically tells you to turtle.", "Whenever you run out of energy, even if you’re actively helping coordinate the war.", "When you’re unable to actively participate in the war, such as sleeping, working, or being away from Torn.", "Only when the opposing faction is significantly stronger than ours."],
      correct: 2,
      why: "Turtling reduces chances for the enemy faction to score easy points while you are unavailable. Before sleeping, working, or stepping away for an extended period, consider staying hospitalized or traveling so opponents have fewer opportunities to attack you. Coordinate with leadership when the war plan calls for a different approach."
    },
    {
      topic: "Energy Management",
      q: "What is the best way to manage your energy during an active Ranked War?",
      options: ["Use your energy at the gym whenever it reaches its maximum, even while the war is active.", "Save all your energy until the final hour of the war.", "Use your energy to attack the strongest opponents, even if you repeatedly lose.", "Prioritize successful war attacks, use available energy efficiently, and coordinate with your faction to maximize your contribution."],
      correct: 3,
      why: "Energy is valuable during Ranked Wars, so prioritize successful attacks against suitable enemy targets. Natural regeneration, Xanax, and available energy refills can support participation when used responsibly. Even a player with lower battle stats can contribute through consistent, winnable attacks rather than wasting energy at the gym or repeatedly losing."
    },
    {
      topic: "Coordinated Attacks",
      q: "During a Ranked War, why is it important to communicate and coordinate attacks with your faction?",
      options: ["To make sure everyone attacks the same opponent at the same time, regardless of their strength.", "To identify suitable targets, avoid wasting energy, and help faction members who are struggling against stronger opponents.", "To allow leadership to make all the attacks while everyone else stays hospitalized.", "To increase the amount of energy each player receives from Xanax."],
      correct: 1,
      why: "Faction chat and Discord let members share suitable targets, identify dangerous opponents, and request help. If you cannot find someone you can beat, ask for recommendations or assistance instead of repeatedly losing. Stronger members can manage difficult opponents while others focus on winnable targets, making the crew more effective overall."
    },
    {
      topic: "Chain Bonus Coordination",
      q: "During a Ranked War, why is it important to call out upcoming chain bonuses in faction chat?",
      options: ["To let everyone know they should stop attacking until the chain timer is almost empty.", "To make sure the upcoming bonus hit lands on an enemy faction member, maximizing war score and helping our faction win.", "To allow the strongest player to take every bonus hit, regardless of who they attack.", "To prevent the opposing faction from seeing our chain count."],
      correct: 1,
      why: "Reckless Pirate requires a callout 10 hits before every upcoming chain bonus. For example, at 40/50 hits, announce in faction chat that the 50-hit bonus is coming and needs to land on an opposing faction member. Continue coordinating through hits 40–49, and at 49 confirm that hit #50 is assigned to an enemy target. This gives members time to prepare and reduces the risk of wasting a bonus on an unrelated player. The same advance notice applies at other milestones."
    },
    {
      topic: "Assist Attacks",
      q: "During a Ranked War, what should you do if you’re having trouble defeating an opponent but still want to contribute to the war?",
      options: ["Continue attacking the same opponent repeatedly until you eventually win.", "Stop participating in the war because your battle stats aren’t strong enough.", "Coordinate with stronger faction members to make assisted attacks, helping you defeat opponents you couldn’t beat alone.", "Attack random players outside the opposing faction to increase your personal attack count."],
      correct: 2,
      why: "A player does not need to be among the strongest fighters to contribute. In an assisted attack, multiple faction members can work together against an opponent who is too strong for one person alone. Coordinate in faction chat or Discord, agree on the target, and time the assistance so energy is used effectively."
    },
    {
      topic: "Managing Enemy Threats",
      q: "During a Ranked War, what should you do if an enemy faction member is repeatedly attacking our weaker players and earning easy war score?",
      options: ["Ignore them and focus entirely on your own attacks.", "Have our weaker members repeatedly attack that player until they win.", "Ask everyone to stop attacking until the enemy player goes offline.", "Alert faction leadership and coordinate with stronger members to hospitalize the opponent and temporarily remove the threat."],
      correct: 3,
      why: "When an enemy repeatedly targets weaker members, report it through faction chat or Discord. Stronger crew members can coordinate a response and hospitalize that player to limit additional scoring opportunities. Meanwhile, other members can focus on winnable enemies or turtle if they are unavailable to fight."
    },
    {
      topic: "Participation & Availability",
      q: "What should you do if you’re running low on energy or need to step away during an active Ranked War?",
      options: ["Stay available for enemy attacks so you can return to fighting later.", "Use all your remaining energy at the gym before logging off.", "Let your faction know you’re stepping away, turtle to prevent easy enemy war score, and return to fighting when you’re available.", "Leave the faction temporarily until you’re ready to participate again."],
      correct: 2,
      why: "Real life comes first, but leaving yourself exposed during a war can give the enemy easy points. If you need to step away, communicate when appropriate and turtle by staying hospitalized or traveling. When you return, check faction updates, manage your energy, and rejoin the fight. Defensive decisions help the faction even while you are offline."
    },
    {
      topic: "Retreating from Bad Matchups",
      q: "During a Ranked War, what should you do if you start an attack against an opponent and realize you’re unlikely to win?",
      options: ["Continue attacking until you’re defeated because quitting will cost the faction war score.", "Use all your temporary weapons immediately, regardless of whether they will help.", "Retreat from the attack when possible to avoid wasting additional resources, then find a more suitable target.", "Remain in the attack without doing anything until another faction member defeats the opponent."],
      correct: 2,
      why: "Recognizing a bad matchup can prevent unnecessary waste of consumables and temporary weapons. Retreating does not refund the energy spent starting an attack, so choose targets carefully. If an opponent turns out to be much stronger than expected, share that information with the crew so other members can avoid making the same mistake."
    },
    {
      topic: "Coordinated Group Attacks",
      q: "During a Ranked War, how can several weaker faction members work together to defeat an extremely strong opponent?",
      options: ["Attack the opponent individually until someone eventually wins, without coordinating with other faction members.", "Have everyone use their strongest damaging weapons without considering temporary weapon effects.", "Coordinate a group attack, strategically using temporary weapons such as Smoke Grenades, Tear Gas, and Flash Grenades to weaken the opponent and improve the group’s chances of winning.", "Avoid attacking stronger opponents entirely because weaker players cannot contribute to defeating them."],
      correct: 2,
      why: "Several weaker players can cooperate in a single group attack, using temporary weapons to impair a powerful opponent before and during the fight. Smoke Grenades, Tear Gas, and Flash Grenades affect different combat capabilities, so coordinate which player uses which item rather than throwing everything at random. Good timing and communication through faction chat or Discord improve the group’s chances of winning."
    }
  ]
};
