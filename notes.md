    fetch("https://tripadvisor1.p.rapidapi.com/airports/search?locale=en_US&query=new%20york", {
       "method": "GET",
       "headers": {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key": api_key
          }
    })
    .then(response => response.json())
    .then(data => data.map(result => 
       console.log(result.location_id, result.code, result.country_code, result.name, 
          result.city_name, result.state, result.display_name, result.display_title)
    ))
    .catch(err =>console.log(err))