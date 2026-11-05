// Pirates Requirements — TornStats required; Discord optional but recommended.
const requirements = [
  {title:'Question 1 — Join TornStats',heading:'Register with TornStats and apply to Reckless Pirate',required:true,
    intro:'TornStats is required for Reckless Pirate members. It helps our faction track progress, prepare for Ranked Wars, and coordinate its members.',steps:[
      ['Register an account at TornStats','https://www.tornstats.com/register'],
      ['Connect your Torn account using a Limited Access API key created in Torn’s API settings',null],
      ['Apply to join Reckless Pirate on TornStats','https://www.tornstats.com/factions/show/7791/apply'],
      ['Wait for faction leadership to review your application',null]
    ],why:[
      ['Faction coordination','Helps leadership prepare for wars and other faction activities.'],
      ['Tracking progress','Helps members understand their development and improve.'],
      ['Shared faction information','Keeps useful tracking and intelligence tools organized for the crew.']
    ],prompt:'Have you registered with TornStats and submitted your application to Reckless Pirate?',choices:['Yes, I registered and submitted my application.','I registered, but have not applied to the faction yet.','I have not registered with TornStats yet.']},
  {title:'Question 2 — Join Our Discord (Optional)',heading:'Join the Reckless Pirate Discord and link your Torn account',required:false,
    intro:'Discord is optional but strongly recommended. It keeps our pirate crew informed and organized during Ranked Wars, chains, and Organized Crimes.',steps:[
      ['Join the Reckless Pirate Discord server','https://discord.gg/fbvYz5HYp'],
      ['Follow the instructions in Discord to link your Torn City account',null],
      ['Enable the Discord notifications you need to receive faction alerts',null]
    ],why:[
      ['Attack alerts','Our system can notify the crew when you are attacked.'],
      ['Faction vault withdrawals','Ping the appropriate members when you need to withdraw faction funds.'],
      ['Organized Crime alerts','Receive notices when an assigned player is unavailable or lacks required equipment.'],
      ['Chain alerts','Get warnings when a chain is about to expire.']
    ],prompt:'Have you joined our Discord server and linked your Torn account?',choices:['Yes, I have joined Discord and linked my Torn account.','I joined Discord but have not linked my Torn account yet.','I have not joined Discord yet.']}
];
