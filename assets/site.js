
(function(){
  var grid=document.querySelector('.card-grid');
  if(grid&&document.querySelector('.filters')){
    var cards=[].slice.call(grid.querySelectorAll('.card'));
    var filters=[].slice.call(document.querySelectorAll('.filter'));
    var search=document.getElementById('search');
    var noRes=document.querySelector('.no-result');var active='all';
    function run(){var q=(search&&search.value||'').toLowerCase().trim();var shown=0;
      cards.forEach(function(c){var okR=active==='all'||c.dataset.region===active;
        var okQ=!q||c.dataset.title.indexOf(q)>-1;var v=okR&&okQ;c.style.display=v?'':'none';if(v)shown++;});
      if(noRes)noRes.hidden=shown>0;}
    filters.forEach(function(f){f.addEventListener('click',function(){
      filters.forEach(function(x){x.classList.remove('is-active')});
      f.classList.add('is-active');active=f.dataset.region;run();})});
    if(search)search.addEventListener('input',run);
  }
  var lb=document.createElement('div');lb.className='lightbox';lb.innerHTML='<img alt="">';
  document.body.appendChild(lb);var lbImg=lb.querySelector('img');
  document.addEventListener('click',function(e){var a=e.target.closest('[data-lightbox]');
    if(a){e.preventDefault();lbImg.src=a.getAttribute('href');lb.classList.add('open');}
    else if(e.target===lb||e.target===lbImg){lb.classList.remove('open');}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('open');});
})();
