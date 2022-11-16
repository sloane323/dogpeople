import { useState } from "react";
import React from "react";

const Booking = () => {

 
    const selectList = 
    ["01", "02", "03", "04", "05"];
    const [Selected, setSelected] = useState("");
    const handleSelect = (e) => {
      setSelected(e.target.value);
    };
    const [period, setPeriod] = useState("1")
    const onPeriodChange = (e) => {
        const {value} = e.target
        setPeriod(value)}
        const periodOptions = [
          {value: "1", label:'01'},
          {value: "2", label:'02'},
          {value: "3", label:'03'},
          {value: "4", label:'04'},
          {value: "5", label:'05'},
          {value: "6", label:'06'},
      ]



    return ( <div>      <br></br><br></br> <br></br><br></br>
        <div>
      <span  className="sub-title">Booking 
     예약하기 </span> </div>
     <br></br><br></br>

     <div> <lable> 사람</lable>
        <select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>

      </div>
            <label>강아지</label>
              <select 
                value={period}
                onChange={onPeriodChange} >
                {
                    periodOptions.slice(0, Selected).map(period => (
                        <option value={period.value}>{period.label}</option>
                    ))
                }
            </select>

            
    </div> );
}
 
export default Booking;