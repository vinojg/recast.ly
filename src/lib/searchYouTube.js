var searchYouTube = (options, callback) => {
  // TODO 
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search', 
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    success: function (data) {
      //console.log('Success', data);
      callback(data.items); // return?
    },
    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.log(data);
      callback(data);
      //console.error('Failed', data);
    }
  });
  
  
};

window.searchYouTube = searchYouTube;