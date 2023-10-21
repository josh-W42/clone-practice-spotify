import { Container, Box, IconButton, Tooltip } from '@mui/material';
import { FunctionComponent } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ButtonMenu } from './components';
import { MenuOption } from './components/button-menu/component';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { SideLibraryStates } from './types';

interface Props {
  createOptions: MenuOption[];
  openState: SideLibraryStates;
  changeOpenState: (state: SideLibraryStates) => void;
}

export const SideLibraryComponent: FunctionComponent<Props> = ({
  createOptions,
  openState,
  changeOpenState,
}) => {
  if (openState === SideLibraryStates.closed) {
    return (
      <Container
        sx={{
          position: 'fixed',
          border: '1px solid blue',
          width: '100px',
          left: 0,
        }}
      >
        <Box
          sx={{
            color: 'white',
            border: '1px solid white',
          }}
        >
          <Box>
            <Tooltip title="Expand Your Library">
              <IconButton
                color="inherit"
                aria-label="Expand your library"
                onClick={() => {
                  changeOpenState(SideLibraryStates.open);
                }}
              >
                <LibraryBooksOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    );
  } else if (openState === SideLibraryStates.open) {
    return (
      <Container
        sx={{
          position: 'fixed',
          border: '1px solid blue',
          width: '25%',
          left: 0,
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            flexDirection: 'row',
            display: 'flex',
            color: 'white',
            border: '1px solid white',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Tooltip title="Expand Your Library">
              <IconButton
                color="inherit"
                aria-label="Expand your library"
                onClick={() => {
                  changeOpenState(SideLibraryStates.closed);
                }}
              >
                <LibraryBooksOutlinedIcon />
              </IconButton>
            </Tooltip>
            <h3>Your Library</h3>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box>
            <ButtonMenu
              label="Create a playlist or folder"
              menuOptions={createOptions}
              showTooltip
            />
            <Tooltip title="Show more" placement="top">
              <IconButton
                color="inherit"
                aria-label="Show more"
                onClick={() => {
                  changeOpenState(SideLibraryStates.extended);
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    );
  } else {
    return (
      <Container
        sx={{
          position: 'fixed',
          border: '1px solid blue',
          width: '45%',
          left: 0,
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            color: 'white',
            border: '1px solid white',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Tooltip title="Expand Your Library">
              <IconButton
                color="inherit"
                aria-label="Expand your library"
                onClick={() => {
                  changeOpenState(SideLibraryStates.closed);
                }}
              >
                <LibraryBooksOutlinedIcon />
              </IconButton>
            </Tooltip>
            <h3>Your Library</h3>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box>
            <ButtonMenu
              label="Create a playlist or folder"
              menuOptions={createOptions}
              showTooltip
            />
            <Tooltip title="Show more" placement="top">
              <IconButton
                color="inherit"
                aria-label="Show more"
                onClick={() => {
                  changeOpenState(SideLibraryStates.open);
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    );
  }
};
