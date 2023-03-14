import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/HomePage";
import { makeStyles } from "@material-ui/core";
// import { makeStyles } from "@mui/material";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor : "#14161a",
    color: "white",
    minHeight: "100vh"
  },
}));

function App() {

  const classes = useStyles();

  return (
    <BrowserRouter>
       {/* <div  style={{backgroundColor: 'black', color: 'white', minHeight: '100vh'}}> */}
       <div className={classes.App}>
          <Header />
           <Routes>
             <Route exact path="/" element={<Homepage />}  />
             <Route exact path="/coins/:id" element={<CoinPage />}  />
           </Routes>
       </div>
    </BrowserRouter>
 );
}

export default App;