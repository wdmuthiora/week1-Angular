import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLapsed'
})
export class TimeLapsedPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDay());
    var dateDifference = Math.abs( value-todayWithNoTime);
    const secondsInADay = 86400;
    var dateDifferenceInSeconds = (dateDifference * 0.001)/3600;
    var timeLapsed = dateDifferenceInSeconds / secondsInADay;




    let ttoday: Date = new Date(); //get current date and time
    let ttodayWithNoTime: any = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference = Math.abs(value - todayWithNoTime); //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = (dateDifference * 0.001)/3600; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds / secondsInDay;



    if (timeLapsed >= 1 && value > todayWithNoTime) {
      let time = timeLapsed.toFixed(0);
      return parseInt(time);
    } else {
      return 0;
    }
  }

}
