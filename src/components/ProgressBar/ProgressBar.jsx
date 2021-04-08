import React from "react";

import './ProgressBar.scss'

const ProgressBar = ({ progress = 0 }) => {
  const percentage = (progress > 100 ? 100 : progress) + '%';
  return (
    <div className="progress-bar-parent">
      <div className="progress-bar-child" style={{width : percentage}}/>
    </div>
  )
}

export default ProgressBar
