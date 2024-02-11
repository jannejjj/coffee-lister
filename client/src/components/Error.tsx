import "../styles/Error.css";

interface ErrorProps {
    msg : string;
}

const Error = (props : ErrorProps) => {
    return (
        <div className="error">
            {props.msg}
        </div>
    );
}

export default Error;