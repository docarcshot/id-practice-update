(() => {
  const articles = [...(window.ID_ARTICLES || [])].sort((a,b) => b.date.localeCompare(a.date));
  const latestList = document.getElementById('latest-list');
  const archiveList = document.getElementById('archive-list');
  const filterBar = document.getElementById('filter-bar');
  const typeFilterBar = document.getElementById('type-filter-bar');
  const searchInput = document.getElementById('search-input');
  const resultCount = document.getElementById('result-count');
  const lastUpdated = document.getElementById('last-updated');
  const quickRefPanel = document.getElementById('quick-ref-panel');
  let activeFilter = 'All';
  let activeType = 'All';

  const esc = s => String(s ?? '').replace(/[&<>'\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[c]));
  const fmtDate = value => new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'numeric'}).format(new Date(`${value}T12:00:00`));
  const badgeClass = impact => impact === 'Practice changing' ? 'badge-changing' : impact === 'Practice informing' ? 'badge-informing' : 'badge-knowing';

  function typeBucket(article) {
    const t = String(article.type || '').toLowerCase();
    if (t.includes('guideline') || t.includes('guidance') || t.includes('consensus')) return 'Guideline / consensus';
    if (t.includes('regulatory') || t.includes('approval')) return 'Regulatory update';
    if (t.includes('systematic') || t.includes('meta-analysis') || t.includes('meta analysis')) return 'Systematic review / meta-analysis';
    if (t.includes('target trial emulation')) return 'Observational study';
    if (t.includes('implementation')) return 'Implementation study';
    if (t.includes('random') || t.includes('trial') || t.includes('phase ')) return 'Trial';
    if (t.includes('diagnostic')) return 'Diagnostic study';
    if (t.includes('observational') || t.includes('cohort') || t.includes('case-control') || t.includes('case control')) return 'Observational study';
    if (t.includes('review') || t.includes('viewpoint') || t.includes('state-of-the-art')) return 'Review / viewpoint';
    return 'Other';
  }

  const categories = ['All', ...new Set(articles.flatMap(a => a.tags))];
  const typeOrder = ['Guideline / consensus','Regulatory update','Systematic review / meta-analysis','Trial','Diagnostic study','Observational study','Implementation study','Review / viewpoint','Other'];
  const availableTypes = new Set(articles.map(typeBucket));
  const articleTypes = ['All', ...typeOrder.filter(t => availableTypes.has(t))];

  function card(article, featured=false) {
    const doi = article.doi ? `<a href="https://doi.org/${esc(article.doi)}" target="_blank" rel="noopener">DOI</a>` : '';
    return `<article class="article-card${featured ? ' featured' : ''}">
      <div class="article-main">
        <div class="article-meta"><span class="badge ${badgeClass(article.impact)}">${esc(article.impact)}</span><span>${fmtDate(article.date)}</span><span>${esc(article.type)}</span><span>${esc(article.journal)}</span></div>
        <h3 class="article-title"><a href="${esc(article.link)}" target="_blank" rel="noopener">${esc(article.title)}</a></h3>
        <p class="article-summary">${esc(article.summary)}</p>
        <div class="tags">${article.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>
      <div class="article-details">
        <details><summary>What changed</summary><p>${esc(article.change)}</p></details>
        <details><summary>What I would do</summary><p>${esc(article.takeaway)}</p></details>
        <details><summary>Limitations</summary><p>${esc(article.limitations)}</p></details>
        <div class="article-links"><a href="${esc(article.link)}" target="_blank" rel="noopener">Primary source</a>${doi}</div>
      </div>
    </article>`;
  }

  function renderLatest() {
    latestList.innerHTML = articles.slice(0,3).map((a,i) => card(a,i===0)).join('');
    if (articles[0]) lastUpdated.textContent = `Latest entry ${fmtDate(articles[0].date)}`;
  }

  function buttons(items, active, attr) {
    return items.map(item => `<button class="filter-button${item===active?' active':''}" type="button" ${attr}="${esc(item)}" aria-pressed="${item===active}">${esc(item)}</button>`).join('');
  }

  function renderFilters() {
    filterBar.innerHTML = buttons(categories, activeFilter, 'data-filter');
    typeFilterBar.innerHTML = buttons(articleTypes, activeType, 'data-type-filter');
  }

  function renderArchive() {
    const q = searchInput.value.trim().toLowerCase();
    const filtered = articles.filter(a => {
      const categoryMatch = activeFilter === 'All' || a.tags.includes(activeFilter);
      const typeMatch = activeType === 'All' || typeBucket(a) === activeType;
      const haystack = [a.title,a.type,a.journal,a.impact,a.summary,a.change,a.takeaway,...a.tags].join(' ').toLowerCase();
      return categoryMatch && typeMatch && (!q || haystack.includes(q));
    });
    resultCount.textContent = `${filtered.length} ${filtered.length===1?'entry':'entries'}`;
    archiveList.innerHTML = filtered.length ? filtered.map(a => card(a)).join('') : '<div class="empty-state">No entries match these filters.</div>';
  }

  filterBar.addEventListener('click', e => {
    const b=e.target.closest('[data-filter]');
    if(!b)return;
    activeFilter=b.dataset.filter;
    renderFilters();
    renderArchive();
  });

  typeFilterBar.addEventListener('click', e => {
    const b=e.target.closest('[data-type-filter]');
    if(!b)return;
    activeType=b.dataset.typeFilter;
    renderFilters();
    renderArchive();
  });

  searchInput.addEventListener('input', renderArchive);

  if (quickRefPanel) {
    const mobile = window.matchMedia('(max-width: 760px)');
    const syncQuickRefs = event => {
      if (event.matches) quickRefPanel.removeAttribute('open');
      else quickRefPanel.setAttribute('open','');
    };
    syncQuickRefs(mobile);
    if (mobile.addEventListener) mobile.addEventListener('change', syncQuickRefs);
  }

  renderLatest();
  renderFilters();
  renderArchive();
})();
