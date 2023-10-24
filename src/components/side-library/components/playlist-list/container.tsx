import { FunctionComponent } from 'react';
import { PlaylistListComponent } from './component';
import { SideLibraryPlaylistStates, SideLibraryStates } from '../../types';

interface Props {
  sideLibraryOpenState: SideLibraryStates;
  viewState: SideLibraryPlaylistStates;
  changeViewState: (state: SideLibraryPlaylistStates) => void;
}

export const PlaylistList: FunctionComponent<Props> = ({
  viewState,
  changeViewState,
}) => {
  return (
    <PlaylistListComponent
      viewState={viewState}
      changeViewState={changeViewState}
      playlists={[]}
    />
  );
};
