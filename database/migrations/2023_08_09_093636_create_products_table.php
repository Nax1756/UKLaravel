<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('Производитель', 255);
            $table->string('Код', 255);
            $table->string('Описание', 2555);
            $table->string('Цена у\е', 255);
            $table->integer('Наличие');
            $table->string('Фото', 255)->nullable();
            $table->string('Скидка', 255)->nullable();
            $table->string('Курс',255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
