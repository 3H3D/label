// js/components.js
function loadLabelsComponent() {
  const container = document.getElementById('labels-placeholder');
  if (container) {
    fetch('labels.html')
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;
      })
      .catch(error => console.error('Gagal memuat komponen labels:', error));
  }
}

// Jalankan fungsi setelah seluruh dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', loadLabelsComponent);
