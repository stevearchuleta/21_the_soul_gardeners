import React, { Component } from "react";
import axios from 'axios';
import "./home.css"
// import Logo from '../components/logo'
import Header from '../components/header'
// import Register from '..components.register'
import Login from '../components/loginWrapper'
import GardenTips from '../components/gardenTips'
import Banner from '../components/banner'
import DailyJournal from '../components/dailyJournal'
import Inspiration from '../components/inspiration'
import MainPhoto from '../components/mainPhoto'
import Forum from '../components/forum'
import EmptyTipsDiv from '../components/emptyTipsDiv'
import EmptyInspirationDiv from '../components/emptyInspirationDiv'
import Footer from '../components/footer'
import UserContext from "../utilities/userContext";



class Home extends Component {

  // static contextType = UserContext;

  state = {
    plants: [],
    selectedPlant: null,
    category: null
  }

  changePlant = (id) => {
    this.setState({
      selectedPlant: id

    })
    console.log(id);
  }

  getCategory = (category) => {
    axios.get(`api/gardenTips/${category}`).then(res => {
      console.log("getCategory", res.data.articles);
      this.setState({ 
        // plants: [],
        selectedPlant: null,
        category: res.data.articles
      })
      })
  }

  componentDidMount(){
    axios.get("/api/harvestHelper")
    .then((res) => {
    
    this.setState({ plants: res.data.sort((a,b) => a.name > b.name ? 1 : -1) })
  
  })
  .catch(err => console.log(err));


}



  render(){
    // const { user } = this.context
    console.log(this.state.tips);
  return (
  <div className="container-fluid full-width-div">
  {/* <Logo/> */}
  <Login/>
  <Header/>
  <GardenTips plants={this.state.plants} changePlant={this.changePlant} getCategory={this.getCategory}/>
  <Banner/>
  <DailyJournal/>
  <Inspiration/>
  <MainPhoto/>
  <Forum/>
  <EmptyTipsDiv plant={this.state.selectedPlant ? this.state.plants[this.state.selectedPlant] : null} category={this.state.selectedPlant ? null : this.state.category}/>
  <EmptyInspirationDiv/>
  <Footer/>
</div>)
  }
}

export default Home;