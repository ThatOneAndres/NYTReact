import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getArticles: function(input, startYear, endYear) {
    var apiKey = "363a9df561ad4ff38619a427376c4648";
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + 'api-key=' + apiKey + '&q=' + input + '&begin_date=' + startYear + '0101&end_date=' + endYear+"0101";
    console.log(url);
    return axios.get(url);
  },
  getSaved: function(){
    return axios.get("/api/save");
  },
  postSaved: function(article){
    console.log(article);
    return axios.post("/api/save", article);
  },
  deleteSaved: function(url){
      return axios.delete("/api/save", url);
  }
};
