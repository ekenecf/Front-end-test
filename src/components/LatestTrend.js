import React from 'react'
import sample from '../public/cloth.jpg'

const LatestTrend = () => {
  return (
    <div className="trend">
      <p>Latest Trend</p>
      <div className="trendCards">
        <div className="dardImage">
          <img src={sample} alt="trendSample" />
          <p>One small text to showcase your skill</p>
        </div>
        <div className="dardImage">
          <img src={sample} alt="trendSample" />
          <p>One small text to showcase your skill</p>
        </div>
        <div className="dardImage">
          <img src={sample} alt="trendSample" />
          <p>One small text to showcase your skill</p>
        </div>
        <div className="dardImage">
          <img src={sample} alt="trendSample" />
          <p>One small text to showcase your skill</p>
        </div>
        <div className="dardImage">
          <img src={sample} alt="trendSample" />
          <p>One small text to showcase your skill</p>
        </div>
      </div>
      <p id='suggestion'>
        Popular Suggestion
      </p>
      <small>Stripped shirt dress</small>
      <small>Stripped shirt dress</small>
      <small>Stripped shirt dress</small>
      <small>Stripped shirt dress</small>
      <small>Stripped shirt dress</small>
    </div>
  )
}

export default LatestTrend
