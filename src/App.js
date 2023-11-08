import React, {useState} from "react"
import Log from "./components/Log/Log"
import "./App.css"
import LogForm from "./components/LogForm/LogForm"






const App = () => {


    const [logData, setLogData] = useState([
        {
            id: 1,
            date: new Date(2020, 7, 20, 8, 20, 0),
            desc: "Study JavaScript",
            time: 40
        },
        {
            id: 2,
            date: new Date(2021, 9, 25, 15, 30, 0),
            desc: "Study React",
            time: 70
        },
        {
            id: 3,
            date: new Date(2023, 10, 30, 9, 40, 0),
            desc: "Study Node.js",
            time: 90
        },
        {
            id: 4,
            date: new Date(2023, 2, 15, 15, 10, 0),
            desc: "Study Java",
            time: 100
        }



    ])



    const AddLogItemHandler = (newLog) => {

        newLog.id = Date.now()

        setLogData(prevState=>[...prevState,newLog])

    }


    const deleteLogHandler = (id) => {

        setLogData(prevState=>{

            return prevState.filter((item)=>item.id !== id)

        })

    }

    return (

        <div className="app">
          
            <LogForm onAdd = {AddLogItemHandler}/>
            <Log onDelete = { deleteLogHandler } logsData = {logData}/>
        </div>


    )
}

export default App