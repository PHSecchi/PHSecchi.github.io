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