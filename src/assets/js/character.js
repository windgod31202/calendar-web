// 模擬角色檔名列表（你也可以用伺服器動態生成 JSON 檔列表）
const characterFiles = ['danheng.json']; // 可改為 AJAX 請求讀取資料夾

const select = document.getElementById('characterSelect');
const button = document.getElementById('confirmBtn');

characterFiles.forEach(file => {
  fetch(`data/characters/${file}`)
    .then(res => res.json())
    .then(data => {
      const option = document.createElement('option');
      option.value = file.replace('.json', '');
      option.textContent = data.name;
      select.appendChild(option);
    });
});

// 改成按按鈕才跳轉
button.addEventListener('click', () => {
    const id = select.value;
    if (id) {
      window.location.href = `character-details.html?id=${id}`;
    } else {
      alert("請先選擇一位角色");
    }
});