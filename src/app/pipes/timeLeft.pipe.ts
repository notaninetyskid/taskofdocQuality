import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'timeLeft'
}) export class timeLeftPipe implements PipeTransform {

    transform(ms: number): string {
        

 const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `${hours}h`;
    } else if (minutes > 0) {
      return `${minutes} min`;
    } else {
      return `${seconds}s`;
    }
  }
}