var search = '';
var beginDate = "19900101";
var endDate = "20180414";
// var numOfArticles = '';
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

$("#search-article").on("click", function (event) {
    event.preventDefault();
    search = $("#search-input").val().trim();
    beginDate = $("#start-year").val().trim();
    endDate = $("#end-year").val().trim();
    // search = $("#search-input").val().trim();
    url += '?' + $.param({
        'api-key': "dbab5cad2ae74da3b957273b2a8c697a",
        'q': search,
        'begin_date': beginDate,
        'end_date': endDate,
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (result) {
        console.log(result);
    });
    
});
