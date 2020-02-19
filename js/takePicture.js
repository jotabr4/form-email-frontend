const $inputDocument = document.querySelector('#inputDocument');
const $documentImg = document.querySelector('#documentImg');
const $inputComp = document.querySelector('#inputComp');
const $compImg = document.querySelector('#compImg');
const $inputRenda = document.querySelector('#inputRenda');
const $rendaImg = document.querySelector('#rendaImg');


$inputDocument.addEventListener('change', event => {
    let file = event.target.files[0];
    $documentImg.src = URL.createObjectURL(file);
    $documentImg.style.display = "inline";
});

$inputComp.addEventListener('change', event => {
    let file = event.target.files[0];
    $compImg.src = URL.createObjectURL(file);
    $compImg.style.display = "inline";
});

$inputRenda.addEventListener('change', event => {
    let file = event.target.files[0];
    $rendaImg.src = URL.createObjectURL(file);
    $rendaImg.style.display = "inline";
});