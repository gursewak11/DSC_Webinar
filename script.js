function fun1(){
  var inp = document.getElementById("inp1");
  var val = inp.value;
  var textDiv = document.getElementById("TextToBeDisplay")
  textDiv.innerHTML = "<div class='text-to-be-display'>"+val+"</div>";
  // alert(val);
  return null
}

