/* ---------- default survey ---------- */
const O = (...labels) => labels.map((l,i)=>({id:'o'+(i+1),label:l}));
const UPSKILL={q:'q_programs',any:['o1'],or:[{q:'q_upskill_gate',any:['o1','o2']}]};
const DEFAULT_CONFIG = {
  title:"Shaping 2027 together",
  intro:"The NDIS is changing, and we want to plan next year around what you actually need. This takes about 3 minutes. Please complete one survey for each participant. You can skip any question you'd rather not answer. Your answers are only seen by our management team and used to plan 2027.",
  thanks:"Thank you for taking the time. Your answers will help us plan programs, days and trips for 2027. If you asked us to get in touch, someone from our team will call you soon.",
  sections:[
    {id:'s1',title:"About you",intro:"",questions:[
      {id:'q_role',type:'single',text:"Who is completing this survey?",required:true,options:O("Participant","Family member","Guardian or nominee","Support coordinator","Other")},
      {id:'q_name',type:'short',text:"Participant's name",help:"Optional, but it helps us follow up with you. Your answers stay confidential.",options:[]},
      {id:'q_programs',type:'multi',text:"Which Up & Over programs are you part of now?",options:O("UpSkill (Tue–Thu)","Waves","Crest","Tides","Bombora","Camps and holidays","Not currently attending")},
      {id:'q_more',type:'matrix',text:"Compared to this year, how much of each would you like to do with us in 2027?",help:"If it's something you haven't tried yet, choose More if you'd like to start.",allowOther:true,options:O("Weekday programs","Weekend activities","Camps and holidays")}
    ]},
    {id:'s2',title:"Weekends and trips",intro:"",questions:[
      {id:'q_weekends',type:'likert',text:"In an ideal world, how often would you like to join weekend activities?",options:[{id:'o5',label:"Not interested"},{id:'o4',label:"Occasionally"},{id:'o3',label:"Once a month"},{id:'o2',label:"2–3 a month"},{id:'o1',label:"Every weekend"}]},
      {id:'q_weekend_funding',type:'single',text:"Does your current funding allow for this many weekends?",showIf:{q:'q_weekends',any:['o1','o2','o3','o4']},options:O("Yes, comfortably","Just enough","No, we'd need more funding","Not sure")},
      {id:'q_trips',type:'multi',text:"Which trips interest you the most in 2027?",options:O("Local overnight stay (1 night)","Weekend camp (2 nights)","Long weekend (3–4 nights)","Interstate holiday (5–7 nights)","International holiday (7–10 nights)","Not interested in overnight trips")},
      {id:'q_camp_values',type:'matrix',text:"How important are these to you on camps and holidays?",help:"Choose one for each.",showIf:{q:'q_trips',any:['o1','o2','o3','o4','o5']},cols:[['low','Not important','na'],['mid','Somewhat','same'],['high','Very important','more']],options:O("Spending quality time with friends","Trying new activities","Exploring new places","Respite for families","Building confidence away from home","Learning life skills")},
      {id:'q_barriers',type:'multi',text:"What makes camps or holidays harder to attend?",showIf:{q:'q_trips',any:['o1','o2','o3','o4','o5']},options:O("NDIS funding","Out-of-pocket costs","Length of trips","Accessibility or support needs","Being away from home","Not enough information before booking","Nothing significant")}
    ]},
    {id:'s3',title:"UpSkill",intro:"Our weekday program, focused on building skills and volunteering in the community.",questions:[
      {id:'q_upskill_gate',type:'single',text:"Would you be interested in joining UpSkill?",help:"UpSkill runs Tuesday to Thursday.",showIf:{q:'q_programs',none:['o1']},options:O("Yes, I'd like to start","Maybe, I'd like to know more","No, not for me")},
      {id:'q_days',type:'days',text:"In 2027, which days would you like to attend?",help:"UpSkill currently runs Tuesday to Thursday. We're just checking interest in Mondays and Fridays, and haven't decided to add them.",showIf:UPSKILL,options:O("Monday (if offered)","Tuesday","Wednesday","Thursday","Friday (if offered)")},
      {id:'q_hours',type:'single',text:"Which hours would suit you best in 2027?",showIf:UPSKILL,options:O("9 am – 4 pm","9 am – 3 pm","10 am – 3 pm","Flexible, depending on the activity")},
      {id:'q_upskill',type:'cards',text:"Which types of activities would you most like UpSkill to include in 2027?",help:"Choose as many as you like.",showIf:UPSKILL,options:[{id:"o1",label:"Workplace / Volunteering Experience"},{id:"o2",label:"Health & Fitness"},{id:"o3",label:"Creative Arts"},{id:"o4",label:"Social"},{id:"o5",label:"Community Independence Skills"},{id:"o6",label:"Culture & Community",desc:"New cuisines, community events and learning about the world around us"},{id:"o7",label:"Something Different",desc:"Tell us your idea",askText:true}]}
    ]},
    {id:'s4',title:"Your NDIS funding",intro:"No financial details needed. This just helps us plan.",questions:[
      {id:'q_concern',type:'likert',text:"How concerned are you about having enough NDIS funding for the supports you'd like from us in 2027?",options:[{id:'o4',label:"Not concerned at all"},{id:'o3',label:"Not really"},{id:'o2',label:"Somewhat concerned"},{id:'o1',label:"Very concerned"}]},
      {id:'q_priority',type:'rank',text:"If funding is tight, rank what matters most to you.",help:"Tap them in order, most important first. Use the arrows to adjust.",options:O("Weekday program (UpSkill)","Weekend activities","Camps and holidays","Other supports (e.g. therapy)")},
      {id:'q_further',type:'multi',text:"What would help your funding go further?",help:"Choose as many as you like.",allowOther:true,options:[{id:'o1',label:"Shorter weekend sessions"},{id:'o5',label:"Shorter UpSkill days",showIf:UPSKILL},{id:'o6',label:"Shared support at UpSkill (1:3 instead of 1:2, where it suits)",showIf:UPSKILL},{id:'o7',label:"Fewer UpSkill days to save funding for weekends",showIf:UPSKILL},{id:'o2',label:"More flexible attendance"},{id:'o3',label:"More affordable camps and holidays"},{id:'o4',label:"Help understanding funding and options"}]}
    ]},
    {id:'s5',title:"Looking ahead",intro:"Last few questions.",questions:[
      {id:'q_sat',type:'faces',text:"Overall, how happy are you with Up & Over?",showIf:{q:'q_programs',none:['o7']},minLabel:"Not happy",maxLabel:"Very happy",options:[]},
      {id:'q_continue',type:'likert',text:"How likely are you to keep attending in 2027?",showIf:{q:'q_programs',none:['o7']},options:[{id:'o5',label:"Considering leaving"},{id:'o4',label:"Likely to attend less"},{id:'o3',label:"Unsure"},{id:'o2',label:"Likely to continue"},{id:'o1',label:"Definitely continuing"}]},
      {id:'q_leave_reason',type:'multi',max:2,text:"What's the main reason?",help:"Choose up to 2. This helps us understand what we could change.",allowOther:true,showIf:{q:'q_continue',any:['o4','o5']},options:O("NDIS funding changes","Cost of activities","Activities don't suit us","Days or times don't suit","Staff or support changes","Life changes like school, work or moving","Trying another provider")},
      {id:'q_one',type:'text',text:"What is one thing we could do better for you next year?",help:"Optional. Programs, trips, communication, anything at all.",options:[]},
      {id:'q_contact',type:'single',text:"Would you like someone from Up & Over to contact you?",options:O("Yes, please contact me","Maybe, I'd like more information","No, thank you")},
      {id:'q_contact_details',type:'contact',text:"How can we reach you?",showIf:{q:'q_contact',any:['o1','o2']},options:[]}
    ]}
  ]
};

/* ---------- state ---------- */
const BOOT = window.BOOT || {mode:'family',config:null,open:true,key:'',sheetUrl:'',surveyUrl:''};
const isAdminMode = BOOT.mode==='admin';
const clone = o => JSON.parse(JSON.stringify(o));
let config = BOOT.config && Array.isArray(BOOT.config.sections) ? BOOT.config : clone(DEFAULT_CONFIG);
let savedJson = BOOT.config && Array.isArray(BOOT.config.sections) ? JSON.stringify(config) : '';
let responses = [];
const S = {view:isAdminMode?'admin':'family', step:-1, answers:{}, errors:{}, adminTab:'edit', openQ:new Set(), progFilter:'all', roleFilter:'all', openResp:null, confirmReset:false, confirmDel:null, loading:isAdminMode, loadError:'', saving:false, submitting:false, submitError:'', open:BOOT.open!==false, preview:false};

/* Calls the Apps Script server and returns a promise. */
function run(fn, ...args){
  if(window.API_URL) return runApi(fn,args);
  return new Promise((resolve,reject)=>{
    if(!(window.google&&google.script&&google.script.run)) return reject(new Error('Not connected to the survey server. Please reload the page.'));
    google.script.run.withSuccessHandler(resolve).withFailureHandler(e=>reject(new Error((e&&e.message)||String(e))))[fn](...args);
  });
}
function isDirty(){return isAdminMode && JSON.stringify(config)!==savedJson}
/* GitHub Pages version: talk to the Apps Script web app over the internet. */
function runApi(fn,args){
  if(fn!=='submitResponse') return Promise.reject(new Error('This is only available in admin.'));
  return fetch(window.API_URL,{method:'POST',redirect:'follow',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'submit',payload:args[0]})})
    .then(r=>{if(!r.ok)throw new Error('The survey server did not respond.');return r.json()})
    .then(j=>{if(!j||!j.ok)throw new Error((j&&j.error)||'Something went wrong.');return j.result});
}

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CHOICE=['single','multi','cards','likert','days'];
const OPT_TYPES=CHOICE.concat('rank','matrix');
const MCOLS=[['less','Less','less'],['same','Same','same'],['more','More','more'],['na','Not for me','na']];
function colsOf(q){return q.cols||MCOLS}
function textOpt(q,ans){const v=ans[q.id];return (q.options||[]).some(o=>o.askText&&hasAny(v,[o.id]))}
function hasOtherText(q){return q.allowOther||(q.options||[]).some(o=>o.askText)}
function isMulti(q){return q.type==='multi'||q.type==='cards'||q.type==='days'}
function isNum(q){return q.type==='scale'||q.type==='faces'}
function iconFor(label){const l=label.toLowerCase();let p;
  if(/workplace|volunteer|job|employ/.test(l))p='<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>';
  else if(/culture|cuisine/.test(l))p='<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>';
  else if(/different|surprise/.test(l))p='<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>';
  else if(/social|friend/.test(l))p='<circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9.5" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.6c3 .1 6 2 6 5.4"/>';
  else if(/independ|community/.test(l))p='<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2.3"/>';
  else if(/creative|art/.test(l))p='<circle cx="12" cy="12" r="9"/><circle cx="8.5" cy="10" r="1.2"/><circle cx="12" cy="7.5" r="1.2"/><circle cx="15.5" cy="10" r="1.2"/><path d="M12 21c-1.5 0-2-1.5-1-2.5s0-3 1.5-3H17"/>';
  else if(/fitness|sport|health/.test(l))p='<path d="M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12"/>';
  else if(/half-day|shorter|hours/.test(l))p='<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>';
  else if(/life skill|cooking/.test(l))p='<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-5h4v5"/>';
  else if(/weekday|upskill/.test(l))p='<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>';
  else if(/weekend/.test(l))p='<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
  else if(/camp|holiday|trip/.test(l))p='<path d="M3 20L12 4l9 16z"/><path d="M9.5 20L12 15l2.5 5"/>';
  else if(/skill/.test(l))p='<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>';
  else p='<circle cx="12" cy="12" r="7"/>';
  return `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`}
function faceSvg(k){const c=[-1,-.5,0,.6,1][k-1];const y=24;return `<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17"/><circle class="eye" cx="14" cy="16" r="2"/><circle class="eye" cx="26" cy="16" r="2"/><path d="M12 ${y} Q20 ${y+8*c} 28 ${y}"/></svg>`}
function allQuestions(){return config.sections.flatMap(s=>s.questions)}
function findQ(id){return allQuestions().find(q=>q.id===id)}
function hasAny(val,ids){if(val==null)return false;if(typeof val==='object'&&!Array.isArray(val))val=Object.entries(val).map(([k,x])=>k+':'+x);const v=Array.isArray(val)?val:[val];return v.some(x=>ids.includes(x))}
function condOk(c,ans){if(!c||!c.q||!findQ(c.q))return true;const v=ans[c.q];return c.none?!hasAny(v,c.none):hasAny(v,c.any||[])}
function visibleIn(q,ans){if(!q.showIf||!q.showIf.q)return true;return condOk(q.showIf,ans)||(q.showIf.or||[]).some(c=>condOk(c,ans))}
function visOpts(q,ans){return (q.options||[]).filter(o=>!o.showIf||visibleIn(o,ans))}
function optLabel(q,id){const o=q.options.find(o=>o.id===id);return o?o.label:null}
function newId(p){return p+Math.random().toString(36).slice(2,8)}
function toast(msg){const t=$('#toast');t.textContent=msg;t.hidden=false;clearTimeout(toast._t);toast._t=setTimeout(()=>t.hidden=true,2600)}
function persistCfg(){updateSaveBar()}
function answered(v){if(v==null)return false;if(Array.isArray(v))return v.length>0;if(typeof v==='object')return Object.values(v).some(x=>String(x||'').trim());return String(v).trim()!==''}

/* ---------- view switch ---------- */
function setView(v){S.view=v;S.preview=(v==='family'&&isAdminMode);$('#v-family').setAttribute('aria-pressed',v==='family');$('#v-admin').setAttribute('aria-pressed',v==='admin');render();window.scrollTo(0,0)}
if(isAdminMode){
  $('.seg').hidden=false;
  $('#v-family').textContent='Preview survey';
  $('#v-family').setAttribute('aria-pressed','false');$('#v-admin').setAttribute('aria-pressed','true');
  $('#v-family').onclick=()=>{S.step=-1;S.answers={};setView('family')};
  $('#v-admin').onclick=()=>setView('admin');
} else { $('.seg').hidden=true; }

function render(){ const app=$('#app'); app.innerHTML = S.view==='family'?renderFamily():renderAdmin(); bind(); updateSaveBar(); }
function updateSaveBar(){
  const bar=$('#savebar'); if(!bar) return;
  const show=isAdminMode&&S.view==='admin'&&(isDirty()||S.saving);
  bar.hidden=!show; if(!show) return;
  bar.innerHTML=`<div class="wrap wide savebar-in"><span>${S.saving?'Saving…':(savedJson?'You have unsaved changes':'These questions are not saved yet. Save to make them live.')}</span>
    <span class="tools">${savedJson&&!S.saving?'<button class="btn btn-ghost btn-sm" data-sb="discard">Discard</button>':''}<button class="btn btn-primary btn-sm" data-sb="save" ${S.saving?'disabled':''}>Save changes</button></span></div>`;
  bar.querySelectorAll('[data-sb]').forEach(b=>b.onclick=()=>b.dataset.sb==='save'?saveConfig():discardChanges());
}
function saveConfig(){
  if(S.saving) return; S.saving=true; updateSaveBar();
  const json=JSON.stringify(config);
  run('adminSaveConfig',BOOT.key,json).then(()=>{savedJson=json;S.saving=false;updateSaveBar();toast('Saved. Families see the changes next time they open the survey.')})
    .catch(e=>{S.saving=false;updateSaveBar();toast('Not saved. '+e.message)});
}
function discardChanges(){config=JSON.parse(savedJson);S.confirmReset=false;render();toast('Changes discarded')}
function loadAdmin(){
  S.loading=true;S.loadError='';render();
  run('adminLoad',BOOT.key).then(r=>{responses=(r&&r.responses)||[];S.open=!r||r.open!==false;S.loading=false;render()})
    .catch(e=>{S.loading=false;S.loadError=e.message;render()});
}

/* ---------- family ---------- */

function renderFamily(){
  const n=config.sections.length;
  if(!S.open&&!S.preview){
    return `<div class="wrap"><section class="card thanks"><span class="eyebrow" style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--sea)">Survey closed</span><h1>Thanks for your interest</h1><p>This survey is now closed. If you'd like to talk to us about 2027, please contact the Up &amp; Over team.</p></section></div>`;
  }
  if(S.step===-1){
    const qCount=allQuestions().length;
    return `<div class="wrap"><section class="card hero">
      <span class="logo-full" role="img" aria-label="Up &amp; Over"></span>
      <span class="eyebrow">Family &amp; participant survey</span>
      <h1>${esc(config.title)}</h1>
      <p>${esc(config.intro)}</p>
      <div class="facts"><span>About 3 minutes</span><span>${n} short sections</span><span>One per participant</span></div>
      <div><button class="btn btn-primary" data-act="start">Start the survey</button></div>
    </section>
    ${S.preview?`<p class="note" style="margin-top:16px">Preview only. This shows your latest edits, saved or not, and answers here are not saved.${S.open?'':' Families currently see a "survey closed" message.'}</p>`:''}</div>`;
  }
  if(S.step>=n){
    return `<div class="wrap"><section class="card thanks reveal">
      <span class="eyebrow" style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--sea)">All done</span>
      <h1>Thank you</h1><p>${esc(config.thanks)}</p>
      ${S.preview?`<p class="note">Preview finished. Nothing was saved.</p><div class="nav" style="justify-content:flex-start"><button class="btn btn-ghost" data-act="again">Start the preview again</button><button class="btn btn-sea" data-act="back-admin">Back to admin</button></div>`:`<div class="nav" style="justify-content:flex-start"><button class="btn btn-ghost" data-act="again">Complete one for another participant</button></div>`}
    </section></div>`;
  }
  const sec=config.sections[S.step];
  const pct=Math.round((S.step)/n*100);
  const steps=config.sections.map((s,i)=>`<span class="${i===S.step?'on':i<S.step?'done':''}">${i+1}. ${esc(s.title)}</span>`).join('');
  const qs=sec.questions.filter(q=>visibleIn(q,S.answers)).map(renderQuestion).join('');
  return `<div class="wrap">
    <div class="progress"><div class="progress-meta"><span>Section ${S.step+1} of ${n}</span><span>${pct}% complete</span></div>
      <div class="track" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><div class="fill" style="width:${Math.max(pct,3)}%"></div></div>
      <div class="steps">${steps}</div></div>
    <section class="card section">
      <div class="section-head"><span class="eyebrow">Section ${S.step+1}</span><h2>${esc(sec.title)}</h2>${sec.intro?`<p>${esc(sec.intro)}</p>`:''}</div>
      ${qs||'<p class="note">Nothing to answer here based on your earlier answers. Tap Next.</p>'}
    </section>
    ${S.submitError?`<p class="err" role="alert" style="margin-top:16px">${esc(S.submitError)}</p>`:''}
    <div class="nav"><button class="btn btn-ghost" data-act="back" ${S.submitting?'disabled':''}>Back</button><button class="btn btn-primary" data-act="next" ${S.submitting?'disabled':''}>${S.submitting?'Sending…':S.step===n-1?(S.preview?'Finish preview':'Submit my answers'):'Next section'}</button></div>
  </div>`;
}

function renderQuestion(q){
  const v=S.answers[q.id]; let body='';
  if(q.type==='single'||q.type==='multi'){
    const sel=Array.isArray(v)?v:(v?[v]:[]);
    const full=q.type==='multi'&&q.max&&sel.length>=q.max;
    body=`<div class="pills" role="${q.type==='single'?'radiogroup':'group'}" aria-label="${esc(q.text)}">${visOpts(q,S.answers).map(o=>{
      const on=sel.includes(o.id); const dis=full&&!on;
      return `<button type="button" class="pill" data-kind="${q.type}" role="${q.type==='single'?'radio':'checkbox'}" aria-checked="${on}" aria-disabled="${dis}" data-q="${q.id}" data-o="${o.id}"><span class="mark"></span>${esc(o.label)}</button>`}).join('')}</div>`;
  } else if(q.type==='cards'){
    const sel=v||[]; const full=q.max&&sel.length>=q.max;
    body=`<div class="tiles-q" role="group" aria-label="${esc(q.text)}">${visOpts(q,S.answers).map(o=>{const on=sel.includes(o.id),dis=full&&!on;
      return `<button type="button" class="tileq" role="checkbox" aria-checked="${on}" aria-disabled="${dis}" data-q="${q.id}" data-o="${o.id}">${iconFor(o.label)}<span>${esc(o.label)}${o.desc?`<small class="tdesc">${esc(o.desc)}</small>`:''}</span><i class="tick" aria-hidden="true"></i></button>`}).join('')}</div>`;
  } else if(q.type==='days'){
    const sel=v||[];
    body=`<div class="days" role="group" aria-label="${esc(q.text)}">${q.options.map(o=>{const m=o.label.match(/^(.*?)\s*\((.+)\)\s*$/);const name=m?m[1]:o.label,tag=m?m[2]:'';
      return `<button type="button" class="day ${tag?'tagged':''}" role="checkbox" aria-checked="${sel.includes(o.id)}" aria-label="${esc(o.label)}" data-q="${q.id}" data-o="${o.id}"><b>${esc(name.slice(0,3))}</b>${tag?`<span class="dtag">${esc(tag)}</span>`:'<span class="dtag blank">&nbsp;</span>'}</button>`}).join('')}</div>`;
  } else if(q.type==='matrix'){
    const m=v||{};
    body=`<div class="matrix">${q.options.map(o=>`<div class="mrow"><span class="ml">${esc(o.label)}</span><div class="mseg" role="radiogroup" aria-label="${esc(o.label)}">${colsOf(q).map(([k,l])=>`<button type="button" role="radio" class="mb mb-${k}" aria-checked="${m[o.id]===k}" data-mq="${q.id}" data-mo="${o.id}" data-mv="${k}">${l}</button>`).join('')}</div></div>`).join('')}</div>`;
  } else if(q.type==='rank'){
    const order=v||[]; const rest=q.options.filter(o=>!order.includes(o.id));
    const ranked=order.map(id=>q.options.find(o=>o.id===id)).filter(Boolean);
    body=`<ol class="rank" aria-label="${esc(q.text)}">${ranked.map((o,i)=>`<li class="rk on"><span class="badge">${i+1}</span><span class="rl">${esc(o.label)}</span>
      <span class="rtools"><button type="button" class="icon-btn" aria-label="Move ${esc(o.label)} up" data-rq="${q.id}" data-ro="${o.id}" data-ra="up" ${i===0?'disabled':''}>↑</button><button type="button" class="icon-btn" aria-label="Move ${esc(o.label)} down" data-rq="${q.id}" data-ro="${o.id}" data-ra="down" ${i===ranked.length-1?'disabled':''}>↓</button><button type="button" class="icon-btn" aria-label="Remove ${esc(o.label)} from ranking" data-rq="${q.id}" data-ro="${o.id}" data-ra="del">✕</button></span></li>`).join('')}
      ${rest.map(o=>`<li class="rk"><button type="button" class="rk-add" data-rq="${q.id}" data-ro="${o.id}" data-ra="add"><span class="badge empty">${ranked.length+1}</span><span class="rl">${esc(o.label)}</span><span class="tapme">Tap to rank</span></button></li>`).join('')}</ol>
      ${ranked.length?`<div><button type="button" class="linkish" data-rq="${q.id}" data-ra="clear">Start again</button></div>`:''}`;
  } else if(q.type==='likert'){
    const n=q.options.length; const mid=n%2?Math.floor(n/2):-1;
    body=`<div class="likert" role="radiogroup" aria-label="${esc(q.text)}" style="--n:${n}">${q.options.map((o,i)=>`<button type="button" class="stop ${i===mid?'mid':''}" role="radio" aria-checked="${v===o.id}" data-q="${q.id}" data-o="${o.id}"><span class="dot"></span><span class="sl">${esc(o.label)}</span></button>`).join('')}</div>`;
  } else if(q.type==='faces'){
    const names=['Very unhappy','Unhappy','Okay','Happy','Very happy'];
    body=`<div class="faces" role="radiogroup" aria-label="${esc(q.text)}">${[1,2,3,4,5].map(k=>`<button type="button" class="face" role="radio" aria-checked="${v===k}" aria-label="${names[k-1]}" data-q="${q.id}" data-scale="${k}">${faceSvg(k)}<span>${k===1?esc(q.minLabel||''):k===5?esc(q.maxLabel||''):''}</span></button>`).join('')}</div>`;
  } else if(q.type==='scale'){
    body=`<div class="scale">${[1,2,3,4,5].map(k=>`<button type="button" class="pill" data-kind="single" role="radio" aria-checked="${v===k}" data-q="${q.id}" data-scale="${k}">${k}</button>`).join('')}</div>
      <div class="scale-labels"><span>${esc(q.minLabel||'')}</span><span>${esc(q.maxLabel||'')}</span></div>`;
  } else if(q.type==='text'){
    body=`<textarea id="in-${q.id}" data-q="${q.id}" aria-label="${esc(q.text)}" placeholder="Type your answer">${esc(v||'')}</textarea>`;
  } else if(q.type==='short'){
    body=`<input type="text" id="in-${q.id}" data-q="${q.id}" aria-label="${esc(q.text)}" value="${esc(v||'')}">`;
  } else if(q.type==='contact'){
    const c=v||{};
    const f=(k,l,t)=>`<label>${l}<input type="${t}" id="in-${q.id}-${k}" data-q="${q.id}" data-k="${k}" value="${esc(c[k]||'')}"></label>`;
    body=`<div class="contact-grid">${f('name','Your name','text')}${f('phone','Phone','tel')}${f('email','Email','email')}${f('time','Best time to call','text')}</div>`;
  }
  const hint=(q.type==='multi'||q.type==='cards')?(q.max?`Choose up to ${q.max}.`:''):'';
  const help=[q.help,hint].filter(Boolean).join(' ');
  return `<div class="q ${q.showIf?'reveal':''}" id="q-${q.id}">
    <div class="q-text">${esc(q.text)}${q.required?'':'<span class="opt">Optional</span>'}</div>
    ${help?`<div class="q-help">${esc(help)}</div>`:''}
    ${body}
    ${!q.allowOther&&textOpt(q,S.answers)?`<label class="other reveal">What would you like to try?<input type="text" id="in-${q.id}-other" data-other="${q.id}" value="${esc(S.answers[q.id+'__other']||'')}" placeholder="Tell us your idea"></label>`:''}
    ${q.allowOther?`<label class="other">Other<input type="text" id="in-${q.id}-other" data-other="${q.id}" value="${esc(S.answers[q.id+'__other']||'')}" placeholder="Something else? Tell us here"></label>`:''}
    ${S.errors[q.id]?`<div class="err">Please choose an answer to continue.</div>`:''}
  </div>`;
}

function familyNext(){
  const sec=config.sections[S.step];S.errors={};
  sec.questions.filter(q=>q.required&&visibleIn(q,S.answers)).forEach(q=>{if(!answered(S.answers[q.id]))S.errors[q.id]=true});
  if(Object.keys(S.errors).length){render();const first=document.querySelector('.err');first&&first.closest('.q').scrollIntoView({behavior:'smooth',block:'center'});return}
  if(S.step===config.sections.length-1){
    const ans={};allQuestions().forEach(q=>{if(!visibleIn(q,S.answers))return;let v=S.answers[q.id];if(Array.isArray(v)&&(q.options||[]).some(o=>o.showIf)){const okIds=visOpts(q,S.answers).map(o=>o.id);v=v.filter(x=>okIds.includes(x))}if(answered(v))ans[q.id]=v;const ot=S.answers[q.id+'__other'];if((q.allowOther||textOpt(q,S.answers))&&ot&&ot.trim())ans[q.id+'__other']=ot.trim()});
    if(S.preview){S.step++;render();window.scrollTo(0,0);return}
    if(S.submitting) return;
    S.submitting=true;S.submitError='';render();
    const hp=$('#hp');
    run('submitResponse',{answers:ans,readable:buildReadable(ans),website:hp?hp.value:''}).then(r=>{
      S.submitting=false;
      if(r&&r.closed){S.open=false;render();window.scrollTo(0,0);return}
      S.step++;render();window.scrollTo(0,0);
    }).catch(e=>{S.submitting=false;S.submitError='Your answers were not sent. '+(e.message||'')+' Please check your connection and press Submit again.';render()});
    return;
  }
  S.step++;render();window.scrollTo(0,0);
}

/* ---------- admin ---------- */
function renderAdmin(){
  const tabs=[['edit','Edit survey'],['responses',`Responses${S.loading?'':' ('+responses.length+')'}`],['analysis','Analysis']];
  const waiting=S.adminTab!=='edit'&&(S.loading||S.loadError);
  let body = waiting?(S.loading?'<p class="note">Loading responses…</p>':`<div class="stack" style="gap:8px"><p class="err">Responses could not be loaded. ${esc(S.loadError)}</p><div><button class="btn btn-ghost btn-sm" data-act="reload">Try again</button></div></div>`)
    : S.adminTab==='edit'?renderEdit():S.adminTab==='responses'?renderResponses():renderAnalysis();
  return `<div class="wrap wide">
    <div class="admin-head"><div><h1>Survey admin</h1><div style="color:var(--muted);font-size:14px">Edits go live for families when you save.</div></div>
      <div class="admin-actions">
        <button class="switch" role="switch" aria-checked="${S.open}" data-act="toggle-open"><span class="knob" aria-hidden="true"></span>${S.open?'Survey open':'Survey closed'}</button>
        ${BOOT.sheetUrl?`<a class="btn btn-ghost btn-sm" href="${esc(BOOT.sheetUrl)}" target="_blank" rel="noopener">Open Google Sheet</a>`:''}
        <button class="btn btn-ghost btn-sm" data-act="reload">Refresh</button>
      </div></div>
    ${BOOT.surveyUrl?`<div class="linkbox"><label for="family-link">Family survey link</label><div class="linkrow"><input id="family-link" type="text" readonly value="${esc(BOOT.surveyUrl)}"><button class="btn btn-sea btn-sm" data-act="copy-link">Copy</button></div></div>`:''}
    <div class="tabs" role="tablist">${tabs.map(([k,l])=>`<button role="tab" aria-selected="${S.adminTab===k}" data-tab="${k}">${l}</button>`).join('')}</div>
    ${body}</div>`;
}

const TYPES={single:'Pick one',multi:'Pick several',days:'Day picker',matrix:'Less / same / more grid',rank:'Rank in order',cards:'Picture tiles',likert:'Sliding scale',faces:'Smiley rating',scale:'1–5 rating',text:'Long answer',short:'Short answer',contact:'Contact details'};

function renderEdit(){
  let qnum=0;
  const choiceQs=allQuestions().filter(q=>CHOICE.includes(q.type)||q.type==='matrix');
  const secs=config.sections.map((s,si)=>{
    const qs=s.questions.map((q,qi)=>{qnum++;return renderQEdit(q,si,qi,qnum,choiceQs)}).join('');
    return `<section class="card sec-card">
      <div class="sec-top"><div class="num">${si+1}</div>
        <div class="sec-fields"><input class="title" type="text" id="st-${s.id}" data-sec="${si}" data-f="title" value="${esc(s.title)}" aria-label="Section title">
        <input type="text" id="si-${s.id}" data-sec="${si}" data-f="intro" value="${esc(s.intro||'')}" placeholder="Short intro for families (optional)" aria-label="Section intro"></div>
        <div class="tools"><button class="icon-btn" title="Move section up" aria-label="Move section up" data-act="sec-up" data-sec="${si}">↑</button><button class="icon-btn" title="Move section down" aria-label="Move section down" data-act="sec-down" data-sec="${si}">↓</button><button class="icon-btn del" title="Delete section" aria-label="Delete section" data-act="sec-del" data-sec="${si}">✕</button></div>
      </div>
      <div class="stack" style="gap:8px">${qs||'<p class="note">No questions yet.</p>'}</div>
      <div class="add-row"><button class="btn btn-ghost btn-sm" data-act="q-add" data-sec="${si}">+ Add question</button></div>
    </section>`}).join('');
  return `<div class="stack">
    <section class="card sec-card"><div class="row">
      <label class="field">Survey title<input type="text" id="cfg-title" data-cfg="title" value="${esc(config.title)}"></label></div>
      <label class="field">Welcome message<textarea id="cfg-intro" data-cfg="intro">${esc(config.intro)}</textarea></label>
      <label class="field">Thank-you message<textarea id="cfg-thanks" data-cfg="thanks">${esc(config.thanks)}</textarea></label>
    </section>
    ${secs}
    <div class="add-row"><button class="btn btn-sea btn-sm" data-act="sec-add">+ Add section</button>
      <button class="btn btn-ghost btn-sm" data-act="preview">Preview as a family</button>
      ${S.confirmReset?`<span class="confirm">Replace the current questions with the original recommended set? You can still Discard before saving. <button class="btn btn-danger btn-sm" data-act="reset-yes">Yes, reset</button><button class="btn btn-ghost btn-sm" data-act="reset-no">Cancel</button></span>`:`<button class="btn btn-danger btn-sm" data-act="reset">Reset to recommended</button>`}
    </div>
  </div>`;
}

function renderQEdit(q,si,qi,n,choiceQs){
  const open=S.openQ.has(q.id);
  const opts=OPT_TYPES.includes(q.type)?`<div class="field">${q.type==='likert'?'Scale points, left to right':q.type==='matrix'?'Rows':'Answer options'}<div class="opts">${q.options.map((o,oi)=>`<div class="opt-row"><div style="display:grid;gap:4px;min-width:0"><input type="text" id="op-${q.id}-${o.id}" data-q="${q.id}" data-opt="${oi}" value="${esc(o.label)}" aria-label="Option ${oi+1}">${o.showIf?'<small style="color:var(--muted);font-size:12px;font-weight:500;text-transform:none;letter-spacing:0">Only shown to families attending or interested in UpSkill</small>':''}${q.type==='cards'?`<input type="text" id="od-${q.id}-${o.id}" data-q="${q.id}" data-optdesc="${oi}" value="${esc(o.desc||'')}" placeholder="Short description (optional)" aria-label="Option ${oi+1} description" style="font-size:13px">`:''}</div>
      <div class="tools"><button class="icon-btn" aria-label="Move option up" data-act="o-up" data-q="${q.id}" data-opt="${oi}">↑</button><button class="icon-btn" aria-label="Move option down" data-act="o-down" data-q="${q.id}" data-opt="${oi}">↓</button><button class="icon-btn del" aria-label="Delete option" data-act="o-del" data-q="${q.id}" data-opt="${oi}">✕</button></div></div>`).join('')}
      <div><button class="btn btn-ghost btn-sm" data-act="o-add" data-q="${q.id}">+ Add option</button></div></div></div>`:'';
  const extra = isMulti(q)?`<label class="field">Most answers allowed<select id="mx-${q.id}" data-q="${q.id}" data-f="max"><option value="">No limit</option>${[1,2,3,4,5].map(k=>`<option value="${k}" ${q.max==k?'selected':''}>${k}</option>`).join('')}</select></label>`
    : isNum(q)?`<label class="field">Label for 1<input type="text" id="mn-${q.id}" data-q="${q.id}" data-f="minLabel" value="${esc(q.minLabel||'')}"></label><label class="field">Label for 5<input type="text" id="ml-${q.id}" data-q="${q.id}" data-f="maxLabel" value="${esc(q.maxLabel||'')}"></label>`:'';
  const earlier=choiceQs.filter(c=>c.id!==q.id&&indexOfQ(c.id)<indexOfQ(q.id));
  const cq=q.showIf&&findQ(q.showIf.q);
  const cond=`<div class="cond-box"><label class="field">Only show this question if…<select id="ci-${q.id}" data-q="${q.id}" data-f="showIfQ"><option value="">Always show</option>${earlier.map(c=>`<option value="${c.id}" ${cq&&cq.id===c.id?'selected':''}>${esc(c.text)}</option>`).join('')}</select></label>
    ${q.showIf&&(q.showIf.or||q.showIf.none)?`<p class="note" style="margin:0">${q.showIf.none?`Shows when "${esc(optLabel(cq,q.showIf.none[0])||'')}" is not ticked.`:`Shows when the answer below matches, or when "${esc((findQ(q.showIf.or[0].q)||{}).text||'')}" is answered yes or maybe. Changing this rule replaces the built-in one.`}</p>`:''}
    ${cq&&!q.showIf.none?`<div class="cond-opts">${(cq.type==='matrix'?cq.options.flatMap(o=>[[o.id+':more',o.label+': More'],[o.id+':same',o.label+': Same']]):cq.options.map(o=>[o.id,o.label])).map(([id,l])=>`<label class="check"><input type="checkbox" id="cc-${q.id}-${id.replace(':','_')}" data-q="${q.id}" data-cond="${id}" ${(q.showIf.any||[]).includes(id)?'checked':''}> ${esc(l)}</label>`).join('')}</div>`:''}</div>`;
  const secOpts=config.sections.map((s,i)=>`<option value="${i}" ${i===si?'selected':''}>${i+1}. ${esc(s.title)}</option>`).join('');
  return `<details class="qed" data-qd="${q.id}" ${open?'open':''}>
    <summary><span class="qn">${n}</span><span class="qt">${esc(q.text)}</span>${q.showIf?'<span class="chip cond">Conditional</span>':''}<span class="chip">${TYPES[q.type]}</span></summary>
    <div class="qbody">
      <label class="field">Question<input type="text" id="qt-${q.id}" data-q="${q.id}" data-f="text" value="${esc(q.text)}"></label>
      <label class="field">Helper text<input type="text" id="qh-${q.id}" data-q="${q.id}" data-f="help" value="${esc(q.help||'')}" placeholder="Optional"></label>
      <div class="row"><label class="field">Answer type<select id="ty-${q.id}" data-q="${q.id}" data-f="type">${Object.entries(TYPES).map(([k,l])=>`<option value="${k}" ${q.type===k?'selected':''}>${l}</option>`).join('')}</select></label>
        <label class="field">Section<select id="sm-${q.id}" data-q="${q.id}" data-f="moveTo">${secOpts}</select></label>${extra}</div>
      <div class="add-row"><label class="check"><input type="checkbox" id="rq-${q.id}" data-q="${q.id}" data-f="required" ${q.required?'checked':''}> Answer required</label>
      ${OPT_TYPES.includes(q.type)?`<label class="check"><input type="checkbox" id="ao-${q.id}" data-q="${q.id}" data-f="allowOther" ${q.allowOther?'checked':''}> Add an "Other" text box</label>`:''}</div>
      ${opts}${cond}
      <div class="tools"><button class="btn btn-ghost btn-sm" data-act="q-up" data-sec="${si}" data-qi="${qi}">Move up</button><button class="btn btn-ghost btn-sm" data-act="q-down" data-sec="${si}" data-qi="${qi}">Move down</button><button class="btn btn-danger btn-sm" data-act="q-del" data-sec="${si}" data-qi="${qi}">Delete question</button></div>
    </div></details>`;
}
function indexOfQ(id){return allQuestions().findIndex(q=>q.id===id)}

/* responses */
function allResponses(){return responses}
function filtered(){return allResponses().filter(x=>(S.progFilter==='all'||hasAny(x.answers.q_programs,[S.progFilter]))&&(S.roleFilter==='all'||x.answers.q_role===S.roleFilter))}
function progFilterBar(){
  const pq=findQ('q_programs'), rq=findQ('q_role');
  const chips=pq?pq.options.map(o=>`<button class="fchip" aria-pressed="${S.progFilter===o.id}" data-pf="${o.id}">${esc(o.label.replace(/ \(.*\)/,''))}</button>`).join(''):'';
  return `<div class="filters"><span class="lbl">Program</span><button class="fchip" aria-pressed="${S.progFilter==='all'}" data-pf="all">Everyone</button>${chips}</div>
    ${rq?`<div class="filters"><span class="lbl">Completed by</span><button class="fchip" aria-pressed="${S.roleFilter==='all'}" data-rf="all">Anyone</button>${rq.options.map(o=>`<button class="fchip" aria-pressed="${S.roleFilter===o.id}" data-rf="${o.id}">${esc(o.label)}</button>`).join('')}</div>`:''}`;
}
function fmtPlain(q,v){
  if(v==null)return '';
  if(q.type==='single'||q.type==='likert')return optLabel(q,v)||'';
  if(isMulti(q))return (Array.isArray(v)?v:[]).map(id=>optLabel(q,id)).filter(Boolean).join(', ');
  if(isNum(q))return v+' / 5';
  if(q.type==='matrix')return q.options.filter(o=>v[o.id]).map(o=>`${o.label}: ${(colsOf(q).find(c=>c[0]===v[o.id])||['',''])[1]}`).join(' · ');
  if(q.type==='rank')return (Array.isArray(v)?v:[]).map((id,i)=>`${i+1}. ${optLabel(q,id)}`).join('  ');
  if(q.type==='contact')return [v.name,v.phone,v.email,v.time&&('best time: '+v.time)].filter(Boolean).join(' · ');
  return String(v);
}
function fmtAns(q,v){const t=fmtPlain(q,v);return t?esc(t):'—'}
function buildReadable(ans){
  const out=[];
  allQuestions().forEach(q=>{
    if(ans[q.id]!=null)out.push({key:q.id,label:q.text,text:fmtPlain(q,ans[q.id])});
    if(ans[q.id+'__other'])out.push({key:q.id+'__other',label:q.text+' (other / idea)',text:ans[q.id+'__other']});
  });
  return out;
}
function renderResponses(){
  const rows=filtered().slice().sort((a,b)=>b.at.localeCompare(a.at));
  const qRole=findQ('q_role'),qProg=findQ('q_programs'),qCont=findQ('q_continue'),qCon=findQ('q_concern');
  const body=rows.map(r=>{
    const a=r.answers; const cb=hasAny(a.q_contact,['o1','o2']); const rk=hasAny(a.q_continue,['o4','o5']);
    const d=new Date(r.at);
    let row=`<tr class="resp" data-resp="${r.id}" tabindex="0"><td>${d.toLocaleDateString('en-AU',{day:'numeric',month:'short'})}</td>
      <td>${esc(a.q_name||'Anonymous')}</td>
      <td>${qRole?fmtAns(qRole,a.q_role):''}</td><td>${qProg?fmtAns(qProg,a.q_programs):''}</td>
      <td>${qCon?fmtAns(qCon,a.q_concern):''}</td><td>${qCont?fmtAns(qCont,a.q_continue):''}</td>
      <td>${cb?'<span class="flag cb">Call back</span> ':''}${rk?'<span class="flag rk">At risk</span>':''}</td></tr>`;
    if(S.openResp===r.id){
      const dl=config.sections.map(s=>`<div><h3 style="font-size:15px;margin:8px 0">${esc(s.title)}</h3><dl class="detail">${s.questions.filter(q=>a[q.id]!=null||a[q.id+'__other']).map(q=>`<dt>${esc(q.text)}</dt><dd>${a[q.id]!=null?fmtAns(q,a[q.id]):''}${a[q.id+'__other']?`${a[q.id]!=null?' · ':''}Other: ${esc(a[q.id+'__other'])}`:''}</dd>`).join('')||'<dd style="color:var(--muted)">No answers</dd>'}</dl></div>`).join('');
      const del=S.confirmDel===r.id?`<span class="confirm">Delete this response for good? <button class="btn btn-danger btn-sm" data-act="del-yes" data-id="${esc(r.id)}">Yes, delete</button><button class="btn btn-ghost btn-sm" data-act="del-no">Cancel</button></span>`:`<button class="btn btn-danger btn-sm" data-act="del-resp" data-id="${esc(r.id)}">Delete this response</button>`;
      row+=`<tr><td colspan="7" style="background:var(--bg)">${dl}<div class="add-row" style="margin-top:8px"><span style="font-size:12px;color:var(--muted)">Response ID ${esc(r.id)}</span>${del}</div></td></tr>`;
    }
    return row}).join('');
  return `${progFilterBar()}
    <div class="tbl-wrap"><table><thead><tr><th>Date</th><th>Participant</th><th>Completed by</th><th>Programs</th><th>Funding concern</th><th>2027 plans</th><th>Flags</th></tr></thead>
    <tbody>${body||'<tr><td colspan="7" style="color:var(--muted)">No responses yet. They appear here as families submit the survey.</td></tr>'}</tbody></table></div>
    <div class="add-row" style="margin-top:14px"><span style="font-size:13px;color:var(--muted)">${rows.length} responses shown · tap a row for full answers</span>
    </div>`;
}

/* analysis */
function renderAnalysis(){
  const rs=filtered(), N=rs.length;
  const share=(qid,ids)=>{const base=rs.filter(r=>r.answers[qid]!=null);return {n:base.filter(r=>hasAny(r.answers[qid],ids)).length,b:base.length}};
  const pct=(a,b)=>b?Math.round(a/b*100):0;
  const fc=share('q_concern',['o1','o2']), rk=share('q_continue',['o4','o5']), cb=share('q_contact',['o1','o2']);
  const sats=rs.map(r=>r.answers.q_sat).filter(v=>typeof v==='number'); const avg=sats.length?(sats.reduce((a,b)=>a+b,0)/sats.length).toFixed(1):'—';
  const tiles=`<div class="tiles">
    <div class="card tile"><span class="k">Responses</span><span class="v">${N}</span><span class="s">${N===responses.length?'All submitted surveys':'Matching the filters above'}</span></div>
    <div class="card tile warn"><span class="k">Worried about funding</span><span class="v">${pct(fc.n,fc.b)}%</span><span class="s">Very or somewhat concerned (${fc.n} of ${fc.b})</span></div>
    <div class="card tile risk"><span class="k">May attend less or leave</span><span class="v">${rk.n}</span><span class="s">${pct(rk.n,rk.b)}% of those who answered</span></div>
    ${(()=>{const b=rs.filter(r=>r.answers.q_more&&(r.answers.q_more.o1||r.answers.q_more.o2));const wd=b.filter(r=>r.answers.q_more.o1==='more').length,we=b.filter(r=>r.answers.q_more.o2==='more').length;return b.length?`<div class="card tile"><span class="k">Want more weekends</span><span class="v">${pct(we,b.length)}%</span><span class="s">vs ${pct(wd,b.length)}% wanting more weekdays</span></div>`:''})()}
    ${(()=>{const b=rs.filter(r=>r.answers.q_days&&r.answers.q_days.length);const f=b.filter(r=>r.answers.q_days.includes('o5')).length;return b.length?`<div class="card tile"><span class="k">Would use Fridays</span><span class="v">${f}</span><span class="s">${pct(f,b.length)}% of those choosing days</span></div>`:''})()}
    ${(()=>{const b=rs.filter(r=>r.answers.q_weekend_funding);const n=b.filter(r=>r.answers.q_weekend_funding==='o3').length;return b.length?`<div class="card tile warn"><span class="k">Funding short for ideal weekends</span><span class="v">${pct(n,b.length)}%</span><span class="s">${n} of ${b.length} would need more funding</span></div>`:''})()}
    <div class="card tile"><span class="k">Want a call back</span><span class="v">${cb.n}</span><span class="s">Yes or maybe</span></div>
    <div class="card tile"><span class="k">Average happiness</span><span class="v">${avg}</span><span class="s">Out of 5 (${sats.length} ratings)</span></div>
  </div>`;
  const secs=config.sections.map(s=>{
    const cards=s.questions.filter(q=>q.type!=='short'&&q.type!=='contact').map(q=>analysisCard(q,rs)).join('');
    return cards?`<div class="a-sec"><h2>${esc(s.title)}</h2><div class="a-grid">${cards}</div></div>`:''}).join('');
  return progFilterBar()+(N?tiles+secs:'<p class="note">No responses match this filter.</p>');
}
function analysisCard(q,rs){
  const base=rs.filter(r=>answered(r.answers[q.id]));
  const seen=rs.filter(r=>visibleIn(q,r.answers)).length;
  let inner='';
  if(CHOICE.includes(q.type)){
    const counts=q.options.map(o=>{const ob=o.showIf?base.filter(r=>visibleIn(o,r.answers)):base;return {l:o.label+(o.showIf?' (UpSkill families)':''),c:ob.filter(r=>hasAny(r.answers[q.id],[o.id])).length,d:ob.length}});
    const sorted=isMulti(q)&&q.type!=='days'?counts.slice().sort((a,b)=>(b.d?b.c/b.d:0)-(a.d?a.c/a.d:0)):counts;
    const top=Math.max(...counts.map(c=>c.c));
    inner=`<div class="bars">${sorted.map(c=>{const p=c.d?Math.round(c.c/c.d*100):0;return `<div class="bar-row ${c.c===top&&top>0?'top':''}"><span class="lab">${esc(c.l)}</span><span class="pct">${p}%<small>${c.c}</small></span><span class="tr"><i style="width:${p}%"></i></span></div>`}).join('')}</div>`;
  } else if(q.type==='matrix'){
    const cols=colsOf(q), top=q.cols?cols[cols.length-1]:cols.find(c=>c[0]==='more');
    const order=q.cols?cols.slice().reverse():[MCOLS[2],MCOLS[1],MCOLS[0],MCOLS[3]];
    const rows=q.options.map(o=>{const vals=base.map(r=>r.answers[q.id][o.id]).filter(Boolean);const t=vals.length||1;const p={},n={};cols.forEach(c=>{n[c[0]]=vals.filter(x=>x===c[0]).length;p[c[0]]=n[c[0]]/t*100});return {l:o.label,p,n}}).sort((a,b)=>b.p[top[0]]-a.p[top[0]]);
    inner=`<div class="mx-legend">${order.map(c=>`<span><i class="k-${c[2]}"></i>${esc(c[1])}</span>`).join('')}</div><div class="bars">${rows.map(r=>`<div class="bar-row"><span class="lab">${esc(r.l)}</span><span class="pct">${Math.round(r.p[top[0]])}%<small>${r.n[top[0]]}</small></span><span class="tr stacked">${order.map(c=>`<i class="k-${c[2]}" style="width:${r.p[c[0]]}%"></i>`).join('')}</span></div>`).join('')}</div><span class="base">Ordered by % ${esc(top[1].toLowerCase())}. Small numbers are counts.</span>`;
  } else if(q.type==='rank'){
    const n=q.options.length;
    const stats=q.options.map(o=>{const pos=base.map(r=>r.answers[q.id].indexOf(o.id)).filter(p=>p>=0);const avg=pos.length?pos.reduce((a,b)=>a+b+1,0)/pos.length:n;const first=base.filter(r=>r.answers[q.id][0]===o.id).length;return {l:o.label,avg,first}}).sort((a,b)=>a.avg-b.avg);
    inner=`<div class="bars">${stats.map((st,i)=>{const p=base.length?Math.round(st.first/base.length*100):0;return `<div class="bar-row ${i===0?'top':''}"><span class="lab"><b>${i+1}.</b> ${esc(st.l)} <span style="color:var(--muted)">· avg rank ${st.avg.toFixed(1)}</span></span><span class="pct">${p}%<small>${st.first}</small></span><span class="tr"><i style="width:${p}%"></i></span></div>`}).join('')}</div><span class="base">Ordered by average rank. Bars show % who ranked it first.</span>`;
  } else if(isNum(q)){
    const vals=base.map(r=>r.answers[q.id]);const avg=vals.length?(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1):'—';
    inner=`<div class="avg"><b>${avg}</b><span style="color:var(--muted);font-size:13px">average out of 5</span></div><div class="bars">${[5,4,3,2,1].map(k=>{const c=vals.filter(v=>v===k).length;const p=vals.length?Math.round(c/vals.length*100):0;return `<div class="bar-row"><span class="lab">${k}${k===5?' · '+esc(q.maxLabel||''):k===1?' · '+esc(q.minLabel||''):''}</span><span class="pct">${p}%<small>${c}</small></span><span class="tr"><i style="width:${p}%"></i></span></div>`}).join('')}</div>`;
  } else if(q.type==='text'){
    const items=base.map(r=>r.answers[q.id]);
    const counts={};items.forEach(t=>counts[t]=(counts[t]||0)+1);
    const list=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,6);
    inner=items.length?`<ul class="quotes">${list.map(([t,c])=>`<li>${esc(t)}${c>1?` <span style="color:var(--muted);font-size:12px">×${c}</span>`:''}</li>`).join('')}</ul>${items.length>6?`<span class="base">See all ${items.length} in Responses</span>`:''}`:'<span class="base">No written answers yet.</span>';
  }
  const baseTxt=(CHOICE.includes(q.type)?'Small numbers are counts · ':'')+(q.type==='text'?`${base.length} written answers`:`${base.length} answered${q.showIf?` of ${seen} who saw it`:''}${isMulti(q)?' · could pick more than one':''}`);
  const others=hasOtherText(q)?rs.map(r=>r.answers[q.id+'__other']).filter(Boolean):[];
  const otherHtml=others.length?`<div><span class="base">${q.allowOther?'Other':'Ideas'} (${others.length})</span><ul class="quotes" style="margin-top:6px">${others.slice(0,5).map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div>`:'';
  return `<div class="card a-card"><h3>${esc(q.text)}</h3><span class="base">${baseTxt}</span>${inner}${otherHtml}</div>`;
}

/* ---------- binding ---------- */
function bind(){
  document.querySelectorAll('[data-act]').forEach(b=>b.onclick=e=>{e.preventDefault();act(b.dataset.act,b.dataset)});
  // family answers
  if(S.view==='family'){
    document.querySelectorAll('button[data-q]').forEach(p=>p.onclick=()=>{
      const q=findQ(p.dataset.q); if(p.getAttribute('aria-disabled')==='true')return;
      if(p.dataset.scale){S.answers[q.id]=+p.dataset.scale}
      else if(!isMulti(q)){S.answers[q.id]=p.dataset.o}
      else{const cur=S.answers[q.id]||[];const i=cur.indexOf(p.dataset.o);S.answers[q.id]=i>=0?cur.filter(x=>x!==p.dataset.o):cur.concat(p.dataset.o)}
      delete S.errors[q.id]; const y=window.scrollY; render(); window.scrollTo(0,y);
    });
    document.querySelectorAll('[data-mq]').forEach(b=>b.onclick=()=>{
      const q=b.dataset.mq, m=Object.assign({},S.answers[q]); m[b.dataset.mo]===b.dataset.mv?delete m[b.dataset.mo]:m[b.dataset.mo]=b.dataset.mv;
      S.answers[q]=m; delete S.errors[q]; const y=window.scrollY; render(); window.scrollTo(0,y);
      const f=document.querySelector(`[data-mq="${q}"][data-mo="${b.dataset.mo}"][data-mv="${b.dataset.mv}"]`); f&&f.focus();
    });
    document.querySelectorAll('[data-rq]').forEach(b=>b.onclick=()=>{
      const qid=b.dataset.rq, o=b.dataset.ro, a=b.dataset.ra; let cur=(S.answers[qid]||[]).slice(); const i=cur.indexOf(o);
      if(a==='add'&&i<0)cur.push(o); else if(a==='del')cur.splice(i,1); else if(a==='clear')cur=[];
      else if(a==='up'&&i>0)[cur[i-1],cur[i]]=[cur[i],cur[i-1]]; else if(a==='down'&&i<cur.length-1)[cur[i+1],cur[i]]=[cur[i],cur[i+1]];
      S.answers[qid]=cur; delete S.errors[qid]; const y=window.scrollY; render(); window.scrollTo(0,y);
      const again=document.querySelector(`[data-rq="${qid}"][data-ro="${o}"][data-ra="${a==='up'||a==='down'?a:'up'}"]`); if(again&&!again.disabled&&(a==='up'||a==='down'))again.focus();
    });
    document.querySelectorAll('[data-other]').forEach(i=>i.oninput=()=>{S.answers[i.dataset.other+'__other']=i.value});
    document.querySelectorAll('textarea[data-q],input[data-q]').forEach(i=>i.oninput=()=>{
      if(i.dataset.k){S.answers[i.dataset.q]=Object.assign({},S.answers[i.dataset.q],{[i.dataset.k]:i.value})}else S.answers[i.dataset.q]=i.value;
    });
  }
  if(S.view!=='admin')return;
  document.querySelectorAll('[data-tab]').forEach(t=>t.onclick=()=>{S.adminTab=t.dataset.tab;render()});
  document.querySelectorAll('[data-pf]').forEach(c=>c.onclick=()=>{S.progFilter=c.dataset.pf;render()});
  document.querySelectorAll('[data-rf]').forEach(c=>c.onclick=()=>{S.roleFilter=c.dataset.rf;render()});
  document.querySelectorAll('tr.resp').forEach(r=>{const go=()=>{S.openResp=S.openResp===r.dataset.resp?null:r.dataset.resp;render()};r.onclick=go;r.onkeydown=e=>{if(e.key==='Enter')go()}});
  document.querySelectorAll('details.qed').forEach(d=>d.ontoggle=()=>{d.open?S.openQ.add(d.dataset.qd):S.openQ.delete(d.dataset.qd)});
  // config text fields
  document.querySelectorAll('[data-cfg]').forEach(i=>i.oninput=()=>{config[i.dataset.cfg]=i.value;persistCfg()});
  document.querySelectorAll('[data-sec][data-f]').forEach(i=>i.oninput=()=>{config.sections[+i.dataset.sec][i.dataset.f]=i.value;persistCfg()});
  document.querySelectorAll('input[data-optdesc]').forEach(i=>i.oninput=()=>{findQ(i.dataset.q).options[+i.dataset.optdesc].desc=i.value;persistCfg()});
  document.querySelectorAll('input[data-opt]').forEach(i=>i.oninput=()=>{findQ(i.dataset.q).options[+i.dataset.opt].label=i.value;persistCfg()});
  document.querySelectorAll('[data-q][data-f]').forEach(i=>{
    const q=findQ(i.dataset.q), f=i.dataset.f;
    if(f==='text'||f==='help'||f==='minLabel'||f==='maxLabel'){i.oninput=()=>{q[f]=i.value;persistCfg();if(f==='text'){const s=i.closest('details').querySelector('.qt');s.textContent=i.value}}}
    else if(f==='required'||f==='allowOther'){i.onchange=()=>{q[f]=i.checked;persistCfg()}}
    else if(f==='max'){i.onchange=()=>{q.max=i.value?+i.value:undefined;persistCfg()}}
    else if(f==='type'){i.onchange=()=>{q.type=i.value;if(OPT_TYPES.includes(q.type)&&!q.options.length)q.options=O('Option 1','Option 2');if(isNum(q)){q.minLabel=q.minLabel||'Not happy';q.maxLabel=q.maxLabel||'Very happy'}persistCfg();render()}}
    else if(f==='moveTo'){i.onchange=()=>{const from=config.sections.findIndex(s=>s.questions.includes(q));config.sections[from].questions=config.sections[from].questions.filter(x=>x!==q);config.sections[+i.value].questions.push(q);persistCfg();render();toast('Question moved')}}
    else if(f==='showIfQ'){i.onchange=()=>{q.showIf=i.value?{q:i.value,any:[]}:undefined;if(!i.value)delete q.showIf;persistCfg();render()}}
  });
  document.querySelectorAll('[data-cond]').forEach(c=>c.onchange=()=>{const q=findQ(c.dataset.q);const a=new Set(q.showIf.any||[]);c.checked?a.add(c.dataset.cond):a.delete(c.dataset.cond);q.showIf.any=[...a];persistCfg()});
}

function swap(arr,i,j){if(j<0||j>=arr.length)return;[arr[i],arr[j]]=[arr[j],arr[i]]}
function act(a,d){
  const secs=config.sections;
  switch(a){
    case 'start':S.step=0;S.answers={};S.errors={};render();window.scrollTo(0,0);break;
    case 'next':familyNext();break;
    case 'back':S.errors={};S.step=Math.max(-1,S.step-1);render();window.scrollTo(0,0);break;
    case 'again':S.step=-1;S.answers={};S.submitError='';render();window.scrollTo(0,0);break;
    case 'back-admin':setView('admin');break;
    case 'preview':S.step=-1;S.answers={};setView('family');break;
    case 'reload':loadAdmin();break;
    case 'toggle-open':{const want=!S.open;run('adminSetOpen',BOOT.key,want).then(r=>{S.open=!!(r&&r.open);render();toast(S.open?'Survey is open to families':'Survey is closed. Families now see a closed message.')}).catch(e=>toast('Could not change it. '+e.message));break}
    case 'copy-link':{const box=$('#family-link');const done=()=>toast('Family link copied');try{navigator.clipboard.writeText(BOOT.surveyUrl).then(done,()=>{box.select();toast('Press Ctrl+C or ⌘C to copy')})}catch(e){box.select();toast('Press Ctrl+C or ⌘C to copy')}break}
    case 'del-resp':S.confirmDel=d.id;render();break;
    case 'del-no':S.confirmDel=null;render();break;
    case 'del-yes':{const id=d.id;run('adminDeleteResponse',BOOT.key,id).then(r=>{if(r&&r.ok){responses=responses.filter(x=>x.id!==id);S.openResp=null;S.confirmDel=null;render();toast('Response deleted')}else{toast('That response was not found. Try Refresh.')}}).catch(e=>toast('Not deleted. '+e.message));break}
    case 'sec-up':swap(secs,+d.sec,+d.sec-1);persistCfg();render();break;
    case 'sec-down':swap(secs,+d.sec,+d.sec+1);persistCfg();render();break;
    case 'sec-del':secs.splice(+d.sec,1);cleanupConds();persistCfg();render();toast('Section deleted');break;
    case 'sec-add':secs.push({id:newId('s'),title:'New section',intro:'',questions:[]});persistCfg();render();break;
    case 'q-add':{const q={id:newId('q_'),type:'single',text:'New question',options:O('Option 1','Option 2')};secs[+d.sec].questions.push(q);S.openQ.add(q.id);persistCfg();render();break}
    case 'q-up':swap(secs[+d.sec].questions,+d.qi,+d.qi-1);persistCfg();render();break;
    case 'q-down':swap(secs[+d.sec].questions,+d.qi,+d.qi+1);persistCfg();render();break;
    case 'q-del':secs[+d.sec].questions.splice(+d.qi,1);cleanupConds();persistCfg();render();toast('Question deleted');break;
    case 'o-add':{const q=findQ(d.q);q.options.push({id:newId('o'),label:'New option'});persistCfg();render();break}
    case 'o-up':swap(findQ(d.q).options,+d.opt,+d.opt-1);persistCfg();render();break;
    case 'o-down':swap(findQ(d.q).options,+d.opt,+d.opt+1);persistCfg();render();break;
    case 'o-del':findQ(d.q).options.splice(+d.opt,1);cleanupConds();persistCfg();render();break;
    case 'reset':S.confirmReset=true;render();break;
    case 'reset-no':S.confirmReset=false;render();break;
    case 'reset-yes':config=clone(DEFAULT_CONFIG);S.confirmReset=false;render();toast('Recommended questions restored. Save to make them live.');break;
  }
}
function cleanupConds(){allQuestions().forEach(q=>{if(!q.showIf)return;const t=findQ(q.showIf.q);if(!t){delete q.showIf;return}if(q.showIf.any)q.showIf.any=q.showIf.any.filter(id=>t.options.some(o=>o.id===id.split(':')[0]))})}

window.addEventListener('beforeunload',e=>{if(isDirty()){e.preventDefault();e.returnValue=''}});
render();
if(isAdminMode) loadAdmin();
