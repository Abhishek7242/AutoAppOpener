function isMobileDevice() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Redirect to the YouTube app and play the video if the user is on a mobile device
if (isMobileDevice()) {
    var youtubeVideoID = 'bGQ5TvAz4oI?feature=share3';
    var youtubeAppURL = 'vnd.youtube://watch?v=' + youtubeVideoID;
    var fallbackURL = 'https://www.youtube.com/watch?v=' + youtubeVideoID;
    window.location.href = youtubeAppURL;
}

document.getElementById("link").addEventListener("click", function(event) {
    event.preventDefault();
    var instagramUsername = '_abhi__verma_85?igshid=ZGUzMzM3NWJiOQ==';
    var instagramProfileURL = 'https://www.instagram.com/' + instagramUsername;
    
    if (isMobileDevice()) {
        var instagramAppURL = 'instagram://user?username=' + instagramUsername;
        window.location.href = instagramAppURL;
        setTimeout(function() {
            window.location.href = instagramProfileURL;
        }, 1000);
    } else {
        window.open(instagramProfileURL, '_blank');
    }
});
    
         
          
                  document.getElementById("button").addEventListener("click", function(event) {
            event.preventDefault();
                      window.location.href = 'https://www.youtube.com/watch?v=bGQ5TvAz4oI?feature=share3',"_blank";
          
          
          });
