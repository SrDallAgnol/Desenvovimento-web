function show(id) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.getElementById(id).style.display = 'flex';
}

function home() {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.getElementById('home').style.display = 'flex';
}