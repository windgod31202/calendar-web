// 載入 sidebar.html
fetch('sidebar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('sidebar-container').innerHTML = data;
  });

// 顯示地圖預覽
const locationInput = document.getElementById('location');
const mapPreview = document.getElementById('map-preview');

locationInput.addEventListener('input', () => {
  const address = encodeURIComponent(locationInput.value.trim());
  if (address) {
    mapPreview.innerHTML = `
      <iframe
        width="100%"
        height="300"
        frameborder="0"
        style="border:0"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=${address}&output=embed"
        allowfullscreen>
      </iframe>
    `;
  } else {
    mapPreview.innerHTML = '';
  }
});

// 建立日曆事件
document.getElementById('eventForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const start = new Date(document.getElementById('start').value).toISOString().replace(/-|:|\.\d\d\d/g, "");
  const end = new Date(document.getElementById('end').value).toISOString().replace(/-|:|\.\d\d\d/g, "");
  const location = encodeURIComponent(document.getElementById('location').value || "");
  const details = encodeURIComponent(document.getElementById('description').value || "");

  let url = `https://calendar.google.com/calendar/render?action=TEMPLATE`;
  url += `&text=${encodeURIComponent(title)}`;
  url += `&dates=${start}/${end}`;
  if (location) url += `&location=${location}`;
  if (details) url += `&details=${details}`;

  window.open(url, "_blank");
});
flatpickr("#start", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    minDate: "today",
    minuteIncrement: 1
  });
  
  flatpickr("#end", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    minDate: "today",
    minuteIncrement: 1
  });
  