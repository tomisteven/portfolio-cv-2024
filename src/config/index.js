module.exports = {
  particles: {
    particles: {
      number: { value: 30 },
      color: { value: ['#0be779', '#1a89e2', '#e31b1b', '#ffac40','#b0864f', "#ca38ff" , "#fff700"] },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 0.9,
          opacity_min: 1,
          sync: true,
        },
      },
      size: {
        value: 7,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 450,
        color: '#ffffff',
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.3,
        direction: 'none',
        random: true,
        straight: false,
        bounce: true,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      // activate
      events: {
        onhover: {
          enable: true,
          mode: ['bubble', 'simple'],
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          size: 17,
          duration: 1,
          opacity: 0.8,
          speed: 2,
        },
      },
    },
    retina_detect: true,
  },
}
