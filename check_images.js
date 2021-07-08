// Remove all elements of the museum and show the image
AFRAME.registerComponent('show-image', {
    schema: {
        name_id: { type: 'string' },
        btn_id: { type: 'string' }
    },

    init: function () {
        this.el.addEventListener('click', () => {
            console.log('hi world'); // testing purposes
            const elements = document.querySelectorAll('.visibility-modifier');
            elements.forEach((element) => {
                element.setAttribute('visible', 'false');
            });

            let image = document.querySelector(`#${this.data.name_id}`);
            let btn = document.querySelector(`#${this.data.btn_id}`);
            let cam = document.querySelector("#cameraRig");

            image.setAttribute('visible', 'true');
            btn.setAttribute('visible', 'true');

            cam.setAttribute('position', {
                x: (btn.object3D.position.x) - 1.7,
                y: (btn.object3D.position.y) - 1,
                z: btn.object3D.position.z - 2.3
            });
        });
    }
});

// Reverse visibility order 
AFRAME.registerComponent('show-museum', {
    schema: {
        name_id: { type: 'string' }
    },

    init: function () {
        this.el.addEventListener('click', () => {
            this.el.setAttribute('visible', 'false');

            console.log('hii');
            const elements = document.querySelectorAll('.visibility-modifier');
            elements.forEach((element) => {
                element.setAttribute('visible', 'true');
            });

            let image = document.querySelector(`#${this.data.name_id}`);
            image.setAttribute('visible', 'false');

            let cam = document.querySelector("#cameraRig");

            cam.setAttribute('position', {
                x: (image.object3D.position.x) - 2.5,
                y: 1.9,
                z: (image.object3D.position.z) - 1.2
            });
        });
    }
});

// Back button expands in size when hovered over
AFRAME.registerComponent('hovering-back-button', {
    init: function () {

        this.el.setAttribute('animation__enter', {
            property: 'text.width',
            to: this.el.getAttribute('text').width + 1,
            dur: 300,
            easing: 'linear',
            startEvents: 'mouseenter'
        });

        this.el.setAttribute('animation__leave', {
            property: 'text.width',
            to: this.el.getAttribute('text').width,
            dur: 300,
            easing: 'linear',
            startEvents: 'mouseleave'
        });
    }
});