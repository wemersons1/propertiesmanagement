<?php

namespace App\Exports;

use App\Models\Expense;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class ExpenseExport implements FromCollection, WithHeadings, WithMapping
{
    /**
    * @return \Illuminate\Support\Collection
    */

    private $expenses;

    public function __construct($expenses)
    {
        $this->expenses = $expenses;
    }

    public function collection()
    {
        return $this->expenses->get();
    }


    public function headings(): array
    {
        return [
            'Id',
            'Descricao',
            'Status',
            'Data',
            'Forma pgto.',
            'Total'
        ];
    }

    public function map($invoice): array
    {

        $datePayment = '';
        $hourPayment = '';

        if($invoice->date_payment) {
            $datePayment = explode(' ', $invoice->date_payment)[0];

            if(isset(explode(' ', $invoice->date_payment)[1])) {

                $hourPayment = explode(' ', $invoice->date_payment)[1];
            }

        }

        return [
            $invoice->id,
            $invoice->description,
            $invoice->type->name === 'in' ? 'Entrada' : 'Saída',
            $invoice->date_payment ? (new \DateTime($datePayment))->format('d/m/Y')." {$hourPayment}" : 'INDEFINIDO',
            $invoice->paymentForm->name,
            $invoice->value
        ];
    }

}
