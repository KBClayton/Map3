
$(document).ready(function() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
    async function wait() {
        await sleep(1000);
    }
      
    wait().then(function(){

                var location_001={lat: 29.4340000, lng: -97.391}

                var point_001 = new google.maps.Marker({
                    position: location_001,
                    title: "Westin"
                });
                point_001.setMap(map); 
                    
                
                var location_002={lat: 29.431452, lng:-97.39445}

                var point_002 = new google.maps.Marker({
                    position: location_002,
                    title: "Unit number 1"
                });
                point_002.setMap(map); 
                
                var location_003={lat: 29.21973, lng:-97.375223}

                var point_003 = new google.maps.Marker({
                    position: location_003,
                    title: "Unit number 2"
                });
                point_003.setMap(map); 

                var location_004={lat: 29.570225,  lng: -97.510398}

                var point_004 = new google.maps.Marker({
                    position: location_004,
                    title: "House?"
                });
                point_004.setMap(map); 
    
    })
});