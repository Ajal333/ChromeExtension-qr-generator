var url = window.location.href;

if (
  window.location.href !==
  "chrome-extension://ffllcohiakedocddkgjcikddodcdeohm/popup.html"
) {
  url = window.location.href;
}

var modal = document.getElementById("modal-content");
var elem = document.getElementById("newImg");

const addImage = (u) => {
  if (elem) elem.parentNode.removeChild(elem);
  if (modal) modal.innerHTML = `<img src=${u} alt="newQr" id="newImg">`;
};

var final_url = `https://image-charts.com/chart?chl=http://ajal.tech&choe=UTF-8&chof=.png&chs=150x150&cht=qr`;
console.log(final_url);

// elem.src = final_url;

addImage(final_url);

// elem.innerHTML = final_url;

// alert(final_url);
