const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Flavio';
    let text = 'Test message';
    let message = generateMessage(from , text);

    expect(message).toInclude({
      from,
      text
    });
    expect(message.createdAt).toBeA('number');

  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Flavio';
    var latitude = '-1';
    var longitude = '10';
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    let message = generateLocationMessage(from, latitude, longitude);

    expect(message).toInclude({
      from,
      url
    });
    expect(message.createdAt).toBeA('number');
  });
});
