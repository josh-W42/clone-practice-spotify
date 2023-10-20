import { FunctionComponent, MouseEvent, useState } from 'react';
import { ButtonMenuComponent, MenuOption } from './component';

interface Props {
  label: string;
  menuOptions: MenuOption[];
  showTooltip?: boolean;
}

export const ButtonMenu: FunctionComponent<Props> = ({
  label,
  menuOptions,
  showTooltip,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <ButtonMenuComponent
      label={label}
      open={open}
      anchorEl={anchorEl}
      tooltip={showTooltip ? true : false}
      menuOptions={menuOptions}
      handleClick={handleClick}
      handleClose={handleClose}
    />
  );
};
