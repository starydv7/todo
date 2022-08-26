import React from 'react'
import "./style.css";
const Page = () => {
  return (
    <div>
      <div className="goal">
        <p>Goal and Progress</p>
      </div>
      <div className="kg">
        <div>
          <div className="arrow">
            <div>
              <img
                className="image"
                src="https://d3hsih69yn4d89.cloudfront.net/web/B4D18197600DB9D0F75D7D720B6B9C66.cache.png"
                alt="arrow"
              />
            </div>
            <div>
              {" "}
              <p className="para1">0 kg</p>
            </div>
          </div>
          <p className="para2">so far</p>
        </div>
        <div>
          <p className="para3">
            You'll reach your goal of losing<br></br>13 kg on Dec 23.2022
          </p>
        </div>
          </div>
          <div className='recent'>
              <p>
                  Recent Meal
              </p>
              <div className='meal'>
                  <p className='name-meal'>No food or exercise recorded for this week</p>
              </div>
          </div>
          
        
          
    </div>
  );
}

export default Page