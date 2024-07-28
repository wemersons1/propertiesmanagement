<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGuaranteeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('guarantee', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('document');

            $table->unsignedBigInteger('address_id')->nullable();

            $table->foreign('address_id')->references('id')
            ->on('guarantee_address');

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
        Schema::dropIfExists('guarantee');
    }
}
