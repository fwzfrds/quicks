import './App.css';
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
