const $template = document.createElement("template");
$template.innerHTML = /*html */ `
    <style>
        #item-container {
            width : 300px;
        }

        #price {
            font-weight : bold ; 
        }

        #description {
            font-size : 25px;
            font-style : italic;
        }
    </style>
    <div id="item-container">
        <img id="image" src="#" alt="Cat">
        <div id="price">10 &#8363;</div>
        <div id="description">Lorem ipsumjjscjshdjhshjsfhjfsf</div>
        <div id="address">Hà Nội</div>
    </div>
`
export default  class ItemContainer extends HTMLElement {
    constructor() {
        super() ;
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }

    // Những thuộc tính ảnh hưởng đến nội dung 
    static get observedAttributes() {
        return ["image", "price", "description", "address"];
    }

    // đƯỢC CHẠY khi giá trị thuộc tính thay đổi 
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log(attrName + " = " + newValue);
        switch (attrName) {
            case 'image' :
                this.shadowRoot.getElementById('image').src = newValue;
                break;
            case 'price' : 
                this.shadowRoot.getElementById('price').innerHTML = newValue + '&#8363;';
            case 'description' :    
                this.shadowRoot.getElementById('description').innerHTML = newValue ;    
            case 'address' :
                this.shadowRoot.getElementById('address').innerHTML = newValue ;
            
        }
    }
}

window.customElements.define('item-container', ItemContainer)