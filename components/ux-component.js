class UxComponent extends HTMLElement {

    text = null;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['text'];
    }

    attributeChangedCallback(prop, oldVal, newVal) {
        if (prop === 'text') {
            this.render();
        }
    }

    get text() {
        return this.getAttribute('text');
    }

    set text(val) {
        this.text = val;
        this.setAttribute('text', val);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <input type="button" value="${this.text}"/>
        `;
    }
}

customElements.define('ux-component', UxComponent);