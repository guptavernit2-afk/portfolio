const projects = {
  catchup: {
    number: '01', category: 'AI & PRODUCTIVITY', name: 'CatchUp',
    lead: 'Less catching up. More moving forward.',
    description: 'A browser workspace that turns long conversations into source-linked briefings, decisions, tasks, and unanswered questions. Each finding keeps its context, so you can go back to what was actually said.',
    stack: 'JavaScript · WebLLM · WebGPU · IndexedDB',
    role: 'Personal project · Product development',
    features: ['Built the browser workspace and source-linked task, decision, and question views.', 'Integrated on-device AI and cloud-provider modes with source validation and a labelled rules fallback.', 'Implemented local report storage, progress tracking, and Markdown export.'],
    live: 'https://catchup-workspace.vercel.app/', repo: 'https://github.com/guptavernit2-afk/CatchUp',
    note: 'The portfolio illustration is a stylized preview. Visit the live app to explore the actual workspace.'
  },
  descent: {
    number: '02', category: 'INTERACTIVE LEARNING', name: 'DescentLab',
    lead: 'See every step. Understand every optimizer.',
    description: 'A browser-based educational platform for understanding gradient-based optimization. Evolved from my first-year simulator into an interactive laboratory with guided lessons, model fitting, and repeatable experiments.',
    stack: 'React · TypeScript · Canvas 2D · Vite · Vitest',
    role: 'Personal project · Numerical engine & learning experience',
    features: ['Developed a testable numerical engine for six optimizers, with shared seeded noise, update snapshots, and explicit convergence or divergence handling.', 'Built interactive loss surfaces, contour views, playback, and diagnostics that read from the same experiment results.', 'Added guided lessons, linear-regression model fitting, learning-rate studies, and local experiment saving with share links and exports.'],
    live: 'https://descent-lab.vercel.app/',
    repo: 'https://github.com/guptavernit2-afk/descent-lab',
    evidence: [{label: 'Architecture & engine', url: 'https://github.com/guptavernit2-afk/descent-lab/blob/main/docs/architecture.md'}, {label: 'From first-year project to platform', url: 'https://github.com/guptavernit2-afk/descent-lab/blob/main/docs/project-notes.md'}],
    note: 'The card shows the actual application. These are educational two-parameter experiments, not neural-network training benchmarks or a universal ranking of optimizers.'
  },
  mediwatch: {
    number: '03', category: 'BACKEND & DATA', name: 'MediWatch',
    lead: 'Every signal. A clearer picture.',
    description: 'An educational patient-monitoring workspace that brings vital trends, persistent history, and reviewable alerts into one readable interface. Built around a FastAPI backend and SQLite storage.',
    stack: 'Python · FastAPI · SQLite · JavaScript', role: 'Personal project · Backend & application development',
    features: ['Rebuilt an early in-memory dashboard around stored patient histories, readings, notes, and alert acknowledgements.', 'Added typed validation and explicit, on-demand summaries with a rules-based fallback.', 'Implemented checked SQLite backups and safe restore tools, supported by regression tests and CI.'],
    live: 'https://mediwatch-ai.onrender.com',
    repo: 'https://github.com/guptavernit2-afk/MediWatch',
    note: 'Educational demonstration with fictional records, not a medical device. The hosted demo uses ephemeral storage; persistence across redeployments is not guaranteed.'
  },
  rover: {
    number: '04', category: 'TEAM PROJECT', name: 'Rover Fetch',
    lead: 'Reliable control behind a rover simulation.',
    description: 'A team hackathon project, hosted in the hackoween repository, that connects a rover simulator with an agent and run controls. My work focused on the engine boundary: how actions run, fail, recover, and finish.',
    stack: 'Python · HTTP APIs · Webots integration', role: 'Team contributor · Engine API & run control',
    features: ['Implemented the local HTTP engine API with validated actions, response allowlists, and serialized execution.', 'Added the run lifecycle, collision retry accounting, reset behavior, and private delivery evaluation.', 'Contributed explicit decision limits and fixes to recovery, assessed starts, and opt-in POV capture ownership.'],
    repo: 'https://github.com/parasmani-dev/hackoween',
    evidence: [{label: 'Engine API · PR #7', url: 'https://github.com/parasmani-dev/hackoween/pull/7'}, {label: 'Decision limits · PR #13', url: 'https://github.com/parasmani-dev/hackoween/pull/13'}, {label: 'Recovery & capture · PR #18', url: 'https://github.com/parasmani-dev/hackoween/pull/18'}],
    note: 'Team-built simulation based on an upstream foundation. Simulator, agent, interface, and recording work were shared across teammates; the contributions above describe my engine and integration work. The card is an illustration, not a simulation capture.'
  },
  avertiq: {
    number: 'WIP', category: 'CURRENTLY BUILDING', name: 'Avertiq',
    lead: 'A more traceable picture of complex incidents.',
    description: 'An ongoing chemical-transport training workspace with geographic context and explicit evidence labels. Application development and numerical research are separate tracks; current dashboard assessments are illustrative.',
    stack: 'React · TypeScript · MapLibre · SQLite / Drizzle · Python research', role: 'Ongoing research & application development',
    features: ['Developing saved incident inputs, immutable revision snapshots, and assessment job history.', 'Adding version checks, retry handling, export provenance, and verified local backup/recovery workflows.', 'Building checked research handoffs, comparison reports, and explicit reinspection of archived records.'],
    repo: 'https://github.com/guptavernit2-afk/Avertiq_',
    evidence: [{label: 'Backend implementation notes', url: 'https://github.com/guptavernit2-afk/Avertiq_/blob/main/docs/BACKEND_MILESTONE.md'}],
    note: 'Training and research work in progress. Illustrative dashboard results are not validated physical hazard predictions or operational emergency guidance.'
  }
};

const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
let previousFocus;
function openProject(key) {
  const p = projects[key];
  if (!p) return;
  previousFocus = document.activeElement;
  dialogContent.innerHTML = `<p class="eyebrow muted">${p.number} / ${p.category}</p><h2 id="dialog-title">${p.name}<span class="blue">.</span></h2><p class="dialog-lead">${p.lead}</p><p class="dialog-description">${p.description}</p><div class="dialog-facts"><div><span>BUILT WITH</span><p>${p.stack}</p></div><div><span>MY ROLE</span><p>${p.role}</p></div></div><h3 class="dialog-section-title">My contribution</h3><ul class="dialog-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>${p.evidence ? `<div class="dialog-evidence"><span class="eyebrow muted">EXPLORE THE WORK</span>${p.evidence.map(e => `<a class="text-link" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.label} ↗</a>`).join('')}</div>` : ''}<div class="dialog-actions">${p.live ? `<a class="button button-dark" href="${p.live}" target="_blank" rel="noopener noreferrer">Explore live project <span>↗</span></a>` : ''}<a class="${p.live ? 'text-link' : 'button button-dark'}" href="${p.repo}" target="_blank" rel="noopener noreferrer">View on GitHub <span>↗</span></a></div><p class="dialog-note">${p.note}</p>`;
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

const copyEmailButton = document.querySelector('#copy-email');
const contactEmail = document.querySelector('#contact-email');
const copyStatus = document.querySelector('#copy-status');
if (copyEmailButton && contactEmail && copyStatus && navigator.clipboard?.writeText) {
  copyEmailButton.hidden = false;
  let copyStatusTimeout;
  copyEmailButton.addEventListener('click', async () => {
    clearTimeout(copyStatusTimeout);
    copyStatus.textContent = '';
    copyEmailButton.disabled = true;
    copyEmailButton.querySelector('span').textContent = 'Copying…';
    try {
      await navigator.clipboard.writeText(contactEmail.getAttribute('href').slice('mailto:'.length));
      copyStatus.textContent = 'Copied. Say hello!';
      copyEmailButton.querySelector('span').textContent = 'Copied ✓';
    } catch {
      copyStatus.textContent = 'Couldn’t copy. Select the email address above.';
      copyEmailButton.querySelector('span').textContent = 'Copy email';
    } finally {
      copyEmailButton.disabled = false;
    }
    copyStatusTimeout = setTimeout(() => {
      copyStatus.textContent = '';
      copyEmailButton.querySelector('span').textContent = 'Copy email';
    }, 6000);
  });
}

// A one-time entrance, with no hidden-content dependency on JavaScript.
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const card = entry.target;
      card.classList.add('card-entering');
      card.addEventListener('animationend', () => card.classList.remove('card-entering'), { once: true });
      cardObserver.unobserve(card);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach(card => cardObserver.observe(card));
  reduceMotion.addEventListener('change', event => {
    if (event.matches) {
      cardObserver.disconnect();
      document.querySelectorAll('.card-entering').forEach(card => card.classList.remove('card-entering'));
    }
  });
}
