import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import styles from "./WarningMessage.module.css";

// A pop up message used to warn users about failed API calls to the back end
const WarningMessage = ({ open, text, onWarningClose }) => (
    <>
      {open && (
        <div
          className={classnames(
            "alert",
            "alert-warning",
            "ml-3",
            styles.warningPosition
          )}
          role="alert"
        >
          {text}
          <button
            onClick={onWarningClose}
            className="close ml-2"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </>
  )

WarningMessage.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
  onWarningClose:PropTypes.func
}

export default WarningMessage;