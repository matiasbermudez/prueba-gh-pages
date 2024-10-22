export function countDownInit(){
    class CountDown extends HTMLElement{
        shadow = this.attachShadow({mode: 'open'});
        counter = this.textContent;
        constructor(){
            super();
            this.render();
        }
        render(){
            this.shadow.innerHTML = `
                <div id="countdown" class="countdown-circle">
                     <div>
                        ${this.counter}
                    </div>
                </div>
            `
            const style = document.createElement('style');
            style.innerText = `
                .countdown-circle {
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                        background-color: #009048;
                        color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 2rem;
                        font-weight: bold;
                        text-align: center;
                        margin: 0 auto;
                }
            `
            this.shadow.appendChild(style)
        }
    }
    customElements.define('count-down-el', CountDown)
}