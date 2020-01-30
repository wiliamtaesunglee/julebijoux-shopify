import Vue from "vue";
window.Vue = Vue;

let Axios = require("axios");
window.Axios = Axios;

//let jQuery = require("jquery");
//window.jQuery = window.$ = jQuery;

//Noty to pop an update message
window.Noty = require('noty');

//Vue Component

require("./components/ProductForm");
require("./components/cartForm");