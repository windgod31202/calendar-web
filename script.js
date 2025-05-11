document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // 讀取表單的資料
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const reminder = document.getElementById('reminder').value;
  
    // 形成日期時間格式
    const datetime = new Date(`${date}T${time}`);
    const isoString = datetime.toISOString(); // 完整的 ISO 8601 字符串
  
    // 轉換日期為 YYYYMMDDTHHmmSS 格式 (Google Calendar 使用此格式)
    const formattedDate = isoString.replace(/[-:]/g, '').slice(0, 15);  // 格式化時間
  
    // 建立基本的 Google Calendar URL
    let calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formattedDate}/${formattedDate}`;
  
    // 如果有選擇提醒時間，將提醒時間加入
    if (reminder) {
      const reminderTime = new Date(datetime.getTime() - reminder * 60000); // 計算提前提醒的時間
      const reminderFormatted = reminderTime.toISOString().replace(/[-:]/g, '').slice(0, 15);  // 格式化提醒時間
  
      calendarUrl += `&details=${encodeURIComponent(`提醒：活動前 ${reminder} 分鐘`)}`;
      calendarUrl += `&triggers=${reminderFormatted}`;  // 提醒時間加入
    }
  
    // 顯示生成的 Google 日曆連結
    document.getElementById('result').innerHTML = `<a href="${calendarUrl}" target="_blank">➤ 點我新增到 Google 日曆</a>`;
  });
  