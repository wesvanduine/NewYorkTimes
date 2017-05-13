




$("#search-button").on("click", function() {

        event.preventDefault();

        var query = $("#searchTerm").val().trim();
        var startDate = $("#startDate").val().trim();
        var endDate = $("#endDate").val().trim();

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
		  'api-key': "c32c635bddd544439b94983abb9c6c83",
		  'q': query,
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

      });




