AFRAME.registerComponent('mask', {
    init: function () {
        let geometry = new THREE.BoxGeometry(1, 1, 1);
        geometry.faces.splice(4, 2);
        let material = new THREE.MeshBasicMaterial({
            colorWrite: false
        })
        let mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(1.1, 1.1, 1.1);
        this.el.object3D.add(mesh);
    }
});

AFRAME.registerComponent('rotate', {
    init: function () {

        this.el.setAttribute('animation__rotation', {
            property: 'rotation',
            to: { x: 0, y: 360, z: 0 },
            dur: 20000,
            easing: 'linear',
            dir: 'alternate',
            loop: 'true'
        });
    }
});

AFRAME.registerComponent('show-desc', {
    schema: {
        name_id: { type: 'string' },
        text_id: { type: 'string' },
        cam_id: { type: 'string' }
    },

    init: function () {
        let text = document.querySelector(`#${this.data.text_id}`);
        let name = document.querySelector(`#${this.data.name_id}`);
        let cam = document.querySelector(`#${this.data.cam_id}`);
        let current = document.querySelector("#cameraRig");

        text.setAttribute("visible", "false");
        name.setAttribute("visible", "false");
        cam.setAttribute("visible", "false");
    },

    tick: function () {

        let current = document.querySelector("#cameraRig");
        let text = document.querySelector(`#${this.data.text_id}`);
        let name = document.querySelector(`#${this.data.name_id}`);
        let cam = document.querySelector(`#${this.data.cam_id}`);

        let targetPos = this.el.object3D.position;
        let currentPos = current.object3D.position;

        let distance = currentPos.length() - targetPos.length();

        if (distance <= 4.1 && distance >= 0) {
            text.setAttribute("visible", "true");
            name.setAttribute("visible", "true");
            cam.setAttribute("visible", "true");
        } else {
            text.setAttribute("visible", "false");
            name.setAttribute("visible", "false");
            cam.setAttribute("visible", "false");
        }
    }
});


AFRAME.registerComponent('show-desc-rotated-frame', {
    schema: {
        name_id: { type: 'string' },
        text_id: { type: 'string' },
        cam_id: { type: 'string' }
    },

    init: function () {
        let text = document.querySelector(`#${this.data.text_id}`);
        let name = document.querySelector(`#${this.data.name_id}`);
        let cam = document.querySelector(`#${this.data.cam_id}`);
        let current = document.querySelector("#cameraRig");

        text.setAttribute("visible", "false");
        name.setAttribute("visible", "false");
        cam.setAttribute("visible", "false");
    },

    tick: function () {

        let current = document.querySelector("#cameraRig");
        let text = document.querySelector(`#${this.data.text_id}`);
        let name = document.querySelector(`#${this.data.name_id}`);
        let cam = document.querySelector(`#${this.data.cam_id}`);

        let targetPos = this.el.object3D.position;
        let currentPos = current.object3D.position;

        let distance = currentPos.length() - targetPos.length();

        if (distance <= 4.5 && distance >= 1.3) {
            text.setAttribute("visible", "true");
            name.setAttribute("visible", "true");
            cam.setAttribute("visible", "true");
        } else {
            text.setAttribute("visible", "false");
            name.setAttribute("visible", "false");
            cam.setAttribute("visible", "false");
        }
    }
});


AFRAME.registerComponent('hovering', {
    init: function () {

        this.el.setAttribute('animation__enter', {
            property: 'text.width',
            to: this.el.getAttribute('text').width + 2,
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

AFRAME.registerComponent('hover-camera-logo', {
    init: function () {

        this.el.addEventListener('mouseenter', function() {
            console.log("hello world"); // testing purposes
        });

        this.el.setAttribute('animation__enter', {
            property: 'color',
            to: '#e76f51',
            dur: 300,
            easing: 'linear',
            startEvents: 'mouseenter'
        });

        this.el.setAttribute('animation__leave', {
            property: 'color',
            to: '#ffffff',
            dur: 300,
            easing: 'linear',
            startEvents: 'mouseleave'
        });
    }
});

AFRAME.registerComponent('text-adder', {
    schema: {
        position: { default: { x: 0, y: 0, z: 0 } },
        scale: { default: { x: 1, y: 1, z: 1 } },
        text_val: { default: 'court' },
        text_color: { default: '#212121' },
        text_width: { default: '1' },
        text_wrapcount: { default: '35' },
        text_side: { default: 'double' },
        text_shader: { default: 'msdf' },
        geometry_primitive: { default: 'plane' },
        geometry_width: { default: 'auto' },
        geometry_height: { default: 'auto' },
        material_shader: { default: 'flat' },
        material_visible: { default: 'false' }
    },
    init: function () {
        this.el.setAttribute('position', this.data.position);
        this.el.setAttribute('scale', this.data.scale);
        this.el.setAttribute('text', 'value', `${this.data.text_val}`);
        this.el.setAttribute('text', 'color', `${this.data.text_color}`);
        this.el.setAttribute('text', 'width', `${this.data.text_width}`);
        this.el.setAttribute('text', 'wrapCount', `${this.data.text_wrapcount}`);
        this.el.setAttribute('text', 'side', `${this.data.text_side}`);
        this.el.setAttribute('text', 'shader', `${this.data.text_shader}`);
        this.el.setAttribute('geometry', 'primitive', `${this.data.geometry_primitive}`);
        this.el.setAttribute('geometry', 'width', `${this.data.geometry_width}`);
        this.el.setAttribute('geometry', 'height', `${this.data.geometry_height}`);
        this.el.setAttribute('material', 'shader', `${this.data.material_shader}`);
        this.el.setAttribute('material', 'visible', `${this.data.material_visible}`);
    }
});


