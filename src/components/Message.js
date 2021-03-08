import React from 'react'
import styled from 'styled-components';

function Message({message,timestamp,user,userImage}) {
    return (
        <MessageConatiner>
            <img src={userImage} alt="" />
            <MessageInfo>
                <h4>
                    {user}{' '}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>
                    {message}
                </p>
            </MessageInfo>
        </MessageConatiner>
    )
}

export default Message

const MessageInfo = styled.div`
    padding-left: 12px;

    > h4 > span {
        color: gray;
        font-weight: 400;
        font-size: 12px;
        margin-left: 8px;
    }
`;

const MessageConatiner = styled.div`
    display: flex;
    align-items: center;
    padding: 22px;
    > img {
        height: 50px;
        border-radius: 12px;
    }
`;
