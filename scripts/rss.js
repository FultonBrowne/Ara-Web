var feedUrl = 'https://araserver.herokuapp.com';
$.ajax({
    type: 'GET',
    url: "https://api.rss2json.com/v1/api.json?rss_url=" + feedUrl,
    dataType: 'jsonp',
    success: function(result) {
        console.log(result);
    }
});