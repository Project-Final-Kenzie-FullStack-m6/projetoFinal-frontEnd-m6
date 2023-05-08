import { createTheme } from '@mui/material/styles';


const themeMui = createTheme({

  palette: {
    primary: {
      main: '#4529E6',
    },
  },
});

export default themeMui;

declare module '@mui/material'{
    interface colorStyle{
        primary: true;
    }
}
  
