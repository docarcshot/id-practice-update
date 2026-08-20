(() => {
  const articles = [...(window.ID_ARTICLES || [])].sort((a,b) => b.date.localeCompare(a.date));
  const latestList = document.getElementById('latest-list');
  const archiveList = document.getElementById('archive-list');
  const filterBar = document.getElementById('filter-bar');
  const searchInput = document.getElementById('search-input');
  const resultCount = document.getElementById('result-count');
  const lastUpdated = document.getElementById('last-updated');
  let activeFilter = 'All';

  const categories = ['All', ...new Set(articles.flatMap(a => a.tags))];
  const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const fmtDate = value => new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'numeric'}).format(new Date(`${value}T12:00:00`));
  const badgeClass = impact => impact === 'Practice changing' ? 'badge-changing' : impact === 'Practice informing' ? 'badge-informing' : 'badge-knowing';

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
  function renderFilters() {
    filterBar.innerHTML = categories.map(c => `<button class="filter-button${c===activeFilter?' active':''}" type="button" data-filter="${esc(c)}" aria-pressed="${c===activeFilter}">${esc(c)}</button>`).join('');
  }
  function renderArchive() {
    const q = searchInput.value.trim().toLowerCase();
    const filtered = articles.filter(a => {
      const filterMatch = activeFilter === 'All' || a.tags.includes(activeFilter);
      const haystack = [a.title,a.type,a.journal,a.impact,a.summary,a.change,a.takeaway,...a.tags].join(' ').toLowerCase();
      return filterMatch && (!q || haystack.includes(q));
    });
    resultCount.textContent = `${filtered.length} ${filtered.length===1?'entry':'entries'}`;
    archiveList.innerHTML = filtered.length ? filtered.map(a => card(a)).join('') : '<div class="empty-state">No entries match this filter.</div>';
  }
  filterBar.addEventListener('click', e => { const b=e.target.closest('[data-filter]'); if(!b)return; activeFilter=b.dataset.filter; renderFilters(); renderArchive(); });
  searchInput.addEventListener('input', renderArchive);
  renderLatest(); renderFilters(); renderArchive();
})();
