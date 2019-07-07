import React, { Component } from "react";
import API from "../../utilities/API";
import "./style.css";

class Footer extends Component {
  state = {
    region: "",
    rainFallInfo: null
  };

  componentDidMount() {
    this.getRegionInfo();
  }

  getRegionInfo = () => {
    API.getEtWater(this.state.region).then(res =>
      this.setState({ rainFallInfo: res.data })
    );
  };

  render() {
    return (
      // <UserContext.Consumer>
      // {({user})} => (
      // user ? (

      <div className="item footer">
        <div className="item footer">
          <div>RAINFALL and EVAPOTRANSPIRATION</div>
        </div>

        <p>
          Evapotranspiration (ET) is the sum of evaporation and plant
          transpiration from the Earth’s land and ocean surface to the
          atmosphere. We auto-adjust your irrigation schedule based in part on
          ET, water depletion amounts, plant types, soil composition, rainfall,
          and forecasts, and water only the amount needed.
        </p>
        
        
        <div className="form-item region">
          <input
            type="text"
            className="form-input"
            name="region"
            placeholder="city/region"
            value={this.state.region}
            onChange={e => this.setState({ region: e.target.value })}
          />
        </div>

        <button
          className="btn"
          type="submit"
          onClick={() => this.getRegionInfo()}
        >
          Submit
        </button>
        <div>{(this.state.rainFallInfo !== null) ?  <div>
          <p>Rain Fall:this.state.rainFallInfo.daily[Object.keys(this.state.rainFallInfo.daily)[0]][0].rainMm</p>
          {/* <p>Avg Temp:this.state.rainFallInfo.daily[Object.keys(this.state.rainFallInfo.daily)[0]][0].rainMm</p> */}
          </div> : <p></p>}</div>
      </div>


      // ) : <div>Please Login</div>)
      //   )}
      // </UserContext.Consumer>
    );
  }
}

export default Footer;
