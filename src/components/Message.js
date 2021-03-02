const Message = (props) => {
    if (props.isUser(props.pseudo)) {
        return (
            <div>
                <p className="user-message"> {props.mess} </p>
            </div>
        );
    }
    else {
        return (
            <div>
                <p className="not-user-message">
                    <strong>{props.pseudo}: </strong> {props.mess}
                </p>
            </div>
        );
    }

};

export default Message;