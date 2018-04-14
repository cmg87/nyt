var search = '';
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

$("#search-article").on("click", function (event) {
    event.preventDefault();
    search = $("#search-input").val().trim();
    url += '?' + $.param({
        'api-key': "dbab5cad2ae74da3b957273b2a8c697a",
        'q': search,
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (result) {
        console.log(result);
    });
    
});
