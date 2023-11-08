import React from "react"
import "./ConfirmModal.css"
import Card from "../Card/Card"
import Backdrop from "../Backdrop/Backdrop"

const ConfirmModal = (props) => {

    return (

        <Backdrop>
            <Card className="confirmModal">

                <div className="confirmtext">Are you sure to delete this log?</div>

                <div className="confirmBtn">
                    <button onClick={props.onYes}>yes</button>
                    <button onClick={props.onCancel}>no</button>
                </div>
            </Card>
            
        </Backdrop>



    )

}

export default ConfirmModal