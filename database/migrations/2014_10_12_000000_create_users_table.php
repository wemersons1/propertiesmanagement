<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('email')->unique();
            $table->string('document')->nullable();
            $table->string('whatsapp_number');

            $table->unsignedBigInteger('role_id');

            $table->foreign('role_id')->references('id')
            ->on('roles');

            $table->unsignedBigInteger('address_id');

            $table->foreign('address_id')->references('id')
            ->on('users_address');

            $table->unsignedBigInteger('company_id');

            $table->foreign('company_id')->references('id')
            ->on('companies');

            $table->string('password');

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
        Schema::dropIfExists('users');
    }
}
