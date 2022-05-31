// component for planet properties
AFRAME.registerComponent('planet', {
  schema: {
    tRevol: { type: 'number', default: 500000 },
    semiAxe: { type: 'number', default: 20 },
    angularStart: { type: 'number', default: 0 }
  },
  init: function () {

  },

  tick: function (time, timeDelta) {
    var pos = this.el.getAttribute("position");
    pos.x = 2 * this.data.semiAxe * Math.cos(this.data.angularStart + 360 * (time + timeDelta) / this.data.tRevol);
    pos.z = 2 * this.data.semiAxe * Math.sin(this.data.angularStart + 360 * (time + timeDelta) / this.data.tRevol);
    this.el.setAttribute("position", pos);
  }

})