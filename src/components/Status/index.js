import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Button, Popover } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import "./Status.scss";

const Status = ({ online, fullname, removeDialogById }) => (
  <div className="chat__dialog-header">
    <div className="chat__dialog-header-center">
      <b className="chat__dialog-header-username">{fullname}</b>
      <div className="chat__dialog-header-status">
        <span className={classNames("status", { "status--online": online })}>
          {online ? "онлайн" : "офлайн"}
        </span>
      </div>
    </div>
    <Popover
      className="chat__dialog-header-action"
      content={
        <div>
          <Button onClick={removeDialogById}>Удалить диалог</Button>
        </div>
      }
      trigger="click"
    >
      <div>
        <Button
          type="link"
          shape="circle"
          icon={<EllipsisOutlined style={{ fontSize: "20px" }} />}
        />
      </div>
    </Popover>
  </div>
);

Status.propTypes = {
  online: PropTypes.bool,
};

export default Status;
