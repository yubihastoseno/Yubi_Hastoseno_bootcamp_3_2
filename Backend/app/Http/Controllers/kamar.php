<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\transaksi;

class kamar extends Controller
{
    function Transaksi(Request $req)
    {
        DB::beginTransaction();
        try {
            $this->validate($req, [
                'customerId' => 'required',
                'kamarId' => 'required',
            ]);
            $kamarId = $req->input('kamarId');
            $transaksi = new transaksi;
            $transaksi->customerId = $req->input('customerId');
            $transaksi->kamarId = $kamarId;
            $transaksi->harga = $req->input('harga');
            $transaksi->checkIn = $req->input('checkIn');
            $transaksi->checkOut = $req->input('checkOut');
            $transaksi->save();
            DB::commit();
            return response()->json(['message' => 'Booking Berhasil'], 200);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Booking Gagal:' + $e], 500);
        }
    }
}
