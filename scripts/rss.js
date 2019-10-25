$.ajax({
    type: 'GET',
    url: "https://api.rss2json.com/v1/api.json?rss_url=" + 'https://araserver.herokuapp.com',
    dataType: 'jsonp',
    success: function(result) {
        console.log(result);
    }
});