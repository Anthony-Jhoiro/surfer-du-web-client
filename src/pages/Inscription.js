import React from 'react'

// material ui
import Grid from '@material-ui/core/Grid';

// styles
import '../styles/pages/inscription.css'

// composants
import Header from "../components/header"
import Form from '../components/form'

export default function Inscription(props) {
    return (
        <>
            <Header/>
            <Form>
                <Grid container justify="center" alignItems="center" className="view">
                    <label> Nom d'utilisateur : 
                        <input id="pseudo" type="text" placeholder="Ecris ton nom meme"></input>
                    </label>
                    <label> Adresse E-mail : 
                        <input id="mail" type="email" placeholder="Met ton mail"></input>
                    </label>
                    <label> Mot de passe : 
                        <input id="mdp" type="password" placeholder="Ton mot de passe"></input>
                    </label>
                </Grid>
            </Form>
        </>
    )

}