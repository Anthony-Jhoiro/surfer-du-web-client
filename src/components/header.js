import React from 'react'

// styles
import "../styles/components/header.css"

// material ui
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


export default function Header(props){
    return (
        <nav>
            <Grid container justify="flex-start" alignItems="center">
                <h1 className="ml">Surfer du Net</h1>
            </Grid>
            <Grid container justify="flex-end" alignItems="center">
                <Link to="/" className="mr styledLinks white"> connexion </Link>
            </Grid>
        </nav>
    )
}