import Book from "./Book";

export const name = 'Villan Name'; 
export const crime = 'Villan Crime'
export const description = 'Villan Crime Description'
export const exactIS = 'Villan Exact IS'
export const relatableIS = ['Villan Relatable IS 1', 'Villan Relatable IS 2']

export const file = {
    id: 1,
    playerName: 'Tarush Gupta',
    level: 1,
    lastSaved: {
        date: '2022-01-01',
        time: '12:00 pm',
    },
    difficulty: 2,
    books: ['hlo', 'hloo'],
}

export const books = [
    new Book('Is-001', ['IS-01'], 'common', false),
    new Book('Is-002', ['IS-02'], 'common', false),
    new Book('Is-003', ['IS-03'], 'common', false),
    new Book('Is-004', ['IS-04'], 'common', true),
    new Book('Is-005', ['IS-05'], 'common', true),
    new Book('Is-006', ['IS-06'], 'common', false),
    new Book('Is-007', ['IS-07'], 'common', true),
    new Book('Is-008', ['IS-08'], 'common', false),
    new Book('Is-001', ['IS-01'], 'rare', false),
    new Book('Is-002', ['IS-02'], 'rare', false),
    new Book('Is-003', ['IS-03'], 'rare', false),
    new Book('Is-004', ['IS-04'], 'rare', true),
    new Book('Is-005', ['IS-05'], 'rare', true),
    new Book('Is-006', ['IS-06'], 'rare', false),
    new Book('Is-007', ['IS-07'], 'rare', true),
    new Book('Is-008', ['IS-08'], 'rare', false),
    new Book('Is-001', ['IS-01'], 'epic', false),
    new Book('Is-002', ['IS-02'], 'epic', false),
    new Book('Is-003', ['IS-03'], 'epic', false),
    new Book('Is-004', ['IS-04'], 'epic', true),
    new Book('Is-005', ['IS-05'], 'epic', true),
    new Book('Is-006', ['IS-06'], 'epic', false),
    new Book('Is-007', ['IS-07'], 'epic', true),
    new Book('Is-008', ['IS-08'], 'epic', false),
]