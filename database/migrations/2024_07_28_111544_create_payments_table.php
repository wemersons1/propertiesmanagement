<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('company_id');
            $table->foreign('company_id')->references('id')->on('companies');

            $table->unsignedBigInteger('contract_id');
            $table->foreign('contract_id')->references('id')->on('contracts_tanants');

            $table->double('value', 8, 2)->default(0);
            $table->double('value_original', 8, 2);//VALOR DO PLANO SEM DESCONTO NO MOMENTO DA AQUISIÇÃO
            $table->double('discount', 8, 2)->default(0);//DESCONTO POR FATURA NA CONTRATAÇÃO

            $table->integer('quantity_days_in_arrears_before_paying');
            $table->double('interest_for_late', 8, 2);

            $table->double('config_fee', 8, 2);

            $table->string('reference');

            $table->date('due_date');
            $table->date('due_date_main');

            $table->dateTime('date_of_payment')->nullable();

            $table->unsignedBigInteger('payment_form_id')->nullable();
            $table->foreign('payment_form_id')->references('id')->on('payments_forms');

            $table->unsignedBigInteger('status_id')->nullable();//caso ele gere um outro pagamento no mercadopago, ex: boleto, vai para pix
            $table->foreign('status_id')->references('id')->on('payments_status');
            $table->unsignedBigInteger('created_by')->nullable();
            $table->foreign('created_by')->references('id')->on('users');

            $table->unsignedBigInteger('registered_by')->nullable();
            $table->foreign('registered_by')->references('id')->on('users');$table->longText('description')->nullable();

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
        Schema::dropIfExists('payments');
    }
}
