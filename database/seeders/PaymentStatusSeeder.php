<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('payments_statuses')->insert([
            'id' => 1,
            'name' => 'Pago',
        ]);

        DB::table('payments_statuses')->insert([
            'id' => 2,
            'name' => 'Em aberto',
        ]);
    }
}
