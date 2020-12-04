import React from 'react'

// styles
import '../styles/components/form.css'

// material ui
import Grid from '@material-ui/core/Grid';

export default function Form (props) {
    return (
        
        <Grid className="formulaire" container direction="column" justify="space-evenly" alignItems="center">
            {props.children}
        </Grid>

    )
}