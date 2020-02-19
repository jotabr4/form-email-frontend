const $form = document.querySelector('.form');
const $inputName = $form.querySelector('.inputName');
const $inputTelephone = $form.querySelector('.inputTelephone');
const $inputCellphone = $form.querySelector('.inputCellphone');
const $inputCivil = $form.querySelectorAll('.input.inputCivil');
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
const $inputTimeCount = $form.querySelector('.inputTimeCount');

$form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputCivil = inputRadioChecked($inputCivil);
    const inputYears = inputRadioChecked($inputYears);

    const body = {
        'name': $inputName.value,
        'telePhone': $inputTelephone.value,
        'cellPhone': $inputCellphone.value,
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
        'inputTimeCount': $inputTimeCount.value,
    }

    // images
    const formData = new FormData();
    const $imageDocument = $form.querySelector('#inputDocument');
    const $imageComp = $form.querySelector('#inputComp');
    const $imageRenda = $form.querySelector('#inputRenda')

    formData.append('imageDocument', $imageDocument.files[0]);
    formData.append('imageComp', $imageComp.files[0]);
    formData.append('imageRenda', $imageRenda.files[0]);

    axios.post('https://form-email-backend.herokuapp.com/uploads', formData, {
        headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
        }
    }).then(res => console.log(res));
    

    axios.post('https://form-email-backend.herokuapp.com/', body)
    .then(function (res) {
        console.log('E-mail enviado com sucesso');
        console.log('resposta', res.data);
    })

})

const inputRadioChecked = (props) => {
    for (let i = 0; i < props.length; i++) {
        if (props[i].checked) {
            return props[i].value
        }
    }
}