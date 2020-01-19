const path = require('path');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const getProductsByQuery = require('./getProductsByQuery');
const getProductsByCategory = require('./getProductsByCategory');
const getProducts = require('./getProducts');

const productsRoute = (request, response) => {
    const parsedUrl = url.parse(request.url);
    
        if(parsedUrl.query){
            const queryType = parsedUrl.query.slice(0,parsedUrl.query.indexOf('='));
            switch(queryType){
                case "ids":
                    getProductsByQuery(request, response);
                    break;
                case "category":
                    getProductsByCategory(request, response);
                    break;
                default:
                    getProducts(request, response)
                    break;
            }
           
        }  else {
            getProducts(request, response)
        }
   
  };
  
  module.exports = productsRoute;