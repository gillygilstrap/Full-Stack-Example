# Full stack auth review

# Front End

## Component Structure

* Nav Bar
* Home/Landing Page
* Login page
* Profile Page
* Couch browser
* Add Couch
* Footer?
* Cart?

## Redux

* store
* reducer
  * reducer function intself
  * initial state
    * user: null
    * couches?
  * action creators
  * action types(strings/names)
* Provider in index.js
* connect() in components

# Routing

* routes themselves
  * / (home)
  * /cool-couches
  * /profile
  * /cart
* index.js BrowserRouter
* Links in Navbar
* Routes routes.js

# Back End

# Endpoints aka routes

* GET, POST /api/couches
* /api/me
* /auth/callback

## Controllers

* couches
* auth
* user

* index.js

# Database



## Tables

* couches
  * id serial
  * name text
  * price int
  * image text
* users
  * id serial
  * auth0_id text
  * email text
  * name text
  * picture text

## Queries (functions for massive)

* select all couches
* find user
* create user
* create couch?


# npm packages we'll use

* express
* body-parser
* axios
* massive
* react-router-dom
* react-redux
* redux
* dotenv
* http-proxy-middleware
