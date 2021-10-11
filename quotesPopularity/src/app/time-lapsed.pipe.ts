import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLapsed'
})
export class TimeLapsedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
