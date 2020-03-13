(function() {
    // Seleciona as inputs radio do estado civil e as divs do input esposa e data
    const $inputCivil = document.querySelectorAll('input[name="inputCivil"]');
    const $classHide = document.querySelectorAll('.item.-hide');

    $inputCivil.forEach((item) => {
        item.addEventListener('click', () => {

            if (item.value === 'casado') {
                $classHide.forEach((item) => (
                    item.classList.remove('-hide')
                ));

            } else {
                $classHide.forEach((item) => (
                    item.classList.add('-hide')
                ))
            };
        });
    });

})();
