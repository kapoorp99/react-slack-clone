import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
import SidebarOption from './SidebarOption'
import {db,auth} from '../firebase'
import {useCollection} from "react-firebase-hooks/firestore"
import {useAuthState} from 'react-firebase-hooks/auth'

function Sidebar() {
    const [user] = useAuthState(auth);
    const [channels, loading, error] = useCollection(db.collection('rooms'));
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>{user?.displayName}</h2>
                    <h3>
                        <FiberManualRecord />
                        {user?.email}
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>
            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={Inbox} title="Mentions & Reactions" />
            <SidebarOption Icon={Drafts} title="Saved items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOption Icon={PeopleAlt} title="People & User groups" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File browser" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels" />
            <hr />
            <SidebarOption Icon={Add} addChannelOption title="Channels" />
            {channels?.docs.map(doc => (
                <SidebarOption key={doc.id} 
                id={doc.id}
                title={doc.data().name} />
            ))}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
    overflow: hidden;
    :hover {
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track { 
            border-radius: 10px;
            background-color: rgb(63,15,64);
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 4px antiquewhite; 
        }
    }
    

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }

`;


const SidebarHeader = styled.div`
    display:flex;
    border-bottom: 1px solid #49274b;
    padding: 14px;
    > .MuiSvgIcon-root {
        padding: 10px;
        color: #49274b;
        font-size: 16px;
        background-color: white;
        border-radius: 25px;
    }

`;


const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 14px;
        font-weight: 500;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;
