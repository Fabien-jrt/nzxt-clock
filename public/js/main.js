function get_cookie(cookie_name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.length > 0) {
        let name, value;
        [name, value] = cookie.split('=');
        if (name === cookie_name) return value;
      }
    }
    return null;
  }

  const VIEWSTATE = parseInt(get_cookie('viewstate')) || 640;
  document.body.style.width = VIEWSTATE + 'px';
  document.body.style.height = VIEWSTATE + 'px';
  

  function getCurrentTime() {
    var now = new Date();
    
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    
    var formattedTime = hours + ':' + minutes + ':' + seconds;
    
    return formattedTime;
  }

  setInterval(update_time, 1000)
  setInterval(update_date, 1000 * 60 * 60 * 12)

  const time = document.getElementById('time');
  function update_time() {
    time.innerHTML = getCurrentTime();
  }
  update_time();

  const date = document.getElementById('date');
  function update_date() {
    date.innerHTML = new Date().toDateString();
  }
  update_date();

  const day_progress = document.getElementById('day_progress');
  function updateProgressBar() {
    const currentHour = new Date().getHours();
    const currentProgress = currentHour % 12;
    
    // Replace the characters based on the current hour
    switch (currentProgress) {
      case 0:
        day_progress.innerHTML = '&#xEE00;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE02;';
        break;
      case 1:
        day_progress.innerHTML = '&#xEE03;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE02;';
        break;
      case 2:
        day_progress.innerHTML = '&#xEE03;&#xEE04;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE02;';
        break;
      case 3:
        day_progress.innerHTML = '&#xEE03;&#xEE04;&#xEE04;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE02;';
        break;
      case 4:
        day_progress.innerHTML = '&#xEE03;&#xEE04;&#xEE04;&#xEE04;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE02;';
        break;
      case 5:
        day_progress.innerHTML = '&#xEE03;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE02;';
        break;
      case 6:
        day_progress.innerHTML = '&#xEE03;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE01;&#xEE01;&#xEE01;&#xEE01;&#xEE02;';
        break;
      case 7:
        day_progress.innerHTML = '&#xEE03;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE01;&#xEE01;&#xEE01;&#xEE02;';
        break;
      case 8:
        day_progress.innerHTML = '&#xEE03;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE01;&#xEE01;&#xEE02;';
        break;
      case 9:
        day_progress.innerHTML = '&#xEE03;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE01;&#xEE02;';
        break;
      case 10:
        day_progress.innerHTML = '&#xEE03;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE02;';
        break;
      case 11:
        day_progress.innerHTML = '&#xEE03;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE04;&#xEE05;';
  }
}
  
  // Update the progress bar every hour (in milliseconds)
  setInterval(updateProgressBar, 1000 * 60 * 5);
  updateProgressBar(); // Call initially to set the correct progress bar