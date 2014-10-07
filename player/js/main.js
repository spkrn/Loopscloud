audiojs.events.ready(function() {
  var audios = document.getElementsByTagName('audio');

  var player = audiojs.create(audios[0], {
      play: function() {
          $( ".bobine" ).addClass( "playingx" );
          $( "#teteLecture" ).addClass( "playing-head" );
          $( ".audiojs .play" ).removeClass( "block" );
          $( ".audiojs .pause" ).addClass( "block" );
      },
      pause: function() {
          $( ".bobine" ).removeClass( "playingx" );
          $( "#teteLecture" ).removeClass( "playing-head" );
          $( ".audiojs .play" ).addClass( "block" );
          $( ".audiojs .pause" ).removeClass( "block" );
      }
  });
});