(() => {
  const DAY = 86400000;
  const SITE_URL = 'https://docarcshot.github.io/id-practice-update/';
  const impacts = ['Practice changing', 'Practice informing', 'Worth knowing'];
  const chicagoDate = value => new Intl.DateTimeFormat('en-CA', {timeZone:'America/Chicago',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(value));
  const dateValue = value => Date.parse(`${value}T12:00:00Z`);
  const normalizeTitle = title => String(title).normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const normalizeDoi = doi => String(doi || '').trim().replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '').toLowerCase();
  const summaryUrl = article => `${SITE_URL}#${encodeURIComponent(article.id)}`;
  const citation = article => `${article.title}. ${article.journal}. ${article.date}. ${article.doi ? 'https://doi.org/' + article.doi : article.link}`;

  function visitState(saved, ids, now = new Date().toISOString()) {
    const valid = saved && Array.isArray(saved.seenIds) && saved.seenIds.every(id => typeof id === 'string') && Number.isFinite(Date.parse(saved.lastVisit));
    const sameVisit = valid && Date.parse(now) - Date.parse(saved.lastVisit) >= 0 && Date.parse(now) - Date.parse(saved.lastVisit) < 30 * 60000;
    const previousIds = sameVisit ? saved.previousIds : valid ? saved.seenIds : null;
    return {previousIds: Array.isArray(previousIds) ? previousIds : null, seenIds: ids, lastVisit: now};
  }

  function nextReview(lastReviewed, anchor = '2026-07-26', intervalDays = 2) {
    const days = Math.floor((dateValue(lastReviewed) - dateValue(anchor)) / DAY);
    return new Date(dateValue(anchor) + (Math.floor(days / intervalDays) + 1) * intervalDays * DAY).toISOString().slice(0, 10);
  }

  function matchesTime(article, time, metadata, previousIds, today) {
    if (time === 'all') return true;
    if (time === 'new') return Array.isArray(previousIds) && !previousIds.includes(article.id);
    const addedAt = metadata[article.id]?.addedAt;
    if (!addedAt) return false;
    const age = Math.round((dateValue(today) - dateValue(chicagoDate(addedAt))) / DAY);
    return age >= 0 && age < Number(time);
  }

  function sortArticles(articles, sort, metadata) {
    return [...articles].sort((a, b) => {
      const addedDifference = String(metadata[b.id]?.addedAt || '').localeCompare(String(metadata[a.id]?.addedAt || ''));
      const dateDifference = b.date.localeCompare(a.date);
      return (sort === 'published' ? dateDifference || addedDifference : addedDifference || dateDifference) || a.id.localeCompare(b.id);
    });
  }

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

  const laneOrder = [
    'Inpatient ID',
    'Outpatient ID',
    'OPAT / Oral Step-down',
    'Stewardship',
    'Infection Prevention',
    'Diagnostics / Microbiology',
    'HIV / Viral Hepatitis',
    'Immunocompromised / Transplant',
    'Bone & Joint',
    'Mycobacteria / Fungi / Tropical'
  ];

  function practiceLanes(article) {
    const rawTags = (article.tags || []).map(t => String(t).toLowerCase());
    const tags = new Set(rawTags);
    const text = [article.title, article.summary, article.change, article.takeaway, ...rawTags].join(' ').toLowerCase();
    const hasTag = (...terms) => terms.some(term => tags.has(term.toLowerCase()));
    const hasText = (...terms) => terms.some(term => text.includes(term.toLowerCase()));
    const lanes = [];

    if (hasTag('Inpatient ID','Critical care') || hasText('hospitalized','inpatient','sepsis','bacteremia','bloodstream infection')) lanes.push('Inpatient ID');
    if (hasTag('Outpatient ID') || hasText('ambulatory','outpatient')) lanes.push('Outpatient ID');
    if (hasTag('Oral therapy','Antimicrobial duration','Bone & Joint','PJI','Diabetic foot') || hasText('oral step-down','oral transitional','opat','outpatient parenteral')) lanes.push('OPAT / Oral Step-down');
    if (hasTag('Stewardship','Antibiotic allergy','Surgical prophylaxis','PK/PD') || hasText('de-escalation','antibiotic exposure','stewardship')) lanes.push('Stewardship');
    if (hasTag('Infection prevention','Occupational health','Exposure management') || hasText('infection prevention','healthcare-associated','transmission')) lanes.push('Infection Prevention');
    if (hasTag('Diagnostics','Imaging') || hasText('diagnostic','molecular test','pcr','culture strategy','microbiology')) lanes.push('Diagnostics / Microbiology');
    if (hasTag('HIV','Viral hepatitis','HDV','Antiretroviral therapy') || hasText('hiv','hepatitis')) lanes.push('HIV / Viral Hepatitis');
    if (hasTag('Immunocompromised host','Transplant ID') || hasText('transplant','immunocompromised','immunosuppressed')) lanes.push('Immunocompromised / Transplant');
    if (hasTag('Bone & Joint','PJI','Diabetic foot','Hardware infection') || hasText('osteomyelitis','prosthetic joint','arthroplasty')) lanes.push('Bone & Joint');
    if (hasTag('Mycology','NTM','Mycobacterium abscessus','Tuberculosis','Travel & tropical','Chagas disease') || hasText('fungal','mucormycosis','tuberculosis','mycobacter','chagas','travel medicine')) lanes.push('Mycobacteria / Fungi / Tropical');

    return laneOrder.filter(lane => lanes.includes(lane));
  }


  function filterArticles(articles, filters, metadata, previousIds, today) {
    const query = (filters.query || '').trim().toLowerCase();
    return sortArticles(articles.filter(a =>
      (filters.area === 'All' || practiceLanes(a).includes(filters.area)) &&
      (filters.type === 'All' || typeBucket(a) === filters.type) &&
      (filters.impact === 'All' || a.impact === filters.impact) &&
      matchesTime(a, filters.time, metadata, previousIds, today) &&
      (!query || [a.title,a.type,a.journal,a.impact,a.summary,a.change,a.takeaway,a.limitations,a.doi,...a.tags].join(' ').toLowerCase().includes(query))
    ), filters.sort, metadata);
  }

  window.ID_UI = {SITE_URL, impacts, chicagoDate, normalizeTitle, normalizeDoi, summaryUrl, citation, visitState, nextReview, matchesTime, sortArticles, filterArticles, typeBucket, practiceLanes, laneOrder};
})();
