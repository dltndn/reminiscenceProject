const htmlTemplate = require('../template').HTML

exports.mapPage = () => {
    
  const body = `
    <div id="map" style="width:100%;height:400px;"></div>

    <script>
    var mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10
    };
    
    var map = new naver.maps.Map('map', mapOptions);

    

  var to = 'WGS84'
var from = 'TM128'
 
proj4.defs('WGS84', "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs");
proj4.defs('TM128', '+proj=tmerc +lat_0=38 +lon_0=128 +k=0.9999 +x_0=400000 +y_0=600000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43');
 
var xy = [294355,537865];
var result = proj4(from, to, xy);
console.log(result);
var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(result[1], result[0]),
  map: map
});
    </script>`;
  return htmlTemplate("맵 페이지", "상단바", body);
};
