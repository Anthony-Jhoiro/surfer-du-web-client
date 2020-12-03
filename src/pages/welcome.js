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
            <Grid container justify="center" alignItems="center" className="view">
                <h1 className="white title">Alors, ça farte ?</h1>
            </Grid>
            <Grid container justify="center" alignItems="center" className="viewSSHeader">
                <Grid container justify="flex-start" alignItems="center" className="midView present">
                    <Grid item xs={4}>
                        
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </Grid>
                <Grid container justify="center" alignItems="center" className="midView">
                    <Grid item xs={6}>
                        <button className="beachButton bbred">Trouver un bon spot</button>
                    </Grid>
                    <Grid item xs={6}>
                        <button className="beachButton bbgreen">Proposer ton spot favori</button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}