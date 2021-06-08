import React from "react";

function Links(props) {
    return (
      <>
        <h3>Links</h3>
        <a href = {props.github}>{props.github}</a>
        <a href = {props.linkedin}>{props.linkedin}</a>
        {/* <a href = {props.linkone}>{props.linkone}</a>
        <a href = {props.linktwo}>{props.linktwo}</a> */}
      </>
    )
  }

  export default Links;