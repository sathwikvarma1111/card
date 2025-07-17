const showMoreBtn = document.getElementById('showMoreBtn');
const moreInfo = document.getElementById('moreInfo');

showMoreBtn.addEventListener('click', () => {
  if (moreInfo.style.display === "block") {
    moreInfo.style.display = "none";
    showMoreBtn.textContent = "Show More";
  } else {
    moreInfo.style.display = "block";
    showMoreBtn.textContent = "Show Less";
  }
});
