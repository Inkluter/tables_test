import { memo } from 'react';
import clsx from 'clsx';

import { Table } from '../tables/types';
import { TableIcon } from './TableIcon';

interface TableViewProps extends Table {
    isWarningActive: boolean;
}

const TableView = ({
    name,
    type,
    warning,
    guests,
    maxGuests,
    isWarningActive,
}: TableViewProps) => {
    return (
        <div className={clsx('table', warning && isWarningActive && 'table__warning')}>
            <div className="table_name">{name}</div>
            
            <TableIcon type={type} /> 

            <div className="table_bottom">
              <div className="table_type">{type}</div>
              <div className="table_guests">{guests}/{maxGuests}</div>
            </div>
        </div>
    )
}

export const MemoTableView = memo(TableView);