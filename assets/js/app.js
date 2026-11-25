(()=>{
'use strict';
const {categories:C,lessons:L}=window.MEDLIB;
const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const norm=s=>String(s||'').toLowerCase().replace(/ي/g,'ی').replace(/ك/g,'ک').trim();
const fa=n=>new Intl.NumberFormat('fa-IR').format(n);
const dt=d=>new Date(d).toLocaleDateString('fa-IR');
const cat=id=>C.find(c=>c.id===id);
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const favs=()=>store.get('medlib:fav',[]);
const toggleFav=id=>{const f=favs(),i=f.indexOf(id);i<0?f.push(id):f.splice(i,1);store.set('medlib:fav',f)};
const views=l=>l.views+store.get('medlib:v:'+l.id,0);
const match=(l,q)=>{q=norm(q);if(!q)return true;const c=cat(l.cat);return norm([l.title,l.en,l.desc,l.topic,c.fa,c.en].join(' ')).includes(q)};
const card=l=>{const on=favs().includes(l.id);return `<article class="lc"><a href="lesson.html?id=${l.id}"><h3>${esc(l.title)}</h3><small>${esc(l.en)} — ${esc(cat(l.cat).fa)}</small><p>${esc(l.desc)}</p></a><button class="fav" data-fav="${l.id}" aria-pressed="${on}" aria-label="علاقه‌مندی">${on?'★':'☆'}</button></article>`};
const list=a=>a.length?`<div class="list">${a.map(card).join('')}</div>`:'<div class="empty">موردی پیدا نشد.</div>';
const count=id=>L.filter(l=>l.cat===id).length;

function shell(){
 document.body.insertAdjacentHTML('afterbegin',`<header class="top"><div class="wrap"><a class="logo" href="index.html">MED<b>LIB</b></a><nav><a href="index.html">خانه</a><a href="index.html#favorites">علاقه‌مندی‌ها</a></nav></div></header>`);
 document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap">MEDLIB — کتابخانه جامع پزشکی<br>محتوا صرفاً آموزشی است و جایگزین قضاوت بالینی و دستورالعمل‌های معتبر نیست.</div></footer>`);
}
let rerender=()=>{};
document.addEventListener('click',e=>{const b=e.target.closest('[data-fav]');if(b){toggleFav(b.dataset.fav);rerender()}});

function home(){
 const groups=[...new Set(C.map(c=>c.group))];
 $('#cats').innerHTML=groups.map(g=>`<h3 class="grp">${g}</h3><div class="grid">${C.filter(c=>c.group===g).map(c=>`<a class="cat" href="category.html?c=${c.id}"><span class="ic" aria-hidden="true">${c.icon}</span><strong>${c.fa}</strong><small>${c.en}</small><em>${fa(count(c.id))} درسنامه</em></a>`).join('')}</div>`).join('');
 const draw=()=>{
  $('#latest').innerHTML=list([...L].sort((a,b)=>b.added.localeCompare(a.added)).slice(0,6));
  $('#popular').innerHTML=list([...L].sort((a,b)=>views(b)-views(a)).slice(0,6));
  const f=L.filter(l=>favs().includes(l.id));
  $('#favs').innerHTML=f.length?list(f):'<div class="empty">با زدن ☆ کنار هر درسنامه، آن را اینجا ذخیره کنید.</div>';
  const q=$('#q').value;$('#browse').hidden=!!q.trim();$('#found').hidden=!q.trim();
  if(q.trim())$('#found').innerHTML=`<h2 class="sec">نتایج جست‌وجو</h2>`+list(L.filter(l=>match(l,q)));
 };
 rerender=draw;$('#q').addEventListener('input',draw);draw();
}

function category(){
 const c=cat(new URLSearchParams(location.search).get('c'));
 if(!c){$('#app').innerHTML='<div class="empty">رشته پیدا نشد. <a href="index.html">بازگشت به خانه</a></div>';return}
 document.title=c.fa+' | MEDLIB';
 const all=L.filter(l=>l.cat===c.id);let topic='';
 $('#app').innerHTML=`<p class="crumb"><a href="index.html">خانه</a> / ${c.fa}</p><h1>${c.icon} ${c.fa} <small dir="ltr">${c.en}</small></h1><p>${c.desc} — ${fa(all.length)} درسنامه</p><div class="chips" id="chips"></div><div class="tools"><input id="q" type="search" placeholder="جست‌وجو در ${c.fa}..." aria-label="جست‌وجو"><select id="sort" aria-label="مرتب‌سازی"><option value="name">مرتب‌سازی: نام</option><option value="added">تاریخ اضافه‌شدن</option><option value="updated">آخرین به‌روزرسانی</option></select></div><div id="res"></div>`;
 const draw=()=>{
  $('#chips').innerHTML=['',...c.topics].map(t=>`<button class="chip ${t===topic?'on':''}" data-t="${esc(t)}">${t||'همه'}</button>`).join('');
  const s=$('#sort').value;
  const r=all.filter(l=>(!topic||l.topic===topic)&&match(l,$('#q').value)).sort((a,b)=>s==='name'?a.title.localeCompare(b.title,'fa'):b[s].localeCompare(a[s]));
  $('#res').innerHTML=r.length?list(r):`<div class="empty">${all.length?'درسنامه‌ای با این فیلتر نیست.':'هنوز درسنامه‌ای برای این رشته اضافه نشده است. راهنمای افزودن در README.md آمده است.'}</div>`;
 };
 rerender=draw;$('#q').addEventListener('input',draw);$('#sort').addEventListener('change',draw);
 $('#chips').addEventListener('click',e=>{const b=e.target.closest('[data-t]');if(b){topic=b.dataset.t;draw()}});draw();
}

async function lesson(){
 const l=L.find(x=>x.id===new URLSearchParams(location.search).get('id')),app=$('#app');
 if(!l){app.innerHTML='<div class="empty">درسنامه پیدا نشد. <a href="index.html">بازگشت به خانه</a></div>';return}
 const c=cat(l.cat);document.title=l.title+' | MEDLIB';
 store.set('medlib:v:'+l.id,store.get('medlib:v:'+l.id,0)+1);
 app.innerHTML=`<p class="crumb noprint"><a href="index.html">خانه</a> / <a href="category.html?c=${c.id}">${c.fa}</a> / ${esc(l.title)}</p><h1>${esc(l.title)}</h1><p>${esc(l.en)} — به‌روزرسانی: ${dt(l.updated)}</p><p class="noprint"><button class="btn" id="fv"></button> <button class="btn" onclick="print()">چاپ</button> <a class="btn" href="category.html?c=${c.id}">بازگشت به ${c.fa}</a></p><div class="lesson"><aside class="toc noprint"><strong>فهرست مطالب</strong><div id="toc"></div></aside><article class="body" id="body">در حال بارگذاری...</article></div><section class="related"><h2 class="sec">درسنامه‌های مرتبط</h2><div id="rel"></div></section>`;
 const fv=()=>{const on=favs().includes(l.id);$('#fv').textContent=on?'★ در علاقه‌مندی‌ها':'☆ افزودن به علاقه‌مندی‌ها';$('#fv').setAttribute('aria-pressed',on)};
 const rel=()=>{$('#rel').innerHTML=list(L.filter(x=>x.cat===l.cat&&x.id!==l.id));if(!L.some(x=>x.cat===l.cat&&x.id!==l.id))$('#rel').innerHTML='<div class="empty">درسنامه مرتبط دیگری موجود نیست.</div>'};
 rerender=()=>{fv();rel()};rerender();
 try{
  const r=await fetch(l.file);if(!r.ok)throw 0;
  $('#body').innerHTML=await r.text();
  $('#toc').innerHTML=[...$('#body').querySelectorAll('h2')].map((h,i)=>{h.id='s'+i;return `<a href="#s${i}">${esc(h.textContent)}</a>`}).join('')||'—';
 }catch(e){$('#body').innerHTML='<div class="empty">بارگذاری درسنامه ممکن نشد. سایت را از طریق GitHub Pages یا یک سرور محلی (python -m http.server) باز کنید؛ باز کردن مستقیم فایل با file:// اجازه خواندن درسنامه‌ها را نمی‌دهد.</div>'}
}

shell();
({home,category,lesson})[document.body.dataset.page]?.();
})();
