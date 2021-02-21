"use strict"

function FormValidate() {
    this.frm = document.querySelector('form')
    this.txt = this.frm.querySelector('[type="text"]')
    this.nmb = this.frm.querySelector('[type="number"]')
    this.btn = this.frm.querySelector('[type="button"]')
    
    this.btn.addEventListener('click', () => {
        this.nameCheck()
    })
    window.addEventListener('keyup', () => {
        this.nameCheck()
        this.numCheck()
    })



    if (navigator.geolocation) {        
        navigator.geolocation.getCurrentPosition(a => {
            console.log(a.coords.latitude)
            console.log(a.coords.longitude)
        })
    }
}
FormValidate.prototype.nameCheck = function() {
    this.vl = this.txt.value;
    if (this.vl.length <= 4 || this.vl.length > 10) {
        this.txt.style.background = 'red'
    }else{
        this.txt.style.background = 'green'
    }
}
FormValidate.prototype.numCheck = function(n) {
    this.nm = this.nmb.value;
    if (this.nm.length <= 4) {
        this.nmb.style.background = 'red'
    }else{
        this.nmb.style.background = 'green'
    }
}

let k = new FormValidate();
