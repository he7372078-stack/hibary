function openWindow(id) {
document.getElementById(id).style.display = "block";
}

function closeWindow(id) {
document.getElementById(id).style.display = "none";
}
function openWindow(id) {
  const win = document.getElementById(id);
  win.style.display = "block";
  makeDraggable(win);
}

function closeWindow(id) {
  document.getElementById(id).style.display = "none";
}

function makeDraggable(element) {
  let isDown = false;
  let offsetX = 0;
  let offsetY = 0;

  element.addEventListener("mousedown", function(e) {
    isDown = true;
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;
  });

  document.addEventListener("mouseup", function() {
    isDown = false;
  });

  document.addEventListener("mousemove", function(e) {
    if (!isDown) return;
    element.style.left = (e.clientX - offsetX) + "px";
    element.style.top = (e.clientY - offsetY) + "px";
  });
}
const startDate = new Date("2022-07-14T00:00:00");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("counter").innerText =
    `${days} days ${hours}h ${minutes}m ${seconds}s `;
}

// تحديث كل ثانية
setInterval(updateCounter, 1000);
updateCounter();