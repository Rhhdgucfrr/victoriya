import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import Profile from "../../pages/Profile";
import NotFound from "../../pages/NotFound";
import Create from "../../pages/Create/Create";
import Edit from "../../pages/Edit/Edit";
import Ruls from "../../pages/Ruls/Ruls";
import History from "../../pages/Histiry/History";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ChannelNotifications from "../../pages/Channel/ChannelNotifications";
import ProblemsDetails from "../../pages/Problems/ProblemsDetails";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../components/PrivateRoute";
import GuestRoute from "../components/GuestRoute";
import {
  CircularProgress,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";
import ListObjects from "../../pages/Objects/Objects";
import Users from "../../pages/Users/Users";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function AppRoutes() {
  const classes = useStyles();
  const auth = useAuth();

  return auth.isLoaded ? (
    <Routes>
       <Route
        path="/objects"
        element={
          <PrivateRoute>
            <ListObjects />
          </PrivateRoute>
        }
      />
       <Route
        path="/channels"
        element={
          <PrivateRoute>
            <ChannelNotifications />
          </PrivateRoute>
        }
      />
       <Route
        path="/problems_description"
        element={
          <PrivateRoute>
            <ProblemsDetails />
          </PrivateRoute>
        }
      />
     <Route
        path="/history"
        element={
          <PrivateRoute>
            <History/>
          </PrivateRoute>
        }
      />
       <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/ruls"
        element={
          <PrivateRoute>
            <Ruls />
          </PrivateRoute>
        }
      />
       <Route
        path="/objects/:type"
        element={
          <PrivateRoute>
            <ListObjects />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Home />} />

      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users/>
          </PrivateRoute>
        }
      />
      <Route
        path="/users/create"
        element={
          <PrivateRoute>
            <Create/>
          </PrivateRoute>
        }
      />
      <Route
        path="/users/:id/edit"
        element={
          <PrivateRoute>
            <Edit/>
          </PrivateRoute>
        }
      />


      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      
      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/registration"
        element={
          <GuestRoute>
            <Registration />
          </GuestRoute>
        }
      />

      <Route path="/not-found-404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found-404" />} />
    </Routes>
  ) : (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AppRoutes;
