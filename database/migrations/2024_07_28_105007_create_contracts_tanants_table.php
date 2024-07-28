<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractsTanantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contracts_tanants', function (Blueprint $table) {
            $table->id();

            $table->dateTime('initial_date');
            $table->dateTime('final_date');
            $table->integer('quantity_months');

            $table->double('value', 10, 2);

            $table->unsignedBigInteger('tenant_id');
            $table->foreign('tenant_id')->references('id')
            ->on('tenants');

            $table->unsignedBigInteger('property_id');
            $table->foreign('property_id')->references('id')
            ->on('properties');

            $table->unsignedBigInteger('company_id');
            $table->foreign('company_id')->references('id')
            ->on('companies');

            $table->unsignedBigInteger('guarantee_id');
            $table->foreign('guarantee_id')->references('id')
            ->on('guarantee');

            $table->unsignedBigInteger('registered_by');
            $table->foreign('registered_by')->references('id')
            ->on('users');

            $table->string('description')->nullable();
            $table->string('rental_object')->nullable();

            $table->string('adjustment_based')->nullable();
            $table->string('months_based')->nullable();

            $table->longText('contract_generate');

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
        Schema::dropIfExists('contracts_tanants');
    }
}
