function getLocation() {
    //Js'de getLocation fonsiyonu ile çalıştırılan uygulamanın bulunduğu konum anlık gösterir.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = 'Geolocation is not supported by this browser.';
    }
}

function showPosition(position) {
    var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    marker.bindPopup('<b>Anlık Konum</b><br>ENES AYDIN.').openPopup();

    L.circle([position.coords.latitude, position.coords.longitude], 10, {
            color: 'green',
            fillColor: '#f03',
            fillOpacity: 10 //Çember içindeki rengin koyuluğunu ayarlıyor!! 
        })
        .addTo(map)
        .bindPopup("ENES'Home");
    console.log(position);
    map.setView([position.coords.latitude, position.coords.longitude]);
}