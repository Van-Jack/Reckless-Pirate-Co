// Edit only this course to change Chaining questions.
window.ACADEMY_COURSES.chaining = {
  id: "chaining", title: "Chaining Test", course: "Chaining",
  mission: "Mission 03 · Chaining",
  description: "12 questions on timers, bonus hits, chain responsibility, targets, respect, and chain coordination.",
  notice: "Your first selection for each question is final. Coordinate with faction leadership during active chains.",
  passingPercent: 80,
  questions: [
  {
    topic: "Chain Timers",
    q: "Once a faction chain reaches 10 hits, how much time does the faction normally have to make another successful attack before the chain breaks?",
    options: [
      "2 minutes",
      "5 minutes",
      "10 minutes",
      "15 minutes",
    ],
    correct: 1,
    why: "Once a chain reaches 10 hits, the faction has five minutes to complete another successful attack. Each successful hit resets the timer to five minutes. If the timer expires, the chain breaks and enters cooldown. This is why communication and chain alerts are important."
  },
  {
    topic: "Chain Bonus Hits",
    q: "What is a \"Bonus Hit\" during a faction chain in Torn City?",
    options: [
      "An attack that earns additional money for the faction.",
      "An attack that costs less energy than a normal attack.",
      "A milestone attack that awards the faction additional respect.",
      "An attack performed against a player from an opposing Ranked War faction.",
    ],
    correct: 2,
    why: "Bonus Hits occur at specific chain milestones, such as 10, 25, 50, 100, 250, and 500 hits. These milestone attacks award additional faction respect, making them especially valuable. Factions should coordinate bonus hits to maximize the respect earned."
  },
  {
    topic: "Chain Management",
    q: "What should you do if your faction's chain timer has less than 1 minute left and you're able to make an attack?",
    options: [
      "Wait until the timer reaches zero before attacking.",
      "Use your energy at the gym instead of attacking.",
      "Wait for faction leadership to personally tell you to attack.",
      "Make a successful attack as soon as possible to keep the chain alive.",
    ],
    correct: 3,
    why: "When the chain timer has less than one minute remaining, every second counts! If you are able to make a successful attack, act immediately to prevent the chain from breaking. Communicating through faction chat or Discord also helps the crew coordinate attacks and avoid losing the chain."
  },
  {
    topic: "Chain Target Selection",
    q: "When participating in a faction chain, what should you consider when choosing a target to attack?",
    options: [
      "Always attack the highest-level player you can find, regardless of whether you can win.",
      "Attack any player, even if you are likely to lose, because every attack increases the chain.",
      "Choose a target you can reliably defeat while earning a good amount of faction respect.",
      "Only attack players who are members of another faction.",
    ],
    correct: 2,
    why: "Successful chaining requires choosing targets you can consistently defeat while earning respectable amounts of faction respect. Losing an attack wastes energy and does not advance the chain. Selecting appropriate targets helps the faction maintain its chain and maximize the respect earned."
  },
  {
    topic: "Chain Energy Management",
    q: "What is the best way to prepare your energy before a planned faction chain?",
    options: [
      "Use all your energy at the gym immediately before the chain starts.",
      "Stack energy ahead of time so you have enough available for multiple attacks.",
      "Wait until the chain begins before starting to regenerate energy.",
      "Save your nerve because attacking other players uses nerve instead of energy.",
    ],
    correct: 1,
    why: "Stacking energy before a planned faction chain allows you to make multiple attacks without waiting for natural energy regeneration. Players commonly use Xanax to build up energy before a chain. Preparing ahead of time helps the faction reach its chain goals more efficiently."
  },
  {
    topic: "Chain Respect",
    q: "Which of the following attack outcomes earns the least faction respect during a chain, assuming the same target and conditions?",
    options: [
      "Leaving your opponent on the street.",
      "Hospitalizing your opponent.",
      "Mugging your opponent.",
      "Leaving and hospitalizing both earn less respect than mugging.",
    ],
    correct: 2,
    why: "Mugging earns 75% of the base respect awarded for leaving or hospitalizing an opponent. When chaining, leaving or hospitalizing your target is generally preferred to maximize faction respect. Leaving also allows your target to recover sooner, making them available for another attack."
  },
  {
    topic: "Chaining Best Practices (True or False)",
    q: "When chaining, it is best practice to hospitalize everyone you attack.",
    options: [
      "True",
      "False",
    ],
    correct: 1,
    why: "When chaining, it is generally better to leave your opponents on the street rather than hospitalize them. Both outcomes earn the same base faction respect, but leaving opponents results in a shorter hospital stay, allowing them to recover and potentially be attacked again sooner. Hospitalizing can be useful in certain situations, but should not be the default strategy during a regular faction chain."
  },
  {
    topic: "Chain Breaking",
    q: "What happens if your faction's chain timer reaches zero before another successful attack is made?",
    options: [
      "The chain pauses until another faction member attacks.",
      "The chain breaks, and the faction must start a new chain after the cooldown.",
      "The chain automatically resets to the previous bonus milestone.",
      "The faction loses all respect earned during the chain.",
    ],
    correct: 1,
    why: "When the chain timer expires, the chain ends, and the faction must wait through the chain cooldown before starting another. The faction keeps the respect it already earned, but loses its chain progress. This is why keeping an eye on the timer and responding to chain alerts is so important."
  },
  {
    topic: "Chain Coordination",
    q: "Why is communication important during a faction chain?",
    options: [
      "To make sure every faction member attacks the same target at the same time.",
      "To coordinate attacks, prevent the chain from breaking, and organize bonus hits.",
      "To reduce the amount of energy required for each attack.",
      "To increase the faction's respect multiplier automatically.",
    ],
    correct: 1,
    why: "Communication is essential during faction chains. Using faction chat and Discord allows members to coordinate attacks, respond to low chain timers, and organize bonus hits. Good communication prevents wasted energy and helps the faction maximize its respect gains."
  },
  {
    topic: "Chain Bonus Hit Strategy",
    q: "Why is it important to select the right target for a chain bonus hit?",
    options: [
      "Bonus hits require less energy when attacking a weaker opponent.",
      "The bonus respect earned is affected by the respect modifiers associated with the attack.",
      "Bonus hits automatically award maximum respect regardless of the opponent.",
      "Attacking a higher-level opponent guarantees a successful bonus hit.",
    ],
    correct: 1,
    why: "Bonus hits award additional faction respect, and the amount earned can be affected by factors such as the target's level, fair fight modifier, and other respect modifiers. Choosing a target with strong respect modifiers can significantly increase the respect earned from a bonus hit. Coordinating bonus hits with faction leadership helps ensure these valuable milestones are not wasted."
  },
  {
    topic: "Taking Respect from Other Factions",
    q: "When chaining against members of another faction, how much respect does the opposing faction lose?",
    options: [
      "They lose 25% of the respect your faction earns from each attack, including chain bonus hits.",
      "They lose 50% of the respect earned once your chain reaches 100 hits.",
      "They lose 100% of the respect earned during any faction chain.",
      "They only lose respect if you are in a Ranked War against them.",
    ],
    correct: 0,
    why: "When attacking members of another faction, that faction loses 25% of the respect your faction earns. As your chain grows and your attacks earn more respect, the opposing faction can lose more respect as well. Choose your targets wisely! Chain bonus hits in particular can cause significant respect losses for opposing factions. This can draw unwanted attention to Reckless Pirate and potentially lead to retaliation or conflict with other factions. Be mindful of who you are attacking, especially when approaching a bonus hit milestone."
  },
  {
    topic: "Chain Responsibility",
    q: "What should you do if you are unable to participate in an active faction chain?",
    options: [
      "Ignore the chain since other faction members will keep it going.",
      "Leave the faction temporarily so you are not expected to participate.",
      "Communicate with faction members or leadership so they know you are unavailable and can plan accordingly.",
      "Use all your energy at the gym since you will not be participating.",
    ],
    correct: 2,
    why: "Communication and teamwork are essential to maintaining a successful faction chain. If you are unable to participate, let your crew or faction leadership know so they can plan accordingly. This helps ensure enough members are available to keep the chain alive and reach its milestones. Remember, every pirate plays a part in keeping the ship sailing!"
  }
]
};
