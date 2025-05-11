document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // 讀取表單的資料
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const reminder = document.getElementById('reminder').value;
  
    // 形成 ISO 日期時間格式
    const datetime = new Date(`${date}T${time}`);
    const isoString = datetime.toISOString(); // 完整的 ISO 8601 字符串
  
    // 轉換日期為 YYYYMMDDTHHmmSS
    const formattedDate = isoString.replace(/[-:]/g, '').slice(0, 15);
  
    // 基本的 Google Calendar 事件 URL
    let calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formattedDate}/${formattedDate}`;
  
    // 如果有提醒時間，加入 details
    if (reminder) {
      // 計算提醒時間
      const reminderTime = new Date(datetime.getTime() - reminder * 60000); // 計算提醒的時間（毫秒）
      const reminderISO = reminderTime.toISOString().replace(/[-:]/g, '').slice(0, 15);
  
      // 加入提醒事件的詳細描述
      calendarUrl += `&details=${encodeURIComponent(`提醒：活動前 ${reminder} 分鐘`)}`;
      calendarUrl += `&reminders=overridedefaults&triggertime=${reminderISO}`; // 注意這是預設提醒功能（需要用其他方式設定提醒，這裏簡單處理）
    }
  
    // 顯示生成的 Google 日曆連結
    document.getElementById('result').innerHTML = `<a href="${calendarUrl}" target="_blank">➤ 點我新增到 Google 日曆</a>`;
  });
  