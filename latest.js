(() => {
  const latestList = document.getElementById('latest-list');
  const archiveList = document.getElementById('archive-list');
  const toggle = document.getElementById('latest-toggle');
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
