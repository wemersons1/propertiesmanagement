//const PUBLIC_KEY = "TEST-aeb699e7-f487-4876-9593-2dbb04380709";
const PUBLIC_KEY = "APP_USR-860ed5e7-92cc-4e3f-9f00-5e5893700300";
const translateMessageError = (message) => {

    switch (message) {
        case "expirationYear should be of length '2' or '4'.":
            return 'Ano de expiração deve ter 2 ou 4 dígitos';
        case `expirationYear value should be greater or equal than ${new Date().getFullYear()}.`:
            return `Ano de expiração deve ser maior que ${new Date().getFullYear()}`
        case "cardNumber should be of length between '8' and '19'.":
            return "O número de cartão deve ter entre 8 e 19 dígitos";
        case "securityCode should be of length '4'.":
            return "Código de segurança deve ser 4 dígitos";
        case "Another error":
            return "";
        case "cardNumber should be a number.":
            return "Número do cartão não pode ser um texto";
        case "invalid parameter identificationNumber":
            return "Número de documento inválido";
    }

    return message;

}

export { PUBLIC_KEY, translateMessageError };
