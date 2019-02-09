

  $(document).ready(function(){
    $("#koelink").mouseenter(function(){
      $("#imgtranskan, #imgtransmar").fadeOut(500,  function() {
        $("#imgtranskoe").fadeIn(1000);})

 
      
    });

    $("#kanlink").mouseenter(function(){
      $("#imgtranskoe, #imgtransmar").fadeOut(500,  function() {
        $("#imgtranskan").fadeIn(1000);})

    
      
    });

    $("#marlink").mouseenter(function(){
      $("#imgtranskoe, #imgtranskan").fadeOut(500,  function() {
        $("#imgtransmar").fadeIn(1000);})

  
      
    });

    

  });