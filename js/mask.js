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