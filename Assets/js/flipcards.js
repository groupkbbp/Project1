$('.flip-card').click(function(){
  $(this).find('.flip-card-inner').toggleClass('flipped');
  if ($(this).find('.flip-card-inner').hasClass("flipped")){
    // updateinfo
    var beachId = $(this).attr("data-beach-id");
    var beachName = $(this).attr("data-beach-name");
    
  }
});

