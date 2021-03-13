var modal = document.getElementById("qrCodeContainer");
var elem = document.getElementById("newImg");
var btnContainer = document.getElementById("downloadBtnContainer");
var btn = document.getElementById("downloadBtn");

const addImage = (u) => {
  if (elem) elem.parentNode.removeChild(elem);
  if (modal) modal.innerHTML = `<img src=${u} alt="newQr" id="newImg">`;
};

const addDownload = (u) => {
  if (btn) btn.parentNode.removeChild(btn);
  if (btnContainer)
    btnContainer.innerHTML = `<a href=${u} id="downloadBtn" class="downloadBtn" download>Download</a>`;
};

chrome.tabs.query({ active: true }, function (tabs) {
  var final_url = `https://image-charts.com/chart?chl=${tabs[0].url}&choe=UTF-8&chof=.png&chs=150x150&cht=qr&icqrb=82ffd1`;
  addImage(final_url);
  addDownload(final_url);
});
