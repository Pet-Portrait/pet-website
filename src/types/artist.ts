import { RawArtist } from 'queries/artist';

export interface Artist extends RawArtist {
  id: string;
  description: string;
}
