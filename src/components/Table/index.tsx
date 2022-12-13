import { EventInterface } from '../../utils/types';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
} from '@tanstack/react-table';

import {
  Cell,
  HeaderCell,
  Row,
  TableBody,
  TableContainer,
  TableHeader,
  TableWrapper,
} from './styles';

import Card from '../Card';
import Pagination from './components/Pagination';

type TableProps = {
  data: EventInterface[];
};

const Table = ({ data }: TableProps) => {
  const columnHelper = createColumnHelper<EventInterface>();

  const columns = [
    columnHelper.accessor((row) => row.type, {
      id: 'type',
      cell: (info) => info.getValue(),
      header: () => <span>Event Type</span>,
    }),
    columnHelper.accessor((row) => row.detail, {
      id: 'detail',
      cell: (info) => info.getValue(),
      header: () => <span>Detail</span>,
    }),
    columnHelper.accessor((row) => row.time, {
      id: 'time',
      cell: (info) => info.getValue(),
      header: () => <span>Event time</span>,
    }),
    columnHelper.accessor((row) => row.severity, {
      id: 'severity',
      cell: (info) => {
        info.getValue();
      },
      header: () => <span>Severity</span>,
    }),
    columnHelper.accessor((row) => row.objectName, {
      id: 'objectName',
      cell: (info) => info.getValue(),
      header: () => <span>Object Name</span>,
    }),
    columnHelper.accessor((row) => row.objectType, {
      id: 'objectType',
      cell: (info) => info.getValue(),
      header: () => <span>Object Type</span>,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <Card>
        <TableWrapper>
          <TableContainer>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <Row key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <HeaderCell key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </HeaderCell>
                  ))}
                </Row>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <Row key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <Cell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Cell>
                  ))}
                </Row>
              ))}
            </TableBody>
          </TableContainer>
        </TableWrapper>
        <Pagination table={table} />
      </Card>
    </>
  );
};

export default Table;
