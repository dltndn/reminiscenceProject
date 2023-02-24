require('dotenv').config();

exports.HTML = (title, header, body) => {
    return `
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_CLIENT_ID}"></script>
        </head>
      
      <body>
        <header>
          ${header}
        </header>
        <main>
          ${body}
        </main>
      </body>
    </html>
            `;
  }