import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  makeStyles,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import ChipLang from "../../Components/ChipLang";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  buttonSpacing: {
    marginLeft: theme.spacing(1),
  },
}));

function Registration() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await api.auth.registration(data);
      const { data: loginData } = await api.auth.login(data);
      auth.setToken(loginData.token);
      auth.setUser(loginData.user);
    } catch (e) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
            type: "manual",
            message: e.response.data.errors[key],
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="content" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/image/look.com.ua-53468.jpeg'})` }}>
      <div className="content-left">
        <Grid container spacing={1} >
          <Grid item xs={7}>
            <Typography variant="h4" style={{ color: '#fff' }}>VICTORIYA</Typography> <br />
            <Typography variant="h3" style={{ color: '#fff' }}>The system of automation of the educational process for the base of compulsory school education</Typography>
          </Grid>
        </Grid>

      </div>
      <div className="content-right">
      <Grid container spacing={3} style={{paddingTop:'20px'}}>
          <Grid item xs={12}>
            <Typography variant="h8">Victoriya make your issue</Typography>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Create new account</Typography>
          </Grid>
        </Grid> <br/><br/>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={Boolean(errors.firstName?.message)}
                    fullWidth={true}
                    label="First name"
                    variant="outlined"
                    helperText={errors.firstName?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={Boolean(errors.lastName?.message)}
                    fullWidth={true}
                    label="Last name"
                    variant="outlined"
                    helperText={errors.lastName?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={Boolean(errors.email?.message)}
                    fullWidth={true}
                    type="email"
                    label="Email"
                    variant="outlined"
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={Boolean(errors.password?.message)}
                    type="password"
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    helperText={errors.password?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isLoading}
              >
                Registration
              </Button>
              <Button
                color="#303f9f"
                type="submit"
                className={classes.buttonSpacing}
                component={Link}
                to="/login"
              >
                have an account?
              </Button>
            </Grid>
          </Grid>
        </form>
        <ChipLang/>
      </div>
    </div>

  );
}

export default Registration;
