import { flipArgs } from './flipArgs';

describe('Test to flip arguments of a function', () => {
    it('should return a function', () => {
        expect(typeof flipArgs()).toBe('function');
      });
  test('should reverse the arguments of passed function and return it', () => {   

    const subtract = flipArgs((num1,num2)=>(num1-num2));
    expect(subtract(5,3)).toBe(-2);
    expect(subtract(3,7)).toBe(4);    
    
  });
});
