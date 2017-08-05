import test from 'ava';
import * as selectedImage from '../../src/js/components/selectedImage';

test('getNextImage: should return 0, 0 if its the last column and cell', t => {
    const meta = {
        selected: {
            column: 1,
            cell: 0
        },
        totalColumns: 2,
        count: 5
    }
    const actual = selectedImage.getNextImage(meta);
    const expected = {
        nextCell: 0,
        nextColumn: 0
    };
	t.deepEqual(actual, expected);
});

test('getNextImage: should return 0, 1 if its the last cell of the current column', t => {
    const meta = {
        selected: {
            column: 0,
            cell: 3
        },
        totalColumns: 2,
        count: 5
    }
    const actual = selectedImage.getNextImage(meta);
    const expected = {
        nextCell: 0,
        nextColumn: 1
    };
	t.deepEqual(actual, expected);
});

test('getNextImage: should return 3, 0 if its the last cell of the current column', t => {
    const meta = {
        selected: {
            column: 0,
            cell: 2
        },
        totalColumns: 2,
        count: 5
    }
    const actual = selectedImage.getNextImage(meta);
    const expected = {
        nextCell: 3,
        nextColumn: 0
    };
	t.deepEqual(actual, expected);
});

test('getPrevImage: should return 0, 1 if its the first cell and column', t => {
    const meta = {
        selected: {
            column: 0,
            cell: 0
        },
        totalColumns: 2,
        count: 5
    }
    const actual = selectedImage.getPrevImage(meta);
    const expected = {
        prevCell: 0,
        prevColumn: 1
    };
	t.deepEqual(actual, expected);
});

test('getPrevImage: should return 3, 0 if its the first cell', t => {
    const meta = {
        selected: {
            column: 1,
            cell: 0
        },
        totalColumns: 2,
        count: 5
    }
    const actual = selectedImage.getPrevImage(meta);
    const expected = {
        prevCell: 3,
        prevColumn: 0
    };
	t.deepEqual(actual, expected);
});

test('getPrevImage: should return 2, 0 if its not the first cell', t => {
    const meta = {
        selected: {
            column: 0,
            cell: 3
        },
        totalColumns: 2,
        count: 5
    }
    const actual = selectedImage.getPrevImage(meta);
    const expected = {
        prevCell: 2,
        prevColumn: 0
    };
	t.deepEqual(actual, expected);
});