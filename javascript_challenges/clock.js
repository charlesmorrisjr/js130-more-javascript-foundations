class Clock {
  constructor(hour, minutes) {
    this.hour = hour;
    this.minutes = minutes;
  }
  
  static at(hour, minutes = 0) {
    return new Clock(hour, minutes);
  }

  add(minutes) {
    let newHour = this.hour, newMinutes = this.minutes;
    
    let hours = Math.floor(minutes / 60);
    if (hours > 0) newHour += hours;
    if (newHour >= 24) newHour = newHour % 24;

    newMinutes += (minutes % 60);

    return new Clock(newHour, newMinutes);
  }

  subtract(minutes) {
    let newHour = this.hour, newMinutes = this.minutes;
    
    let hours = Math.floor(minutes / 60);
    if (hours > 0) newHour -= hours;
    if (newHour < 0) newHour = newHour % 24;

    newMinutes -= (minutes % 60);

    if (newMinutes < 0) {
      newMinutes = newMinutes % 60 + 60;
      newHour -= 1;
    }

    if (newHour < 0) {
      newHour += 24;
    }

    return new Clock(newHour, newMinutes);
  }

  toString() {
    let hours = this.hour > 9 ? `${this.hour}` : `0${this.hour}`;
    let minutes = this.minutes > 9 ? `${this.minutes}` : `0${this.minutes}`;
    return `${hours}:${minutes}`;
  }

  isEqual(otherClock) {
    return this.hour === otherClock.hour && this.minutes === otherClock.minutes;
  }
}

// let clock = new Clock();
// console.log(Clock.at(10).subtract(3061).toString());
// console.log(Clock.at(12));

module.exports = Clock;