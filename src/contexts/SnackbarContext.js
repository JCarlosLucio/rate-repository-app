import { createContext, useContext, useMemo, useState } from 'react';

const initialSnackbar = {
  message: null,
  type: 'error',
};

const SnackbarContext = createContext({
  snackbar: initialSnackbar,
  setSnackbar: () => {},
});

const SnackbarProvider = ({ children }) => {
  const [state, setState] = useState({ message: null, type: 'error' });

  let timeoutId;

  /**
   * Sets Snackbar with message, type, and seconds, the value is reset after {seconds}
   * @param {{message: string, type: 'error'|'info'|'success'|'warn'}} value
   * @param {number} seconds
   */
  const setSnackbar = (value, seconds = 5) => {
    setState(value);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      setState(initialSnackbar);
    }, seconds * 1000);
  };

  const snackbar = useMemo(() => ({ snackbar: state, setSnackbar }), [state]);

  return (
    <SnackbarContext.Provider value={snackbar}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error('useSnackbar must be use within a SnackbarProvider');
  }

  const {
    snackbar: { message, type },
    setSnackbar,
  } = context;

  return { message, type, setSnackbar };
};

export default SnackbarProvider;
