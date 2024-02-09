import React, { useContext } from 'react';
import AuthContext from '../context/auth';
//import SignIn from '../services/access';

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
const {signed} = useContext(AuthContext)

    return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;