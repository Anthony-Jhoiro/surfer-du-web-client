import React from 'react'

// material ui
import Grid from '@material-ui/core/Grid';

// styles
import "../styles/pages/welcome.css"

// images
import friend from "../images/attract-beach.jpg"
import surf from "../images/attract-surf.jpg"

export default function Welcome(props){
    return (
        <>
            <Grid container justify="center" alignItems="center" className="view">
                <h1 className="white title">Alors, ça farte ?</h1>
            </Grid>
            <Grid container justify="center" alignItems="center" className="viewSSHeader">
                <Grid container justify="flex-start" alignItems="center" className="midView">
                    <Grid item xs={4} className="present">
                        <Grid container justify="center" alignItems="center" className="present">
                            <h1 className="white big-resp">Partage tes meilleurs spots de surf avec tes amis</h1>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={friend} alt="surf with friends" className="imgVert"/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={surf} alt="surf alone" className="imgVert"/>
                    </Grid>
                </Grid>
                <Grid container justify="center" alignItems="center" className="midView bg-black">
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