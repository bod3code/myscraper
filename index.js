#!/usr/bin/env node
const axios = require('axios');
const cheerio = require('cheerio');
const searchString = "reimagined";
const searchDomain = 'https://www.apple.com'

const fetchURL = (url) => axios.get(url);

const getData = async () => {
  try {
    const response = await axios.get(searchDomain);
    
    const $ = cheerio.load(response.data)
    const links = $('a');
    console.log('hey links', links);
    links.map((link) => console.log(link));
    // const nextResponse = fetchURL(searchDomain + links[0]);
    console.log('hey here', nextResponse);
    console.log("hey link", links.attr('href'));
    // axios.all(links.map(fetchURL)).then((responses) => {
    //     numberOfMatches = responses.match(new RegExp(searchString, "g")).length;
    //     // 
    //     console.log("Found " + numberOfMatches + "with the term " + searchString );
    // });

  } catch (error) {
    console.error(error)
  }
}

module.exports = getData();