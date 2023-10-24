import { Avatar, List, ListItem, ListItemAvatar } from '@mui/material';
import { FunctionComponent } from 'react';
import { SideLibraryPlaylistStates, playlistData } from '../../types';

interface Props {
  playlists: playlistData[];
  viewState: SideLibraryPlaylistStates;
  changeViewState: (state: SideLibraryPlaylistStates) => void;
}

export const PlaylistListComponent: FunctionComponent<Props> = ({
  playlists,
}) => {
  const getPlaylists = () => {
    return playlists.map((playlist, index) => {
      return (
        <ListItem key={`side-library-playlist-list-item-${index}`}>
          <ListItemAvatar>
            <Avatar
              alt={playlist.description}
              src={playlist.images[0]?.url ?? ''}
            />
          </ListItemAvatar>
        </ListItem>
      );
    });
  };

  return <List>{getPlaylists()}</List>;
};
