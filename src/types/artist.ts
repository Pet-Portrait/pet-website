export interface RawArtist {
  avatar: string;
  behance: string | null;
  facebook: string | null;
  images: string[];
  instagram: string | null;
  featured: boolean;
  name: string;
  web: string | null;
}

export interface Artist extends RawArtist {
  id: string;
  description: string;
}
