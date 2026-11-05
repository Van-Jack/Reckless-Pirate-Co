// Onboarding content: TornStats (required), Discord (optional), then five faction rules.
// Each rule has its own acknowledgment screen.
const requirements = [
  {id:'tornstats',type:'requirement',title:'Step 1 — TornStats',heading:'Join TornStats and apply to Reckless Pirate',required:true,
   intro:'TornStats membership is required for all crew members. This helps the faction organize information, monitor progress, and prepare for faction activities.',
   steps:[
     ['Create your TornStats account','https://www.tornstats.com/register'],
     ['Connect your Torn account using a Limited Access API key from Torn settings',null],
     ['Apply to Reckless Pirate on TornStats','https://www.tornstats.com/factions/show/7791/apply'],
     ['Leadership will review your application',null]
   ],why:[
     ['Tracking progress','Share useful statistics and monitor your development.'],
     ['Faction coordination','Help leadership organize faction activity and prepare for Ranked Wars.']
   ],prompt:'Have you registered with TornStats and applied to our faction?',
   choices:['Yes, I registered and submitted my application.','I registered but have not applied yet.','I have not registered yet.']},
  {id:'discord',type:'requirement',title:'Step 2 — Discord',heading:'Join our Discord (optional, but recommended)',required:false,
   intro:'Discord is optional. Joining and linking your Torn account gives you access to helpful notifications and an easier way to communicate with the crew.',
   steps:[
     ['Join the Reckless Pirate Discord server','https://discord.gg/fbvYz5HYp'],
     ['Follow the server instructions to link your Torn account',null],
     ['Choose which notifications you want to receive',null]
   ],why:[
     ['Attack notifications','The crew can be alerted when you are attacked.'],
     ['Faction vault','Request a withdrawal by pinging the appropriate members.'],
     ['Organized Crime alerts','Receive notifications if an assigned player is unavailable or missing equipment.'],
     ['Chain alerts','Get notified when a chain is close to ending.']
   ],prompt:'What is your Discord preference?',
   choices:['I joined Discord and linked my Torn account.','I joined Discord but have not linked my account yet.','I prefer not to join Discord.']},
  {id:'no-selling-losses',type:'rule',title:'Rule 1 — No Selling Losses',heading:'No Selling Losses',
   explanation:'Selling losses means accepting payment to intentionally lose an attack against another player. Reckless Pirate members must not sell losses. Intentionally losing attacks for money can create problems for the crew and conflicts with our expectations of participation and fair dealing. If you have questions about an arrangement, ask leadership first.',
   acknowledgment:'I understand and agree not to sell losses while I am a member of Reckless Pirate.'},
  {id:'no-scamming',type:'rule',title:'Rule 2 — No Scamming',heading:'No Scamming',
   explanation:'We are pirates who loot, steal, and pillage in Torn, but we are honorable about it! Playing the game competitively, mugging, and taking part in normal game mechanics are one thing; deceiving people in trades, breaking agreements, or running scams is another. Reckless Pirate does not tolerate scamming. Honor your deals and protect the reputation of the crew.',
   acknowledgment:'I understand and agree not to scam other players.'},
  {id:'no-leaks',type:'rule',title:'Rule 3 — Protect Faction Information',heading:'Do Not Leak Information to Enemies',
   explanation:'Our war plans, chain schedules, targets, organized crime arrangements, faction finances, private chats, and other internal information stay within the crew. Do not share screenshots or details with rival factions or other people who are not authorized to receive them. If you are unsure whether information can be shared, ask leadership first.',
   acknowledgment:'I understand and agree to keep private faction information confidential.'},
  {id:'oc-participation',type:'rule',title:'Rule 4 — Organized Crimes',heading:'Always Be Signed Up for an Organized Crime',
   explanation:'Organized Crimes are a team effort and an important part of faction growth. When you are eligible and a suitable spot is available, stay signed up for an Organized Crime, keep the required equipment ready, and be available for your assigned role. If you cannot participate or need help getting equipped, communicate with leadership so we can plan accordingly.',
   acknowledgment:'I understand that I should stay enrolled in an Organized Crime whenever eligible and communicate any issues.'},
  {id:'participate',type:'rule',title:'Rule 5 — Participation',heading:'Participate in Wars, Chains & Events',
   explanation:'Wars, chains, and faction events help us grow, earn rewards, and succeed as a crew. We expect everyone to contribute when they can. We understand that real life comes first — work, family, and other obligations happen! All we ask is that you communicate with leadership when you will be unavailable so we can plan and keep the crew moving forward.',
   acknowledgment:'I understand the expectation to participate and to communicate when I am unavailable.'}
];
