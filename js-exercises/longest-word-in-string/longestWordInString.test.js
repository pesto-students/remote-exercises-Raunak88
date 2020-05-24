import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  it('should return a string', () => {
    expect(typeof longestWordInString()).toBe('string');
  });
  
  it('should return the longest word in a sentence', () => {
    expect(longestWordInString("There was a naughty boy")).toBe('naughty');
    expect(longestWordInString("A sentence with areallyreallyreallylong word")).toBe('areallyreallyreallylong');
    expect(longestWordInString(" a a a a a a bb a")).toBe('bb');
  });
});
