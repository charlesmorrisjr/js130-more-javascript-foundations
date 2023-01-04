class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }

  day(weekday, schedule) {
    const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const SCHEDULE = ['first', 'second', 'third', 'fourth', 'fifth', 'last', 'teenth'];
    const TEENTH_START = 13
    const TEENTH_END = 19;
  
    weekday = weekday.toLowerCase();
    schedule = schedule.toLowerCase();

    let dayCounter = 0;

    let START_DATE = 1, END_DATE = 31;
    if (schedule === 'teenth') {
      START_DATE = TEENTH_START;
      END_DATE = TEENTH_END;

    }

    if (schedule !== 'last') {
      for (let date = START_DATE; date <= END_DATE; date++) {
        if (new Date(this.year, this.month, date).getDay() === DAYS.indexOf(weekday)) {
          if (dayCounter === SCHEDULE.indexOf(schedule) || schedule === 'teenth') {
            return new Date(this.year, this.month, date);
          } else {
            dayCounter += 1;
          }
        }
      }
    } else {
      for (let date = 31; date >= 1; date--) {
        if (new Date(this.year, this.month, date).getMonth() === this.month) {
          if (new Date(this.year, this.month, date).getDay() === DAYS.indexOf(weekday)) {
            return new Date(this.year, this.month, date);
          }
        }
      }
    }

    return null;
  }
}

module.exports = Meetup;