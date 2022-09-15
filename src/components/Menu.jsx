import React from "react";
import { RangeStepInput } from "react-range-step-input";

function Menu({
  slider1,
  setslider1,
  slider2,
  setslider2,
  slider3,
  setslider3,
  slider4,
  setslider4,
}) {
  return (
    <div className="main-menu">
      <h2>Properties</h2>
      <p>Set the dimensions for your configuration and add blades rotation.</p>
      <br />

      <label className="slider-heading">Side 1 - 3</label>
      <RangeStepInput
        min={5}
        max={13}
        value={slider1}
        step={0.1}
        onChange={(e) => setslider1(Number(e.target.value))}
      />

      <label className="slider-heading">Side 2 - 4</label>
      <RangeStepInput
        min={3}
        max={8}
        value={slider2}
        step={0.1}
        onChange={(e) => setslider2(Number(e.target.value))}
      />

      <label className="slider-heading">Passage height</label>
      <RangeStepInput
        min={5}
        max={26}
        value={slider3}
        step={0.1}
        onChange={(e) => setslider3(Number(e.target.value))}
      />

      <label className="slider-heading">Blades rotation</label>
      <RangeStepInput
        min={0}
        max={Math.PI / 2}
        value={slider4}
        step={0.1}
        onChange={(e) => setslider4(Number(e.target.value))}
      />
    </div>
  );
}

export default Menu;
