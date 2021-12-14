class TableRow {
    constructor({ id, name, category, price, actions }) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.actions = actions;
    }

    id = '';
    name = '';
    category = '';
    price = {
        net: 0,
        gross: 0,
    };
    actions = {
        delete: () => undefined,
    }

    setPrice(price) {
        this.price = price;
    }
}

export class TableRowBuilder {
    #id = '';
    #name = '';
    #category = '';
    #price = {
        net: 0,
        gross: 0,
    };
    #actions = {
        delete: () => undefined,
    }

    setId(id) {
        this.#id = id ?? this.#id;

        return this;
    }

    setName(name) {
        this.#name = name ?? this.#name;

        return this;
    }

    setCategory(category) {
        this.#category = category ?? this.#category;

        return this;
    }

    setPrice(price) {
        this.#price = price ?? this.#price;

        return this;
    }

    setActions(actions) {
        this.#actions = actions ?? this.#actions;

        return this;
    }

    build() {
        return new TableRow({
            id: this.#id,
            name: this.#name,
            category: this.#category,
            price: this.#price,
            actions: this.#actions,
        });
    }
}
