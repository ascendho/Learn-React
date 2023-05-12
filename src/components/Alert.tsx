import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

/* Exercise - Showing an Alert */
const Alert = ({children, onClose}: Props) => {
    return (
        <div className={"alert alert-primary alert-dismissible"}>
            {children}
            <button type="button" className="btn-close"
                    onClick={onClose} data-bs-dismiss="ale"></button>
        </div>
    )
}

export default Alert;