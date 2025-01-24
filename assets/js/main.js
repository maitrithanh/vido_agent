document.addEventListener("DOMContentLoaded", function () {
  const btnDestLaos = document.querySelector(".dest-laos");
  const btnDestVietnam = document.querySelector(".dest-vietnam");
  const btnDestCambodia = document.querySelector(".dest-cambodia");

  if (btnDestLaos || btnDestVietnam || btnDestCambodia) {
    btnDestLaos.addEventListener("click", () => {
      handleRedirectHotelDest("laos");
    });
    btnDestVietnam.addEventListener("click", () => {
      handleRedirectHotelDest("vietnam");
    });
    btnDestCambodia.addEventListener("click", () => {
      handleRedirectHotelDest("cambodia");
    });
  }

  const handleRedirectHotelDest = (dest) => {
    window.location.href = `/pages/hotel.html?dest=${dest}`;
  };
});
