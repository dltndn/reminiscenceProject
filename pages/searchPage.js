require('dotenv').config();
const cookie = require('cookie');

const client_id = process.env.NAVER_SERACH_ID;
const client_secret = process.env.NAVER_SEARCH_SECRET;

exports.searchPage =(req, res) => {
    const result = ''
    
}

exports.getPointXY = (req, res) => {
    const testSearch = '홍콩반점 은계'
    var api_url = 'https://openapi.naver.com/v1/search/local.json?query=' + encodeURI(testSearch) + '&display=5'; // JSON 결과
   const request = require('request');
   const options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
        console.log(body)
        res.send(body)
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
}