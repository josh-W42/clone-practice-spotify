import { FunctionComponent } from 'react';
import { SideLibraryComponent } from './component';
import { MenuOption } from './components/button-menu/component';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

export const SideLibrary: FunctionComponent = () => {
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
  return <SideLibraryComponent createOptions={CreateOptions} />;
};
