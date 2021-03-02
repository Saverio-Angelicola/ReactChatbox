import { useState } from "react";

function Formulaire(props) {

    const [message, setMessage] = useState('')
    const [length, setLength] = useState(props.length)

    const createMessage = () => {
        const { addMessage, pseudo } = props
        const mess = {
            pseudo,
            message: message
        }

        addMessage(mess)
        setMessage('')
        setLength(props.length)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createMessage()
    }

    const handleChange = (event) => {
        const mess = event.target.value
        const messageLength = props.length - mess.length
        setMessage(mess)
        setLength(messageLength)
    }

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            createMessage()
        }
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <textarea required maxLength={props.length} value={message}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp} />
                <div className="info"> {length} </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default Formulaire;