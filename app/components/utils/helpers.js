var axios = require("axios");
// var Article= require("../../../models/Article")

// var authKey = "50d9600cc94f4885a9c36f3229f7f211";
// var queryTerm 	= "";
// var numResults 	= 0;
// var startYear 	= 0;
// var endYear		= 0;
// var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
// var articleCounter = 0;

// var queryURL=queryURLBase+"Chester";
var helper = {

    runSearch: function() {

var authKey = "50d9600cc94f4885a9c36f3229f7f211";
var queryTerm 	= "Chester";
var numArticles=5;
// var numResults 	= 0;
// var startYear 	= 0;
// var endYear		= 0;
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
var articleCounter = 0;


var queryURL="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=50d9600cc94f4885a9c36f3229f7f211&q=Chester";



	return axios.get(queryURL).then(function(NYTData) {
			console.log("------------------------------------")
			console.log("URL: " + queryURL);
			console.log("------------------------------------")
			console.log(NYTData);
			console.log("------------------------------------")


			for (var i=0; i<numArticles; i++) {

					articleCounter++;

				
					if(NYTData.data.response.docs[i].headline != "null")
					{

						console.log(NYTData.data.response.docs[i].headline.main);
					}
					
					if( NYTData.data.response.docs[i].byline && NYTData.data.response.docs[i].byline.hasOwnProperty("original"))
					{
						console.log(NYTData.data.response.docs[i].byline.original);
					}

					console.log(NYTData.data.response.docs[i].pub_date);
					console.log(NYTData.data.response.docs[i].section_name);
					console.log(NYTData.data.response.docs[i].web_url);	

					// let nytArticleTitle=NYTData.data.response.docs[i].section_name;
					// let nytArticleDate=NYTData.data.response.docs[i].pub_date;
					// let nytArticleURL=NYTData.data.response.docs[i].web_url;
					
					// let result = {};
					// result.title=nytArticleTitle;
					// result.date=nytArticleDate;
					// result.url=nytArticleURL;


					//     var entry = new Article(result);
      				// 	entry.save(function(err, doc) {
        			// 	if (err) {
				    //       console.log(err);
				    //     }
				    //     else {
				    //       console.log(doc);
				    //     }
				    //   });
			}
		});

},
  getSaved: function() {
    return axios.get("/api");
  },

  postArticles: function(articles) {
    return axios.post("/api", { title: searchTerm });
  }
  };

//   getHistory: function() {
//     return axios.get("/api");
//   },

module.exports = helper;
