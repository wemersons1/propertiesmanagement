import { RiUserReceivedFill } from 'react-icons/ri';
import { HiOutlineReceiptRefund } from 'react-icons/hi';
import { BsExclamationCircle } from 'react-icons/bs';
import { MdOutlinePaid } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';

export const isObjectEmpty = (obj) => {

    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export const formatMask = (document) => {
    return document.split('-').join('').split(' ').join('').split('.').join('').split('_').join('').split('/').join('').split('-').join('').split('(').join('').split(')').join('');
}

export const paramsTreated = param => {
    let paramTreated = param.split('_');

    return {
        value: +paramTreated[0],
        label: paramsTreated[1]
    }
}

export const verifyCpf = (cpf) => {
    let strCPF = cpf.split('.').join("").replace("-", '').split(' ').join('');

    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF === "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    return Resto === parseInt(strCPF.substring(10, 11));
}

export const printScreenPdf = elementId => {

    var conteudo = document.getElementById(elementId).innerHTML,
        tela_impressao = window.open('about:blank');

    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
}

export const translateStatusProduct = (status) => {

    switch (status) {
        case 'received':
            return (<><RiUserReceivedFill className={'icon-left icon-success'} />Recebido</>);
        case 'refund':
            return <><HiOutlineReceiptRefund className={'icon-left icon-red'} />Devolvido</>;
        case 'pending':
            return <><BsExclamationCircle className={'icon-left icon-warning'} />Pendente</>;

    }

}

export const translateStatusPayment = (status) => {

    switch (status) {
        case 'paid':
            return (<><MdOutlinePaid className={'icon-left icon-success'} />Pago</>);
        case 'canceled':
            return <><ImCancelCircle className={'icon-left icon-red'} />Cancelado</>;
        case 'pending':
            return <><BsExclamationCircle className={'icon-left icon-warning'} />Pendente</>;

    }

}

export const formatTypeUser = (type) => {

    switch (type) {
        case 'master':
            return 'Master';
        case 'admin':
            return 'Administrador';
        case 'seller':
            return 'Vendedor';
        case 'clerk':
            return 'Caixa';
        case 'expedition':
            return 'Expedição';
    }

}

export const formatCnpj = (cnpj) => {

    return cnpj.replace("/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/", "$1.$2.$3/$4-$5");

}

export const formatDate = date => {

    date = date.split('-');

    return `${date[2]}/${date[1]}/${date[0]}`;
}

export const formatDatePick = date => {

    let month = date.month > 9 ? date.month : `0${+date.month}`;
    let day = date.day > 9 ? date.day : `0${+date.day}`;
    let year = date.year;

    return `${year}-${month}-${day}`;

}

export const formatDateInput = date => {

    let month = date.month > 9 ? date.month : `0${+date.month}`;
    let day = date.day > 9 ? date.day : `0${+date.day}`;
    let year = date.year;

    return `${day}/${month}/${year}`;
}

export const calculateTotalValue = (discount = 0, configs) => {

    let total = 0;

    for (let i = 0; i < configs.length; i++) {

        for (let j = 0; j < configs[i].configs.length; j++) {

            total = total + (parseFloat(configs[i].configs[j].price_final) * +(configs[i].configs[j].quantity_selected));

        }
    }

    return total - discount;

}

export const checkUser = (user, roleVerify) => {

    let verify = false;

    user.roles.map(role => {

        if (role.name === roleVerify) {
            verify = true;
        }

    });

    return verify;
}

export const firstLetterUppercase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getMonthName = (index) => {

    const array_months = ["", "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    return array_months[index];
}

