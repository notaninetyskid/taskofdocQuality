export interface Webinar {
  Thumbnail: string;
  title: string;
  description: string;
  credits: {
    credit: string;
    expiringIn: string;
  };
  duration?: string;
  keyHighlight?: string;
  statusBadge?: string;
}
