import { Component, OnInit } from '@angular/core'
import { Webinar } from '../modals/webinar.modal'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor () {}

  active: string = 'For you'

  tabs: string[] = ['For you', 'Live', 'Upcoming']

  upcomingWebinars: Webinar[] = [
    {
      Thumbnail: '/assets/webinarCards/webinar banner-07 2.png',
      uploadedBy: {
        img: '/assets/icons/image 171.png',
        name: 'by PDGI Indonesia'
      },
      description:
        'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from',
      credits: {
        credit: '2',
        expiringIn: 85800000
      },
      keyHighlight: 'Manage chronic and complex diseases',
      goesLiveOn: '1736245800000'
    },
    {
      Thumbnail: '/assets/webinarCards/220923_FKUI_APPS 2.png',
      uploadedBy: {
        img: '/assets/icons/image 171.png',
        name: 'by PDGI Indonesia'
      },
      description:
        'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from',
      credits: {
        credit: '2',
        expiringIn: 85800000
      },
      keyHighlight: 'Manage chronic and complex diseases',
      goesLiveOn: '1736245800000'
    },
    {
      Thumbnail: '/assets/webinarCards/imageupcomingLast.png',
      uploadedBy: {
        img: '/assets/icons/image 171.png',
        name: 'by PDGI Indonesia'
      },
      description:
        'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from',
      credits: {
        credit: '2',
        expiringIn: 85800000
      },
      keyHighlight: 'Manage chronic and complex diseases',
      goesLiveOn: '1736245800000'
    }
  ]

  webinarsBased: Webinar[] = [
    {
      Thumbnail: '/assets/webinarCards/webinar-1 1.png',
      uploadedBy: {
        img: '/assets/icons/image 171.png',
        name: 'by PDGI Indonesia'
      },
      description: 'The Covid19 Management of Parox Health caretine',
      credits: {
        credit: '2',
        expiringIn: 0
      },
      duration: '24:50',
      keyHighlight: 'Manage chronic and complex diseases',
      goesLiveOn: '1736245800000',
      type: 'regular'
    },
    {
      Thumbnail: '/assets/webinarCards/220923_FKUI_APPS 2.png',
      uploadedBy: {
        img: '/assets/icons/image 171.png',
        name: 'by PDGI Indonesia'
      },
      description: 'The Covid19 Management of Parox Health caretine',
      credits: {
        credit: '2',
        expiringIn: 0
      },
      keyHighlight: 'Manage chronic and complex diseases',
      goesLiveOn: '1736245800000',
      type: 'Upcoming'
    },
    {
      Thumbnail: '/assets/webinarCards/image2.png',
      uploadedBy: {
        img: '/assets/icons/download 1.png',
        name: 'by PDGI Indonesia'
      },
      description: 'The Covid19 Management of Parox Health caretine',
      credits: {
        credit: '2',
        expiringIn: 0
      },
      duration: '24:50',

      keyHighlight: 'Manage chronic and complex diseases',
      goesLiveOn: '1736245800000',
      peopleWatching: 200,
      type: 'Live'
    }
  ]

  liveWebinars: Webinar[] = [
    {
      Thumbnail: '/assets/webinarCards/image 124.png',
      uploadedBy: {
        img: '/assets/icons/image 171.png',
        name: 'by PDGI Indonesia'
      },
      description:
        'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from',
      credits: {
        credit: '2',
        expiringIn: 85800000
      },
      peopleWatching: 200,
      duration: '24:50',
      keyHighlight: 'Manage chronic and complex diseases'
    },

    {
      Thumbnail: '/assets/webinarCards/image2.png',
      uploadedBy: {
        img: '/assets/icons/image copy.png',
        name: 'by PDGI Indonesia'
      },
      description:
        'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from',
      credits: {
        credit: '2',
        expiringIn: 85800000
      },
      peopleWatching: 200,
      duration: '24:50',
      keyHighlight: 'Manage chronic and complex diseases'
    },
    {
      Thumbnail: '/assets/webinarCards/image3.png',
      uploadedBy: {
        img: '/assets/icons/download 1.png',
        name: 'by PDGI Indonesia'
      },
      description:
        'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from',
      credits: {
        credit: '2',
        expiringIn: 85800000
      },
      peopleWatching: 200,
      duration: '24:50',
      keyHighlight: 'Manage chronic and complex diseases'
    }
  ]

  continueWatching: Webinar[] = [
    {
      Thumbnail: '/assets/webinarCards/webinar-1 1.png',
      uploadedBy: {
        img: '/assets/icons/image 171.png',
        name: 'by PDGI Indonesia',
        minLeft: 62000
      },
      description: 'New Perspectives in The Covid19 Management',
      progress: 50,
      duration: '24:50',
      keyHighlight: 'Manage chronic and complex diseases'
    },
    {
      Thumbnail: '/assets/webinarCards/webinar-1 1.png',
      uploadedBy: {
        img: '/assets/icons/image 171.png',
        name: 'by PDGI Indonesia',
        minLeft: 62000
      },
      description: 'Perspectives in The Covid19 Management',
      progress: 50,
      duration: '24:50',
      keyHighlight: 'Manage chronic and complex diseases'
    },
    {
      Thumbnail: '/assets/webinarCards/webinar-1 1.png',
      uploadedBy: {
        img: '/assets/icons/image 171.png',
        name: 'by PDGI Indonesia',
        minLeft: 62000
      },
      description: 'New Perspectives in The 12',
      progress: 50,
      duration: '24:50',
      keyHighlight: 'Manage chronic and complex diseases'
    },
    {
      Thumbnail: '/assets/webinarCards/webinar-1 1.png',
      uploadedBy: {
        img: '/assets/icons/image 171.png',
        name: 'by PDGI Indonesia',
        minLeft: 62000
      },
      description: 'New Perspectives in The 12',
      progress: 50,
      duration: '24:50',
      keyHighlight: 'Manage chronic and complex diseases'
    },
    {
      Thumbnail: '/assets/webinarCards/webinar-1 1.png',
      uploadedBy: {
        img: '/assets/icons/image 171.png',
        name: 'by PDGI Indonesia',
        minLeft: 62000
      },
      description: 'New Perspectives in The Covid19 Management',
      progress: 50,
      duration: '24:50',
      keyHighlight: 'Manage chronic and complex diseases'
    }
  ]

  ngOnInit (): void {}
}
