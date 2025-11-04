// Mostrar formulario cuando el captcha se valida
      function mostrarFormulario() {
        document.getElementById("form-section").style.display = "block";
      }

      // Validar captcha antes de enviar
      function validateCaptcha() {
        const response = grecaptcha.getResponse();
        if (response.length === 0) {
          alert("Por favor verifica el captcha.");
          return false;
        }
        alert("Reporte enviado correctamente.");
        return true;
      }

      // Mapa con geolocalización
      window.onload = function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function (position) {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              const map = L.map("map").setView([lat, lon], 13);

              L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                  attribution: "&copy; OpenStreetMap contributors",
                  maxZoom: 20,
                  minZoom: 3,
                }
              ).addTo(map);

              L.marker([lat, lon])
                .addTo(map)
                .bindPopup("Tu ubicación actual")
                .openPopup();
            },
            function (error) {
              if (error.code === error.PERMISSION_DENIED) {
                alert(
                  "Debes permitir el acceso a tu ubicación para usar el mapa."
                );
              } else {
                alert("Error obteniendo ubicación: " + error.message);
              }
            }
          );
        } else {
          alert("La geolocalización no está disponible en tu navegador.");
        }
      };