function showList() {
   // alert('toimiiko');
   document.getElementById('list-box').classList.remove('grid-container');
   document.getElementById('list-box').classList.add('list-container');
}

function showGrid() {
  // alert ('toimiiko');
  document.getElementById('list-box').classList.remove('list-container');
  document.getElementById('list-box').classList.add('grid-container');
}
