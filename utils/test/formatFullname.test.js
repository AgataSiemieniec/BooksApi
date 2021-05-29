const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" lenght is diffrent then 2 words', () => {
    expect(formatFullname('Lorem')).to.equal('Error');
    expect(formatFullname('Lorem Ipsum dolor')).to.equal('Error');
    expect(formatFullname('Lorem Ipsum dolor sit')).to.equal('Error');
    expect(formatFullname('Lorem Ipsum dolor sit amet')).to.equal('Error');
  });

  it('should return good fullName', () => {
    expect(formatFullname('lorem ipsum')).to.equal('Lorem Ipsum');
    expect(formatFullname('LOREM IPSUM')).to.equal('Lorem Ipsum');
    expect(formatFullname('lOREM iPSUM')).to.equal('Lorem Ipsum');
  });

});