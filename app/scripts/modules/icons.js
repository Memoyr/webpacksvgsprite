
class Icon {

  static renderer(symbol) {
    return   `
        <svg viewBox="${symbol.viewBox}">
          <use xlink:href="#${symbol.id}" />
        </svg>`;
  }
}

export default Icon;
