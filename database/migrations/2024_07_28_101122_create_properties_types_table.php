<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties_types', function (Blueprint $table) {
            $table->id();

            $table->string('name');

            $table->timestamps();
        });

        DB::table('properties_types')->insert([
            [
                "id" => 1,
                "name" => "Residencial"
            ],
            [
                "id" => 2,
                "name" => "Condomínio"
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties_management_types');
    }
}
