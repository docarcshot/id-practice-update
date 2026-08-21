(() => {
  const latestList = document.getElementById('latest-list');
  const archiveList = document.getElementById('archive-list');
  const toggle = document.getElementById('latest-toggle');
  const reviewSchedule = document.getElementById('review-schedule');

  if (reviewSchedule) {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Chicago',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).formatToParts(new Date());
    const value = type => Number(parts.find(part => part.type === type)?.value);
    const today = Date.UTC(value('year'), value('month') - 1, value('day'));
    const anchor = Date.UTC(2026, 6, 26);
    const dayMs = 86400000;
    const elapsed = Math.floor((today - anchor) / dayMs);
    const offset = ((elapsed % 2) + 2) % 2 === 0 ? 0 : 1;
    const nextReview = new Date(today + offset * dayMs);
    const formatted = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC'
    }).format(nextReview);
    reviewSchedule.textContent = `Reviewed every other day · Next scheduled review: ${formatted}`;
  }

  if (!latestList || !archiveList || !toggle) return;

  const sourceCards = [...archiveList.querySelectorAll('.article-card')].map(card => card.cloneNode(true));
  if (sourceCards.length <= 3) return;

  let expanded = false;

  function render() {
    const count = expanded ? Math.min(10, sourceCards.length) : 3;
    latestList.replaceChildren(...sourceCards.slice(0, count).map((card, index) => {
      const clone = card.cloneNode(true);
      clone.classList.toggle('featured', index === 0);
      return clone;
    }));
    toggle.hidden = false;
    toggle.textContent = expanded ? 'Show fewer' : `Show more recent (${Math.min(10, sourceCards.length) - 3})`;
    toggle.setAttribute('aria-expanded', String(expanded));
  }

  toggle.addEventListener('click', () => {
    expanded = !expanded;
    render();
    if (!expanded) document.getElementById('latest').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  render();
})();
