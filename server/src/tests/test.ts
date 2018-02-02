import test from '../server';
import { expect } from 'chai';

describe('hello world!', () => {
    it('should return hello world', () => {
        const result  = test();
        expect(result).to.equal('hello world!');
    });
});