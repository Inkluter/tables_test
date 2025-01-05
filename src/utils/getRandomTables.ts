import { faker } from '@faker-js/faker';

import { Table, TableType } from '../tables/types';

const TableTypeValues = Object.values(TableType);

export const getRandomTables = (count: number) : Table[] => {
    return Array.from({ length: count }, (_, i) => {
        const id = i.toString();
        const type = faker.helpers.arrayElement(TableTypeValues);
        const name = `${faker.animal.petName()} ${i}`;
        const warning = faker.datatype.boolean();
        const maxGuests = faker.number.int({ min: 1, max: 10 });
        const guests = faker.number.int({ min: 1, max: maxGuests });

        return new Table(id, type, name, warning, guests, maxGuests);
    });   
}