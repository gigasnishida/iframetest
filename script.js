$(function() {

  $('#testbtn').click(function(){
    //alert("test");
    parent.postMessage('test1234', '*');
  })
    
});