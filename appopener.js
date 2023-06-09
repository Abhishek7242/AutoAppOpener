function isMobileDevice() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Redirect to the YouTube app and play the video if the user is on a mobile device
if (isMobileDevice()) {
    var youtubeVideoID = '3hOSNssD9ko';
    var youtubeAppURL = 'vnd.youtube://watch?v=' + youtubeVideoID;
    var fallbackURL = 'https://www.youtube.com/watch?v=' + youtubeVideoID;
    window.location.href = youtubeAppURL;
//     setTimeout(function() {
//         window.location.href = fallbackURL;
//     }, 1000); // Redirect to fallback URL after 1 second
}
// else {
//     // Redirect to the YouTube video on desktop devices
//     var youtubeVideoID = '3hOSNssD9ko';
//     var fallbackURL = 'https://www.youtube.com/watch?v=' + youtubeVideoID;
//     setTimeout(function() {
    
//     window.location.href = fallbackURL;},20000)
// }
    //    // Check if the user is accessing the webpage from a mobile device
    //     var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    //     // Redirect to the YouTube app if the user is on a mobile device
    //     if (isMobile) {
    //         window.location.href = 'vnd.youtube://https://youtu.be/3hOSNssD9ko';
    //     } else {
    //         // Redirect to a fallback web URL if not on a mobile device
    //         window.location.href = 'https://www.youtube.com/watch?v=3hOSNssD9ko',"_blank";
    //     }
        document.getElementById("link").addEventListener("click", function(event) {
            event.preventDefault();
            window.open("https://www.instagram.com/_abhi__verma_85?igshid=ZGUzMzM3NWJiOQ==/", "_blank");
        });
          
                  document.getElementById("button").addEventListener("click", function(event) {
            event.preventDefault();
                      window.location.href = 'https://www.youtube.com/watch?v=3hOSNssD9ko',"_blank";
          
          
          });
