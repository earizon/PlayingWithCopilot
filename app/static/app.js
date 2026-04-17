(function(){
  const btn = document.getElementById('fetchBtn');
  const resultBox = document.getElementById('resultBox');
  const historyBody = document.getElementById('historyBody');
  const MAX_HISTORY = 5;

  function formatDate(d){
    const pad = n => String(n).padStart(2,'0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function addHistoryEntry(value){
    const tr = document.createElement('tr');
    const tdVal = document.createElement('td');
    tdVal.textContent = value;
    tdVal.className = 'hist-value';
    const tdTime = document.createElement('td');
    tdTime.textContent = formatDate(new Date());
    tdTime.className = 'hist-time';
    tr.appendChild(tdVal);
    tr.appendChild(tdTime);
    if(historyBody){
      // prepend new entry
      if(historyBody.firstChild) historyBody.insertBefore(tr, historyBody.firstChild);
      else historyBody.appendChild(tr);
      // enforce max history length
      while(historyBody.children.length > MAX_HISTORY){
        historyBody.removeChild(historyBody.lastChild);
      }
    }
  }

  async function fetchRandom(){
    try{
      btn.disabled = true;
      const prev = btn.textContent;
      btn.textContent = 'Loading...';

      const res = await fetch('/random');
      if(!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      resultBox.value = data?.result ?? '';

      // add to history
      addHistoryEntry(data?.result ?? '');

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
