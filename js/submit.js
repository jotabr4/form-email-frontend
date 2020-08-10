const $form = document.querySelector('.form');
const $inputName = $form.querySelector('.inputName');
const $inputCPF = $form.querySelector('.inputCPF');
const $inputCellphone = $form.querySelector('.inputCellphone');
const $inputTelephone = $form.querySelector('.inputTelephone');
const $inputEmail = $form.querySelector('.inputEmail');
const $inputCivil = $form.querySelectorAll('.inputCivil');
const $inputNameConjuge = $form.querySelector('.inputNameConjuge');
const $inputDataConjuge = $form.querySelector('.inputDataConjuge');
const $inputAddress = $form.querySelector('.inputAddress');
const $inputDistrict = $form.querySelector('.inputDistrict');
const $inputCity = $form.querySelector('.inputCity');
const $inputEstate = $form.querySelector('.inputEstate');
const $inputCEP = $form.querySelector('.inputCEP');
const $inputYears = $form.querySelectorAll('.inputYears');
const $inputCompany = $form.querySelector('.inputCompany');
const $companyFone = $form.querySelector('.companyFone');
const $inputDate = $form.querySelector('.inputDate');
const $inputSalary = $form.querySelector('.inputSalary');
const $inputReferenceName1 = $form.querySelector('.inputReferenceName1');
const $inputReferenceTell1 = $form.querySelector('.inputReferenceTell1');
const $inputReferenceName2 = $form.querySelector('.inputReferenceName2');
const $inputReferenceTell2 = $form.querySelector('.inputReferenceTell2');
const $inputBank = $form.querySelector('.inputBank');
const $inputAgency = $form.querySelector('.inputAgency');
const $inputCount = $form.querySelector('.inputCount');
const $containerSend = $form.querySelector('.container-send');

$form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputCivil = inputRadioChecked($inputCivil);
    const inputYears = inputRadioChecked($inputYears);

    const body = {
        'name': $inputName.value,
        'cpf': $inputCPF.value,
        'cellPhone': $inputCellphone.value,
        'telePhone': $inputTelephone.value,
        'email': $inputEmail.value,
        'nomeConjuge': $inputNameConjuge.value,
        'dataConjuge': $inputDataConjuge.value,
        'inputCivil': inputCivil,
        'inputAddress': $inputAddress.value,
        'inputDistrict': $inputDistrict.value,
        'inputCity': $inputCity.value,
        'inputEstate': $inputEstate.value,
        'inputCEP': $inputCEP.value,
        'inputYears': inputYears,
        'inputCompany': $inputCompany.value,
        'companyFone': $companyFone.value,
        'inputDate': $inputDate.value,
        'inputSalary': $inputSalary.value,
        'inputReferenceName1': $inputReferenceName1.value,
        'inputReferenceTell1': $inputReferenceTell1.value,
        'inputReferenceName2': $inputReferenceName2.value,
        'inputReferenceTell2': $inputReferenceTell2.value,
        'inputBank': $inputBank.value,
        'inputAgency': $inputAgency.value,
        'inputCount': $inputCount.value,
    }

    // images
    const formData = new FormData();
    const $imageDocument = $form.querySelector('#inputDocument');
    const $imageComp = $form.querySelector('#inputComp');
    const $imageRenda = $form.querySelector('#inputRenda')

    formData.append('imageDocument', $imageDocument.files[0]);
    formData.append('imageComp', $imageComp.files[0]);
    formData.append('imageRenda', $imageRenda.files[0]);

    $containerSend.classList.add('-active');

    axios.post('https://form-email-backend.herokuapp.com/uploads', formData, {
        headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
        }
    })
    .then(function(res) {
        console.log('Enviado com sucesso');
        submit(body);
    })
    .catch(function(error) {
        window.location = 'https://jotabr4.github.io/form-email-frontend/fail.html';
    })
       
    const submit = (body) => {
        axios.post('https://form-email-backend.herokuapp.com/', body)
        .then(function (res) {
            window.location = 'https://jotabr4.github.io/form-email-frontend/success.html';
        })
        .catch(function(error) {
            window.location = 'https://jotabr4.github.io/form-email-frontend/fail.html';
        })
    }

})

const inputRadioChecked = (props) => {
    for (let i = 0; i < props.length; i++) {
        if (props[i].checked) {
            return props[i].value
        }
    }
}
