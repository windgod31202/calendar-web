document.getElementById('eventForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const title = encodeURIComponent(document.getElementById('title').value);
    const start = new Date(document.getElementById('start').value).toISOString().replace(/-|:|\.\d\d\d/g,"");
    const end = new Date(document.getElementById('end').value).toISOString().replace(/-|:|\.\d\d\d/g,"");
  
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&sf=true&output=xml`;
  
    window.open(calendarUrl, '_blank');
  });
  