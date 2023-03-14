import { AppBar, Container, createMuiTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { CryptoState } from '../CryptoContext';

 const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  }
 }))

function Header() {

  const classes = useStyles(); 
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();

  console.log(currency);

  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography variant='h6' onClick={() => navigate("/")} className={classes.title}>Crypto Hunter</Typography>

            <Select variant='outlined' value={currency} onChange={(e) => setCurrency(e.target.value)} style={{width: 100, height: 40, marginRight: 15}}>
              <MenuItem value={'USD'} >USD</MenuItem>
              <MenuItem value={'PKR'} >PKR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>

  )
}

export default Header
