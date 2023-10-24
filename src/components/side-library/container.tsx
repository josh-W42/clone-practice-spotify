import { FunctionComponent, useState } from 'react';
import { SideLibraryComponent } from './component';
import { MenuOption } from './components/button-menu/component';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import {
  SideLibraryFilters,
  SideLibraryPlaylistStates,
  SideLibraryStates,
} from './types';

export const SideLibrary: FunctionComponent = () => {
  const [openState, setOpenState] = useState<SideLibraryStates>(
    SideLibraryStates.closed
  );
  const [filter, setFilter] = useState<SideLibraryFilters>(
    SideLibraryFilters.none
  );

  const [playlistState, setPlaylistState] = useState<SideLibraryPlaylistStates>(
    SideLibraryPlaylistStates.grid
  );

  const CreateOptions: MenuOption[] = [
    {
      action: () => {
        //
      },
      content: (
        <>
          <PlaylistAddOutlinedIcon />
          <span>Create a new playlist</span>
        </>
      ),
    },
    {
      action: () => {
        //
      },
      content: (
        <>
          <FolderOutlinedIcon />
          <span>Create a a playlist folder</span>
        </>
      ),
    },
  ];

  return (
    <SideLibraryComponent
      openState={openState}
      changeOpenState={(state) => setOpenState(state)}
      playlistState={playlistState}
      changePlaylistState={(state) => setPlaylistState(state)}
      filter={filter}
      changeFilter={(filter) =>
        setFilter((prev) =>
          prev === filter ? SideLibraryFilters.none : filter
        )
      }
      createOptions={CreateOptions}
    />
  );
};
