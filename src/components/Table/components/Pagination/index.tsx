import { EventInterface } from '../../../../utils/types';
import { Table } from '@tanstack/react-table';
import Button from '../../../Button';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { PaginationWrapper } from './styles';

type PaginationProps = {
  table: Table<EventInterface>;
};

const Pagination = ({ table }: PaginationProps) => {
  return (
    <PaginationWrapper>
      <Button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <IoChevronBackOutline />
      </Button>
      <Button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <IoChevronForwardOutline />
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
