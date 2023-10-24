import { FunctionComponent } from 'react';
import { PlaylistListComponent } from './component';
import { SideLibraryPlaylistStates, SideLibraryStates } from '../../types';

interface Props {
  sideLibraryOpenState: SideLibraryStates;
  viewState: SideLibraryPlaylistStates;
  changeViewState: (state: SideLibraryPlaylistStates) => void;
}

export const PlaylistList: FunctionComponent<Props> = () => {
  return <PlaylistListComponent playlists={[]} />;
};
