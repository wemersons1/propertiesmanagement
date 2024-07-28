<?php

namespace App\Console\Commands;

use App\Models\Expense;
use App\Models\Payment;
use App\Models\PaymentEmployeeAdvisor;
use Illuminate\Console\Command;

class SyncPaymentsEmployeesAdvisorsAndPaymentsOnExpenses extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'SyncPaymentsEmployeesAdvisorsAndPaymentsOnExpenses';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Responsável por sincronizar pagamentos da tabela payments_employees_advisors e payments na tabela expenses';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $payments = Payment::where('active', true)->get();

        foreach($payments as $payment) {

            $payments = Payment::where('cart_id', $payment->cart_id)
            ->where('active', true)->count();

            if((int)$payments > 1) {

                $description = "Pagamento parcial, Pedido N° {$payment->cart_id}";

            } else {

                $description = "Pagamento total, Pedido N° {$payment->cart_id}";

            }

            $paymentTreated['payment_id'] = $payment->id;
            $paymentTreated['active'] = true;
            $paymentTreated['date_payment'] = $payment->date;
            $paymentTreated['paid'] = true;
            $paymentTreated['company_id'] = $payment->company_id;
            $paymentTreated['payment_form_id'] = $payment->payment_form_id;
            $paymentTreated['expenses_type_id'] = 1;//Entrada
            $paymentTreated['value'] = $payment->value;
            $paymentTreated['description'] = $description;

            Expense::create($paymentTreated);

        }

        $payments = PaymentEmployeeAdvisor::where('active', true)->get();

        $paymentTreated = [];

        foreach($payments as $payment){


            $dateInit = (new \DateTime($payment->date_init))->format('d/m/Y');
            $dateEnd = (new \DateTime($payment->date_end))->format('d/m/Y');

            if($payment->advisor_id) {

                $nameAdvisor = ucfirst($payment->advisor->name);
                $description = "Pagamento assessor {$nameAdvisor} - Período: {$dateInit} - {$dateEnd}";

            } else {

                $nameSeller = ucfirst($payment->seller->name);
                $description = "Pagamento vendedor {$nameSeller} - Período: {$dateInit} - {$dateEnd}";

            }

            $paymentTreated['payment_employee_advisor_id'] = $payment->id;
            $paymentTreated['active'] = true;
            $paymentTreated['date_payment'] = $payment->created_at;
            $paymentTreated['paid'] = true;
            $paymentTreated['company_id'] = $payment->company_id;
            $paymentTreated['payment_form_id'] = $payment->payment_form_id;
            $paymentTreated['expenses_type_id'] = 2;//Saída
            $paymentTreated['value'] = $payment->amount;
            $paymentTreated['description'] = $description;

            Expense::create($paymentTreated);

        }

        dd('Operação realizada com sucesso');

    }
}
