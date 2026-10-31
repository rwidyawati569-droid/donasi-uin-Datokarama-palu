function filterBarang(kategori){
  let rows = document.querySelectorAll('#tabelDonasi tr[data-kategori]');
  rows.forEach(row => {
    if(kategori === 'semua' || row.dataset.kategori === kategori){
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}
function mintaBarang(){
  let noWA = "62882021589988";
  let pesan = "Assalamualaikum, saya mau minta bukti transfer Donasi Kita UIN Datokarama";
  window.open(`https://wa.me/${noWA}?text=${encodeURIComponent(pesan)}`, '_blank');
}