import test from 'ava';
import * as grid from '../../src/js/components/grid';

test('cell: should return img tag with cell and image values', t => {
    const cell = 0;
    const image = {
        downsized_still: {
            url: 'test_url'
        },
        slug: 'slug'
    }
    const actual = grid.cell(image, cell);
    const expected = "<img class='result-image' data-cell='0' src='test_url' alt='slug'/>";
	t.deepEqual(actual, expected);
});

test('columns: should return div with img inside with column and image value', t => {
    const column = 0;
    const images = [{
        downsized_still: {
            url: 'test_url'
        },
        slug: 'slug'
    }];
    const actual = grid.columns(images, column);
    const expected = "<div class='column' data-column='0'><img class='result-image' data-cell='0' src='test_url' alt='slug'/></div>";
    t.deepEqual(actual, expected);
})

test('template: should return and empty string if state.grid is empty', t => {
    const state = {
        grid: []
    };
    const actual = grid.template(state);
    const expected = "";
    t.deepEqual(actual, expected);
})

