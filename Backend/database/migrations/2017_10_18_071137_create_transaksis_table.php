<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransaksisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaksis', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('transaksiTanggal');
            $table->decimal('harga');
            $table->date('check-in');
            $table->date('check-out');
            $table->integer('customerId')->unsigned();
            $table->foreign('customerId')->references('id')->on('customers');
            $table->integer('kamarId')->unsigned();
            $table->foreign('kamarId')->references('id')->on('kamars');
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
        Schema::dropIfExists('transaksis');
    }
}
