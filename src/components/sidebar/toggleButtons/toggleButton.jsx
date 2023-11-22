import React from 'react'
import HamburgerIcon from "./hamburgerIcon";
import CloseIcon from "./closeIcon";

const ToggleButton = ({open, setOpen}) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
    {open ? <CloseIcon /> : <HamburgerIcon />}
  </button>
  )
}

export default ToggleButton;