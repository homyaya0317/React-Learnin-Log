import React, { useState } from "react"
import Mydate from "./MyDate/MyDate"
import "./LogItem.css"
import Card from "../../UI/Card/Card"
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal"



const LogItem = (props) => {

    const[ifConfirm,setIfConfirm] = useState(false)

    

   
    const deleteHandler = () => {
        setIfConfirm(true)
   
    }

    const deleteConfirmHandler = () => {
        props.onDelete(props.id)
        setIfConfirm(false)
        

    }

    const deleteCancelHandler = () => {
        setIfConfirm(false)

    }


    return (

        <Card className="logItem">
            
            <Mydate date={props.date} />

            <div className="content">
                <div className="desc">{props.desc}</div>
                <div className="time">{props.time} min</div>
            </div>
            <div onClick={deleteHandler} className="delete">×</div>
            {ifConfirm && <ConfirmModal onYes = {deleteConfirmHandler} onCancel={deleteCancelHandler} />}
         
       
        </Card>
      
    )
}

export default LogItem