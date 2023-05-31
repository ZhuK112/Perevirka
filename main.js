function showPopup() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    document.getElementById('popup-name').textContent = name;
    document.getElementById('popup-email').textContent = email;
  
    document.getElementById('popup').style.display = 'block';
  }