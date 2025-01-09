import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";
import { Link } from "react-router-dom";
import reactStringReplace from "react-string-replace";
import { Emoji } from "emoji-mart";

import { IconReaded, Avatar } from "..";

const getMessageTime = (createdAt) => {
  if (isToday(createdAt)) {
    return format(createdAt, "HH:mm");
  } else {
    return format(createdAt, "dd.MM.yyyy");
  }
};

const renderLastMessage = (message, userId) => {
  let text = "";
  if (!message.text && message.attachments.length) {
    text = "прикрепленный файл";
  } else {
    text = message.text;
  }

  return `${message.user._id === userId ? "Вы: " : ""}${text}`;
};

const DialogItem = ({
  _id,
  undread,
  created_at,
  text,
  isMe,
  partner,
  currentDialogId,
  lastMessage,
  userId,
  author,
}) => (
  <Link to={`/dialog/${_id}`} style={{ textDecoration: "none" }}>
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": partner.isOnline,
        "dialogs__item--selected": currentDialogId === _id,
      })}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={isMe ? partner : author} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{isMe ? partner.fullname : author.fullname}</b>
          <span>{lastMessage && getMessageTime(lastMessage.createdAt)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{lastMessage && renderLastMessage(lastMessage, userId)}</p>
          {isMe && (
            <IconReaded
              isMe={isMe}
              isReaded={lastMessage ? lastMessage.readed : false}
            />
          )}
          {lastMessage && lastMessage.undread > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {lastMessage.undread > 9 ? "+9" : lastMessage.undread}
            </div>
          )}
        </div>
      </div>
    </div>
  </Link>
);

export default DialogItem;
