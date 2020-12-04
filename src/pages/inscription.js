import React from 'react'

// material ui
import Grid from '@material-ui/core/Grid';

// styles
import '../styles/pages/inscription.css'

// composants
import Header from "../components/header"
import Form from '../components/form'
import { TextField } from '@material-ui/core';

export default function Inscription(props) {

    return (
        <>
            <Header/>
            <form autoComplete="off">
                <TextField id="i-username" label="Username" />
            </form>
        </>
    )

}
