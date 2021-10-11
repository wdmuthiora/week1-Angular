import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLapsed'
})
export class TimeLapsedPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDay()
    );
    var dateDifference = Math.abs(todayWithNoTime - value);
    const secondsInADay = 86400;
    var dateDifferenceInSeconds = dateDifference * 0.001;
    var timeLapsed = dateDifferenceInSeconds / secondsInADay;
    if (timeLapsed >= 1 && value > todayWithNoTime) {
      return timeLapsed;
    } else {
      return 0;
    }
  }

}
