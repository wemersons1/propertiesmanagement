<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta  name='viewport'  content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
    <title>BirdsDigital - QuickSale</title>
    <!-- Styles -->

</head>

<body>

    <div style="padding: 5rem; width: 100vw; position: absolute; box-shadow: border-box; ">
        <div style="display: flex; align-items: center; justify-content: center;">
            <img
                width="180px"
                id="logo"
                style="margin-bottom: 2rem;"
            />
        </div>
        <h3 style="text-align: center"><b>MOVIMENTAÇÃO DO CAIXA</b></h3>

        <h3 style="text-align: center; padding: 0; margin: .3rem;"><b>DATA: {{(new \DateTime($date_init))->format('d/m/Y')}} À {{(new \DateTime($date_end))->format('d/m/Y')}}</b></h3>

        <div style="border: 1px solid black; margin-bottom: 3rem;"></div>

        <h3><b>TOTAL ENTRADAS => R$ {{number_format($total_in, 2, ',', '.')}}</b></h3>

        @if(count($total_by_payment_types['payment_in']))

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 3rem;">
            <thead>
                <tr>
                    <th style="border: 1px solid black; padding: .5rem;">DESCRIÇÃO</th>
                    <th style="border: 1px solid black; padding: .5rem;">FORMA PAGAMENTO</th>
                    <th style="border: 1px solid black; padding: .5rem;">TOTAL</th>
                </tr>
                    @foreach ($total_by_payment_types['payment_in'] as $payment)
                        <tr>
                            <td style="border: 1px solid black; padding: .5rem; text-align: center;">TOTAL DE VENDAS(ENTRADAS)</td>
                            <td style="border: 1px solid black; padding: .5rem; text-align: center;">{{$payment["name"]}}</td>
                            <td style="border: 1px solid black; padding: .5rem; text-align: center;">R$ {{number_format($payment["value"], 2, ',', '.')}}</td>

                        </tr>
                    @endforeach

            </thead>
        </table>
        @endif

        <h3><b>TOTAL SAÍDAS => R$ {{number_format($total_out, 2, ',', '.')}}</b></h3>

        @if(count($total_by_payment_types['payment_out']))

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 3rem;">
            <thead>
                <tr>
                    <th style="border: 1px solid black; padding: .5rem;">DESCRIÇÃO</th>
                    <th style="border: 1px solid black; padding: .5rem;">FORMA PAGAMENTO</th>
                    <th style="border: 1px solid black; padding: .5rem;">TOTAL</th>
                </tr>

                <tr>
                    @foreach ($total_by_payment_types['payment_out'] as $payment)
                    <tr>
                        <td style="border: 1px solid black; padding: .5rem; text-align: center;">TOTAL DE GASTOS</td>
                        <td style="border: 1px solid black; padding: .5rem; text-align: center;">{{$payment["name"]}}</td>
                        <td style="border: 1px solid black; padding: .5rem; text-align: center;">R$ {{number_format($payment["value"], 2, ',', '.')}}</td>

                    </tr>
                @endforeach
                </tr>

            </thead>
        </table>
        @endif

        <h3><b>TOTAL DISPONÍVEL POR TIPO DE PGTO => R$ {{number_format($total_in - $total_out, 2, ',', '.')}}</b></h3>

        @if(count($total_by_payment_types['total_available']))

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 3rem;">
            <thead>
                <tr>
                    <th style="border: 1px solid black; padding: .5rem;">DESCRIÇÃO</th>
                    <th style="border: 1px solid black; padding: .5rem;">FORMA PAGAMENTO</th>
                    <th style="border: 1px solid black; padding: .5rem;">TOTAL</th>
                </tr>

                <tr>
                    @foreach ($total_by_payment_types['total_available'] as $payment)
                    <tr>
                        <td style="border: 1px solid black; padding: .5rem; text-align: center;">TOTAL DISPONÍVEL</td>
                        <td style="border: 1px solid black; padding: .5rem; text-align: center;">{{$payment["name"]}}</td>
                        <td style="border: 1px solid black; padding: .5rem; text-align: center;">R$ {{number_format($payment["value"], 2, ',', '.')}}</td>

                    </tr>
                @endforeach
                </tr>

            </thead>
        </table>

        @endif

        <h3 style="text-align: start"><b>SALDO MOVIMENTAÇÃO DO CAIXA => R$ {{number_format($total_in - $total_out, 2, ',', '.')}}</b></h3>

        @if(Helper::checkUserLogged('admin'))
            <h3 style="text-align: start"><b>CUSTO DE PRODUTOS VENDIDOS => R$ {{number_format($total_sum_cost_products, 2, ',', '.')}}</b></h3>
            <h3 style="text-align: start"><b>LUCRO => R$ {{number_format(($total_in - $total_out) - $total_sum_cost_products, 2, ',', '.')}}</b></h3>
        @endif

    </div>
</body>
</html>
