// Use one property and browser cookie across the digest and all lectures.
(function () {
  'use strict';
  if (location.hostname !== 'docarcshot.github.io' ||
      !location.pathname.startsWith('/id-practice-update/')) return;
  if (window.ID_ANALYTICS_LOADED) return;
  window.ID_ANALYTICS_LOADED = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-G7MEM66FN8', {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-G7MEM66FN8';
  document.head.appendChild(script);
}());
