import styles from './icons.css';

class Icon {

  static renderer(options) {

    let symbol = options.symbol; //TODO should throw an error if no val is entered.
    let customClass = options.customClass || '';
    let stroke = options.stroke || false;
    let small = options.small || false;
    let large = options.large || false;

    return   `
        <svg class="icon
                  ${customClass ? customClass: ''} ${stroke === true ? `icon--stroke`: ''} ${small === true ? `icon--small`: ''} ${large === true ? `icon--large`: ''}"
              viewBox="${symbol.viewBox}">
          <use xlink:href="#${symbol.id}" />
        </svg>`;
  }
}

export default Icon;
