import { test } from 'uvu';
import * as assert from 'uvu/assert';
import valueParser from 'postcss-value-parser';
import getArguments from '../getArguments';

test('should get arguments', () => {
  const parsed = valueParser('linear-gradient(to bottom left, red, blue)');

  assert.equal(getArguments(parsed.nodes[0]), [
    [
      {
        type: 'word',
        sourceIndex: 16,
        sourceEndIndex: 18,
        value: 'to',
      },
      {
        type: 'space',
        sourceIndex: 18,
        sourceEndIndex: 19,
        value: ' ',
      },
      {
        type: 'word',
        sourceIndex: 19,
        sourceEndIndex: 25,
        value: 'bottom',
      },
      {
        type: 'space',
        sourceIndex: 25,
        sourceEndIndex: 26,
        value: ' ',
      },
      {
        type: 'word',
        sourceIndex: 26,
        sourceEndIndex: 30,
        value: 'left',
      },
    ],
    [
      {
        type: 'word',
        sourceIndex: 32,
        sourceEndIndex: 35,
        value: 'red',
      },
    ],
    [
      {
        type: 'word',
        sourceIndex: 37,
        sourceEndIndex: 41,
        value: 'blue',
      },
    ],
  ]);
});
test.run();