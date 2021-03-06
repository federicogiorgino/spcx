export type Links = {
  article: string;
};

export type HistoricEvent = {
  links: Links;
  title: string;
  event_date_utc: string;
  event_date_unix: number;
  details: string;
  id: string;
} | null;
