// 載入 sidebar.html
fetch('sidebar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('sidebar-container').innerHTML = data;
});