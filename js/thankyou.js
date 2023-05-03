function thanks(){
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fading(){
    setTimeout(thanks, 4500);
  }
  fading();