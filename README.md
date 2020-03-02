05-13-19 PT Jamie Vullo JavaScript w/Rails as an API Project

# TravelSaver
A web application made using the Rails framework as an API for backend and the React JavaScript libraray for frontend. 

## Table of Contents
* Description
* Technologies
* Setup
* Resources
* License

### Description
This is a single page application that allows Users to signup and search for real-time prices of flights, hotels, and rental cars for a specific date or date range. Utilizes 4 different APIs including TripAdvisor, Skyscanner, Avis, and Triposo.  

### Technologies
This application utilizes the Ruby Programming language, the React Library, and JavaScript while using several gems (listed)
ruby '2.6.1'
* gem 'rails', '~> 6.0.0'
* gem 'sqlite3', '~> 1.4'
* gem 'puma', '~> 3.11'
* gem 'sass-rails', '~> 5'
* gem 'webpacker', '~> 4.0'
* gem 'turbolinks', '~> 5'
* gem 'jbuilder', '~> 2.7'
* gem 'redis', '~> 4.0'
* gem 'bcrypt'
* gem 'image_processing', '~> 1.2'
* gem 'bootsnap', '>= 1.4.2', require: false
* gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
* gem 'web-console', '>= 3.3.0'
* gem 'listen', '>= 3.0.5', '< 3.2'
* gem 'spring'
* gem 'spring-watcher-listen', '~> 2.0.0'
* gem 'capybara', '>= 2.15'
* gem 'selenium-webdriver'
* gem 'webdrivers'
* gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
* gem 'bootstrap'

### Setup
* To run this web application you must clone it from git@github.com:jamievullo/TravelSaver.git and git@github.com:jamievullo/TravelSaver-api.git. Goto https://github.com/jamievullo/TravelSaver and https://github.com/jamievullo/TravelSaver-api copy and clone into your terminal.
* On command line type: git clone git@github.com:jamievullo/TravelSaver.git
* input "cd TravelSaver" on command line
* input npm install on command line
* input npm start to start the server on localhost:3000
* On a seperate terminal type: git@github.com:jamievullo/TravelSaver-api.git
* input "cd TravelSaver-api" on command line
* Run bundle install from command line
* Run "rails db:migrate" from command line
* Run rails s from the command line to start the server on localhost:3001
* Signup for app by creating a Username.
* Plan your next trip 

### Sources and Resources Used
* http://learn.co
* https://rubygems.org
* https://stackoverflow.com x 1000 ;)
* https://css-tricks.com
* https://developer.mozilla.org/en-US/docs/Web/JavaScript
* https://www.w3schools.com/js/default.asp
* https://opentdb.com/api_config.php
* https://wheretheiss.at/w/developer
* https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
* https://www.triposo.com/
* https://rapidapi.com/apidojo/api/tripadvisor1
* https://rapidapi.com/awatifabdullah0008/api/travelopro-flight
* https://rapidapi.com/skyscanner/api/skyscanner-flight-search/pricing
* https://react-bootstrap.github.io/getting-started/introduction
* https://www.npmjs.com/package/react-router-dom
* https://www.npmjs.com/package/dotenv
* https://downdetector.com/status/github/
* https://www.npmjs.com/package/react-places-autocomplete
* https://react-bootstrap.github.io/components/tabs/
* https://react-bootstrap.github.io/components/forms/
* https://react-bootstrap.github.io/components/jumbotron/
* http://adphorus.github.io/react-date-range/#calendar
* https://www.npmjs.com/package/react-date-range
* https://www.react-spring.io/
* https://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem
* https://skyscanner.github.io/slate/#browse-quotes
* https://react-bootstrap.github.io/layout/grid/#container-props
* https://github.com/airbnb/react-dates
* https://greensock.com/ease-visualizer/
* https://www.npmjs.com/package/react-gsap
* https://repl.it/@jamievullo/help
* https://zellwk.com/blog/looping-through-js-objects/
* https://stackoverflow.com/questions/40981040/using-a-fetch-inside-another-fetch-in-javascript
* https://www.codeply.com/go/l1KAQtjjbA
* https://stackoverflow.com/questions/30528348/setstate-inside-of-componentdidupdate
* https://www.robinwieruch.de/react-pass-props-to-component
* https://medium.com/how-i-get-it/react-with-rails-user-authentication-8977e98762f2
* https://medium.com/swlh/add-loading-animation-to-your-react-app-db3999a5c88d
* https://blog.logrocket.com/axios-or-fetch-api/

### License
* MIT License

### Future Adjustments 
* Geocoding country, city, lat-lng automatically from location.
* Autocomplete for airport input in FlightForm
* Autocomplete city for HotelForm
* Datepicker for dates on all forms
