'use strict';
// Quiz and onboarding engine. Edit course content in courses/*.js.
const $ = id => document.getElementById(id);
const screens=['home','requirementIntro','requirementScreen','requirementDone','welcome','quiz','results'];
function show(id){screens.forEach(screen=>$(screen).classList.toggle('hide',screen!==id));window.scrollTo(0,0)}
function element(tag,text,className){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(className)e.className=className;return e}
function addLink(label,url){const a=element('a',label+' ↗');a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a}
document.querySelectorAll('[data-home]').forEach(b=>b.addEventListener('click',()=>show('home')));
$('openRequirements').addEventListener('click',()=>show('requirementIntro'));
let activeCourse = null;
let questions = [];
document.querySelectorAll('[data-course]').forEach(node => {
  const id = node.getAttribute('data-course');
  const course = window.ACADEMY_COURSES[id];
  if (!course || !Array.isArray(course.questions) || !course.questions.length) return;
  let button = node;
  // Automatically activate an upcoming course once its question array is populated.
  if (node.tagName !== 'BUTTON') {
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'course';
    button.setAttribute('data-course', id);
    button.innerHTML = node.innerHTML;
    button.querySelector('.tag').textContent = course.mission.toUpperCase() + ' · AVAILABLE';
    button.querySelector('.cta').textContent = course.questions.length + ' questions · Start test →';
    node.replaceWith(button);
  }
  button.addEventListener('click', () => {
    activeCourse = course;
    questions = course.questions;
    $('welcomeMission').textContent = course.mission;
    $('welcomeTitle').textContent = course.title;
    $('welcomeDescription').textContent = course.description + ' Complete all ' + questions.length + ' questions to see your score.';
    $('welcomeNotice').textContent = course.notice;
    $('start').textContent = 'Start ' + course.title + ' →';
    // This same intro screen already collects Torn username and optional Torn ID.
    document.querySelector('#welcome .notice').lastChild.textContent = course.requireCorrectToAdvance
      ? ' Incorrect answers can be retried, but only the first choice counts toward your score. Completed attempts are sent for recording.'
      : ' Your first choice is final for each question. Completed attempts are sent for recording.';
    show('welcome');
  });
});
// Separate onboarding flow: identity → TornStats → optional Discord → five acknowledgments.
let reqIndex=0;
let reqAnswers={};
let reqIdentity={name:'',playerId:''};
let reqCopyText='';
$('reqStart').addEventListener('click',()=>{
  const name=$('reqName').value.trim(), playerId=$('reqPlayerId').value.trim();
  if(!name){$('reqName').focus();return;}
  if(!/^\d{1,12}$/.test(playerId)){alert('Please enter your numeric Torn Player ID.');$('reqPlayerId').focus();return;}
  reqIdentity={name,playerId};reqIndex=0;reqAnswers={};renderRequirement();show('requirementScreen');
});
function renderRequirement(){
  const req=requirements[reqIndex], dest=$('reqContent');
  $('reqCounter').textContent='PIRATE REQUIREMENTS & RULES · '+(reqIndex+1)+' OF '+requirements.length;
  $('reqProgress').style.width=(reqIndex/requirements.length*100)+'%';
  dest.replaceChildren();
  dest.append(element('div',req.title,'eyebrow'),element('h2',req.heading));
  const note=$('reqNote');note.classList.add('hide');note.textContent='';
  if(req.type==='rule'){
    dest.append(element('div','FACTION RULE · ACKNOWLEDGMENT REQUIRED','eyebrow'));
    dest.append(element('p',req.explanation,'muted'));
    const area=element('div',undefined,'choices');
    const b=element('button',req.acknowledgment,'choice');b.type='button';
    const acknowledged=reqAnswers[req.id]===true;
    b.setAttribute('aria-pressed',String(acknowledged));
    b.addEventListener('click',()=>{reqAnswers[req.id]=true;b.setAttribute('aria-pressed','true');$('reqConfirm').disabled=false;});
    area.append(b);dest.append(area);
    $('reqConfirm').disabled=!acknowledged;
  } else {
    dest.append(element('p',req.intro,'muted'));
    dest.append(element('div',req.required?'REQUIRED':'OPTIONAL · RECOMMENDED','eyebrow'));
    dest.append(element('h3',req.required?'How to complete':'How to join'));
    const steps=element('ol',undefined,'steptext');
    req.steps.forEach(([label,url])=>{const li=element('li');li.append(url?addLink(label,url):document.createTextNode(label));steps.append(li)});
    dest.append(steps);
    dest.append(element('h3',req.required?'Why this is required':'Why Discord is recommended'));
    const why=element('div',undefined,'stack');
    req.why.forEach(([label,desc])=>{const p=element('p');p.append(element('strong',label+': '),document.createTextNode(desc));why.append(p)});dest.append(why);
    dest.append(element('h3',req.prompt));
    const choices=element('div',undefined,'choices');
    req.choices.forEach((choice,i)=>{
      const b=element('button',String.fromCharCode(65+i)+'. '+choice,'choice');b.type='button';
      b.setAttribute('aria-pressed',String(reqAnswers[req.id]===i));
      b.addEventListener('click',()=>{
        reqAnswers[req.id]=i;
        choices.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed','false'));
        b.setAttribute('aria-pressed','true');
        $('reqConfirm').disabled=req.required && i!==0;
        if(req.required && i!==0){note.textContent='TornStats registration and your faction application are required before continuing.';note.classList.remove('hide');}
        else note.classList.add('hide');
      });choices.append(b);
    });dest.append(choices);
    $('reqConfirm').disabled=req.required?reqAnswers[req.id]!==0:reqAnswers[req.id]===undefined;
    if(req.required && reqAnswers[req.id]!==undefined && reqAnswers[req.id]!==0){
      note.textContent='Complete TornStats registration and submit your application to continue.';note.classList.remove('hide');
    }
  }
  $('reqBack').disabled=reqIndex===0;
  $('reqConfirm').textContent=reqIndex===requirements.length-1?'Finish & acknowledge rules →':'Continue →';
}
$('reqBack').addEventListener('click',()=>{
  if(reqIndex>0){reqIndex--;renderRequirement()}else show('requirementIntro');
});
$('reqConfirm').addEventListener('click',()=>{
  const req=requirements[reqIndex];
  if(req.type==='rule' && reqAnswers[req.id]!==true)return;
  if(req.id==='tornstats' && reqAnswers.tornstats!==0)return;
  if(req.id==='discord' && reqAnswers.discord===undefined)return;
  if(reqIndex<requirements.length-1){reqIndex++;renderRequirement();return;}
  finishRequirements();
});
function finishRequirements(){
  const discord=['Joined and linked','Joined but not linked','Prefer not to join'][reqAnswers.discord];
  const rules=requirements.filter(r=>r.type==='rule');
  const allAcknowledged=rules.every(r=>reqAnswers[r.id]===true);
  if(!allAcknowledged || reqAnswers.tornstats!==0 || !discord)return;
  $('reqDoneSummary').textContent=reqIdentity.name+' ['+reqIdentity.playerId+'] — You have confirmed your TornStats application, recorded your Discord preference, and acknowledged all five faction rules.';
  reqCopyText='Reckless Pirate Academy — Pirate Requirements & Rules\nPlayer: '+reqIdentity.name+' ['+reqIdentity.playerId+']\nTornStats: Application submitted\nDiscord: '+discord+'\nRules acknowledged: '+rules.map(r=>r.heading).join('; ')+'\nCompleted: '+new Date().toLocaleString();
  show('requirementDone');
  const payload={course:'Pirates Requirements',name:reqIdentity.name,playerId:reqIdentity.playerId,
    tornstats:'Application submitted',discord:discord,
    rules:rules.map(r=>({id:r.id,title:r.heading,acknowledged:true})),
    submittedAt:new Date().toISOString()};
  submitToSheet(payload,$('reqSubmissionStatus'));
}
$('reqCopy').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(reqCopyText);$('reqCopy').textContent='Copied!';}
  catch(err){$('reqCopy').textContent='Copy unavailable — select and copy your summary';}
});
let index=0,answers=[],mastered=[],player='',playerId='',lastSummary='';
// answers[] always stores FIRST selections. mastered[] tracks eventual correct
// answers only for courses that require a correct answer before moving on.
$('start').addEventListener('click',()=>{
  player=$('name').value.trim();playerId=$('playerid').value.trim();
  if(!player){$('name').focus();return}
  if(playerId&&!/^\d{1,12}$/.test(playerId)){alert('Player ID must contain 1–12 digits.');return}
  index=0;answers=questions.map(()=>null);mastered=questions.map(()=>false);
  renderQuestion();show('quiz');
});
function renderQuestion(){
  const q=questions[index], first=answers[index], requiresCorrect=!!activeCourse.requireCorrectToAdvance;
  const complete=requiresCorrect?mastered[index]:first!==null;
  $('counter').textContent='QUESTION '+(index+1)+' OF '+questions.length;
  $('progress').style.width=(index/questions.length*100)+'%';
  $('topic').textContent=q.topic;$('question').textContent=q.q;
  document.querySelector('#quiz .muted').textContent=requiresCorrect
    ? 'Choose the correct answer to continue. Your first selection counts toward your score.'
    : 'Choose one answer. Your first selection counts.';
  const container=$('choices');container.replaceChildren();
  q.options.forEach((opt,i)=>{
    const b=element('button',undefined,'choice');b.type='button';
    b.disabled=complete;
    b.setAttribute('aria-pressed',String(requiresCorrect?complete&&i===q.correct:first===i));
    b.append(element('span',String.fromCharCode(65+i),'letter'),element('span',opt));
    if(complete){if(i===q.correct)b.classList.add('correct');else if(!requiresCorrect&&i===first)b.classList.add('wrong')}
    b.addEventListener('click',()=>{
      if((requiresCorrect&&mastered[index])||(!requiresCorrect&&answers[index]!==null))return;
      if(answers[index]===null)answers[index]=i;
      if(requiresCorrect){
        if(i===q.correct){mastered[index]=true;renderQuestion();}
        else {
          const feedback=$('feedback');feedback.className='feedback bad';
          feedback.replaceChildren(element('strong','Not quite — try again.'),
            document.createTextNode('The next question stays locked until you choose the correct answer. Your initial choice has been recorded.'));
          container.querySelectorAll('button').forEach(x=>{x.classList.remove('wrong');x.setAttribute('aria-pressed','false')});
          b.classList.add('wrong');b.setAttribute('aria-pressed','true');
        }
      }else renderQuestion();
    });
    container.append(b);
  });
  const feed=$('feedback');
  if(complete){
    feed.className='feedback '+(requiresCorrect||first===q.correct?'good':'bad');
    feed.replaceChildren();
    if(requiresCorrect||first===q.correct){
      feed.append(element('strong',first===q.correct?'✓ Correct answer!':'✓ Correct — next question unlocked!'),
        document.createTextNode(q.why));
    }else{
      feed.append(element('strong','Not quite, Pirate.'),
        document.createTextNode('Your first answer is marked incorrect. Review the explanation at the end.'));
    }
  }else{feed.className='feedback hide';feed.replaceChildren()}
  $('back').disabled=index===0;$('next').disabled=!complete;
  $('next').textContent=index===questions.length-1?'Finish & grade →':'Next question →';
}
$('back').addEventListener('click',()=>{if(index>0){index--;renderQuestion()}});
$('next').addEventListener('click',()=>{
  if(activeCourse.requireCorrectToAdvance&&!mastered[index])return;
  if(answers[index]===null)return;
  if(index<questions.length-1){index++;renderQuestion()}else finish();
});
$('quizHome').addEventListener('click',()=>{if(confirm('Leave this test? Your current answers will be lost.'))show('home')});
function finish(){
  const earned=questions.reduce((n,q,i)=>n+Number(answers[i]===q.correct),0);
  const needed=Math.ceil(questions.length*(activeCourse.passingPercent/100));
  const pass=earned>=needed,when=new Date().toLocaleString(),pct=Math.round(100*earned/questions.length);
  const requiresCorrect=!!activeCourse.requireCorrectToAdvance;
  $('resultTitle').textContent=requiresCorrect?'War Tactics training complete!':pass?'Congratulations, Pirate!':'More training required, matey!';
  $('resultName').textContent=player+(playerId?' ['+playerId+']':'')+' · '+when;
  $('score').textContent=earned+' / '+questions.length;
  $('status').replaceChildren();
  $('status').append(element('span',pass?'PASS':'RETAKE','pill'+(pass?'':' fail')));
  $('details').textContent=requiresCorrect
    ? 'All 12 questions were answered correctly before advancing. The score shown reflects only your FIRST choices, so leadership can see which topics needed practice.'
    : 'Your first choices are reviewed below. Leadership can verify your submitted attempt in Google Sheets.';
  lastSummary='Reckless Pirate Academy — '+activeCourse.title+'\nPlayer: '+player+(playerId?' ['+playerId+']':'')+'\nFirst-choice score: '+earned+'/'+questions.length+' ('+pct+'%) — '+(pass?'PASS':'RETAKE')+'\nCompleted: '+when+'\nSelf-reported; not verified by faction leadership.';
  $('review').replaceChildren();
  questions.forEach((q,i)=>{
    const right=answers[i]===q.correct,div=element('div',undefined,'review');
    div.append(element('strong',(i+1)+'. '+q.q),
      element('div','First answer: '+q.options[answers[i]]+' — '+(right?'Correct':'Incorrect'),right?'goodtext':'badtext'),
      element('p','Correct answer: '+String.fromCharCode(65+q.correct)+'. '+q.options[q.correct]),
      element('p',q.why,'muted'));
    $('review').append(div);
  });
  show('results');
  sendResults({course:activeCourse.course,name:player,playerId:playerId,answers:answers.slice(),submittedAt:new Date().toISOString()});
}
// Apps Script endpoint accepts form submissions. A cross-origin POST cannot confirm saved rows
// from the browser, so the status says 'submitted' rather than claiming success.
function sendResults(data){ submitToSheet(data,$('submissionStatus')); }
// Shared submission mechanism for course results and onboarding acknowledgments.
// Cross-origin iframe submissions cannot reliably confirm a saved row in the browser.
function submitToSheet(data,status){
 if(!RESULTS_WEB_APP_URL || !/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(RESULTS_WEB_APP_URL)){
   status.textContent='Google Sheets is not connected. Copy your completion record and send it to leadership.';return;
 }
 status.textContent='Sending your information to the faction sheet…';
 try{
   const iframe=document.createElement('iframe');iframe.name='academy_submit_'+Date.now();iframe.hidden=true;
   iframe.style.display='none';document.body.appendChild(iframe);
   const form=document.createElement('form');form.action=RESULTS_WEB_APP_URL;form.method='POST';form.target=iframe.name;form.style.display='none';
   const input=document.createElement('input');input.type='hidden';input.name='payload';input.value=JSON.stringify(data);form.appendChild(input);
   document.body.appendChild(form);form.submit();form.remove();
   status.textContent='Submission sent for recording. Leadership should verify it appears in the correct Google Sheets tab.';
   setTimeout(()=>iframe.remove(),60000);
 }catch(err){status.textContent='Submission could not be sent. Please copy your completion record and contact leadership.';}
}
$('copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(lastSummary);$('copy').textContent='Copied!'}catch(e){const t=element('textarea');t.value=lastSummary;document.body.append(t);t.select();try{document.execCommand('copy');$('copy').textContent='Copied!'}catch(err){$('copy').textContent='Copy unavailable — print instead'}t.remove()}});
$('print').addEventListener('click',()=>window.print());$('retake').addEventListener('click',()=>show('welcome'));
window.ACADEMY_READY = true;
