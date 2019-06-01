import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import "./Carousel.css";
import data from "./data.json";
import Slide from "./Slide";
import scrollTo from "./scrollToAnimate";
import throttle from "lodash.throttle";
import classNames from "classnames";
// import App from './toDoForm/App'

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.handleLeftNav = this.handleLeftNav.bind(this);
    this.onResize = this.onResize.bind(this);
    this.throttleResize = throttle(this.onResize, 250);
    this.throttleScroll = throttle(this.onScroll, 250);
    this.animatingLeft = false;
    this.animatingRight = false;
    this.state = {
      numOfSlidesToScroll: 1,
      allTheWayLeft: false,
      allTheWayRight: false
    };
  }

  onScroll = event => {
    // console.log('scrolling');
    this.checkIfAllTheWayOver();
  };

  onResize() {
    // console.log('resizing');
    this.checkNumOfSlidesToScroll();
  }

  checkIfAllTheWayOver() {
    console.log("context", this);
    const { carouselViewport } = this.refs;
    // if(scrollLeft === 0;)
    // do not show button

    var allTheWayLeft = false;
    if (carouselViewport.scrollLeft === 0) {
      allTheWayLeft = true;
    }

    // if scrollLeft + lengthOfViewPortOffSetWidth === real length of the viewport
    // real length of viewport === total number of cards * 120px/eachCard

    var allTheWayRight = false;
    var amountScrolled = carouselViewport.scrollLeft;
    var viewportLength = carouselViewport.clientWidth;
    var totalWidthOfCarousel = carouselViewport.scrollWidth;
    console.log(
      "scrolling",
      totalWidthOfCarousel,
      amountScrolled,
      viewportLength + amountScrolled,
      viewportLength
    );
    if (amountScrolled + viewportLength === totalWidthOfCarousel) {
      allTheWayRight = true;
    }

    if (
      this.state.allTheWayLeft !== allTheWayLeft ||
      this.state.allTheWayRight !== allTheWayRight
    ) {
      this.setState({
        allTheWayLeft,
        allTheWayRight
      });
    }
  }

  componentDidMount() {
    this.checkNumOfSlidesToScroll();
    this.checkIfAllTheWayOver();
    window.addEventListener("resize", this.throttleResize);
    window.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.throttleResize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = event => {
    console.log(event.keyCode);
    const { keyCode } = event;
    var leftArrow = keyCode === 37;
    var rightArrow = keyCode === 39;
    var animatingRight = this.animatingRight;
    if (leftArrow && !this.state.allTheWayLeft) {
      if (!this.animatingLeft) {
        this.animatingLeft = true;
        this.handleLeftNav().then(() => {
          this.animatingLeft = false;
        });
      }
    } else if (rightArrow && !this.state.allTheWayRight) {
      if (!this.animatingRight) {
        this.animatingRight = true;
        this.handleRightNav().then(() => {
          this.animatingRight = false;
        });
      }
    }
  };

  checkNumOfSlidesToScroll() {
    var numOfSlidesToScroll;
    if (window.innerWidth <= 900) {
      numOfSlidesToScroll = "full";
    } else {
      numOfSlidesToScroll = 1;
    }
    if (this.state.numOfSlidesToScroll !== numOfSlidesToScroll) {
      console.log("in here", numOfSlidesToScroll);
      this.setState({
        numOfSlidesToScroll
      });
    }
  }

  widthAndTimeToScroll() {
    const { carouselViewport } = this.refs;
    var numOfSlidesToScroll = this.state.numOfSlidesToScroll;
    if (numOfSlidesToScroll === "full") {
      return {
        widthToScroll: carouselViewport.offsetWidth,
        timeToScroll: 400
      };
    } else {
      // var widthOfSlide = document.querySelector('.slide').offsetWidth;
      console.log("WHAT IS HERE", this.slide, findDOMNode(this.slide));
      var widthOfSlide = findDOMNode(this.slide).offsetWidth;
      console.log(widthOfSlide);
      var timeToMoveOneSlide = 400;
      let obj = {
        widthToScroll: numOfSlidesToScroll * widthOfSlide,
        timeToScroll: Math.min(numOfSlidesToScroll * timeToMoveOneSlide, 400)
      };
      console.log(obj);
      return obj;
    }
    // var widthOfSlide = 120;
    // var timeToMoveOneSlide = 200;
    // var newPosition = carouselViewport.scrollLeft - numOfSlidesToScroll * widthOfSlide;
    // var totalTimeToMove = Math.min( (numOfSlidesToScroll * timeToMoveOneSlide), 400 );
  }

  handleLeftNav(event) {
    // console.log('left clicked', this);
    const { carouselViewport } = this.refs;
    var { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();
    var newPosition = carouselViewport.scrollLeft - widthToScroll;
    console.log(carouselViewport.scrollLeft);
    console.log(widthToScroll);
    // var numOfSlidesToScroll = this.state.numOfSlidesToScroll;
    // var widthOfSlide = 120;
    // var timeToMoveOneSlide = 200;
    // var newPosition = carouselViewport.scrollLeft - numOfSlidesToScroll * widthOfSlide;
    // var totalTimeToMove = Math.min( (numOfSlidesToScroll * timeToMoveOneSlide), 400 );
    return scrollTo({
      element: carouselViewport,
      to: newPosition,
      duration: timeToScroll,
      scrollDirection: "scrollLeft",
      callback: this.checkIfAllTheWayOver,
      context: this
    });
  }
  handleRightNav = event => {
    //  console.log('right clicked', this)
    const { carouselViewport } = this.refs;
    var { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();
    var newPosition = carouselViewport.scrollLeft + widthToScroll;
    console.log(carouselViewport.scrollLeft);
    console.log(widthToScroll);
    var promise = scrollTo({
      element: carouselViewport,
      to: newPosition,
      duration: timeToScroll,
      scrollDirection: "scrollLeft",
      callback: this.checkIfAllTheWayOver,
      context: this
    });
    // console.log(promise);
    return promise;

    // var numOfSlidesToScroll = this.state.numOfSlidesToScroll;
    // var widthOfSlide = 120;
    // var timeToMoveOneSlide = 200;
    // var newPosition = carouselViewport.scrollLeft + numOfSlidesToScroll * widthOfSlide;
    // // var newPosition = carouselViewport.scrollLeft + carouselViewport.offsetWidth;
    // var totalTimeToMove = Math.min( (numOfSlidesToScroll * timeToMoveOneSlide), 400 );
  };

  renderSlides() {
    return data.map(state => {
      return (
        <Slide
          name={state.name}
          key={state.abbreviation}
          ref={compSlide => (this.slide = compSlide)}
        />
      );
    });
  }

  render() {
    const { allTheWayLeft, allTheWayRight } = this.state;
    const navClasses = classNames({
      "carousel-nav": true
    });
    const leftNavClasses = classNames(
      {
        "carousel-left-nav": true,
        "carousel-nav-disabled": allTheWayLeft
      },
      navClasses
    );
    const rightNavClasses = classNames(
      {
        "carousel-right-nav": true,
        "carousel-nav-disabled": allTheWayRight
      },
      navClasses
    );
    return (
      <div className="carousel-container">
        <button className={leftNavClasses} onClick={this.handleLeftNav}>
          &#60;
        </button>
        <div
          className="carousel-viewport"
          ref="carouselViewport"
          onScroll={this.throttleScroll}
        >
          {this.renderSlides()}
        </div>
        <button className={rightNavClasses} onClick={this.handleRightNav}>
          &#62;
        </button>
      </div>
    );
  }
}

export default Carousel;
