export interface Webinar {
  Thumbnail: string;
  uploadedBy: {
    img: string,
    name: string,
    minLeft?: number
  };
  description: string;
  credits?: {
    credit: string;
    expiringIn: number;
  };
  duration?: string;
  keyHighlight?: string;
  statusBadge?: string;
  peopleWatching?: number;
  goesLiveOn?: string;
  progress?: number;
  type?: string
}
