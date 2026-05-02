function getQueryParam(param) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(param);
}

function findItem(itemId) {
  return portfolioItems.find((item) => item.id === itemId);
}

function renderDetail(item) {
  const image = document.getElementById('detailImage');
  const section = document.getElementById('detailSection');
  const title = document.getElementById('detailTitle');
  const meta = document.getElementById('detailMeta');
  const media = document.getElementById('detailMedia');
  const description = document.getElementById('detailDescription');

  image.src = item.file;
  image.alt = `${item.title} by Bonnie Davidson`;
  section.textContent = item.section;
  title.innerHTML = `<em><strong>${item.title}</strong></em>`;
  meta.textContent = `${item.date} • ${item.dimensions}`;
  media.textContent = item.media || 'Not specified';
  description.textContent = item.description || 'No description available.';
}

function connectNavigation(itemId) {
  const currentIndex = portfolioItems.findIndex((item) => item.id === itemId);
  const prevLink = document.getElementById('prevLink');
  const nextLink = document.getElementById('nextLink');

  if (currentIndex > 0) {
    prevLink.href = `detail.html?item=${portfolioItems[currentIndex - 1].id}`;
    prevLink.classList.remove('disabled');
  } else {
    prevLink.href = 'portfolio.html';
    prevLink.classList.add('disabled');
  }

  if (currentIndex < portfolioItems.length - 1) {
    nextLink.href = `detail.html?item=${portfolioItems[currentIndex + 1].id}`;
    nextLink.classList.remove('disabled');
  } else {
    nextLink.href = 'portfolio.html';
    nextLink.classList.add('disabled');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const itemId = getQueryParam('item');
  const item = itemId ? findItem(itemId) : null;

  if (!item) {
    const title = document.getElementById('detailTitle');
    const meta = document.getElementById('detailMeta');
    const description = document.getElementById('detailDescription');
    const image = document.getElementById('detailImage');
    const section = document.getElementById('detailSection');

    title.textContent = 'Artwork not found';
    meta.textContent = '';
    section.textContent = '';
    description.textContent = 'Please return to the portfolio and select an artwork.';
    image.src = '';
    image.alt = 'Artwork not found';
    document.getElementById('prevLink').href = 'portfolio.html';
    document.getElementById('nextLink').href = 'portfolio.html';
    return;
  }

  renderDetail(item);
  connectNavigation(itemId);
});
