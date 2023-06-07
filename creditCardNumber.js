import { LightningElement } from 'lwc';

export default class CreditCardNumber extends LightningElement {
    onNumberChange(event){
        const enteredNumber = event.currentTarget.value;
        let enteredLoc = event.currentTarget.getAttribute("data-fieldname");
        if (enteredNumber.length == 4) {
            let nextBox = Number(enteredLoc)+1;
            let elem = this.template.querySelector("lightning-input[data-fieldname='"+nextBox+"']");
            setTimeout(() => elem.focus());
        }
    }

}