import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { Field, reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const validate = (values: any) => {
    const errors: any = {}
    const requiredFields = [
      'companyName',
      'email',
      'password',
      'confirmPassword'
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    return errors
  }

const renderTextField = ({
    input, 
    label, 
    meta: { touched, error },
    ...custom
}: any) => (
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label={label}
              hint={label}
              helperText={touched && error}
              {...input}
              {...custom}
            />
);

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100% !important', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  h2: {
    margin: theme.spacing(1.5, 0, 0),
  },
}));

export const RegisterCompanyForm = (props: any) => {
  const { handleSubmit, pristine, submitting } = props
  const classes = useStyles();

  return (
    <Grid className={classes.form}>
        <Typography component="h1" variant="h5">
          Register Your Company
        </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Typography className={classes.h2} component="h4" variant="h6">
                  Company
              </Typography> 
              <div>
                <Field name="companyName" id="companyName" label="Company Name" component={renderTextField} autoFocus/>
              </div>
              <Typography className={classes.h2} component="h4" variant="h6">
                  Contact
              </Typography> 
              <div>
                <Field name="email" id="email" label="Email" component={renderTextField} />
              </div>
              <div>
                  <Field name="password" id="password" label="Password" component={renderTextField}/>
              </div>
              <div>
                  <Field name="confirmPassword" id="confirmPassword" label="Confirm Password" component={renderTextField}/>
              </div>
        
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={pristine || submitting}
            >
              Register
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Button component={Link} to="/login">
                  {"Already have an account? Login"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
  );
}

export default reduxForm({
    form: 'Register Company Form',
    validate,
})(RegisterCompanyForm);