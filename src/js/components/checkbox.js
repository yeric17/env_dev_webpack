class CheckBox extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <input id="${this.getAttribute('id_input')}" type="checkbox" name="${this.getAttribute('name')}">
            <label for="${this.getAttribute('id_input')}">
                <span class="checkbox"></span>
                <span>${this.getAttribute('label')}</span>
            </label>
        `
    }
}

customElements.define('ip-checkbox', CheckBox)