import { FunctionComponent } from 'react';
import { ChipBarComponent } from './component';
import { SideLibraryFilters } from '../../types';

interface Props {
  filter: SideLibraryFilters;
  changeFilter: (filter: SideLibraryFilters) => void;
}

export const ChipBar: FunctionComponent<Props> = ({ filter, changeFilter }) => {
  return <ChipBarComponent filter={filter} changeFilter={changeFilter} />;
};
