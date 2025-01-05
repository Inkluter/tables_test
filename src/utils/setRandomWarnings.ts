import { faker } from '@faker-js/faker';

import { Table } from '../tables/types';

export const setRandomWarnings = (tables: Table[]) => tables.map((table) => {
    const warning = faker.datatype.boolean();
    const guests = faker.number.int({ min: 1, max: table.maxGuests });
    return { ...table, warning, guests };
});