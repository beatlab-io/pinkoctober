const stage=document.getElementById('stage'),dialog=document.getElementById('info');const logo=document.querySelector('.brand svg').outerHTML;let step=0;const labels=['Bienvenida','Mirar','Tocar','Recorrer','Reconocer cambios','Consultar'].map(t);const backgrounds=['#fff5e8','#fff5e8','#f3a5c6','#fff5e8','#f3a5c6','#fff5e8'];
const signs=[
  ['Bulto interno','Un bulto nuevo en la mama o la axila, incluso si no duele.',0],
  ['Endurecimiento','Una zona nueva más dura o engrosada que el resto de la mama.',6],
  ['Protuberancia','Un bulto que sobresale y cambia el contorno de la mama.',7],
  ['Hoyuelos o hendiduras','Un hundimiento nuevo, pliegue o tirón hacia adentro en la piel.',8],
  ['Piel de naranja','Piel con pequeños hoyuelos o poros marcados, como la cáscara de una naranja.',1],
  ['Enrojecimiento o calor','Una zona nueva roja, caliente o hinchada en la mama.',9],
  ['Cambios de forma o tamaño','Una diferencia nueva respecto de cómo son habitualmente tus mamas.',2],
  ['Cambios en el pezón','Un pezón que se hunde por primera vez o cambia de dirección o aspecto.',3],
  ['Secreción inesperada','Líquido inesperado por el pezón que no sea leche, especialmente si tiene sangre.',4],
  ['Heridas o sarpullido','Una herida que no cicatriza, sarpullido o descamación en la mama o el pezón.',5],
  ['Venas más visibles','Venas que aparecen o se marcan más que antes, especialmente con otros cambios.',10],
  ['Dolor persistente','Dolor o molestia en la mama o la axila que no desaparece.',11]
];
// Each record keeps the campaign metaphor while illustrating a different change.
function signalRecord(index){
  const surface=`<circle cx="56" cy="56" r="42" fill="#f3a5c6"/><circle cx="56" cy="56" r="35" fill="none" stroke="#fff5e8" stroke-width="2"/><circle cx="56" cy="56" r="27" fill="none" stroke="#fff5e8" stroke-width="1.2" opacity=".7"/>`;
  const center=`<circle cx="56" cy="56" r="14" fill="#f75645"/><circle cx="56" cy="56" r="4" fill="#174e55"/><circle cx="63" cy="49" r="2.2" fill="#fff5e8"/>`;
  const details=[
    `${surface}${center}<path d="M24 40C21 31 33 24 40 30C48 36 45 45 38 48C32 50 26 46 24 40Z" fill="#174e55" stroke="#fff5e8" stroke-width="2"/><path d="M29 35Q34 30 39 35" fill="none" stroke="#fff5e8" stroke-width="2" stroke-linecap="round"/><path d="M23 48Q33 57 45 48" fill="none" stroke="#174e55" stroke-width="1.6" stroke-linecap="round"/>`,
    `${surface}${center}<path d="M65 23C75 17 88 25 92 36C97 45 86 52 76 48C64 46 57 33 65 23Z" fill="#f75645" opacity=".55"/><g fill="#174e55"><circle cx="70" cy="28" r="2"/><circle cx="81" cy="31" r="2.1"/><circle cx="71" cy="39" r="2.2"/><circle cx="84" cy="43" r="2"/></g><path d="M76 26l2-2M86 35l3 1M73 46l3 1" fill="none" stroke="#fff5e8" stroke-width="2" stroke-linecap="round"/>`,
    `<circle cx="50" cy="56" r="41" fill="none" stroke="#174e55" stroke-width="1.6" stroke-dasharray="3 4" opacity=".6"/><path d="M53 22C68 8 91 15 99 37C112 64 94 96 67 98C38 102 16 85 19 59C19 38 36 29 53 22Z" fill="#f3a5c6"/><path d="M56 29C70 18 87 24 93 41C102 64 87 88 65 91C42 95 24 80 26 59C26 43 41 35 56 29Z" fill="none" stroke="#fff5e8" stroke-width="2"/><ellipse cx="61" cy="59" rx="26" ry="28" fill="none" stroke="#fff5e8" stroke-width="1.2" opacity=".7" transform="rotate(18 61 59)"/><g transform="translate(5 3)">${center}</g>`,
    `${surface}<circle cx="56" cy="56" r="16" fill="#f75645"/><path d="M56 48Q54 53 56 56M56 56Q60 57 63 61M56 56Q52 58 49 62" fill="none" stroke="#174e55" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
    `${surface}${center}<path d="M56 59C55 62 51.5 65 51.5 68.5A4.5 4.5 0 0 0 60.5 68.5C60.5 65 57 62 56 59Z" fill="#f75645" stroke="#174e55" stroke-width="1.6" stroke-linejoin="round"/><path d="M54 68Q53.5 70 55 71" fill="none" stroke="#fff5e8" stroke-width="1.2" stroke-linecap="round"/>`,
    `${surface}<path d="M62 36C73 31 87 42 83 54C91 66 83 80 70 79C63 90 48 82 49 70C41 59 49 44 62 36Z" fill="#f75645" opacity=".4"/>${center}<g fill="#f75645"><circle cx="74" cy="43" r="3.6"/><circle cx="82" cy="55" r="3.5"/><circle cx="78" cy="69" r="3.6"/><circle cx="67" cy="79" r="3.4"/></g>`,
    `${surface}${center}<path d="M26 66Q33 59 42 65L44 80Q36 88 27 81Z" fill="#174e55"/><path d="M29 69Q35 65 40 69M29 74Q35 70 40 74M29 79Q35 75 40 79" fill="none" stroke="#fff5e8" stroke-width="1.3" stroke-linecap="round"/>`,
    `<path d="M56 14A42 42 0 1 1 17 40C5 41 5 22 17 22C23 22 25 25 27 26A42 42 0 0 1 56 14Z" fill="#f3a5c6"/><circle cx="56" cy="56" r="35" fill="none" stroke="#fff5e8" stroke-width="2"/><circle cx="56" cy="56" r="27" fill="none" stroke="#fff5e8" stroke-width="1.2" opacity=".7"/>${center}<path d="M12 30Q15 25 20 29" fill="none" stroke="#fff5e8" stroke-width="2" stroke-linecap="round"/>`,
    `${surface}${center}<g fill="#174e55" opacity=".4"><circle cx="29" cy="63" r="6"/><circle cx="33" cy="78" r="4"/><circle cx="44" cy="84" r="3"/></g><path d="M24 65Q29 70 34 65M30 80Q33 83 36 80" fill="none" stroke="#fff5e8" stroke-width="1.5" stroke-linecap="round"/>`,
    `${surface}<path d="M28 23C47 12 53 21 49 32C45 43 31 52 22 45C14 38 18 29 28 23Z" fill="#f75645" opacity=".6"/><path d="M76 67C92 63 95 81 82 89C72 97 59 91 65 80C67 75 70 70 76 67Z" fill="#f75645" opacity=".45"/>${center}`,
    `${surface}${center}<g fill="none" stroke="#174e55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".8"><path d="M76 22Q67 32 77 41Q86 48 82 61L87 77M77 41L91 34M73 31L61 25M82 58L93 53"/></g>`,
    `${surface}${center}<circle cx="30" cy="76" r="9" fill="#f75645" opacity=".6"/><g fill="none" stroke="#174e55" stroke-width="1.8" stroke-linecap="round"><path d="M25 71Q30 68 35 72M20 67Q29 61 39 68M16 63Q28 53 43 64"/></g>`
  ];
  return `<svg class="signal-record" viewBox="0 0 112 112" aria-hidden="true" focusable="false">${details[index]}</svg>`;
}
const lastStep=labels.length-1;
const cta=(text='Continuar')=>`<div class="cta-row"><button class="primary" data-next>${text}</button><span class="hint">presioná Enter ↵</span></div>`;
const welcomeCta=()=>`<div class="cta-row"><button class="primary welcome-cta" type="button" data-next><svg class="cta-shape" viewBox="0 0 320 94" aria-hidden="true" focusable="false"><path class="cta-body" d="M47 0H166C184 0 196 8 206 20C214 30 226 30 234.5 20A47 47 0 1 1 234.5 74C226 64 214 64 206 74C196 86 184 94 166 94H47A47 47 0 0 1 47 0Z"/><path d="M259 47h28m-10-11 11 11-11 11" fill="none" stroke="var(--ink)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="cta-label">Comenzar</span></button><span class="hint">presioná Enter ↵</span></div>`;
const caption=t=>`<p class="art-caption">${t}</p>`;
const faqMarkup=`<details class="faq-section"><summary>Preguntas frecuentes</summary><div class="faq-items">${[
  ['¿Cada cuánto puedo revisarlas?','Podés tomar una vez al mes como recordatorio. Si menstruás, después del período suelen estar menos sensibles. Lo importante es conocer lo habitual en vos y consultar ante un cambio nuevo.'],
  ['¿Con qué dedos y cuánta presión?','Usá la parte plana de las yemas del índice, medio y anular. En cada zona, probá presión suave, media y firme, sin que duela. Si tenés dudas, pedile a un profesional que te muestre.'],
  ['¿Es normal que mis mamas sean diferentes?','Sí, pueden tener distintos tamaños o formas y cambiar con el ciclo o las etapas de la vida. Consultá si aparece una diferencia nueva o algo que no es habitual en vos.'],
  ['¿Consulto aunque no me duela?','Sí. Un cambio nuevo merece consulta aunque no duela o tu última mamografía haya sido normal. La mayoría de los cambios no son cáncer, pero un profesional tiene que evaluarlos.']
].map(([question,answer])=>`<details class="control-details" name="faq"><summary>${question}</summary><p>${answer}</p></details>`).join('')}<p class="faq-sources"><span>Fuentes:</span> <a href="https://www.nhs.uk/tests-and-treatments/how-to-check-your-breasts-or-chest/" target="_blank" rel="noopener noreferrer">NHS</a> · <a href="https://www.mayoclinic.org/tests-procedures/breast-exam/about/pac-20393237" target="_blank" rel="noopener noreferrer">Mayo Clinic</a> · <a href="https://www.cancer.gov/types/breast/symptoms" target="_blank" rel="noopener noreferrer">Instituto Nacional del Cáncer de EE. UU.</a></p></div></details>`;
function screen(){let copy='',art='',cls='';switch(step){case 0:cls='welcome';copy=`<h1 tabindex="-1">Octubre <em>Rosa</em></h1><p class="intro-description">Una guía interactiva para conocer tus mamas y reconocer cambios si los hay, para llevar a consulta.</p>${welcomeCta()}<p class="note">Tocarte no previene el cáncer ni reemplaza las mamografías y los controles indicados para vos.</p>`;art=`<div class="welcome-player"><div class="hero-logo">${logo}</div></div>`;break;
case 1:cls='observe';copy=`<p class="eyebrow">Primero, mirá</p><h2 tabindex="-1">Frente al espejo.</h2><p><span>Observá tus mamas como te muestra el disco.</span> <span>Primero con los brazos abajo y después levantados.</span> <span>Observá si algo cambia de forma o aspecto.</span></p>${cta()}`;art=`<div class="observe-record"><svg viewBox="0 0 128 128" role="img" aria-label="Vinilo rosa como metáfora: contorno para la forma, superficie para la piel y centro para el pezón"><circle cx="64" cy="64" r="52" fill="#f3a5c6"/><circle cx="64" cy="64" r="45" fill="none" stroke="#fff5e8" stroke-width="2" stroke-linecap="round" stroke-dasharray="138 6 132 7" transform="rotate(42 64 64)"/><circle cx="64" cy="64" r="39" fill="none" stroke="#fff5e8" stroke-width=".7" opacity=".45"/><circle cx="64" cy="64" r="20" fill="#f75645"/><circle cx="64" cy="64" r="5.8" fill="#174e55"/><circle cx="74" cy="54" r="3" fill="#fff5e8"/><circle class="look-highlight look-phase" data-look-area="forma" style="--look-delay:0s" cx="64" cy="64" r="56" fill="none" stroke="#174e55" stroke-width="2"/><g class="look-highlight look-phase" data-look-area="piel" style="--look-delay:2s"><circle cx="64" cy="64" r="33" fill="none" stroke="#174e55" stroke-width="15" opacity=".14"/><circle cx="64" cy="64" r="41" fill="none" stroke="#174e55" stroke-width="1.2"/></g><circle class="look-highlight look-phase" data-look-area="pezon" style="--look-delay:4s" cx="64" cy="64" r="23" fill="none" stroke="#174e55" stroke-width="2"/></svg></div><div class="look-labels" aria-label="Aspectos que muestra el disco"><span class="look-label" style="--look-delay:0s">Forma</span><span class="look-label" style="--look-delay:2s">Piel</span><span class="look-label" style="--look-delay:4s">Pezón</span></div><div class="look-description"><p class="look-copy look-phase" style="--look-delay:0s"><span class="look-mapping">El contorno representa la forma.</span><span>Mirá si hay cambios nuevos en la forma o el tamaño de tus mamas.</span></p><p class="look-copy look-phase" style="--look-delay:2s"><span class="look-mapping">La superficie representa la piel.</span><span>Prestá atención a cambios nuevos en la piel.</span></p><p class="look-copy look-phase" style="--look-delay:4s"><span class="look-mapping">El centro representa el pezón.</span><span>Observá si cambia su forma o su aspecto.</span></p></div>`;break;
case 2:cls='touch';copy=`<p class="eyebrow">Ahora, tocá</p><h2 tabindex="-1">Pequeños círculos.</h2><p>Con las yemas de tres dedos juntos (índice, medio y anular), hacé pequeños círculos y recorré toda la mama. En cada zona, usá presión suave, media y firme antes de avanzar, sin que duela.</p>${cta()}`;art=`<div class="turntable"><div class="record record-loop" role="img" aria-label="Tres yemas hacen pequeños círculos en una zona. Los indicadores muestran presión suave, media y firme antes de avanzar a la zona siguiente"><div class="record-surface"><div class="record-center"></div></div><div class="touch-route" aria-hidden="true"><div class="touch-circle"><span class="touch-fingers"><i></i><i></i><i></i></span></div></div></div><svg class="tonearm" viewBox="0 0 120 120" aria-hidden="true"><rect class="tonearm-base" x="8" y="91" width="14" height="14" fill="#174e55"/><path d="M15 98L62 117L89 95" fill="none" stroke="#174e55" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="86.1" y="89.6" width="5.8" height="10.8" rx=".8" fill="#174e55" transform="rotate(49.57 89 95)"/></svg></div><div class="pressure-guide" aria-label="En cada zona: presión suave, media y firme, sin dolor"><span class="pressure-level" style="--pressure-delay:0s">Suave</span><span class="pressure-level" style="--pressure-delay:2s">Media</span><span class="pressure-level" style="--pressure-delay:4s">Firme</span></div>`;break;
case 3:cls='coverage';copy=`<p class="eyebrow">Sin saltear zonas</p><h2 tabindex="-1">Todo el recorrido.</h2><p>Recorré toda la mama, hasta la clavícula y la axila. Tocá también alrededor y sobre el pezón. Repetí del otro lado.</p>${cta()}`;art=`<div class="coverage-frame"><svg viewBox="0 60 280 234" role="img" aria-label="Recorrido orientativo con tres yemas. El disco representa la mama. Un contorno del brazo levantado ubica la axila en el hueco entre el brazo y el costado del pecho, junto a la base del tocadiscos. La clavícula está por encima de la mama; el centro del disco representa el pezón.">
<defs><linearGradient id="coverage-body-shade" x1="0" x2="1"><stop offset="0" stop-color="#f3a5c6" stop-opacity=".24"/><stop offset=".72" stop-color="#f3a5c6" stop-opacity=".18"/><stop offset="1" stop-color="#f3a5c6" stop-opacity="0"/></linearGradient><linearGradient id="coverage-body-fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="white"/><stop offset=".83" stop-color="white"/><stop offset="1" stop-color="black"/></linearGradient><mask id="coverage-body-mask"><rect width="340" height="330" fill="url(#coverage-body-fade)"/></mask></defs>
<path class="coverage-body-shade" d="M85 4H125L106 22Q100 30 105 35L149 77Q162 89 178 87Q207 80 236 61V0H340V330H133Q124 247 127 160Q129 139 116 127L62 73Q48 57 61 39Z" fill="url(#coverage-body-shade)" mask="url(#coverage-body-mask)"/>
<g class="coverage-body" fill="none" stroke="#174e55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M236 0V61Q207 80 178 87Q162 89 149 77L105 35Q100 30 106 22L125 4M85 4L61 39Q48 57 62 73L116 127Q129 139 127 160Q124 217 130 294"/>
<path d="M111 111Q127 121 136 113"/>
</g>
<ellipse cx="132" cy="140" rx="25" ry="22" fill="#f3a5c6" opacity=".3"/>
<ellipse cx="132" cy="140" rx="25" ry="22" fill="none" stroke="#174e55" stroke-width="1" stroke-dasharray="2 4" opacity=".5"/>
<path d="M167 109Q212 96 263 109" fill="none" stroke="#174e55" stroke-width="1.5" stroke-linecap="round"/>
<text x="230" y="130" text-anchor="middle" class="map-label">3. Clavícula</text>
<path d="M76 178L114 152" fill="none" stroke="#174e55" stroke-width="1"/>
<text x="18" y="192" class="map-label">2. Axila</text>
<text x="18" y="208" class="map-detail">Debajo del brazo</text>
<g class="coverage-disc">
<circle cx="205" cy="213" r="56" fill="#f3a5c6"/>
<circle cx="205" cy="213" r="48.5" fill="none" stroke="#fff5e8" stroke-width="1.6"/>
<circle cx="205" cy="213" r="38.5" fill="none" stroke="#fff5e8" stroke-width=".8" opacity=".65"/>
<circle cx="205" cy="213" r="13.7" fill="#f75645"/>
<circle cx="205" cy="213" r="3.7" fill="#174e55"/>
<circle cx="212" cy="206" r="2" fill="#fff5e8"/>
</g>
<path d="M132 140L135 217L173 238" fill="none" stroke="#174e55" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="169.5" y="232.5" width="7" height="11" rx="1" fill="#174e55" transform="rotate(119 173 238)"/>
<rect x="124" y="132" width="16" height="16" fill="#174e55"/>
<circle class="coverage-phase" style="--zone-delay:0s" cx="205" cy="213" r="61" fill="none" stroke="#174e55" stroke-width="2"/>
<ellipse class="coverage-phase" style="--zone-delay:6s" cx="132" cy="140" rx="25" ry="22" fill="none" stroke="#174e55" stroke-width="2.5"/>
<path class="coverage-phase" style="--zone-delay:12s" d="M167 109Q212 96 263 109" fill="none" stroke="#174e55" stroke-width="4" stroke-linecap="round"/>
<circle class="coverage-phase" style="--zone-delay:18s" cx="205" cy="213" r="18.5" fill="none" stroke="#174e55" stroke-width="2"/>
<g class="coverage-fingers-route" aria-hidden="true"><g class="coverage-fingers"><rect x="-17" y="-8" width="10.5" height="15.5" rx="5.25"/><rect x="-5.25" y="-11.5" width="10.5" height="19" rx="5.25"/><rect x="6.5" y="-7.5" width="10.5" height="15" rx="5.25"/></g></g>
</svg></div><div class="coverage-labels" aria-label="Zonas del recorrido"><span class="coverage-label" style="--zone-delay:0s">1. Mama</span><span class="coverage-label" style="--zone-delay:6s">2. Axila</span><span class="coverage-label" style="--zone-delay:12s">3. Clavícula</span><span class="coverage-label" style="--zone-delay:18s">4. Pezón</span></div><div class="coverage-description"><p class="coverage-phase" style="--zone-delay:0s">Recorré toda la superficie de cada mama.</p><p class="coverage-phase" style="--zone-delay:6s">Recorré el hueco debajo del brazo, donde se une al costado del pecho.</p><p class="coverage-phase" style="--zone-delay:12s">Llegá hasta la clavícula, por encima de la mama.</p><p class="coverage-phase" style="--zone-delay:18s">Tocá alrededor y sobre el pezón.</p></div>`;break;
case 4:cls='signals';copy=`<p class="eyebrow">Prestá atención</p><h2 tabindex="-1">Si algo cambia, consultá.</h2><p>Prestá atención a los cambios nuevos en tus mamas, la piel y los pezones.</p><div class="cta-row signal-actions"><button class="primary" data-next>Qué hacer si noto algo</button><button class="secondary" type="button" id="download-signals">Descargar</button><span class="download-status" role="status" aria-live="polite"></span></div>`;art=`<div class="signal-grid">${signs.map(s=>`<article class="signal-card">${signalRecord(s[2])}<h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('')}</div>`;break;
case 5:cls='consult finish';copy=`<h2 tabindex="-1">Si notaste un cambio, consultá</h2><p>Aunque no duela, no esperes al próximo control para comentarlo.</p><div class="cta-row finish-actions"><button class="primary" id="restart">Volver a empezar</button><p class="note">Completar esta guía no evalúa tu salud ni reemplaza tus controles.</p><div class="end-links"><button class="quiet" id="review-signals">Repasar señales</button><button class="quiet" id="sources">Fuentes y sobre esta guía</button></div></div>`;art=`<div class="closing-record">${logo}</div><p class="note closing-reassurance">Un cambio no confirma un cáncer. La mayoría de los bultos no son cáncer; un profesional puede evaluar qué ocurre.</p><details class="control-details"><summary>¿Cada cuánto hacer los controles?</summary><p>Acordá con tu equipo de salud cuándo hacer tus mamografías.</p><p>El Ministerio de Salud argentino recomienda una mamografía cada 1 o 2 años entre los 50 y 69 años, sin síntomas ni antecedentes personales o familiares de cáncer de mama, junto con una evaluación profesional.</p><p>Antes de los 50, después de los 69 o si tenés antecedentes u otros factores de riesgo, el plan es individual. Si notás un cambio, no esperes al próximo control.</p></details>`;}

stage.innerHTML=`<section class="screen ${cls}"><div class="copy">${copy}</div><div class="art">${art}</div>${step===5?faqMarkup:''}</section>`;localize(stage);if(language==='en'&&step===0)stage.querySelector('h1').innerHTML='<em>Pink</em> October';document.body.style.background=backgrounds[step];document.body.classList.toggle('guide-active',step>0);document.body.classList.toggle('pink-background',step===2||step===4);document.getElementById('guide-progress').hidden=step===0;if(step>0){const actions=stage.querySelector('.cta-row');if(actions)stage.querySelector('.screen').append(actions)}document.getElementById('progress-label').textContent=step===0?t('Un momento para vos'):`${step} ${t('de')} ${lastStep} · ${labels[step]}`;document.getElementById('bar').style.width=`${step/lastStep*100}%`;document.querySelector('[role=progressbar]').setAttribute('aria-valuenow',step);document.querySelector('[role=progressbar]').setAttribute('aria-valuemax',lastStep);document.getElementById('back').disabled=step===0;document.getElementById('forward').disabled=step===lastStep;document.querySelector('.keyboard').textContent=t(step===lastStep?'Conocerte es cuidarte.':'Enter para seguir');bind();}
function go(n){step=Math.max(0,Math.min(lastStep,n));history.replaceState(null,'',step===4?'#senales':`#paso-${step}`);screen();window.scrollTo(0,0);stage.querySelector('h1,h2').focus({preventScroll:true})}
function openInfo(html){document.getElementById('info-content').innerHTML=html;localize(dialog);dialog.showModal()}
function bind(){document.getElementById('download-signals')?.addEventListener('click',downloadSignals);stage.querySelector('[data-next]')?.addEventListener('click',()=>go(step+1));document.getElementById('restart')?.addEventListener('click',()=>go(0));document.getElementById('review-signals')?.addEventListener('click',()=>go(4));document.getElementById('sources')?.addEventListener('click',()=>{openInfo(document.getElementById('sources-template').innerHTML);dialog.querySelector('details').open=true});}
document.getElementById('back').onclick=()=>go(step-1);document.getElementById('forward').onclick=()=>go(step+1);document.getElementById('home').onclick=()=>go(0);document.getElementById('signals-shortcut').onclick=()=>go(4);dialog.querySelector('.close').onclick=()=>dialog.close();document.addEventListener('keydown',e=>{if(dialog.open||e.altKey||e.ctrlKey||e.metaKey||e.target.closest('button,a,input,select,textarea,summary'))return;if(e.key==='Enter'||e.key==='ArrowRight'){e.preventDefault();go(step+1)}if(e.key==='ArrowLeft'){e.preventDefault();go(step-1)}});function stepFromHash(){const n=location.hash==='#senales'?4:/^#paso-[0-6]$/.test(location.hash)?Number(location.hash.slice(-1)):0;if(n>lastStep)history.replaceState(null,'',`#paso-${lastStep}`);return Math.min(lastStep,n)}window.addEventListener('hashchange',()=>{step=stepFromHash();screen();window.scrollTo(0,0);stage.querySelector('h1,h2').focus({preventScroll:true})});initializeLanguage();step=stepFromHash();screen();

function initializeLanguage(){
  localize(document.body);
  localize(document.getElementById('sources-template').content);
  document.title=t(document.title);
  const description=document.querySelector('meta[name=description]');
  description.content=t(description.content);
  if(language==='en')document.querySelector('.brand > span').innerHTML='<em>Pink</em><br>October';
}

let signalsImageUrl=null;
let signalsExportPending=false;
// Export the same illustrations and copy as a standalone, phone-friendly PNG.
async function downloadSignals(){
  const button=document.getElementById('download-signals');
  const status=stage.querySelector('.download-status');
  if(!button||signalsExportPending)return;
  signalsExportPending=true;
  button.disabled=true;button.textContent=t('Preparando…');status.textContent='';
  try{
    await document.fonts.ready;
    const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=1990;
    const ctx=canvas.getContext('2d');
    if(!ctx)throw new Error('Canvas unavailable');
    const ink='#174e55',cream='#fff5e8',pink='#f3a5c6';
    ctx.fillStyle=pink;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.textBaseline='top';
    function textBlock(text,x,y,width,font,lineHeight){
      text=t(text);ctx.font=font;ctx.fillStyle=ink;
      const lines=[];let line='';
      for(const word of text.split(' ')){
        const next=line?`${line} ${word}`:word;
        if(line&&ctx.measureText(next).width>width){lines.push(line);line=word;}else line=next;
      }
      if(line)lines.push(line);
      for(const row of lines){ctx.fillText(row,x,y);y+=lineHeight;}
      return y;
    }
    if(language==='en'){
      textBlock('Pink',56,40,300,'italic 44px "Instrument Serif", Georgia, serif',48);
      ctx.font='italic 44px "Instrument Serif", Georgia, serif';
      const octoberX=56+ctx.measureText('Pink ').width;
      textBlock('October',octoberX,45,400,'400 38px "DM Sans", sans-serif',44);
    }else{
      textBlock('Octubre',56,45,400,'400 38px "DM Sans", sans-serif',44);
      ctx.font='400 38px "DM Sans", sans-serif';
      const rosaX=56+ctx.measureText('Octubre ').width;
      textBlock('Rosa',rosaX,40,300,'italic 44px "Instrument Serif", Georgia, serif',48);
    }
    textBlock('Señales para consultar',56,115,1088,'400 53px "DM Sans", sans-serif',62);
    textBlock('Prestá atención a cambios nuevos respecto de lo habitual para vos.',56,192,1088,'400 25px "DM Sans", sans-serif',33);
    for(let i=0;i<signs.length;i++){
      const [title,description,icon]=signs[i];
      const x=56+(i%2)*556,y=260+Math.floor(i/2)*242;
      ctx.fillStyle=cream;ctx.beginPath();ctx.roundRect(x,y,532,224,24);ctx.fill();
      const markup=signalRecord(icon).replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" ');
      const url=URL.createObjectURL(new Blob([markup],{type:'image/svg+xml;charset=utf-8'}));
      try{
        const image=new Image();
        await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=reject;image.src=url;});
        ctx.drawImage(image,x+18,y+52,112,112);
      }finally{URL.revokeObjectURL(url);}
      const textX=x+146,textWidth=362;
      const nextY=textBlock(title,textX,y+24,textWidth,'500 27px "DM Sans", sans-serif',34);
      textBlock(description,textX,nextY+10,textWidth,'400 23px "DM Sans", sans-serif',30);
    }
    textBlock('Si notaste un cambio, consultá.',56,1745,1088,'500 31px "DM Sans", sans-serif',40);
    textBlock('Aunque no duela. Un cambio no confirma cáncer; un profesional puede evaluarlo.',56,1794,1088,'400 24px "DM Sans", sans-serif',32);
    textBlock('Fuentes: NHS · OMS · Know Your Lemons / NHS Essex. Octubre de 2026.',56,1875,1088,'400 18px "DM Sans", sans-serif',26);
    textBlock('Esta imagen no reemplaza una consulta ni tus controles.',56,1910,1088,'italic 20px "DM Sans", sans-serif',28);
    const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('PNG unavailable')),'image/png'));
    const url=URL.createObjectURL(blob),link=document.createElement('a');
    link.href=url;link.download=language==='en'?'pink-october-breast-changes.png':'octubre-rosa-senales.png';document.body.append(link);link.click();link.remove();
    if(signalsImageUrl)URL.revokeObjectURL(signalsImageUrl);
    signalsImageUrl=url;
    status.textContent=t('Imagen lista.')+' ';
    const preview=document.createElement('a');
    preview.href=url;preview.target='_blank';preview.rel='noopener';
    preview.textContent=t('Abrir para guardar');preview.className='download-preview';
    status.append(preview);
  }catch(error){
    status.textContent=t('No pudimos preparar la imagen. Volvé a intentar.');
  }finally{signalsExportPending=false;button.disabled=false;button.textContent=t('Descargar');}
}
