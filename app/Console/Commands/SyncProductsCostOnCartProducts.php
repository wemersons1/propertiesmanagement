<?php

namespace App\Console\Commands;

use App\Models\ChartProduct;
use App\Models\ProductConfig;
use Illuminate\Console\Command;

class SyncProductsCostOnCartProducts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'SyncProductsCostOnCartProducts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $chartProducts = ChartProduct::all();

        foreach($chartProducts as $product) {

            $productConfig = ProductConfig::find($product->product_config_id);

            if($productConfig) {

                $product->price_cost = $productConfig->price_cost;
                $product->save();
            }

        }


        dd('Operação realizada com sucesso');
    }
}
