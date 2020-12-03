import React from 'react'

// material ui
import Grid from '@material-ui/core/Grid';

// styles
import "../styles/pages/welcome.css"

// composants
import Header from "../components/header"

export default function Welcome(props){
    return (
        <>
            <Header/>
            <Grid container justify="center" alignItems="center" className="firstViewGrid">
                <h1 className="white title">Alors, ça farte ?</h1>
            </Grid>
        </>
    );
}