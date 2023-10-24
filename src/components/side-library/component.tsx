import { Container, Box, IconButton, Tooltip } from '@mui/material';
import { FunctionComponent } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ButtonMenu, ChipBar, PlaylistList } from './components';
import { MenuOption } from './components/button-menu/component';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import {
  SideLibraryFilters,
  SideLibraryPlaylistStates,
  SideLibraryStates,
} from './types';

interface Props {
  createOptions: MenuOption[];
  filter: SideLibraryFilters;
  openState: SideLibraryStates;
  playlistState: SideLibraryPlaylistStates;
  changePlaylistState: (state: SideLibraryPlaylistStates) => void;
  changeOpenState: (state: SideLibraryStates) => void;
  changeFilter: (filter: SideLibraryFilters) => void;
}

export const SideLibraryComponent: FunctionComponent<Props> = ({
  createOptions,
  openState,
  filter,
  playlistState,
  changePlaylistState,
  changeOpenState,
  changeFilter,
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
          <Box>
            <PlaylistList
              sideLibraryOpenState={openState}
              viewState={playlistState}
              changeViewState={changePlaylistState}
            />
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
            flexDirection: 'column',
            display: 'flex',
            color: 'white',
            border: '1px solid white',
          }}
        >
          <Box
            sx={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid red',
              width: '100%',
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
          <Box>
            <ChipBar filter={filter} changeFilter={changeFilter} />
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
            flexDirection: 'column',
            display: 'flex',
            color: 'white',
            border: '1px solid white',
          }}
        >
          <Box
            sx={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid red',
              width: '100%',
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
          <Box>
            <ChipBar filter={filter} changeFilter={changeFilter} />
          </Box>
        </Box>
      </Container>
    );
  }
};
