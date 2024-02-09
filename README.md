# COUNTRY-INFO
A Nodejs server and Reactjs client to search basic information about a country from [restcountries.com](https://restcountries.com/), and to add selected countries to a list.  

```
country-info
    └───public
        └───favicon.ico
        └───index.html
        └───manifest.json
        └───robot.txt
    └───server
        └───middleware
            └───auth.js
        └───models
            └───models.js
        └───routes
            └───controller.js
            └───routes.js
        └───.env
        └───Dockerfile
        └───index.js
        └───package-lock.json
        └───package.json
    └───src
        └───assets
            └───api_url.jsx
            └───styles.jsx
        └───components
            └───country_details.jsx
            └───country_list.jsx
            └───country_search.jsx
        └───App.css
        └───App.js
        └───App.test.js
        └───index.css
        └───index.js
        └───reportWebVitals.js
        └───setupTests.js
    └───.gitignore
    └───docker-compose.yml
    └───Dockerfile
    └───Makefile
    └───package-lock.json
    └───package.json
    └───README.md
```

## How to run service using docker desktop:
* `$ make up` then go to [localhost](http://localhost/)

## How to stop running service and remove all docker images from docker desktop:
* `$ make down`