const brands={
    audi: [
        {
            name: 'Q7',
            price: 10000,
            year: 2001
        },
        {
            name: 'Q8',
            price: 20000,
            year: 2002
        }
    ],
    bmw: [
        {
            name: 'X7',
            price: 30000,
            year: 2003
        },
        {
            name: 'X8',
            price: 40000,
            year: 2004
        }
    ],
    bently: [
        {
            name: 'Y10',
            price: 50000,
            year: 2005
        },
        {
            name: 'Y11',
            price: 60000,
            year: 2006
        }
    ]
};

export function getModels() {
    return Object.keys(brands);
}

export function getcarsByModel(brand) {
    return brands[brand];
}

export function getCarsByModelByName(name, brand) {
   return brands[brand].filter(description => description.name === name);
}
