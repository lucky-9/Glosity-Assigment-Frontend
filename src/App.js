import { createTheme, ThemeProvider } from '@mui/material/styles';

import Main from './Main';
import SideBar from './SideBar';

import './App.css';

const theme = createTheme({
  components: {
    MuiCalendarPicker: {
      root: {
        selectColor: "#000",
      }
    },
    MuiPickersCalendarHeader: {
      root: {
        backgroundColor: '#000',
        color: "white",
      },
    },
  },
  palette: {
    primary: {
      light: '#f35da1',
      main: '#F1358A',
      dark: '#a82560',
      contrastText: '#fff',
    },
    secondary: {
      light: '#44e1b2',
      main: '#16DA9F',
      dark: '#0f986f',
      contrastText: '#fff',
    },
    accent: {
      light: '#5184a6',
      main: '#74BDEE',
      dark: '#8fcaf1',
      contrastText: '#fff',
    }
  }
})

const App = () => (
  
    <ThemeProvider theme={theme}>
      <div className="App">
      {/* Side bar*/}
      {/* Main content*/}
      <SideBar />
      <Main />
    </div>
    </ThemeProvider>

);


export default App; 
