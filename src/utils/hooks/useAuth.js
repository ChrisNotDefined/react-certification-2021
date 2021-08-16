import { useCallback, useReducer } from 'react';
import loginApi from '../../providers/authAPI';
import { storage } from '../storage';

const ACTIONS = {
  LOGIN: 'AUTH/LOGIN',
  SUCCESS: 'AUTH/SUCCESS',
  ERROR: 'AUTH/ERROR',
  LOGOUT: 'AUTH/LOGOUT',
};

const authReducer = (state, [type, payload]) => {
  if (type === ACTIONS.LOGIN) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (type === ACTIONS.SUCCESS) {
    storage.set('login', payload);
    return {
      ...state,
      loading: false,
      user: payload,
    };
  }

  if (type === ACTIONS.ERROR) {
    return {
      ...state,
      loading: false,
      error: payload,
    };
  }

  if (type === ACTIONS.LOGOUT) {
    storage.set('login', null);
    return {
      loading: false,
      user: null,
      error: null,
    };
  }
};

const useAuth = () => {
  const [authStatus, dispatch] = useReducer(authReducer, {
    loading: false,
    user: storage.get('login'),
    error: null,
  });

  const login = useCallback(async (user, pwd) => {
    try {
      dispatch([ACTIONS.LOGIN]);
      const resp = await loginApi(user, pwd);
      dispatch([ACTIONS.SUCCESS, resp]);
    } catch (error) {
      dispatch([ACTIONS.ERROR, error.message]);
    }
  }, []);

  const logout = useCallback(() => {
    dispatch([ACTIONS.LOGOUT]);
  }, []);

  return {
    login,
    logout,
    state: authStatus,
  };
};

export { useAuth };
