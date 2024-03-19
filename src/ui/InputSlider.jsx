import React from 'react'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
  



const InputSlider = () => {
  return (
    <div className="custom-range-slider">
      <RangeSlider className="single-thumb"
        defaultValue={[0, 50]}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true} />
    </div>
  )
}

export default InputSlider