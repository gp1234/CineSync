export interface IMovie {
  title: string;
  year: number;
  cast: string[];
  genres?: string[];
  href?: string | null | undefined;
  extract?: string | undefined;
  thumbnail?: string | undefined;
  thumbnail_width?: number | undefined;
  thumbnail_height?: number | undefined;
  index: number;
}
