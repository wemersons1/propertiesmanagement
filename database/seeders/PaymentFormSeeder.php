<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentFormSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('payments_forms')->insert([
            'name' => 'Pendente'
        ]);

        DB::table('payments_forms')->insert([
            'name' => 'Dinheiro'
        ]);

        DB::table('payments_forms')->insert([
            'name' => 'Pix presencial'
        ]);

        DB::table('payments_forms')->insert([
            'name' => 'Boleto'
        ]);

        DB::table('payments_forms')->insert([
            'name' => 'Crédito à vista'
        ]);

        DB::table('payments_forms')->insert([
            'name' => 'Crédito parcelado'
        ]);

        DB::table('payments_forms')->insert([
            'name' => 'Crédito Maquininha'
        ]);

        DB::table('payments_forms')->insert([
            'name' => 'Débito maquininha'
        ]);

        DB::table('payments_forms')->insert([
            'name' => 'Isento'
        ]);

        DB::table('payments_forms')->insert([
            'name' => 'Pix site'
        ]);

        DB::table('payments_forms')->insert([
            'name' => 'Crédito recorrente'
        ]);
    }
}
