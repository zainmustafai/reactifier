export const options = {
    "background": {
      "color": "transparent"
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "onHover": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "push": {
          "quantity": 4
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        }
      }
    },
    "particles": {
      "color": {
        "value": "#ffb6c1"
      },
      "links": {
        "color": "#ffffff",
        "distance": 200,
        "enable": true,
        "opacity": 0.5,
        "width": 1
      },
      "collisions": {
        "enable": true,
        "mode": "bounce"
      },
      "move": {
        "direction": "none",
        "enable": true,
        "outModes": {
          "default": "fade"
        },
        "random": false,
        "speed": 1,
        "straight": false
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 80
      },
      "opacity": {
        "value": 0.5
      },
      "shape": {
        "type": "circle"
      },
      "size": {
        "random": true,
        "value": 5
      }
    }
  };
