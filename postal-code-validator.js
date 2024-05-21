document.addEventListener('DOMContentLoaded', function() {
    var postalCodeSettings = document.querySelector('.postal-code-settings');
    var postalCodeBarHeight = postalCodeSettings.clientHeight;
    document.body.style.paddingTop = postalCodeBarHeight + 'px';
  
    var checkPostalCodeBtn = document.getElementById('checkPostalCodeBtn');
    var postalCodeInput = document.getElementById('postalCodeInput');
    var validPostalCodes = document.getElementById('validPostalCodes').value.split(',');
    var headingPopup = document.querySelector('.heading_popup');
    var subheading_popup = document.querySelector('.subheading_popup');        
    checkPostalCodeBtn.addEventListener('click', function() {
    var enteredPostalCode = postalCodeInput.value.trim();
       if (enteredPostalCode !== "") {
        checkPostalCodeBtn.querySelector('.loadingsvg').classList.remove('hide');
        checkPostalCodeBtn.querySelector('.btntxt').style.display = 'none';
        if (validPostalCodes.includes(enteredPostalCode)) {
          setTimeout(function() {
            $('.postalcode_popup').addClass('showpopup');
            headingPopup.textContent = 'GREAT, WE DELIVER TO YOUR AREA!';
            subheading_popup.textContent = 'To start shopping just click the button below';
            checkPostalCodeBtn.querySelector('.loadingsvg').classList.add('hide');
            checkPostalCodeBtn.querySelector('.btntxt').style.display = 'inline';
          }, 1000);
        } else {
          setTimeout(function() {
            $('.postalcode_popup').addClass('showpopup');
            headingPopup.textContent = 'SORRY, WE DO NOT DELIVER TO YOUR AREA';
            subheading_popup.textContent = 'You are more then welcome to continue browsing our store';
            checkPostalCodeBtn.querySelector('.loadingsvg').classList.add('hide');
            checkPostalCodeBtn.querySelector('.btntxt').style.display = 'inline';
          }, 1000);
        }
       }
    });
  
  $('.postalcode_popup').on('click', function(event){
    if( $(event.target).is('.continue_btn') || $(event.target).is('.postalcode_popup') ) {
      event.preventDefault();
      $(this).removeClass('showpopup');
    }
  }); 
  
  var postalCloseBtn = document.querySelector('.postal_close');
  var body = document.body;
  postalCloseBtn.addEventListener('click', function(event) {
    event.preventDefault();
    sessionStorage.setItem('hidePostalCodeSettings', 'true');
    postalCodeSettings.style.display = 'none';
    body.style.paddingTop = '0';
  });

  // Check session storage and adjust styles if necessary
  var hidePostalCodeSettings = sessionStorage.getItem('hidePostalCodeSettings');
  if (hidePostalCodeSettings === 'true') {
      postalCodeSettings.style.display = 'none';
      body.style.paddingTop = '0';
  }
});
