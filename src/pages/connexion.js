import React from 'react';
import Form from '../components/form';

// material ui
import Grid from '@material-ui/core/Grid';

// styles
import "../styles/pages/connexion.css"


export default function ConnexionPage(){


    return (
        <Grid container justify="center" alignItems="center">
            <Form>
                <Grid container direction="column" justify="center" alignItems="flex-start">
                    <label>nom d'utilisateur ou adresse mail :</label>
                    <input type="text" placeholder="mail ou identifiant"/>
                </Grid>
                <Grid container direction="column" justify="center" alignItems="flex-start">
                    <label>mot de passe :</label>
                    <input type="password" placeholder="mot de passe"/>
                </Grid>
                <input type="submit" value="Connexion"/>
            </Form>
        </Grid>
    )
}