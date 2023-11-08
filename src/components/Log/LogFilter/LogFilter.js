import React from "react"


const LogFilter = (props) => {

    const yearSelect = (e) => {
        props.onYearChange(+e.target.value)
    }

    return (

       
        <div value={props.year} className="logFilter">

            Year: <select  onChange = {yearSelect} > 
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>


        </div>
    )



}

export default LogFilter