const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return "mobile";
    }
    return "desktop";
};

AFRAME.registerComponent('check-device', {
    init: function () {
        let device_type = getDeviceType();

        if (device_type !== 'desktop') {
            this.el.removeAttribute('movement-controls');
        }
        else{
          let dir = document.querySelector("#phone_dir");
          dir.style.visibility = "hidden";
        }
      
    }
});