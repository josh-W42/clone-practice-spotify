import { FunctionComponent, useState } from 'react';
import { SideLibraryComponent } from './component';
import { MenuOption } from './components/button-menu/component';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { SideLibraryFilters, SideLibraryStates } from './types';

export const SideLibrary: FunctionComponent = () => {
  const [openState, setOpenState] = useState<SideLibraryStates>(
    SideLibraryStates.closed
  );
  const [filter, setFilter] = useState<SideLibraryFilters>(
    SideLibraryFilters.none
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
      filter={filter}
      changeFilter={(filter) =>
        setFilter((prev) =>
          prev === filter ? SideLibraryFilters.none : filter
        )
      }
      changeOpenState={(state) => setOpenState(state)}
      createOptions={CreateOptions}
    />
  );
};
