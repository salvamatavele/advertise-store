<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index()
    {
        return Inertia::render('Products',[
            'filters' => Request::all('search', 'trashed'),
            'products' => new ProductCollection(Product::where('name', 'like', '%'.Request::input('search').'%')
                ->where('category', 'like', '%'.Request::input('trashed').'%')
                ->paginate(8)),
        ]);
    }
}
