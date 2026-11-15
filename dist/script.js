const projects = {
  catchup: {
    number: '01', category: 'AI & PRODUCTIVITY', name: 'CatchUp',
    lead: 'Less catching up. More moving forward.',
    description: 'A browser workspace that turns long conversations into source-linked briefings, decisions, tasks, and unanswered questions. Each finding keeps its context, so you can go back to what was actually said.',
    stack: 'JavaScript · WebLLM · WebGPU · IndexedDB',
    focus: 'Conversation analysis & local AI',
    features: ['Choose on-device AI, instant rules, or your own cloud provider.', 'Review task ownership, decisions, and blockers alongside their source messages.', 'Save catch-ups locally, track progress, and export Markdown reports.'],
    live: 'https://catchup-workspace.vercel.app/', repo: 'https://github.com/guptavernit2-afk/CatchUp',
    note: 'The portfolio illustration is a stylized preview. Visit the live app to explore the actual workspace.'
  },
  descent: {
    number: '02', category: 'INTERACTIVE LEARNING', name: 'DescentLab',
    lead: 'See every step. Understand every optimizer.',
    description: 'An educational optimization lab that makes abstract math visible. Explore loss surfaces, compare optimizer trajectories, and inspect the arithmetic behind every update — all in the browser.',
    stack: 'React · TypeScript · Vite', focus: 'Numerical experiments & visualization',
    features: ['Compare six optimizers, including Gradient Descent, Momentum, and Adam.', 'Explore guided lessons, live model fitting, and learning-rate sensitivity.', 'Save experiments and export CSV traces, JSON configurations, or annotated figures.'],
    live: 'https://descent-lab.vercel.app/', repo: 'https://github.com/guptavernit2-afk/descent-lab',
    note: 'The portfolio illustration is a stylized preview. The lab uses educational two-parameter experiments, not neural-network training benchmarks.'
  },
  mediwatch: {
    number: '03', category: 'BACKEND & DATA', name: 'MediWatch',
    lead: 'Every signal. A clearer picture.',
    description: 'An educational patient-monitoring workspace that brings vital trends, persistent history, and reviewable alerts into one readable interface. Built around a FastAPI backend and SQLite storage.',
    stack: 'Python · FastAPI · SQLite · JavaScript', focus: 'Persistent data & monitoring workflows',
    features: ['Explore a patient directory with fictional demonstration records.', 'Review timestamped readings, notes, and persistent alert acknowledgements.', 'Export CSV snapshots and request optional AI summaries.'],
    repo: 'https://github.com/guptavernit2-afk/MediWatch',
    note: 'Educational demonstration only. Fictional records and illustrative thresholds; not a medical device or a substitute for clinical judgment.'
  }
};

const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
let previousFocus;
function openProject(key) {
  const p = projects[key];
  if (!p) return;
  previousFocus = document.activeElement;
  dialogContent.innerHTML = `<p class="eyebrow muted">${p.number} / ${p.category}</p><h2 id="dialog-title">${p.name}<span class="blue">.</span></h2><p class="dialog-lead">${p.lead}</p><p class="dialog-description">${p.description}</p><div class="dialog-facts"><div><span>BUILT WITH</span><p>${p.stack}</p></div><div><span>THE FOCUS</span><p>${p.focus}</p></div></div><ul class="dialog-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul><div class="dialog-actions">${p.live ? `<a class="button button-dark" href="${p.live}" target="_blank" rel="noopener noreferrer">Explore live project <span>↗</span></a>` : ''}<a class="${p.live ? 'text-link' : 'button button-dark'}" href="${p.repo}" target="_blank" rel="noopener noreferrer">View on GitHub <span>↗</span></a></div><p class="dialog-note">${p.note}</p>`;
  dialog.showModal();
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project)));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => previousFocus?.focus({ preventScroll: true }));

const mascot = document.querySelector('#mascot');
const hint = document.querySelector('#mascot-hint');
const messages = ['curiosity looks good on you.', 'a little joy, delivered.', 'okay, back to building :)', 'you made my pixels happy.'];
let clicks = 0;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
mascot.addEventListener('click', () => {
  hint.textContent = messages[clicks++ % messages.length];
  if (reduceMotion.matches) return;
  mascot.classList.remove('joy');
  void mascot.offsetWidth;
  mascot.classList.add('joy');
  const bounds = mascot.getBoundingClientRect();
  for (let i = 0; i < 15; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.setAttribute('aria-hidden', 'true');
    const angle = (Math.PI * 2 * i) / 15;
    const radius = 80 + Math.random() * 80;
    piece.style.cssText = `--x:${bounds.x + bounds.width / 2}px;--y:${bounds.y + bounds.height / 2}px;--dx:${Math.cos(angle) * radius}px;--dy:${Math.sin(angle) * radius}px;--rotation:${Math.random() * 400}deg;background:${['#3455e7', '#a9b276', '#c6b6df', '#f0bc77'][i % 4]};`;
    document.body.append(piece);
    setTimeout(() => piece.remove(), 1000);
  }
});
mascot.addEventListener('animationend', () => mascot.classList.remove('joy'));
const date = new Date();
document.querySelector('#year').textContent = new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'Asia/Kolkata' }).format(date);
function updateTime() { document.querySelector('#local-time').textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }).format(new Date()) + ' IST'; }
updateTime();
setInterval(updateTime, 60000);
