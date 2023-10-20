import { Container, Box, IconButton } from '@mui/material';
import { FunctionComponent } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ButtonMenu } from './components';
import { MenuOption } from './components/button-menu/component';

interface Props {
  createOptions: MenuOption[];
}

export const SideLibraryComponent: FunctionComponent<Props> = ({
  createOptions,
}) => {
  return (
    <Container
      sx={{
        position: 'fixed',
        border: '1px solid blue',
        width: '30%',
        padding: 0,
        margin: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          display: 'flex',
          color: 'white',
          border: '1px solid white',
        }}
      >
        <Box>
          <h3>Your Library</h3>
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box>
          <ButtonMenu
            label="Create a playlist or folder"
            menuOptions={createOptions}
            showTooltip
          />
          <IconButton color="inherit" aria-label="Show more">
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};
