import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLapsed',
})
export class TimeLapsedPipe implements PipeTransform {

  transform(value: any): number {
    //sfsadfsaf
    // var startTime = ;
    // var endTime: Date = new Date();

    // function end() {
    //   endTime = new Date();
    //   var timeDiff = endTime - startTime; //in ms
    //   // strip the ms
    //   timeDiff /= 1000;

    //   // get seconds
    //   var seconds = Math.round(timeDiff);
    //   console.log(seconds + ' seconds');
    // }

    //asdfafasdf

    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDay()
    );
    var dateDifference = Math.abs(value - todayWithNoTime); //returns value in miliseconds

    const secondsInADay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    const minutesInADay = 1440; //60 minutes in an hour * 24 hours in a day

    var dateDifferenceInSeconds = (dateDifference /1000) / 3600; //converts miliseconds to seconds
    var timeLapsed = dateDifferenceInSeconds / minutesInADay;

    if (timeLapsed >= 0.1 && value > todayWithNoTime) {
      let time = timeLapsed.toFixed(0);
      return parseInt(time);
    } else {
      return 0;
    }
  }
}
