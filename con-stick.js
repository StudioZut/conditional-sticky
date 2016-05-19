<script>
<!-- 
  // This checks how much space is below #footer. 
  var elem = document.getElementById('footer');
  var footspace = window.innerHeight - elem.offsetTop + elem.offsetHeight;

  // "Wrap that sticky". Should add a class instead of styling the element. Also needs to recheck on window resize. Probably other things. 
  if(footspace > 10){
    elem.style.background = '#fff';
    elem.style.position = 'fixed';
    elem.style.bottom = '0';
  }

// Some alternate pokes at it. 

// jquery.  
// $('footer').offset().top;

-->
</script>
