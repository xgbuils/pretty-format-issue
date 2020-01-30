const prettyFormat = require('pretty-format');

const {DOMElement, DOMCollection} = prettyFormat.plugins

const createText = (text) => [document.createTextNode(text)];

const createElement = (type, attrs, children) => {
  const element = document.createElement(type);
  Object.entries(attrs).forEach(([attr, value]) => {
    element.setAttribute(attr, value);
  })
  children.forEach(child => {
    element.appendChild(child);
  });
  return element;
};

describe('test', () => {
  test('attributes', () => {
    const option = document.createElement('option')
    option.selected = true;
    option.value = '1';

    expect(option.attributes).toBe('')
  });

  test('prettyFormat', () => {
    const option = document.createElement('option')
    option.selected = true;
    option.value = '1';

    const html = prettyFormat(option, {
      plugins: [DOMElement, DOMCollection],
      printFunctionName: false,
      highlight: true
    });

    expect(html).toBe('')
  });
});