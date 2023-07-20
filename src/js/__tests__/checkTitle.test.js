import checkTitle from '../checkTitle';
import data from '../data.json';

test.each([
  { value: '2830623032954563', expected: 'MIR' },
  { value: '371449635398431', expected: 'American Express' },
  { value: '30569309025904', expected: 'Diners Club' },
  { value: '6011111111111117', expected: 'Discover' },
  { value: '3530111333300000', expected: 'JCB' },
  { value: '5555555555554444', expected: 'Mastercard' },
  { value: '4111111111111111', expected: 'Visa' },
  { value: '1234567891234567', expected: undefined },
])(
  'determine the validity of the card number',
  ({ value, expected }) => {
    const result = checkTitle(value, data, expected);
    expect(result).toBe(expected);
  },
);
