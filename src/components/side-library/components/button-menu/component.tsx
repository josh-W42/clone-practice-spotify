import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { FunctionComponent, MouseEvent, ReactNode } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export interface MenuOption {
  content: string | ReactNode;
  action: () => void;
}

interface Props {
  label: string;
  open: boolean;
  anchorEl: null | HTMLElement;
  menuOptions: MenuOption[];
  tooltip: boolean;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
}

export const ButtonMenuComponent: FunctionComponent<Props> = ({
  label,
  open,
  anchorEl,
  menuOptions,
  tooltip,
  handleClick,
  handleClose,
}) => {
  const GetOptions = menuOptions.map((option) => {
    return (
      <MenuItem
        onClick={() => {
          handleClose();
          option.action();
        }}
      >
        {option.content}
      </MenuItem>
    );
  });

  return (
    <>
      <IconButton
        id="icon-button"
        color="inherit"
        aria-label={label}
        aria-controls={open ? 'icon-button' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {tooltip ? (
          <Tooltip title={label} placement="top">
            <AddCircleIcon />
          </Tooltip>
        ) : (
          <AddCircleIcon />
        )}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'icon-button',
        }}
      >
        {GetOptions}
      </Menu>
    </>
  );
};
