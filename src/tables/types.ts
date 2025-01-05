export enum TableType {
    DINNIG = 'DINNIG',
    BOOTH = 'BOOTH',
    OUTDOOR = 'OUTDOOR',
    PRIVATE = 'PRIVATE',
}

export class Table {
    constructor(
        public id: string,
        public type: TableType,
        public name: string,
        public warning: boolean,
        public guests: number,
        public maxGuests: number,
    ) {}
}