class Element {
    constructor(props = {}) {
      this.id = props.id ?? 0;
      this.isDisplay = props.isDisplay ?? true;
      this.originX = props.originX ?? 0;
      this.originY = props.originY ?? 0;
      this.originZ = props.originZ ?? 0;
      this.x = props.x ?? 0;
      this.y = props.y ?? 0;
      this.z = props.z ?? 0;
      if (props.baseSize !== undefined) {
        this.baseSize = props.baseSize;
        this.w = this.baseSize;
        this.h = this.baseSize;
        this.d = this.baseSize;
        this.radius = this.baseSize;
      } else {
        this.w = props.w ?? 100;
        this.h = props.h ?? 100;
        this.d = props.d ?? 100;
        this.radius = props.radius ?? 100;
      }
      this.detailX = props.detailX ?? 1;
      this.detailY = props.detailY ?? 1;
      this.detailZ = props.detailZ ?? 1;
      this.scaleX = props.scaleX ?? 1;
      this.scaleY = props.scaleY ?? 1;
      this.scaleZ = props.scaleZ ?? 1;
      this.angleX = props.angleX ?? 0;
      this.angleY = props.angleY ?? 0;
      this.angleZ = props.angleZ ?? 0;
      this.tubeRadius = props.tubeRadius ?? 10;
      this.angleXAccel = props.angleXAccel ?? 0.01;
      this.angleYAccel = props.angleYAccel ?? 0.01;
      this.angleZAccel = props.angleZAccel ?? 0.01;
    }
  
    run = () => {
      if (!this.isDisplay) return;
      push();
      translate(this.originX, this.originY, this.originZ);
      scale(this.scaleX, this.scaleY, this.scaleZ);
      rotateX(this.angleX);
      rotateY(this.angleY);
      rotateZ(this.angleZ);
      cylinder(this.w, this.h, 120, 3);
      pop();
    }
  }
  
  ////////////////////////////////////////////////
  class Motif {
    constructor(props = {}) {
      this.id = props.id ?? 0;
      this.isDisplay = props.isDisplay ?? true;
      this.originX = props.originX ?? 0;
      this.originY = props.originY ?? 0;
      this.originZ = props.originZ ?? 0;
      this.x = props.x ?? 0;
      this.y = props.y ?? 0;
      this.z = props.z ?? 0;
      if (props.baseSize !== undefined) {
        this.baseSize = props.baseSize;
        this.w = this.baseSize;
        this.h = this.baseSize;
        this.d = this.baseSize;
        this.radius = this.baseSize;
      } else {
        this.w = props.w ?? 100;
        this.h = props.h ?? 100;
        this.d = props.d ?? 100;
        this.radius = props.radius ?? 100;
      }
      this.detailX = props.detailX ?? 1;
      this.detailY = props.detailY ?? 1;
      this.detailZ = props.detailZ ?? 1;
      this.scaleX = props.scaleX ?? 1;
      this.scaleY = props.scaleY ?? 1;
      this.scaleZ = props.scaleZ ?? 1;
      this.angleX = props.angleX ?? 0;
      this.angleY = props.angleY ?? 0;
      this.angleZ = props.angleZ ?? 0;
      this.tubeRadius = props.tubeRadius ?? 10;
      this.angleXAccel = props.angleXAccel ?? random(-0.01, 0.01);
      this.angleYAccel = props.angleYAccel ?? random(-0.01, 0.01);
      this.angleZAccel = props.angleZAccel ?? random(-0.01, 0.01);
      this.elements = [];
          const element = new Element({
              originX: 0, 
              originY: 0,
              originZ: 0,
              w: 900, 
              h: 950,
              d: 1000,
              radius: 1000,
          })
          this.elements.push(element)
    }
  
    run = () => {
      if (!this.isDisplay) return;
      push();
      translate(this.originX, this.originY, this.originZ);
      scale(this.scaleX, this.scaleY, this.scaleZ);
      this.angleY += this.angleYAccel;
      rotateY(this.angleY);
      for (let i = 0; i < this.elements.length; i++) {
        const element = this.elements[i];
        element.run();
      }
      pop();
    }
  }