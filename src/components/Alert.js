import React from 'react'

const Alert = (props) => {
  return (
    props.alert &&<div className={`alert alert-success alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
</div>


// Here && Symbol is used so that when props.alert is null, then contents of <div> tag will be executed.
// If props.alert is not null, then props.alert will execute.
// This should be used because the jsx will be converted everything into js calls
  )
}

export default Alert