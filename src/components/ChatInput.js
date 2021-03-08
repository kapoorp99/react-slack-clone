import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import styled from 'styled-components';
import {db,auth} from '../firebase'
import firebase from "firebase"
import { useAuthState } from 'react-firebase-hooks/auth'


function ChatInput({channelName,channelId,chatRef}) {
    const [user] = useAuthState(auth);
    const [input, setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault(); //prevents refresh
        if(!channelId) {
            return false;
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput("");
    }
    return (
        <ChatInputConatiner>
            <form>
                <input onChange={(e) => setInput(e.target.value)} value={input} placeholder={!channelName?"Select a channel to message":`Message #${channelName}`} />
                <Button hidden type="submit" onClick={sendMessage} >
                    SEND
                </Button>
            </form>
        </ChatInputConatiner>
    )
}

export default ChatInput

const ChatInputConatiner = styled.div`
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 25px;
        padding: 16px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;
