import React, { useState } from "react"
import "./LogForm.css"
import Card from "../UI/Card/Card"



const LogForm = (props) => {

    const[inputDate,setInputDate] = useState("")
    const[inputDesc,setInputDesc] = useState("")
    const[inputTime,setInputTime] = useState("")

    const inputDateHandler = (e) => {

       setInputDate(e.target.value)

    }

    const inputDescHandler = (e) => {

        setInputDesc(e.target.value)
    }
    const inputTimeHandler = (e) => {

        setInputTime(e.target.value)
       
    }


    const submitLogItem = (e) => {
        e.preventDefault()

        const newLog = {
            date:new Date(inputDate),
            desc:inputDesc,
            time:+inputTime,
        }

        props.onAdd(newLog)
        
        setInputDate("")
        setInputDesc("")
        setInputTime("")

    }

   

    return (
        <Card className="logForm">

            <form onSubmit={submitLogItem}>

                <div className="formItem">
                    <label htmlFor="date" />Date
                    <input  value={inputDate} onChange={inputDateHandler} type="date" id="date"></input>
                </div>

                <div className="formItem">
                    <label htmlFor="desc" />Content
                    <input value={inputDesc} onChange={inputDescHandler} type="text" id="desc" />
                </div>

                <div className="formItem">
                    <label htmlFor="time" />Time
                    <input value={inputTime} onChange={inputTimeHandler} type="text" id="time" />
                </div>

                <div className="formBtn">
                    <button>Add</button>
                </div>


            </form>
        </Card>
    )


}

export default LogForm