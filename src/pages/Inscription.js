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
                <Grid container direction="column" justify="center" alignItems="center" className="view">
                    <Grid>
                        <label> Nom d'utilisateur :</label>
                        <input id="pseudo" type="text" placeholder="Ecris ton nom meme"></input>
                    </Grid>
                    <Grid>
                        <label> Adresse E-mail : </label>
                        <input id="mail" type="email" placeholder="Met ton mail"></input>
                    </Grid>
                    <Grid>
                        <label> Mot de passe : </label>
                        <input id="mdp" type="password" placeholder="Ton mot de passe"></input>
                    </Grid>
                </Grid>
            </Form>
        </>
    )

}