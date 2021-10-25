
import './App.css';
import Listapp from './Component/Listapp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { handelSET, handelset } from './redux/action';
import Footer from './Component/Footer';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Listmekup from './Component/Listmekup';


function App() {
  const dispatch = useDispatch()


    useEffect(() => {
        let getpress =async()=>{
       try {
           let res=await axios.get("http://universities.hipolabs.com/search?country=United+States")
          dispatch(handelset(res.data)) 
          
       } catch (error) {
           console.log(error)
           
       }
       
    }
    getpress()
    }, [])
  
    

    useEffect(() => {
    let getdata=async()=>{
      try {
        let res=await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        dispatch(handelSET(res.data))
        
      } catch (error) {
        console.log(error)
      }
    }
    getdata()
    }, [])
    
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Listapp}/>
      <Route exact path="/go_mekup/:id" component={Listmekup}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
