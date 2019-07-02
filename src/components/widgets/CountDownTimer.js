/**
 * Countdown Timer
 */
import React, { Component } from "react";

export default class CountDownTimer extends Component {
   constructor(props) {
      super(props);
      this.state = { time: {}, seconds: props.time ? props.time : props.time };
      this.timer = 0;
      this.countDown = this.countDown.bind(this);
   }

   /**
    * function for convert seconds to time 
    * @param {obj} secs 
    */
   secondsToTime(secs) {
      let hours = Math.floor(secs / (60 * 60));

      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);

      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);

      let obj = {
         h: hours,
         m: minutes,
         s: seconds
      };
      return obj;
   }

   /**
    * component Did Mount
    */
   componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
      this.startTimer();
   }

   /**
    * function for start timer 
    */
   startTimer() {
      if (this.timer === 0) {
         this.timer = setInterval(this.countDown, 1000);
      }
   }

   /**
    * component will unmount
    */
   componentWillUnmount() {
      clearInterval(this.timer);
   }

   /**
    * define function for countdown 
    */
   countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
         time: this.secondsToTime(seconds),
         seconds: seconds
      });

      // Check if we're at zero.
      if (seconds === 0) {
         clearInterval(this.timer);
      }
   }

   render() {
      const { h, m, s } = this.state.time;
      return (
         <div className="iron-countdown-timer">
            <span className="counter-item">
               <span className="counter-digit">{h}</span>
               <span className="counter-text">{'hours'}</span>
            </span>
            <span className="counter-item">
               <span className="counter-digit">{m}</span>
               <span className="counter-text">{'minutes'}</span>
            </span>
            <span className="counter-item">
               <span className="counter-digit">{s < 10 ? `0${s}` : s}</span>
               <span className="counter-text">{'seconds'}</span>
            </span>
         </div>
      );
   }
}
