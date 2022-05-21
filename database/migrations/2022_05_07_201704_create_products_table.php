<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('name', 225);
            $table->double('quantity');
            $table->double('total_price')->nullable();
            $table->double('price')->nullable();
            $table->string('price_details')->nullable();
            $table->string('currency', 25);
            $table->string('site', 225)->nullable();
            $table->string('category',50);
            $table->text('details');
            $table->string('image_path', 225);
            $table->boolean('status')->default(true);
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
        Schema::dropIfExists('products');
    }
};
