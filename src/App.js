import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css' ;


const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm/>
 
    return (

        <ChatEngine
            height = "100vh"
            projectID = "7d98e181-b230-4cc8-be63-dfa0dac5b2d6"
            userName  = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}

            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />

    );


}

export default App;