import checkLuhn from '../checkLuhn';

test.each([
  { value: 2830623032954563, expected: true },
  { value: 371449635398431, expected: true },
  { value: 30569309025904, expected: true },
  { value: 6011111111111117, expected: true },
  { value: 3530111333300000, expected: true },
  { value: 5555555555554444, expected: true },
  { value: 4111111111111111, expected: true },
])(
  'determine the validity of the card number',
  ({ value, expected }) => {
    const result = checkLuhn({ value, expected });
    expect(result).toBe(expected);
  },
);
