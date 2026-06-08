function getQueryParam(param) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(param);
}

function findItem(itemId) {
  return portfolioItems.find((item) => item.id === itemId);
}

function getPrimaryFile(item) {
  if (Array.isArray(item.group) && item.group.length > 0) {
    return item.group[0];
  }
  return item;
}

function updateDetailImage(item, fileIndex) {
  const image = document.getElementById('detailImage');
  const section = document.getElementById('detailSection');
  const title = document.getElementById('detailTitle');
  const meta = document.getElementById('detailMeta');
  const media = document.getElementById('detailMedia');
  const prevButton = document.getElementById('carouselPrev');
  const nextButton = document.getElementById('carouselNext');

  const fileItem = Array.isArray(item.group) ? item.group[fileIndex] : item;

  image.src = fileItem.file;
  image.alt = `${fileItem.title || item.title} by Bonnie Davidson`;
  section.textContent = item.section;
  title.innerHTML = `<em><strong>${fileItem.title || item.title}</strong></em>`;
  meta.textContent = `${fileItem.date || item.date} • ${fileItem.dimensions || item.dimensions}`;
  media.textContent = fileItem.media || item.media || 'Not specified';

  if (Array.isArray(item.group) && item.group.length > 1) {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
    prevButton.disabled = fileIndex === 0;
    nextButton.disabled = fileIndex >= item.group.length - 1;
  } else {
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
  }
}

function renderDetail(item) {
  const currentIndex = { value: 0 };

  updateDetailImage(item, currentIndex.value);

  const prevButton = document.getElementById('carouselPrev');
  const nextButton = document.getElementById('carouselNext');

  prevButton.addEventListener('click', () => {
    if (currentIndex.value > 0) {
      currentIndex.value -= 1;
      updateDetailImage(item, currentIndex.value);
    }
  });

  nextButton.addEventListener('click', () => {
    if (Array.isArray(item.group) && currentIndex.value < item.group.length - 1) {
      currentIndex.value += 1;
      updateDetailImage(item, currentIndex.value);
    }
  });
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
    if (description) {
      description.textContent = 'Please return to the portfolio and select an artwork.';
    }
    image.src = '';
    image.alt = 'Artwork not found';
    document.getElementById('prevLink').href = 'portfolio.html';
    document.getElementById('nextLink').href = 'portfolio.html';
    return;
  }

  renderDetail(item);
  connectNavigation(itemId);
});
