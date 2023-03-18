import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks/redux';
import { PAGE_PATHS } from '../../utils/consts';

type PrivateRouteProps = {
  children: JSX.Element;
};

export const AuthRoute = ({ children }: PrivateRouteProps) => {
  const isAuth = useAppSelector((state) => state.userReduser.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(PAGE_PATHS.mainPagePath);
    }
  }, [isAuth, navigate]);

  return children;
};
