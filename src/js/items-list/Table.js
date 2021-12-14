class Table {
    constructor(rows) {
        this.rows = rows;
    }

    rows = {};

    addRow(row) {
       this.rows = {
           ...this.rows,
           [row.id]: row,
       }
    }
}

export class TableBuilder {
    #rows = {};

    setRows(rows) {
        this.#rows = rows ?? this.#rows;

        return this;
    }

    build() {
        return new Table(this.#rows);
    }
}