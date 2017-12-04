import VueRouter from 'vue-router'
import axios from 'axios'
import localforage from 'localforage'

// const API_URL = "http://94.156.189.118:8080/api";
// const URL = "http://94.156.189.118:8080";
const URL = 'http://10.20.33.202:1337/customer'

export default {
	getBaseUrl() {
		return URL
    },

    doRequest() {

    }
}