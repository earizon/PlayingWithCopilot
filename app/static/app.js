(function(){
  const btn = document.getElementById('fetchBtn');
  const resultBox = document.getElementById('resultBox');

  async function fetchRandom(){
    try{
      btn.disabled = true;
      const prev = btn.textContent;
      btn.textContent = 'Loading...';

      const res = await fetch('/random');
      if(!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      resultBox.value = data?.result ?? '';

      btn.textContent = prev;
      btn.disabled = false;
      // subtle highlight animation
      resultBox.animate([{boxShadow: '0 0 0px rgba(255,255,255,0)'},{boxShadow: '0 8px 30px rgba(124,58,237,0.18)'}],{duration:600,fill:'forwards'});
    }catch(err){
      console.error(err);
      btn.textContent = 'Try again';
      btn.disabled = false;
      resultBox.value = 'Error';
      setTimeout(()=>{ btn.textContent = 'Get Random' }, 1200);
    }
  }

  btn.addEventListener('click', fetchRandom);
})();
