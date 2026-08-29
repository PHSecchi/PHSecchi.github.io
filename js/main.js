//Monta a página ===========================================================
async function loadSection(url, elementId) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro ao carregar: ${url}`);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadSection('html/system-info.html', 'system-info-container');
});


// Atualiza a data e hora =====================================================
function updateBiosClock() {
  const clockElement = document.getElementById('bios-clock');
  const now = new Date();

  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  clockElement.textContent = `${day}/${month}/${year}  ${hours}:${minutes}:${seconds}`;
}


// Abas ========================================================================
function setupNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-target');
      console.log(`Carregando seção: ${target}`);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateBiosClock();
  setInterval(updateBiosClock, 1000);
  setupNavigation();
});