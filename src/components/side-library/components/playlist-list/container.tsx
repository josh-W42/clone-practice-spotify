import { FunctionComponent } from 'react';
import { PlaylistListComponent } from './component';
import { SideLibraryStates } from '../../types';

interface Props {
  openState: SideLibraryStates;
}

export const PlaylistList: FunctionComponent<Props> = () => {
  return <PlaylistListComponent playlists={[]} />;
};
