import test from 'ava';
import * as errors from '../../src/js/components/errors';

test('errors template: should be empty if there are no errors in the state', t => {
    const state = {
        grid: [],
        meta: {},
        errors: []
    }
    const actual = errors.template(state);
    const expected = '';
	t.deepEqual(actual, expected);
});

test('errors template: should display all errors in state.errors', t => {
    const state = {
        grid: [],
        meta: {},
        errors: ['test error', 'test error2']
    }
    const actual = errors.template(state);
    const expected = '<h3>test error</h3><h3>test error2</h3>';
	t.deepEqual(actual, expected);
});