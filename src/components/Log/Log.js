import React, { useState } from "react";
import LogItem from "./LogItem/LogItem";
import "./Log.css"

import Card from "../../components/UI/Card/Card"
import LogFilter from "./LogFilter/LogFilter"


const Log = (props) => {

  const [year, setYear] = useState(2023)

  const yearChangeHandler = (year) =>{
      setYear(year)
  }

 

  
  let filterData = props.logsData.filter((item) => { return item.date.getFullYear() === year})
  // let filterData = props.logsData.filter(item=>item.date.getFullYear()===year)


  let logData = filterData.map((item) => <LogItem onDelete={props.onDelete} id={item.id} key={item.id} date={item.date} desc={item.desc} time={item.time} />)


  if (logData.length === 0) {
    logData = <p className="no-logs">Thre is no log</p>

  }

  return (

    <Card className="logs">
      <LogFilter year={year} onYearChange={yearChangeHandler} />
      {logData}
    </Card>
  )
}


export default Log

