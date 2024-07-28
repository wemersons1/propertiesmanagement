<?php

namespace Database\Seeders;

use App\Models\CompanyPlan;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
                UserSeeder::class,
                RoleSeeder::class,
                PaymentFormSeeder::class,
                PaymentStatusSeeder::class
            ]);
    }
}
