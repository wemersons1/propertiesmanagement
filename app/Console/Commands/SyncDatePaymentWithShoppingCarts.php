<?php

namespace App\Console\Commands;

use App\Models\Payment;
use App\Models\ShoppingCart;
use Illuminate\Console\Command;

class SyncDatePaymentWithShoppingCarts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'SyncDatePaymentWithShoppingCarts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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

        foreach ($payments as $payment) {

            $shopping = ShoppingCart::find($payment->cart_id);

            if($shopping) {

                $shopping->date_paid = $payment->date;
                $shopping->save();
            }
        }

        dd('Operação realizada com sucesso!');
    }
}
