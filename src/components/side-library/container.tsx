import { FunctionComponent, useState } from 'react';
import { SideLibraryComponent } from './component';
import { MenuOption } from './components/button-menu/component';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { SideLibraryStates } from './types';

export const SideLibrary: FunctionComponent = () => {
  const [openState, setOpenState] = useState<SideLibraryStates>(
    SideLibraryStates.closed
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
      createOptions={CreateOptions}
    />
  );
};
