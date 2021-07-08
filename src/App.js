import React from 'react';

import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './component/GlobalStyles';
import { lightTheme, darkTheme } from './component/Themes';
import { useDarkMode } from './component/useDarkMode';
import Toggle from './component/Toggler';

import { useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase'
import Chat from './component/Chat';
import SignIn from './component/SignIn';



function App() {

  const [user] = useAuthState(auth);

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={ themeMode}>
      <>
        <GlobalStyles />
          <div className="App">
            <Toggle theme={theme} toggleTheme={themeToggler} />
            {user ? <Chat /> : <SignIn />}
          </div>
      </>
        
    </ThemeProvider>
  );
  
}

export default App;
