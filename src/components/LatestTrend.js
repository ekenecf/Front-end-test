import React from 'react'

const LatestTrend = (data) => {

  return (
    <div className={data.data || data.name.length > 0 ? "trend" : "notrend"}>
      <p>Latest Trend</p>
      <div className="trendCards">
        {data.data === undefined ? (
          <div>No data gotten yet</div>
        ) : (
          data.data.map((prop) => (
            <div key={prop.id} className="dardImage">
              <img src={prop.image} alt="trendSample" />
              <p>{prop.title}</p>
            </div>
          ))
        )}
      </div>
      <p id="suggestion">Popular Suggestion</p>
      <small>Stripped shirt dress</small>
      <small>Stripped shirt dress</small>
      <small>Stripped shirt dress</small>
      <small>Stripped shirt dress</small>
      <small>Stripped shirt dress</small>
    </div>
  )
}

export default LatestTrend
