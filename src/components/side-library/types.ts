export enum SideLibraryStates {
  closed,
  open,
  extended,
}

export enum SideLibraryFilters {
  none,
  playlists,
  playlistSpotify,
  playlistYou,
  playlistWriteable,
  artists,
  albums,
}

export interface playlistImage {
  url: string;
  height: string;
  width: string;
}

export interface ownerData {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  type: 'user';
  uri: string;
  display_name: string;
}

export interface playlistData {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: playlistImage[];
  name: string;
  owner: ownerData;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

export enum SideLibraryPlaylistStates {
  compact,
  list,
  grid,
}
