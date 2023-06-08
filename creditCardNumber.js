import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class CreditCardNumber extends LightningElement {
    @api cardNumber = "";

    onNumberChange(event){
        const enteredNumber = event.currentTarget.value;
        let enteredLoc = event.currentTarget.getAttribute("data-fieldname");
        if (enteredNumber.length == 4) {
            this.cardNumber += event.currentTarget.value;
            let nextBox = Number(enteredLoc)+1;
            if (nextBox == 5) {
                this.dispatchEvent(new FlowAttributeChangeEvent('cardNumber', this.cardNumber));
            }
            let elem = this.template.querySelector("lightning-input[data-fieldname='"+nextBox+"']");
            setTimeout(() => elem.focus());
        }
    }

}
