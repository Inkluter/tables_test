import { TableType } from '../tables/types';

interface TableIconProps {
    type: TableType
}

const TableEmodji = {
    [TableType.DINNIG]: '🍽️',
    [TableType.BOOTH]: '🪑',
    [TableType.OUTDOOR]: '🌳',
    [TableType.PRIVATE]: '🚪',
}

export const TableIcon = ({ type }: TableIconProps) => {
    return (
        <div className="table_icon">
            {TableEmodji[type]}
        </div>
    )
}