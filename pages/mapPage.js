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
    </script>`;
  return htmlTemplate("맵 페이지", "상단바", body);
};
