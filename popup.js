var modal = document.getElementById("modal-content");
var elem = document.getElementById("newImg");

const addImage = (u) => {
  if (elem) elem.parentNode.removeChild(elem);
  if (modal) modal.innerHTML = `<img src=${u} alt="newQr" id="newImg">`;
};

chrome.tabs.query({ active: true }, function (tabs) {
  var final_url = `https://image-charts.com/chart?chl=${tabs[0].url}&choe=UTF-8&chof=.png&chs=150x150&cht=qr`;
  addImage(final_url);
});
