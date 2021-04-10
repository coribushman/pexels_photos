const APIkey = "563492ad6f9170000100000127b36b66c97542799315f4aaa943900d";

document.getElementById("topicSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const topic = document.getElementById("topicInput").value;
  if (topic === "")
    return;

  const url = "https://api.pexels.com/v1/search?query=" + topic;
    fetch(url, {
      headers: {
        Authorization: APIkey
      }
    })
      .then(function(response) {
        return response.json();
      }).then(function(json) {

        let results = "";
        for (i = 0; i<json.per_page; i++) {
          results += "<img src="+ json.photos[i].src.tiny +"/>";
        }

        document.getElementById("results").innerHTML = results;

        //ADD MORE FORMATING TO DISPLAY MORE WEATHER INFO
      });
});
  //----------------------------------------------------------------------------------

    document.getElementById("colorSubmit").addEventListener("click", function(event) {
      event.preventDefault();
      const color = document.getElementById("colorInput").value;
      if (color === "")
        return;

    const url = "https://api.pexels.com/v1/search?query=popular&color=" + color;
      fetch(url, {
        headers: {
          Authorization: APIkey
        }
      })
        .then(function(response) {
          return response.json();
        }).then(function(json) {

          let results = "";
          for (i = 0; i<json.per_page; i++) {
            results += "<img src="+ json.photos[i].src.tiny +"/>";
          }

          document.getElementById("results").innerHTML = results;

          //ADD MORE FORMATING TO DISPLAY MORE WEATHER INFO
        });
});
//------------------------------------------------------------------------------------
document.getElementById("curatedSubmit").addEventListener("click", function(event) {
  event.preventDefault();

const url = "https://api.pexels.com/v1/curated?page=" + Math.random() * (500 - 1) + 1;
  fetch(url, {
    headers: {
      Authorization: APIkey
    }
  })
    .then(function(response) {
      return response.json();
    }).then(function(json) {

      let results = "";
      for (i = 0; i<json.per_page; i++) {
        results += "<img src="+ json.photos[i].src.tiny +"/>";
      }

      document.getElementById("results").innerHTML = results;

      //ADD MORE FORMATING TO DISPLAY MORE WEATHER INFO
    });
  });
