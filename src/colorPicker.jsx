import styles from "./colorPicker.module.css"
import React, {useState} from "react"
function ColorPicker(){


    const [color,setColor]=useState("#FFFFFF")

    const pickColor = e =>{
        setColor(e.target.value)
    }

    return(
        <div className={styles.color_container}>
            <h1>Color Picker</h1>
            <div className={styles.color_display} style={{backgroundColor:color}}>
                <p>selected color : {color}</p>
            </div>
            <label>select a color : </label>
            <input type="color" value={color} onChange={pickColor} />
        </div>
    )

}
export default ColorPicker