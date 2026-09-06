(() => {
  const ui = window.ID_UI;
  const articles = [...(window.ID_ARTICLES || [])];
  const status = window.ID_STATUS || {};
  const publication = window.ID_PUBLICATION || {};
  const metadata = publication.articles || {};
  const commentsConfig = window.ID_COMMENTS || {};
  const byId = new Map(articles.map(a => [a.id, a]));
  const $ = id => document.getElementById(id);
  const today = ui.chicagoDate(new Date());
  const storageKey = 'id-practice-update-visits-v1';
  let savedVisit = null;
  let storageAvailable = true;
  try { savedVisit = JSON.parse(localStorage.getItem(storageKey)); } catch { storageAvailable = false; }
  const visit = ui.visitState(savedVisit, articles.map(a => a.id));
  try { localStorage.setItem(storageKey, JSON.stringify(visit)); } catch { storageAvailable = false; }
  const previousIds = storageAvailable ? visit.previousIds : null;
  const newCount = previousIds ? articles.filter(a => !previousIds.includes(a.id)).length : 0;
  const filters = {area:'All', type:'All', impact:'All', time:'all', sort:'added', query:''};
  let latestExpanded = false;
  let feedbackTimer;
  let hyvorScriptPromise = null;
  const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const fmtDate = value => new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'numeric'}).format(new Date(`${value}T12:00:00`));
  const badgeClass = impact => impact === 'Practice changing' ? 'badge-changing' : impact === 'Practice informing' ? 'badge-informing' : 'badge-knowing';
  const availableLanes = new Set(articles.flatMap(ui.practiceLanes));
  const categories = ['All', ...ui.laneOrder.filter(lane => availableLanes.has(lane))];
  const typeOrder = ['Guideline / consensus','Regulatory update','Systematic review / meta-analysis','Trial','Diagnostic study','Observational study','Implementation study','Review / viewpoint','Other'];
  const availableTypes = new Set(articles.map(ui.typeBucket));
  const articleTypes = ['All', ...typeOrder.filter(t => availableTypes.has(t))];

  function correctionUrl(article) {
    const params = new URLSearchParams({title:`Correction: ${article.title}`, body:`Article summary\n${ui.summaryUrl(article)}\n\nPrimary source\n${article.link}\n\nSuggested correction\n\n\nSupporting source\n`});
    return `https://github.com/docarcshot/id-practice-update/issues/new?${params}`;
  }

  function card(article, featured = false, canonical = false) {
    const addedAt = metadata[article.id]?.addedAt;
    const isNew = previousIds && !previousIds.includes(article.id);
    const doi = article.doi ? `<a href="https://doi.org/${esc(article.doi)}" target="_blank" rel="noopener">DOI</a>` : '';
    const comments = commentsConfig.websiteId ? '<button class="comments-toggle" type="button" data-comments-toggle aria-expanded="false">Comments</button>' : '';
    return `<article class="article-card${featured ? ' featured' : ''}" ${canonical ? `id="${esc(article.id)}" tabindex="-1"` : ''} data-article-id="${esc(article.id)}">
      <div class="article-main">
        <div class="article-meta"><span class="badge ${badgeClass(article.impact)}">${esc(article.impact)}</span>${isNew ? '<span class="new-badge">New since your last visit</span>' : ''}<span>${esc(article.type)}</span><span>${esc(article.journal)}</span></div>
        <h3 class="article-title"><a href="${esc(article.link)}" target="_blank" rel="noopener">${esc(article.title)}</a></h3>
        <p class="article-dates">Published ${fmtDate(article.date)}${addedAt ? ` <span aria-hidden="true">·</span> Added ${fmtDate(ui.chicagoDate(addedAt))}` : ''}</p>
        <p class="article-summary">${esc(article.summary)}</p>
        <div class="tags">${ui.practiceLanes(article).slice(0,2).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>
      <div class="article-details">
        <details><summary>What changed</summary><p>${esc(article.change)}</p></details>
        <details><summary>What I would do</summary><p>${esc(article.takeaway)}</p></details>
        <details><summary>Limitations</summary><p>${esc(article.limitations)}</p></details>
        <div class="article-links"><a href="${esc(article.link)}" target="_blank" rel="noopener">Primary source</a>${doi}<a href="#${esc(article.id)}" data-summary-link>Summary link</a><button type="button" data-copy="link">Copy link</button><button type="button" data-copy="citation">Copy citation</button><a href="${esc(correctionUrl(article))}" target="_blank" rel="noopener" title="Opens a correction form on GitHub">Report correction <span class="sr-only">on GitHub</span></a>${comments}</div>
        ${comments ? '<div class="comments-panel" data-comments-panel hidden></div>' : ''}
      </div>
    </article>`;
  }
  function loadHyvorScript() {
    if (customElements.get('hyvor-talk-comments')) return Promise.resolve();
    if (hyvorScriptPromise) return hyvorScriptPromise;
    hyvorScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://talk.hyvor.com/embed/embed.js';
      script.addEventListener('load', () => customElements.whenDefined('hyvor-talk-comments').then(resolve));
      script.addEventListener('error', reject);
      document.head.appendChild(script);
    });
    return hyvorScriptPromise;
  }

  async function openComments(cardEl, button, panel) {
    panel.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    button.textContent = 'Hide comments';

    if (panel.dataset.loaded === 'true') return;

    const articleId = cardEl.dataset.articleId;
    if (!commentsConfig.websiteId) {
      panel.innerHTML = '<p class="comments-setup">Comments are not active yet.</p>';
      return;
    }

    panel.innerHTML = '<p class="comments-loading">Loading comments...</p>';
    try {
      await loadHyvorScript();
      panel.replaceChildren();
      const comments = document.createElement('hyvor-talk-comments');
      comments.setAttribute('website-id', String(commentsConfig.websiteId));
      comments.setAttribute('page-id', articleId);
      comments.setAttribute('page-title', cardEl.querySelector('.article-title')?.textContent?.trim() || articleId);
      comments.setAttribute('page-url', `${location.origin}${location.pathname}#${articleId}`);
      comments.setAttribute('t-as-guest', 'Comment without account');
      panel.appendChild(comments);
      panel.dataset.loaded = 'true';
    } catch (error) {
      panel.innerHTML = '<p class="comments-error">Comments could not be loaded. Please try again.</p>';
    }
  }


  function renderStatus() {
    const reviewed = status.lastReviewed;
    if (!reviewed) { $('last-updated').textContent = 'Review date unavailable'; return; }
    const next = ui.nextReview(reviewed, status.schedule?.anchor, status.schedule?.intervalDays);
    const count = publication.reviewedThrough === reviewed ? publication.newCount : null;
    $('last-updated').textContent = `Literature reviewed ${fmtDate(reviewed)}`;
    $('review-outcome').textContent = Number.isInteger(count) ? (count ? `${count} ${count === 1 ? 'entry' : 'entries'} added on that date` : 'No new entries from that review') : '';
    const failed = status.lastAttempt?.result === 'failed' && status.lastAttempt.date >= reviewed;
    $('review-next').textContent = next < today ? `Review overdue since ${fmtDate(next)}` : next === today ? 'Next review scheduled today' : `Next review scheduled ${fmtDate(next)}`;
    $('review-notice').hidden = !failed && next >= today;
    $('review-notice').textContent = failed ? `The ${fmtDate(status.lastAttempt.date)} review was not completed. Showing the last completed review.` : next < today ? 'The next review is overdue. No newer completed review has been published.' : '';
    // A failed deployment cannot update the published page. Read the public workflow status.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    fetch('https://api.github.com/repos/docarcshot/id-practice-update/actions/runs?branch=main&per_page=5', {signal:controller.signal, headers:{Accept:'application/vnd.github+json'}})
      .then(response => response.ok ? response.json() : null)
      .then(data => {
        const run = data?.workflow_runs?.find(r => r.name === 'Deploy ID Practice Update');
        if (!run || run.head_sha === publication.sourceCommit || Date.parse(run.created_at) < Date.parse(publication.generatedAt)) return;
        if (run.status === 'completed' && ['failure','timed_out','action_required','startup_failure','cancelled'].includes(run.conclusion)) {
          $('review-notice').hidden = false;
          $('review-notice').textContent = 'A newer website update did not publish. This page shows the last successfully published review.';
        }
      }).catch(() => {}).finally(() => clearTimeout(timeout));
  }

  function buttons(items, active, attr) {
    return items.map(item => `<button class="filter-button${item === active ? ' active' : ''}" type="button" ${attr}="${esc(item)}" aria-pressed="${item === active}">${esc(item)}</button>`).join('');
  }

  function syncControls() {
    $('filter-bar').innerHTML = buttons(categories, filters.area, 'data-filter');
    $('type-filter-bar').innerHTML = buttons(articleTypes, filters.type, 'data-type-filter');
    $('impact-filter').value = filters.impact;
    $('date-filter').value = filters.time;
    $('sort-order').value = filters.sort;
    $('search-input').value = filters.query;
    document.querySelectorAll('[data-time-filter]').forEach(button => {
      const active = button.dataset.timeFilter === filters.time;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function renderLatest() {
    const recent = ui.sortArticles(articles.filter(a => ui.matchesTime(a, filters.time, metadata, previousIds, today)), 'added', metadata);
    const limit = latestExpanded ? 10 : 3;
    $('latest-list').innerHTML = recent.length ? recent.slice(0,limit).map((a,i) => card(a,i === 0)).join('') : `<div class="empty-state">${filters.time === 'new' && !previousIds ? 'Your next visit in this browser will show what has been added.' : 'No entries were added during this period.'}</div>`;
    const toggle = $('latest-toggle');
    toggle.hidden = recent.length <= 3;
    toggle.textContent = latestExpanded ? 'Show fewer' : `Show more recent (${Math.min(10, recent.length) - 3})`;
    toggle.setAttribute('aria-expanded', String(latestExpanded));
    $('latest-all').hidden = recent.length <= 10;
  }

  function renderArchive() {
    const filtered = ui.filterArticles(articles, filters, metadata, previousIds, today);
    $('result-count').textContent = `${filtered.length} ${filtered.length === 1 ? 'entry' : 'entries'}`;
    $('archive-list').innerHTML = filtered.length ? filtered.map(a => card(a,false,true)).join('') : '<div class="empty-state">No entries match these filters. <button type="button" data-clear-filters>Clear filters</button></div>';
  }

  function setTime(value) {
    filters.time = value;
    latestExpanded = false;
    syncControls(); renderLatest(); renderArchive();
  }

  function clearFilters() {
    Object.assign(filters, {area:'All', type:'All', impact:'All', time:'all', sort:'added', query:''});
    latestExpanded = false;
    syncControls(); renderLatest(); renderArchive();
  }

  function openSummary(id) {
    if (!byId.has(id)) return;
    if (!$(id)) clearFilters();
    const element = $(id);
    element.querySelectorAll('details').forEach(detail => { detail.open = true; });
    element.focus({preventScroll:true});
    element.scrollIntoView({block:'start', behavior:'auto'});
  }

  async function copyText(value, kind) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(value);
      clearTimeout(feedbackTimer);
      $('copy-feedback').textContent = `${kind} copied.`;
      feedbackTimer = setTimeout(() => { $('copy-feedback').textContent = ''; }, 3500);
    } catch {
      $('copy-dialog-title').textContent = `Copy ${kind.toLowerCase()}`;
      $('copy-value').value = value;
      $('copy-dialog').showModal();
      $('copy-value').focus(); $('copy-value').select();
    }
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('button, a');
    if (!button) return;
    if (button.hasAttribute('data-time-filter')) return setTime(button.dataset.timeFilter);
    if (button.hasAttribute('data-clear-filters')) return clearFilters();
    if (button.hasAttribute('data-search-nav')) {
      event.preventDefault();
      $('search-input').focus(); $('archive').scrollIntoView({block:'start'}); return;
    }
    if (button.hasAttribute('data-filter')) { filters.area = button.dataset.filter; syncControls(); renderArchive(); return; }
    if (button.hasAttribute('data-type-filter')) { filters.type = button.dataset.typeFilter; syncControls(); renderArchive(); return; }
    const article = byId.get(button.closest('[data-article-id]')?.dataset.articleId);
    if (!article) return;
    if (button.hasAttribute('data-summary-link')) {
      event.preventDefault();
      if (location.hash !== `#${article.id}`) history.pushState(null, '', `#${article.id}`);
      return openSummary(article.id);
    }
    if (button.dataset.copy) return copyText(button.dataset.copy === 'link' ? ui.summaryUrl(article) : ui.citation(article), button.dataset.copy === 'link' ? 'Link' : 'Citation');
    if (button.hasAttribute('data-comments-toggle')) {
      const cardEl = button.closest('.article-card');
      const panel = cardEl.querySelector('[data-comments-panel]');
      if (!panel.hidden) { panel.hidden = true; button.setAttribute('aria-expanded','false'); button.textContent = 'Comments'; }
      else openComments(cardEl,button,panel);
    }
  });
  $('impact-filter').addEventListener('change', event => { filters.impact = event.target.value; renderArchive(); });
  $('date-filter').addEventListener('change', event => setTime(event.target.value));
  $('sort-order').addEventListener('change', event => { filters.sort = event.target.value; renderArchive(); });
  $('search-input').addEventListener('input', event => { filters.query = event.target.value; renderArchive(); });
  $('copy-dialog-close').addEventListener('click', () => $('copy-dialog').close());
  window.addEventListener('hashchange', () => { try { openSummary(decodeURIComponent(location.hash.slice(1))); } catch {} });
  window.addEventListener('popstate', () => { try { openSummary(decodeURIComponent(location.hash.slice(1))); } catch {} });
  const mobile = window.matchMedia('(max-width: 760px)');
  const syncQuickRefs = event => { $('quick-ref-panel').open = !event.matches; };
  syncQuickRefs(mobile);
  mobile.addEventListener?.('change',syncQuickRefs);
  $('new-count').textContent = previousIds ? ` (${newCount})` : '';
  $('visit-note').textContent = !storageAvailable ? 'Visit history is unavailable in this browser. The 7-day and 30-day views still work.' : !previousIds ? 'On your next visit, this browser will show what has been added.' : newCount ? `${newCount} ${newCount === 1 ? 'entry has' : 'entries have'} been added since your last visit.` : 'You are caught up with additions since your last visit.';
  window.ID_APP = {toggleLatest() { latestExpanded = !latestExpanded; renderLatest(); }};
  syncControls(); renderLatest(); renderArchive(); renderStatus();
  try { openSummary(decodeURIComponent(location.hash.slice(1))); } catch {}
})();
