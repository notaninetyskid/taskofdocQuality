import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'msToTime'
})
export class MsToTimePipe implements PipeTransform {
  transform (ms: number | undefined): string {
    if (!ms || ms < 0) return '0s'

    const days = Math.floor(ms / (1000 * 60 * 60 * 24))
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((ms % (1000 * 60)) / 1000)

    let result = ''
    if (days) result += `${days}d `
    if (hours) result += `${hours}h `
    if (minutes) result += `${minutes}m `
  

    return result.trim()
  }
}
