import axios from 'axios';

//const  KEY = 'AIzaSyDgNQj2BasBI6JcnTw6DR-YaZWE9vmi3hA';



export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        maxResults : 5
      //  key : 'AIzaSyDgNQj2BasBI6JcnTw6DR-YaZWE9vmi3hA'
    } 
});