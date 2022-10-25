import { Artist } from 'types/artist';

export const mockedArtist: Artist = {
  avatar: 'https://i.pravatar.cc/300',
  name: 'John Doe',
  id: '1',
  behance: 'https://www.behance.net/johndoe',
  description: 'Lorem ipsum dolor sit amet, consectetur <h1>adipiscing</h1> elit.',
  facebook: 'https://www.facebook.com/johndoe',
  images: ['https://i.pravatar.cc/300', 'https://i.pravatar.cc/400'],
  instagram: 'https://www.instagram.com/johndoe',
  web: 'https://www.johndoe.com',
};

export const mockedArtist2: Artist = {
  avatar: 'https://i.pravatar.cc/300',
  name: 'Jane Doe',
  id: '2',
  behance: 'https://www.behance.net/janedoe',
  description: 'Lorem ipsum dolor sit amet, consectetur <h1>adipiscing</h1> elit.',
  facebook: 'https://www.facebook.com/janedoe',
  images: ['https://i.pravatar.cc/300', 'https://i.pravatar.cc/400'],
  instagram: 'https://www.instagram.com/janedoe',
  web: 'https://www.janedoe.com',
};

export const mockedArtistList: Artist[] = [mockedArtist, mockedArtist2];
