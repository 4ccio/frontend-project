import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useLocation, Navigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { JSX } from 'react';

export function RequireAuth({ children } : {children: JSX.Element}) {
    const auth = useSelector(getUserAuthData);
    console.log({ auth });
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePaths.main} state={{ form: location }} replace />;
    }

    return children;
}
