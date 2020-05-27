
class Radio extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <input id="${this.getAttribute('id_input')}" type="radio" name="${this.getAttribute('name')}">
            <label for="${this.getAttribute('id_input')}">
                <span class="radio"></span>
                <span class="radio-text">${this.getAttribute('label')}</span>
            </label>
        `
    }
}

customElements.define('ip-radio', Radio)
