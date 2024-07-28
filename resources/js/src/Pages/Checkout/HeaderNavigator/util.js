import Swal from "sweetalert2";
import { valida_cpf_cnpj } from "../../../Hook/util/check_cpf_cnpj";

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

const goToPlans = (company) => {
    let url = window.location.href.replace('https://', '').replace('http://', '');
    url = url.split('/').splice(1).join('/');
    url = url.split('?').splice(1).join('?');

    let paramsBusca = new URLSearchParams(url);
    let plan_id = paramsBusca.get('plan_id');

    return '/list-plans?' + btoa(`&plan_id=${plan_id}&type=${company.type}&name=${company?.name}&cnpj=${company?.cnpj}`);
}

const goToDataCompany = (plan_id = null, is_free, user = null) => {

    let url = window.location.href.replace('https://', '').replace('http://', '');

    url = url.split('/').splice(1).join('/');
    url = url.split('?').splice(1).join('?');
    url = atob(url.split('#')[0]);

    let paramsBusca = new URLSearchParams(url);

    if (plan_id && !is_free) {
        paramsBusca.delete('plan_id');
        url = paramsBusca.toString();

        if (user?.company?.plan?.length) {

            return '/payment?' + btoa(`${url}&plan_id=${plan_id}`);
        }

        return '/data-company?' + btoa(`${url}&plan_id=${plan_id}`);
    } else {
        paramsBusca.delete('plan_id');
        url = paramsBusca.toString();
        return '/data-company?' + btoa(`${url}&plan_id=free`);
    }

    return '/data-company?' + btoa(url);

}

const goToPayment = (data) => {

    if (!valida_cpf_cnpj(data?.cnpj)) {

        Toast.fire({
            icon: 'error',
            title: `${data.type.toUpperCase()} inválido`
        });

        return false;
    }

    if (data?.name?.length > 1 && valida_cpf_cnpj(data?.cnpj)) {

        return '/payment?' + paramsUrlToBase64(data);
    }

    Toast.fire({
        icon: 'error',
        title: 'Por favor preencha todos os campos obrigatórios'
    });

    return false;

}

const paramsUrlToBase64 = (company) => {

    let url = window.location.href.replace('https://', '').replace('http://', '');
    url = url.split('/').splice(1).join('/');
    url = url.split('?').splice(1).join('?');

    var paramsBusca = new URLSearchParams(atob(url));
    let plan_id = paramsBusca.get('plan_id');

    console.log('valor_url: ' + paramsBusca.toString());
    console.log("valor de plan_id: " + plan_id);

    return btoa(`plan_id=${plan_id}&type=${company.type}&name=${company.name}&cnpj=${company.cnpj}`);
}

export { goToPayment, goToPlans, goToDataCompany }
