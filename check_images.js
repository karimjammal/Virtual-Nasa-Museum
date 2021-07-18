// Remove all elements of the museum and show the curved image
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

// Remove all elements of the museum and show the curved image
AFRAME.registerComponent('show-image-rotated', {
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
                x: (btn.object3D.position.x) + 2,
                y: (btn.object3D.position.y) - 1,
                z: btn.object3D.position.z - 2.5
            });
        });
    }
});

// Remove all elements of the museum and show 360 sky image
AFRAME.registerComponent('show-sky', {
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

            let sky = document.querySelector('a-sky');
            let btn = document.querySelector(`#${this.data.btn_id}`);
            let cam = document.querySelector("#cameraRig");

sky.removeAttribute('color');
            sky.setAttribute('src', `#${this.data.name_id}`);

            btn.setAttribute('visible', 'true');

            cam.setAttribute('position', {
                x: (btn.object3D.position.x) - 1.7,
                y: (btn.object3D.position.y) - 1,
                z: btn.object3D.position.z - 2.3
            });


        });
    }
});

// Reverse visibility order for curved images
AFRAME.registerComponent('remove-image', {
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
                y: 1.6,
                z: (image.object3D.position.z) - 1.2
            });
        });
    }
});

// Reverse visibility order for curved images
AFRAME.registerComponent('remove-image-rotated', {
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
                x: (image.object3D.position.x) + 2.5,
                y: 1.6,
                z: (image.object3D.position.z) - 3.5
            });
        });
    }
});

// Remove 360 image from sky
AFRAME.registerComponent('remove-sky', {

    init: function () {
        this.el.addEventListener('click', () => {
            this.el.setAttribute('visible', 'false');

            console.log('hii');
            const elements = document.querySelectorAll('.visibility-modifier');
            elements.forEach((element) => {
                element.setAttribute('visible', 'true');
            });

            let sky = document.querySelector('a-sky');

            sky.removeAttribute('src');
            sky.setAttribute('color', 'black');

            let cam = document.querySelector("#cameraRig");
            cam.setAttribute('position', {
                x: (this.el.object3D.position.x) - 4,
                y: 1.6,
                z: (this.el.object3D.position.z) - 1.2
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