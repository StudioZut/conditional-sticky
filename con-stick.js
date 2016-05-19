<script>
<!-- 
  // Should add a class instead of styling the element. Also needs to recheck on window resize. Probably other things. 
  var elem = document.getElementById('footer');
  var footspace = window.innerHeight - elem.offsetTop + elem.offsetHeight;

  if(footspace > 10){
    elem.style.background = '#fff';
    elem.style.position = 'fixed';
    elem.style.bottom = '0';
  }

// some alternate pokes at it 
var d = document.getElementById('footer');
var topPos = d.offsetTop;

if (topPos > 10) {
  // object is offset more
  // than 10 pixels from its parent
  // d.style.position = 'fixed';
  // d.style.bottom = '0';
}
-->
</script>
