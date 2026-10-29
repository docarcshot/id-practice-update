(() => {
 const file=decodeURIComponent(location.pathname.split('/').pop());
 if(!file||file==='index.html'||!file.endsWith('.html'))return;
 const link=document.createElement('a');link.href='presentations/view.html?module='+encodeURIComponent(file.slice(0,-5));link.setAttribute('aria-label','Open teaching slides');link.className='presentation-corner';link.textContent='Teaching slides';
 const style=document.createElement('style');style.textContent='.presentation-corner{position:fixed;left:0;top:0;width:28px;height:28px;z-index:1000;opacity:0;overflow:hidden}.presentation-corner:focus-visible{opacity:1;width:auto;height:auto;padding:12px;background:white;color:#173e48;outline:3px solid #173e48}@media print{.presentation-corner{display:none!important}}';document.head.append(style);document.body.append(link);
})();
