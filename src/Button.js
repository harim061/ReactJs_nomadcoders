import PropTypes from "prop-types"
import styles from "./Button.module.css"

function Button({text}){ 
    //Button 컴포넌트의 props text
    return (
        <button 
            className={styles.btn}
            
        
        >{text}</button>
    )
}

Button.propTypes ={
    text : PropTypes.string.isRequired
}

export default Button;