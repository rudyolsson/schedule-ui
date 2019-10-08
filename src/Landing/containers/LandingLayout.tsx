import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Clock from 'images/desk.jpg';
import LoginForm from 'Landing/containers/LoginForm';
import SignUpForm from 'Landing/containers/SignUpForm';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, signUp } from 'Core/store/actions/auth.actions';
import { AuthenticationProfile, UserCredentials } from 'Core/store/types/auth.types';

const  Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/login">
        UpShift
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Clock})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}));

const LandingLayout = (props: any) => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
            <Typography component="h1" variant="h3">
                    UpShift
            </Typography>  
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Switch>
                <Route path="/login">
                    <LoginForm onSubmit={values => props.login(values)}/>
                </Route>
                <Route path="/signup">
                    <SignUpForm onSubmit={values => props.signUp(values)}/>
                </Route>
            </Switch>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>
        </Grid>
    </Grid>
  );
}

export interface LandingLayoutProps {
    login: (values: UserCredentials) => AuthenticationProfile;
    signUp: (values: UserCredentials) => AuthenticationProfile;
    classes: any;
}

export default connect(null, { login, signUp })(LandingLayout);