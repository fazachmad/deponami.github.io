const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: new google.maps.LatLng(-2.6000285, 118.015776),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
});

var infowindow = new google.maps.InfoWindow();
console.log(locations);
var marker, i;

for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
    position: new google.maps.LatLng(
        locations[i][7].split(" ")[0],
        locations[i][7].split(" ")[1]
    ),
    map: map,
    icon: {
      url: "iconmarker.png", // url
        scaledSize: new google.maps.Size(20, 20), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0), // anchor
    },
    });

    google.maps.event.addListener(
    marker,
    "click",
    (function (marker, i) {
        return function () {
        if (locations[i][11]) {
            infowindow.setContent(
            `
                <div>
                    <span>Date : ${locations[i][0]}</span><br />
                    <span>Time : ${locations[i][1]}</span><br />
                    <span>Lat : ${locations[i][2]}</span><br />
                    <span>Lon : ${locations[i][3]}</span><br />
                    <span>Dep : ${locations[i][4]}</span><br />
                    <span>M : ${locations[i][5]}</span><br />
                    <span>MT : ${locations[i][6]}</span><br />
                    <span>Epicenter : ${locations[i][7]}</span><br />
                    <span>Status : ${locations[i][8]}</span><br />
                    <span>Region : ${locations[i][9]}</span><br />
                    <span>Referensi : ${locations[i][10]}</span><br />
                    <span>Catatan : ${locations[i][11]}</span>
                </div>
            `
            );
        } else {
            infowindow.setContent(
            `
                <div>
                    <span>Date : ${locations[i][0]}</span><br />
                    <span>Time : ${locations[i][1]}</span><br />
                    <span>Lat : ${locations[i][2]}</span><br />
                    <span>Lon : ${locations[i][3]}</span><br />
                    <span>Dep : ${locations[i][4]}</span><br />
                    <span>M : ${locations[i][5]}</span><br />
                    <span>MT : ${locations[i][6]}</span><br />
                    <span>Epicenter : ${locations[i][7]}</span><br />
                    <span>Status : ${locations[i][8]}</span><br />
                    <span>Region : ${locations[i][9]}</span><br />
                    <span>Referensi : ${locations[i][10]}</span><br />
                </div>
            `
            );
        }
        infowindow.open(map, marker);
        };
    })(marker, i)
    );
}
