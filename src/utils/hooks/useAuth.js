import { useCallback, useEffect, useReducer } from 'react';
import { storage } from '../storage';
import {
  listenToChanges,
  registerUser,
  signOutUser,
  signUser,
} from '../../providers/firebaseAuth';

const ACTIONS = {
  LOGIN: 'AUTH/LOGIN',
  SUCCESS: 'AUTH/SUCCESS',
  ERROR: 'AUTH/ERROR',
  LOGOUT: 'AUTH/LOGOUT',
  UPDATE: 'AUTH/UPDATE',
};

const authReducer = (state, [type, payload]) => {
  if (type === ACTIONS.LOGIN) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (type === ACTIONS.UPDATE) {
    storage.set('login', payload);
    return {
      ...state,
      user: payload,
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
      const resp = await signUser(user, pwd);
      console.log(resp);
      dispatch([ACTIONS.SUCCESS, resp.user]);
    } catch (error) {
      dispatch([ACTIONS.ERROR, error]);
      return error;
    }
  }, []);

  const register = useCallback(async ({ email, password, repeatPass, name }) => {
    try {
      if (password !== repeatPass)
        throw new Error('Check that your passwords were written correctly.');
      dispatch([ACTIONS.LOGIN]);
      const resp = await registerUser({ email, password, name });
      console.log(resp);
      dispatch([ACTIONS.SUCCESS, resp.user]);
    } catch (error) {
      console.error(error);
      dispatch([ACTIONS.ERROR], error);
      return error;
    }
  }, []);

  const logout = useCallback(() => {
    signOutUser();
    dispatch([ACTIONS.LOGOUT]);
  }, []);

  useEffect(() => {
    const closeSubs = listenToChanges((user) => {
      if (user) {
        dispatch([ACTIONS.UPDATE, user]);
      }
    });

    return () => closeSubs();
  }, []);

  return {
    login,
    logout,
    register,
    state: authStatus,
  };
};

export { useAuth };
