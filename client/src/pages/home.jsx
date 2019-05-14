import React from "react";
import "./home.css"
import Logo from '../components/logo'
import Login from '../components/login'
import Header from '../components/header'
import GardenTips from '../components/gardenTips'
import Banner from '../components/banner'
import DailyJournal from '../components/dailyJournal'
import Inspiration from '../components/inspiration'
import MainPhoto from '../components/mainPhoto'
import Forum from '../components/forum'
import EmptyTipsDiv from '../components/emptyTipsDiv'
import EmptyInspirationDiv from '../components/emptyInspirationDiv'
import Footer from '../components/footer'



const Home = () => {
  return <div className="container-fluid full-width-div">
  <Logo/>
  <Login/>
  <Header/>
  <GardenTips/>
  <Banner/>
  <DailyJournal/>
  <Inspiration/>
  <MainPhoto/>
  <Forum/>
  <EmptyTipsDiv/>
  <EmptyInspirationDiv/>
  <Footer/>
</div>
}

export default Home;