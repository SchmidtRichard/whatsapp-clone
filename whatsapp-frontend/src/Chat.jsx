import React from 'react';
import "./Chat.css"
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Mic} from "@material-ui/icons";

function Chat() {
    return (
        <div className="chat">

            <div className="chat__header">

                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                        <AttachFile />
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>

            <div className="chat__body">
                <p className="chat__message">

                    <span className="chat__name">Richard</span>
                    Hello there

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>

                </p>

                <p className="chat__message chat__receiver">

                    <span className="chat__name">Andressa</span>
                    Oi

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>

                </p>

                <p className="chat__message">

                    <span className="chat__name">Richard</span>
                    What's the plans for tonight?

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>

                </p>

            </div>

            <div className="chat__footer">
                <InsertEmoticon />

                <form>
                    <input
                        placeholder="Type a message"
                        type="text"
                    />
                    <button type="submit">Send a message</button>
                </form>

                <Mic />

            </div>

        </div>
    );
}

export default Chat;