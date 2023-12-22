export interface Store {
  images: {
    [id: string]: Image;
  };
  addImage: (image: Image) => void;
  removeImage: (image: Image) => void;
}

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Image {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  isFavorite?: boolean;
}
