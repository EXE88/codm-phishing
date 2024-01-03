let checkboxWindow = document.getElementById("fkrc-checkbox-window");
let checkboxBtn = document.getElementById("fkrc-checkbox");
let checkboxBtnSpinner = document.getElementById("fkrc-spinner");
let verifyWindow = document.getElementById("fkrc-verifywin-window");
let verifyWindowArrow = document.getElementById("fkrc-verifywin-window-arrow");
let verifyBtn = document.getElementById("fkrc-verifywin-verify-button");
let tickbtn = document.getElementById('fkrc-tick')

function addCaptchaListeners() {
    checkboxBtn.addEventListener("click", function (event) {
        event.preventDefault();
        checkboxBtn.disabled = true;
        runClickedCheckboxEffects();
    });
}
addCaptchaListeners();

function runClickedCheckboxEffects() {
    hideCaptchaCheckbox();
    setTimeout(function(){showCaptchaLoading();},500)
    setTimeout(function(){hideCaptchaLoading();},2500)
    setTimeout(function(){showCaptchaTick();},2600)
}

function showCaptchaCheckbox() {
    checkboxBtn.style.width = "100%";
    checkboxBtn.style.height = "100%";
    checkboxBtn.style.borderRadius = "2px";
    checkboxBtn.style.margin = "21px 0 0 12px";
    checkboxBtn.style.opacity = "1";
}

function hideCaptchaCheckbox() {
    checkboxBtn.style.width = "100%";
    checkboxBtn.style.height = "100%";
    checkboxBtn.style.borderRadius = "100%";
    checkboxBtn.style.visibility = 'hidden';
}

function showCaptchaLoading() {
    checkboxBtnSpinner.style.visibility = "visible";
    checkboxBtnSpinner.style.opacity = "1";
}

function hideCaptchaLoading() {
    checkboxBtnSpinner.style.visibility = "hidden";
    checkboxBtnSpinner.style.opacity = "0";
}

function showCaptchaTick() {
    tickbtn.style.visibility = "visible";
    tickbtn.style.opacity = "1";
}