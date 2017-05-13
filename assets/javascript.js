

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "c32c635bddd544439b94983abb9c6c83",
  'q': "Obama",
  'begin_date': "20170101",
  'end_date': "20170301",
  'page': 1
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});