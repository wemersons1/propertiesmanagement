<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesConfigTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies_config', function (Blueprint $table) {
            $table->id();

            $table->longText('model_contract');
            $table->integer('quantity_days_in_arrears')->default(0);//QUANTIDADE DE DIAS PARA GERAR MULTA
            $table->double('percentage_of_late_fine', 6, 2)->default(0);//PORCENTAGEM DE MULTA POR ATRASO
            $table->char('primary_color', 8);
            $table->char('secondary_color', 8);
            $table->longText('logo');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies_config');
    }
}
