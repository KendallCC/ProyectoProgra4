var map;
        function initMap() {
            // Obteniendo la ubicación actual
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    var currentLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    // Destino
                    var destination = { lat: 10.017308, lng: -84.218172 }; // Cambia estas coordenadas por tu destino 


                    // Creando el mapa
                    map = new google.maps.Map(document.getElementById("map"), {
                        center: currentLocation,
                        zoom: 15,
                    });

                    // Marcador de ubicación actual
                    new google.maps.Marker({
                        position: destination,
                        map: map,
                    });



                    // Creando el servicio de direcciones
                    var directionsService = new google.maps.DirectionsService();
                    var directionsRenderer = new google.maps.DirectionsRenderer();

                    // Estableciendo el mapa para el renderizador de direcciones
                    directionsRenderer.setMap(map);

                    // Calculando la ruta
                    directionsService.route(
                        {
                            origin: currentLocation,
                            destination: destination,
                            travelMode: "DRIVING", // Puedes cambiar a "WALKING", "BICYCLING" o "TRANSIT"
                        },
                        function (response, status) {
                            if (status === "OK") {
                                directionsRenderer.setDirections(response);
                                var route = response.routes[0].legs[0];
                                var distanceInMeters = route.distance.value;
                                var distanceInKilometers = distanceInMeters / 1000;

                                var dist = document.getElementById('distancia');
                                dist.innerHTML = "Nuestra Ubicación más cercana a tu ubicacion se encuentra a: " + distanceInKilometers.toFixed(2) + " km";
                            } else {
                                window.alert("No se pudo calcular la ruta: " + status);
                            }
                        }
                    );
                },
                function () {
                    window.alert("Error al obtener la ubicación.");
                }
            );
        }