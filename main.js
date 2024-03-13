!function(){"use strict";class t{constructor(t){this.element=t,this.cardForm=t.querySelector(".card-form"),this.cardInput=t.querySelector(".card-input"),this.validationResult=t.querySelector(".validation-result"),this.paymentIcons=t.querySelectorAll(".payment-icons img")}init(){this.cardInput.addEventListener("input",this.handleInput.bind(this)),this.cardForm.addEventListener("submit",this.handleSubmit.bind(this))}handleInput(t){this.validationResult.textContent="";const e=t.target.value;this.updatePaymentIcons(e)}handleSubmit(t){t.preventDefault(),this.validateCard()}updatePaymentIcons(t){const e=/^4/.test(n=t)?"visa":/^(5[1-5]|2(?:22[1-9][0-9]{2}|2[3-9][0-9]{3}|[3-6][0-9]{3}|7[0-2]0[0-9]{2}))/.test(n)?"mastercard":/^22/.test(n)?"mir":/^3[47]/.test(n)?"amex":/^6(?:011|22(?:12[6-9]|[2-8][0-9]{2}|9[0-2][0-5])|4[4-9]|5)/.test(n)?"discover":/^35(?:2[89]|[3-8][0-9])/.test(n)?"jcb":/^3(?:0[0-5]|6)/.test(n)?"diners":null;var n;e?(this.paymentIcons.forEach((t=>{t.classList.add("inactive")})),this.element.querySelector("#"+e).classList.remove("inactive")):this.paymentIcons.forEach((t=>{t.classList.remove("inactive")}))}validateCard(){!function(t){let e=0,n=!1;for(let i=t.length-1;i>=0;i--){let a=parseInt(t.charAt(i));n&&(a*=2)>9&&(a-=9),e+=a,n=!n}return 0!==e&&e%10==0}(this.cardInput.value)?this.validationResult.textContent="Invalid card number":this.validationResult.textContent="Valid card number"}}document.addEventListener("DOMContentLoaded",(()=>{new t(document.querySelector(".validator")).init()}))}();