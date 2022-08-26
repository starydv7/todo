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
          <p className="para1">0 kg</p>
          <p className="para2">so far</p>
        </div>
        <div>
          <p className='para3'>
            You'll reach your goal of losing<br></br>13 kg on Dec 23.2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page