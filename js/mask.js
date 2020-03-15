function CPFmask(obj) {
    let cpf = obj.value;
    
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    
    obj.value = cpf;
}

function CEPmask(obj) {
    let cep = obj.value;

    cep=cep.replace(/\D/g,"")
    cep=cep.replace(/^(\d{5})(\d)/,"$1-$2");

    obj.value = cep;
}

function TELmask(obj) {
    let tel = obj.value;

    tel = tel.replace(/\D/g,"");
    tel = tel.replace(/^(\d{2})(\d)/g,"($1) $2");
    // tel = tel.replace(/(\d)(\d{3})$/,"$1-$2");

    obj.value = tel;
}

function DATAmask(obj) {
    let data = obj.value;

    if (data.length == 2) {
        data = data + '/';
        obj.value = data;
        return true;
    }

    if (data.length == 5) {
        data = data + '/';
        obj.value = data;
        return true;
    }

}