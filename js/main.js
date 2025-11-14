// slider simple
document.addEventListener('DOMContentLoaded', function(){
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const dotsContainer = document.querySelector('.dots');
  let index = 0, interval;

  function goTo(i){
    index = (i + slides.length) % slides.length;
    const slidesWrap = document.querySelector('.slides');
    slidesWrap.style.transform = `translateX(-${index * 100}%)`;
    updateActive();
  }

  function updateActive(){
    document.querySelectorAll('.dot').forEach((d,i)=>{
      d.classList.toggle('active', i===index);
    });
  }

  // create dots
  slides.forEach((s,i)=>{
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.setAttribute('aria-label','Ir a '+(i+1));
    dot.addEventListener('click', ()=>{ stopAuto(); goTo(i); });
    dotsContainer.appendChild(dot);
  });

  nextBtn.addEventListener('click', ()=>{ stopAuto(); goTo(index+1); });
  prevBtn.addEventListener('click', ()=>{ stopAuto(); goTo(index-1); });

  function auto(){
    interval = setInterval(()=> goTo(index+1), 4000);
  }
  function stopAuto(){ clearInterval(interval); }

  // init
  goTo(0);
  auto();

  // pause on hover
  const slider = document.getElementById('slider');
  slider.addEventListener('mouseenter', stopAuto);
  slider.addEventListener('mouseleave', auto);

  // footer year
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;
});
