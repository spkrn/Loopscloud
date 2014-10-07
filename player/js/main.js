audiojs.events.ready(function() {
  var audios = document.getElementsByTagName('audio');

  var player = audiojs.create(audios[0], {
      play: function() {
          $( "#tapeWrap .bobine" ).addClass( "playingx" );
          $( "#tapeWrap #teteLecture" ).addClass( "playing-head" );
          $( "#tapeWrap .audiojs .play" ).removeClass( "block" );
          $( "#tapeWrap .audiojs .pause" ).addClass( "block" );
      },
      pause: function() {
          $( "#tapeWrap .bobine" ).removeClass( "playingx" );
          $( "#tapeWrap #teteLecture" ).removeClass( "playing-head" );
          $( "#tapeWrap .audiojs .play" ).addClass( "block" );
          $( "#tapeWrap .audiojs .pause" ).removeClass( "block" );
      }
  });
  
  var player2 = audiojs.create(audios[1], {
      play: function() {
          $( "#tapeWrap2 .bobine" ).addClass( "playingx" );
          $( "#tapeWrap2 #teteLecture" ).addClass( "playing-head" );
          $( "#tapeWrap2 .audiojs .play" ).removeClass( "block" );
          $( "#tapeWrap2 .audiojs .pause" ).addClass( "block" );
      },
      pause: function() {
          $( "#tapeWrap2 .bobine" ).removeClass( "playingx" );
          $( "#tapeWrap2 #teteLecture" ).removeClass( "playing-head" );
          $( "#tapeWrap2 .audiojs .play" ).addClass( "block" );
          $( "#tapeWrap2 .audiojs .pause" ).removeClass( "block" );
      }
  });
});