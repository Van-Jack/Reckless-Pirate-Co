'use strict';
// Quiz and onboarding engine. Edit course content in courses/*.js.
const $ = id => document.getElementById(id);
const screens=['home','requirementScreen','requirementDone','welcome','quiz','results'];
function show(id){screens.forEach(screen=>$(screen).classList.toggle('hide',screen!==id));window.scrollTo(0,0)}
function element(tag,text,className){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(className)e.className=className;return e}
function addLink(label,url){const a=element('a',label+' ↗');a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a}
document.querySelectorAll('[data-home]').forEach(b=>b.addEventListener('click',()=>show('home')));
$('openRequirements').addEventListener('click',()=>{reqIndex=0;discordJoined=false;renderRequirement();show('requirementScreen')});
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
    show('welcome');
  });
});
let reqIndex=0,discordJoined=false;
function renderRequirement(){
  const req=requirements[reqIndex];$('reqCounter').textContent='PIRATES REQUIREMENTS · '+(reqIndex+1)+' OF '+requirements.length;
  $('reqProgress').style.width=(reqIndex/requirements.length*100)+'%';const dest=$('reqContent');dest.replaceChildren();
  dest.append(element('div',req.title,'eyebrow'),element('h2',req.heading),element('p',req.intro,'muted'));
  dest.append(element('div',req.required?'REQUIRED FOR ALL MEMBERS':'OPTIONAL · STRONGLY RECOMMENDED','eyebrow'));
  dest.append(element('h3',req.required?'How to complete this requirement':'How to join Discord'));
  const steps=element('ol',undefined,'steptext');req.steps.forEach(([label,url])=>{let li=element('li');li.append(url?addLink(label,url):document.createTextNode(label));steps.append(li)});dest.append(steps);
  dest.append(element('h3',req.required?'Why do we require this?':'Why do we recommend this?'));const why=element('div',undefined,'stack');req.why.forEach(([label,desc])=>{const p=element('p');p.append(element('strong',label+': '),document.createTextNode(desc));why.append(p)});dest.append(why);
  dest.append(element('h3',req.prompt),element('p','Select the statement that describes your progress.','muted'));
  const choices=element('div',undefined,'choices');req.choices.forEach((choice,i)=>{const b=element('button',String.fromCharCode(65+i)+'. '+choice,'choice');b.type='button';b.addEventListener('click',()=>{choices.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true');$('reqConfirm').disabled=i!==0;const note=$('reqNote');note.classList.toggle('hide',i===0);if(i!==0){note.textContent=req.required?'Complete TornStats registration and submit your faction application, then select A to confirm.':'Discord is optional. You may skip this step without affecting your onboarding.'}});choices.append(b)});dest.append(choices);
  $('reqConfirm').disabled=true;$('reqBack').disabled=reqIndex===0;$('reqNote').classList.add('hide');
  $('reqConfirm').textContent=req.required?'Continue to optional Discord →':'Finish onboarding →';
  $('reqNotYet').textContent=req.required?'Not completed yet':'Skip Discord →';
}
$('reqBack').addEventListener('click',()=>{if(reqIndex>0){reqIndex--;renderRequirement()}});
$('reqConfirm').addEventListener('click',()=>{if(requirements[reqIndex].required){reqIndex++;renderRequirement()}else{discordJoined=true;finishRequirements()}});
function finishRequirements(){
  const msg=$('requirementDone').querySelector('p.muted');
  msg.textContent='You have confirmed your TornStats registration and faction application. '+(discordJoined?'You also confirmed you joined Discord and linked your Torn account.':'Discord is optional but strongly recommended, and you can join at any time.');
  show('requirementDone');
}
$('reqNotYet').addEventListener('click',()=>{if(!requirements[reqIndex].required){discordJoined=false;finishRequirements();return;}const n=$('reqNote');n.textContent='TornStats is required. Use the links above to finish registering and applying, then return and confirm. Your progress is not automatically verified or saved.';n.classList.remove('hide')});
let index=0,answers=[],player='',playerId='',lastSummary='';
$('start').addEventListener('click',()=>{player=$('name').value.trim();playerId=$('playerid').value.trim();if(!player){$('name').focus();return}if(playerId&&!/^\d+$/.test(playerId)){alert('Player ID must contain only numbers.');return}index=0;answers=questions.map(()=>null);renderQuestion();show('quiz')});
function renderQuestion(){
  const q=questions[index],choice=answers[index];$('counter').textContent='QUESTION '+(index+1)+' OF '+questions.length;
  $('progress').style.width=(index/questions.length*100)+'%';$('topic').textContent=q.topic;$('question').textContent=q.q;
  const container=$('choices');container.replaceChildren();
  q.options.forEach((opt,i)=>{const b=element('button',undefined,'choice');b.type='button';b.setAttribute('aria-pressed',String(choice===i));b.disabled=choice!==null;const l=element('span',String.fromCharCode(65+i),'letter');b.append(l,element('span',opt));if(choice===i)b.classList.add(i===q.correct?'correct':'wrong');b.addEventListener('click',()=>{if(answers[index]!==null)return;answers[index]=i;renderQuestion()});container.append(b)});
  const feed=$('feedback');feed.className='feedback hide';feed.replaceChildren();if(choice!==null){feed.classList.remove('hide');if(choice===q.correct){feed.classList.add('good');feed.append(element('strong','✓ Correct answer!'),document.createTextNode(q.why))}else{feed.classList.add('bad');feed.append(element('strong','Not quite, Pirate.'),document.createTextNode('This answer will be marked incorrect. You can review the correct answer and explanation at the end of the test.'))}}
  $('back').disabled=index===0;$('next').disabled=choice===null;$('next').textContent=index===questions.length-1?'Finish & grade →':'Next question →';
}
$('back').addEventListener('click',()=>{if(index>0){index--;renderQuestion()}});
$('next').addEventListener('click',()=>{if(answers[index]===null)return;if(index<questions.length-1){index++;renderQuestion()}else finish()});
$('quizHome').addEventListener('click',()=>{if(confirm('Leave this test? Your current answers will be lost.'))show('home')});
function finish(){const earned=questions.reduce((n,q,i)=>n+Number(answers[i]===q.correct),0),needed=Math.ceil(questions.length*(activeCourse.passingPercent/100)),pass=earned>=needed,when=new Date().toLocaleString(),pct=Math.round(100*earned/questions.length);
  $('resultTitle').textContent=pass?'Congratulations, Pirate!':'More training required, matey!';$('resultName').textContent=player+(playerId?' ['+playerId+']':'')+' · '+when;$('score').textContent=earned+' / '+questions.length;
  $('status').replaceChildren();const pill=element('span',pass?'PASS':'RETAKE','pill'+(pass?'':' fail'));$('status').append(pill);
  $('details').textContent='Your answers are reviewed below. If the results connection is enabled, your attempt will be sent for recording. You can also copy your results.';
  lastSummary='Reckless Pirate Academy — '+activeCourse.title+'\nPlayer: '+player+(playerId?' ['+playerId+']':'')+'\nScore: '+earned+'/'+questions.length+' ('+pct+'%) — '+(pass?'PASS':'RETAKE')+'\nCompleted: '+when+'\nSelf-reported; not verified by faction leadership.';
  $('review').replaceChildren();questions.forEach((q,i)=>{const right=answers[i]===q.correct;const div=element('div',undefined,'review');div.append(element('strong',(i+1)+'. '+q.q),element('div','Your answer: '+q.options[answers[i]]+' — '+(right?'Correct':'Incorrect'),right?'goodtext':'badtext'),element('p','Correct answer: '+String.fromCharCode(65+q.correct)+'. '+q.options[q.correct]),element('p',q.why,'muted'));$('review').append(div)});show('results');sendResults({course:activeCourse.course,name:player,playerId:playerId,answers:answers.slice(),submittedAt:new Date().toISOString()});
}
// Apps Script endpoint accepts form submissions. A cross-origin POST cannot confirm saved rows
// from the browser, so the status says 'submitted' rather than claiming success.
function sendResults(data){
 const status=$('submissionStatus');
 if(!RESULTS_WEB_APP_URL || !/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(RESULTS_WEB_APP_URL)){
   status.textContent='Results are not connected yet. Copy your results to share them manually.';return;
 }
 status.textContent='Sending your results to the faction sheet…';
 try {
   const iframe=document.createElement('iframe');iframe.name='academy_submit_'+Date.now();iframe.hidden=true;
   iframe.style.display='none';document.body.appendChild(iframe);
   const form=document.createElement('form');form.action=RESULTS_WEB_APP_URL;form.method='POST';form.target=iframe.name;form.style.display='none';
   const input=document.createElement('input');input.type='hidden';input.name='payload';input.value=JSON.stringify(data);form.appendChild(input);document.body.appendChild(form);
   form.submit();form.remove();
   status.textContent='Results submitted for recording. Ask leadership to verify that the attempt appears in the Google Sheet.';
   setTimeout(()=>iframe.remove(),60000);
 }catch(err){status.textContent='Results could not be submitted. Please use Copy my results and send them to leadership.'}
}
$('copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(lastSummary);$('copy').textContent='Copied!'}catch(e){const t=element('textarea');t.value=lastSummary;document.body.append(t);t.select();try{document.execCommand('copy');$('copy').textContent='Copied!'}catch(err){$('copy').textContent='Copy unavailable — print instead'}t.remove()}});
$('print').addEventListener('click',()=>window.print());$('retake').addEventListener('click',()=>show('welcome'));
