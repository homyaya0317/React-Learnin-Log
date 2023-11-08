import ReactDOM from "react-dom";
import "./Backdrop.css"

const Backdrop = (props) => {

    const backdropRoot = document.getElementById("backdrop-root")

    return(

        ReactDOM.createPortal(<div className="backdrop">
            {props.children}
        </div>,backdropRoot)


    )
}

export default Backdrop
