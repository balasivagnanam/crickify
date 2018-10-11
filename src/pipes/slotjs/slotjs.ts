import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
/**
 * Generated class for the MomentjsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'slotjs',
})
export class SlotjsPipe implements PipeTransform {

  transform(value: string, ...args) {
    return moment(value).utc().local().format("HH:mm");
    //return value.toLowerCase();
  }
}
