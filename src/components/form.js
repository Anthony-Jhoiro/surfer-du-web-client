import React from 'react'

// styles
import '../styles/components/form.css'

export default function Form (props) {
    return (
        
        <form>
            {props.children}
        </form>

    )
}