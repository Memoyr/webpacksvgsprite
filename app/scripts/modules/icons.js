import styles from './icons.css';

class Icon {

  static renderer(symbol, customClass) {

    // TODO should we make props for size ... (just thinking that I prefer to write react component)
    return   `
        <svg class="icon ${customClass}"  viewBox="${symbol.viewBox}">
          <use xlink:href="#${symbol.id}" />
        </svg>`;
  }
}

export default Icon;
