import test from 'ava';
import * as state from '../src/js/state';


test('responseWithColumns: should return a multi-dimensionsal array', t => {
	const columns = 2;
	const response = [
		1, 2, 3, 4, 5, 6, 7, 8
	]
	const actual = state.responseWithColumns(columns, response);
	const expected = [[1, 2, 3, 4], [5, 6, 7, 8]];
	t.deepEqual(actual, expected);
});

test('getTotalColumns: should return the total columns based on the number', t => {
	const totalImages = 25;
	const actual = state.getTotalColumns(totalImages);
	const expected = 7;
	t.is(actual, expected);
});

test('adaptResponse: should return response modified into multi-dimensional array', t => {
	const response = [
		{
			images: {
				image_url: 'image_url'
			},
			slug: 'slug1',
			bitly_gif_url: 'url1'
		},
		{
			images: {
				image_url: 'image_url'
			},
			slug: 'slug2',
			bitly_gif_url: 'url2'
		},
		{
			images: {
				image_url: 'image_url'
			},
			slug: 'slug3',
			bitly_gif_url: 'url3'
		},
		{
			images: {
				image_url: 'image_url'
			},
			slug: 'slug4',
			bitly_gif_url: 'url4'
		},
		{
			images: {
				image_url: 'image_url'
			},
			slug: 'slug5',
			bitly_gif_url: 'url5'
		}
	];
	const actual = state.adaptResponse(response);
	const expected = [
		[
			{
				image_url: 'image_url',
				slug: 'slug1',
				url: 'url1'
			},
			{
				image_url: 'image_url',
				slug: 'slug2',
				url: 'url2'
			},
			{
				image_url: 'image_url',
				slug: 'slug3',
				url: 'url3'
			},
			{
				image_url: 'image_url',
				slug: 'slug4',
				url: 'url4'
			}
		],
		[
			{
				image_url: 'image_url',
				slug: 'slug5',
				url: 'url5'
			}
		]
	]
	t.deepEqual(actual, expected);
});

test('lookupImage: should return image object at paticular column and cell', t => {
	const gridValues = [
		[
			{
				image_url: 'image_url',
				slug: 'slug1',
				url: 'url1'
			},
			{
				image_url: 'image_url',
				slug: 'slug2',
				url: 'url2'
			},
			{
				image_url: 'image_url',
				slug: 'slug3',
				url: 'url3'
			},
			{
				image_url: 'image_url',
				slug: 'slug4',
				url: 'url4'
			}
		],
		[
			{
				image_url: 'image_url',
				slug: 'slug5',
				url: 'url5'
			}
		]
	];
	const lookupValues = {
		column: 1,
		cell: 0
	}
	const actual = state.lookupImage(lookupValues, gridValues);
	const expected = {
		image_url: 'image_url',
		slug: 'slug5',
		url: 'url5'
	};
	t.deepEqual(actual, expected);
});

test('updateGrid: should return the current grid if action is not grid related', t => {
	const gridValues = [
		[
			{
				image_url: 'image_url',
				slug: 'slug1',
				url: 'url1'
			},
			{
				image_url: 'image_url',
				slug: 'slug2',
				url: 'url2'
			},
			{
				image_url: 'image_url',
				slug: 'slug3',
				url: 'url3'
			},
			{
				image_url: 'image_url',
				slug: 'slug4',
				url: 'url4'
			}
		],
		[
			{
				image_url: 'image_url',
				slug: 'slug5',
				url: 'url5'
			}
		]
	];
	const action = {
		type: 'BOGUS_ACTION',
		payload: {}
	};
	const cache = {};
	const actual = state.updateGrid(gridValues, action, cache);
	const expected = gridValues;
	t.deepEqual(actual, expected);
});

test('updateGrid: should return a new grid if action is a SAVE_RESPONSE_ACTION', t => {
	const gridValues = [
		[
			{
				image_url: 'image_url',
				slug: 'slug1',
				url: 'url1'
			},
			{
				image_url: 'image_url',
				slug: 'slug2',
				url: 'url2'
			},
			{
				image_url: 'image_url',
				slug: 'slug3',
				url: 'url3'
			},
			{
				image_url: 'image_url',
				slug: 'slug4',
				url: 'url4'
			}
		],
		[
			{
				image_url: 'image_url',
				slug: 'slug5',
				url: 'url5'
			}
		]
	];
	const action = {
		type: 'SAVE_RESPONSE_ACTION',
		payload: {
			response:{
				data: [
					{
						images: {
							image_url: 'image_url'
						},
						slug: 'slug6',
						bitly_gif_url: 'url6'
					},
					{
						images: {
							image_url: 'image_url'
						},
						slug: 'slug7',
						bitly_gif_url: 'url7'
					},
					{
						images: {
							image_url: 'image_url'
						},
						slug: 'slug8',
						bitly_gif_url: 'url8'
					},
					{
						images: {
							image_url: 'image_url'
						},
						slug: 'slug9',
						bitly_gif_url: 'url9'
					},
					{
						images: {
							image_url: 'image_url'
						},
						slug: 'slug10',
						bitly_gif_url: 'url10'
					}
				]
			}
		}
	};
	const cache = {};
	const actual = state.updateGrid(gridValues, action, cache);
	const expected = [
		[
			{
				image_url: 'image_url',
				slug: 'slug6',
				url: 'url6'
			},
			{
				image_url: 'image_url',
				slug: 'slug7',
				url: 'url7'
			},
			{
				image_url: 'image_url',
				slug: 'slug8',
				url: 'url8'
			},
			{
				image_url: 'image_url',
				slug: 'slug9',
				url: 'url9'
			}
		],
		[
			{
				image_url: 'image_url',
				slug: 'slug10',
				url: 'url10'
			}
		]
	];
	t.deepEqual(actual, expected);
});

test('updateGrid: should return old grid plus new grid if its an UPDATE_RESPONSE_ACTION', t => {
	const gridValues = [
		[
			{
				image_url: 'image_url',
				slug: 'slug1',
				url: 'url1'
			},
			{
				image_url: 'image_url',
				slug: 'slug2',
				url: 'url2'
			},
			{
				image_url: 'image_url',
				slug: 'slug3',
				url: 'url3'
			},
			{
				image_url: 'image_url',
				slug: 'slug4',
				url: 'url4'
			}
		],
		[
			{
				image_url: 'image_url',
				slug: 'slug5',
				url: 'url5'
			}
		]
	];

	const combinedGrids =[
		[
			{
				image_url: 'image_url',
				slug: 'slug1',
				url: 'url1'
			},
			{
				image_url: 'image_url',
				slug: 'slug2',
				url: 'url2'
			},
			{
				image_url: 'image_url',
				slug: 'slug3',
				url: 'url3'
			},
			{
				image_url: 'image_url',
				slug: 'slug4',
				url: 'url4'
			}
		],
		[
			{
				image_url: 'image_url',
				slug: 'slug5',
				url: 'url5'
			},
			{
				image_url: 'image_url',
				slug: 'slug6',
				url: 'url6'
			},
			{
				image_url: 'image_url',
				slug: 'slug7',
				url: 'url7'
			},
			{
				image_url: 'image_url',
				slug: 'slug8',
				url: 'url8'
			}
		],
		[
			{
				image_url: 'image_url',
				slug: 'slug9',
				url: 'url9'
			},
			{
				image_url: 'image_url',
				slug: 'slug10',
				url: 'url10'
			}
		]
	]

	const action = {
		type: 'UPDATE_RESPONSE_ACTION',
		payload: {
			response:{
				data: [
					{
						images: {
							image_url: 'image_url'
						},
						slug: 'slug6',
						bitly_gif_url: 'url6'
					},
					{
						images: {
							image_url: 'image_url'
						},
						slug: 'slug7',
						bitly_gif_url: 'url7'
					},
					{
						images: {
							image_url: 'image_url'
						},
						slug: 'slug8',
						bitly_gif_url: 'url8'
					},
					{
						images: {
							image_url: 'image_url'
						},
						slug: 'slug9',
						bitly_gif_url: 'url9'
					},
					{
						images: {
							image_url: 'image_url'
						},
						slug: 'slug10',
						bitly_gif_url: 'url10'
					}
				]
			}
		}
	};
	const cache = [
		{
			images: {
				image_url: 'image_url'
			},
			slug: 'slug1',
			bitly_gif_url: 'url1'
		},
		{
			images: {
				image_url: 'image_url'
			},
			slug: 'slug2',
			bitly_gif_url: 'url2'
		},
		{
			images: {
				image_url: 'image_url'
			},
			slug: 'slug3',
			bitly_gif_url: 'url3'
		},
		{
			images: {
				image_url: 'image_url'
			},
			slug: 'slug4',
			bitly_gif_url: 'url4'
		},
		{
			images: {
				image_url: 'image_url'
			},
			slug: 'slug5',
			bitly_gif_url: 'url5'
		}
	];
	const actual = state.updateGrid(gridValues, action, cache);
	const expected = combinedGrids;
	t.deepEqual(actual, expected);
});

test('updateGrid: should return empty object if NO_RESPONSE_ACTION', t => {
	const gridValues = [
		[
			{
				image_url: 'image_url',
				slug: 'slug1',
				url: 'url1'
			},
			{
				image_url: 'image_url',
				slug: 'slug2',
				url: 'url2'
			},
			{
				image_url: 'image_url',
				slug: 'slug3',
				url: 'url3'
			},
			{
				image_url: 'image_url',
				slug: 'slug4',
				url: 'url4'
			}
		],
		[
			{
				image_url: 'image_url',
				slug: 'slug5',
				url: 'url5'
			}
		]
	];
	const action = {
		type: 'NO_RESPONSE_ACTION'
	}
	const cache = [];
	const actual = state.updateGrid(gridValues, action, cache);
	const expected = {};
	t.deepEqual(actual, expected);
});







