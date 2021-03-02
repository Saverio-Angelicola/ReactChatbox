import Formulaire from './components/Formulaire'
import { createRef, useEffect, useState } from 'react'
import Message from './components/Message'

import './App.css'
import './Animations.css'

// firebase
import base from './base'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const App = (props) => {
  const [messages, setMessages] = useState({})
  const [pseudo] = useState(props.match.params.pseudo)

  const messagesRef = createRef()

  useEffect(() => {
    base.ref('/').on('value', (snapshot) => {
      if (snapshot.exists()) {
        setMessages(snapshot.val())
      }

    })
  }, [])

  useEffect(() => {
    const ref = messagesRef.current
    ref.scrollTop = ref.scrollHeight
  })

  const addMessage = message => {
    const mess = { ...messages }

    mess[`message-${Date.now()}`] = message

    Object.keys(mess).slice(0, -10).forEach(key => {
      mess[key] = null
      setMessages(mess)
      base.ref('/').set(mess)
    })


  }

  const isUser = (userPseudo) => userPseudo === pseudo

  const allMessages = Object
    .keys(messages)
    .map(key => (
      <CSSTransition
        timeout={200}
        classNames='fade'
        key={key}>
        <Message
          isUser={isUser}
          mess={messages[key].message}
          pseudo={messages[key].pseudo}
        />
      </CSSTransition>
    ))

  return (
    <div className='box'>
      <div>
        <div className='messages' ref={messagesRef}>
          <TransitionGroup className="message">

            {allMessages}
          </TransitionGroup>

        </div>
      </div>
      <Formulaire
        length={140}
        pseudo={pseudo}
        addMessage={addMessage} />
    </div>
  )

}
export default App
