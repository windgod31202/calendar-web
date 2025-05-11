function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("mainContent");

  // 切換側邊選單的開啟與隱藏
  sidebar.classList.toggle("open");
  
  // 切換頁面內容的偏移
  main.classList.toggle("shifted");
}
