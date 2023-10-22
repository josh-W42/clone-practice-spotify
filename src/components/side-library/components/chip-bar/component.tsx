import { Box } from '@mui/material';
import Chip from '@mui/joy/Chip';
import { FunctionComponent } from 'react';
import { SideLibraryFilters } from '../../types';

interface Props {
  filter: SideLibraryFilters;
  changeFilter: (filter: SideLibraryFilters) => void;
}

export const ChipBarComponent: FunctionComponent<Props> = ({
  filter,
  changeFilter,
}) => {
  switch (filter) {
    case SideLibraryFilters.none:
      return (
        <Box>
          <Chip
            size="md"
            variant="solid"
            sx={{ margin: '0 5px', fontWeight: 'normal' }}
            onClick={() => changeFilter(SideLibraryFilters.playlists)}
          >
            Playlists
          </Chip>
          <Chip
            size="md"
            variant="solid"
            sx={{ margin: '0 5px', fontWeight: 'normal' }}
            onClick={() => changeFilter(SideLibraryFilters.artists)}
          >
            Artists
          </Chip>
          <Chip
            size="md"
            variant="solid"
            sx={{ margin: '0 5px', fontWeight: 'normal' }}
            onClick={() => changeFilter(SideLibraryFilters.albums)}
          >
            Albums
          </Chip>
        </Box>
      );
    case SideLibraryFilters.albums:
      return (
        <Box>
          <Chip
            size="md"
            variant="solid"
            sx={{ margin: '0 5px', fontWeight: 'normal' }}
            onClick={() => changeFilter(SideLibraryFilters.none)}
          >
            X
          </Chip>
          <Chip
            size="md"
            variant="solid"
            sx={{ margin: '0 5px', fontWeight: 'normal' }}
            onClick={() => changeFilter(SideLibraryFilters.none)}
          >
            Albums
          </Chip>
        </Box>
      );
    case SideLibraryFilters.artists:
      return (
        <Box>
          <Chip
            size="md"
            variant="solid"
            sx={{ margin: '0 5px', fontWeight: 'normal' }}
            onClick={() => changeFilter(SideLibraryFilters.none)}
          >
            X
          </Chip>
          <Chip
            size="md"
            variant="solid"
            sx={{ margin: '0 5px', fontWeight: 'normal' }}
            onClick={() => changeFilter(SideLibraryFilters.artists)}
          >
            Artists
          </Chip>
        </Box>
      );
    case SideLibraryFilters.playlistSpotify:
    case SideLibraryFilters.playlistYou:
    case SideLibraryFilters.playlistWriteable:
    case SideLibraryFilters.playlists:
      return (
        <Box>
          <Chip
            size="md"
            variant="solid"
            sx={{ margin: '0 5px', fontWeight: 'normal' }}
            onClick={() => changeFilter(SideLibraryFilters.none)}
          >
            X
          </Chip>
          <Chip
            size="md"
            variant="solid"
            sx={{ margin: '0 5px', fontWeight: 'normal' }}
            onClick={() => changeFilter(SideLibraryFilters.playlists)}
          >
            Playlists
          </Chip>
          <Chip
            size="md"
            variant="solid"
            sx={{ margin: '0 5px', fontWeight: 'normal' }}
            onClick={() => changeFilter(SideLibraryFilters.playlistSpotify)}
          >
            By Spotify
          </Chip>
          <Chip
            size="md"
            variant="solid"
            sx={{ margin: '0 5px', fontWeight: 'normal' }}
            onClick={() => changeFilter(SideLibraryFilters.playlistYou)}
          >
            By You
          </Chip>
          <Chip
            size="md"
            variant="solid"
            sx={{ margin: '0 5px', fontWeight: 'normal' }}
            onClick={() => changeFilter(SideLibraryFilters.playlistWriteable)}
          >
            Writable
          </Chip>
        </Box>
      );
    default:
      return <>Wait a second...</>;
  }
};
