const e={accounts:[{owner:"Jonas Schmedtmann",movements:[200,450,-400,3e3,-650,-130,70,1300],interestRate:1.2,pin:1111},{owner:"Jessica Davis",movements:[5e3,3400,-150,-790,-3210,-1e3,8500,-30],interestRate:1.5,pin:2222},{owner:"Steven Thomas Williams",movements:[200,-200,340,-300,-20,50,400,-460],interestRate:.7,pin:3333},{owner:"Sarah Smith",movements:[430,1e3,700,50,90],interestRate:1,pin:4444}],currentAccount:{}},t=function(t){return e.accounts.find((e=>e.username===t))},n=function(e,t){t.movements.push(e)};e.accounts.forEach((function(e){e.username=e.owner.toLowerCase().split(" ").map((e=>e[0])).join("")}));const r=document.querySelector(".app"),o=document.querySelector(".login__btn"),u=document.querySelector(".login__input--user"),c=document.querySelector(".login__input--pin"),a=document.querySelector(".form__btn--transfer"),s=document.querySelector(".form__input--to"),m=document.querySelector(".form__input--amount"),i=document.querySelector(".form__btn--loan"),l=document.querySelector(".form__input--loan-amount"),d=document.querySelector(".form__btn--close"),_=document.querySelector(".form__input--user"),v=document.querySelector(".form__input--pin");class f{static _user;loginUser(e){f.prototype._user=e}render(e=!1){const t=document.querySelector(".movements");t.innerHTML="",t.innerHTML=e?this._generateString(!0):this._generateString()}showInterface(){r.style.opacity=100,u.value=c.value="",c.blur()}hideInterface(){r.style.opacity=0}addHandlerLogin(e){o.addEventListener("click",(function(t){t.preventDefault(),e(u.value,+c.value)}))}addHandlerTransfer(e){a.addEventListener("click",(function(t){t.preventDefault(),e(+m.value,s.value),m.value=s.value=""}))}addHandlerLoan(e){i.addEventListener("click",(function(t){t.preventDefault(),e(+l.value),l.value=""}))}addHandlerClose(e){d.addEventListener("click",(function(t){t.preventDefault(),e(+v.value,_.value),v.value=_.value=""}))}}var y=new f;const p=document.querySelector(".btn--sort");var S=new class extends f{_generateString(e=!1){let t=this._user.movements;e&&(t=e?t.slice().sort(((e,t)=>e-t)):t);return t.map((function(e,t){const n=e>0?"deposit":"withdrawal";return`\n      <div class="movements__row">\n        <div class="movements__type movements__type--${n}">${t+1} ${n}</div>\n        <div class="movements__value">${e.toFixed(2)}€</div>\n      </div>\n          `})).reverse().join("")}addHandlerSort(e){p.addEventListener("click",(function(t){t.preventDefault(),e()}))}};const q=document.querySelector(".welcome"),A=document.querySelector(".balance__value"),h=document.querySelector(".summary__value--in"),w=document.querySelector(".summary__value--out"),b=document.querySelector(".summary__value--interest");var x=new class extends f{setTextViews(){q.textContent=`Wellcome back, ${this._user.owner.split(" ")[0]}`,A.textContent=`${this._user.balance.toFixed(2)}€`,h.textContent=`${this._user.summary.income.toFixed(2)}€`,w.textContent=`${this._user.summary.out.toFixed(2)}€`,b.textContent=`${this._user.summary.interest.toFixed(2)}€`}};document.querySelector(".date"),document.querySelector(".summary__value--in"),document.querySelector(".summary__value--out"),document.querySelector(".summary__value--interest"),document.querySelector(".timer"),document.querySelector(".form__btn--transfer"),document.querySelector(".form__btn--loan"),document.querySelector(".form__btn--close"),document.querySelector(".btn--sort"),document.querySelector(".form__input--loan-amount"),document.querySelector(".form__input--user"),document.querySelector(".form__input--pin");let g=!1;const H=function(){e.currentAccount.balance=e.currentAccount.movements.reduce(((e,t)=>e+t),0),e.currentAccount.summary={},e.currentAccount.summary.income=e.currentAccount.movements.filter((e=>e>0)).reduce(((e,t)=>e+t),0),e.currentAccount.summary.out=e.currentAccount.movements.filter((e=>e<0)).reduce(((e,t)=>e+Math.abs(t)),0),e.currentAccount.summary.interest=e.currentAccount.movements.filter((e=>e>0)).map((t=>t*e.currentAccount.interestRate/100)).filter((e=>e>1)).reduce(((e,t)=>e+t),0),x.setTextViews(),S.render()},L=function(n,r){e.currentAccount=t(n),e.currentAccount?.pin===r&&(y.loginUser(e.currentAccount),H(),y.showInterface())},$=function(){g=!g,!1===g?S.render():S.render(!0)},C=function(r,o){!(o=t(o)!==e.currentAccount?t(o):void 0)||e.currentAccount.balance<r||r<=0||(!function(e,t){t.movements.push(-e)}(r,e.currentAccount),n(r,o),H())},T=function(t){e.currentAccount.movements.some((e=>e>0&&e>.1*t))&&t>0&&(n(t,e.currentAccount),H())},k=function(t,n){n===e.currentAccount.username&&t===e.currentAccount.pin&&(!function(){const t=e.accounts.findIndex((t=>t.username===e.currentAccount.username));e.accounts.splice(t,1)}(),y.hideInterface())};y.addHandlerLogin(L),y.addHandlerTransfer(C),y.addHandlerLoan(T),y.addHandlerClose(k),S.addHandlerSort($);
//# sourceMappingURL=index.1417603e.js.map