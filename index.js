const axios = require('axios');
const {dotenv} = require('dotenv');
// import axios from 'axios';  '// will give error as the module is common js module and import doesnt work in common js moduling.

// console.log(axios); -> will print the contents of the axios object   

// axios.get('http://www.omdbapi.com/?t=harry&apikey=a7918266')
// .then((response) => {
//     console.log(response.data);
// });

async function fetch()
{
    const response = await axios.get('process.env.KEY')
    console.log(response.data);
} 
fetch();