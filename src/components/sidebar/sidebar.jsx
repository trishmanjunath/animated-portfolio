import React, { useState } from 'react'
import {motion} from "framer-motion"
import "./sidebar.css";
import ToggleButton from "./toggleButtons/toggleButton";
import Links from "./links/links";

const Sidebar = () => {

    const [open, setOpen] = useState(false)

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(25px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
}

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
        <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen} open={open}/>
    </motion.div>
  )
}

export default Sidebar