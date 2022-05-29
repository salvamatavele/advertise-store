<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index()
    {
        return Inertia::render('Products',[
            'filters' => Request::all('search', 'trashed'),
            'products' => new ProductCollection(Product::whereHas('user', function ($query) {
                $query->where('blocked', '0')->where('status', '1')->where('subscribe_id', '>', 0);
            })
            ->where('name', 'like', '%'.Request::input('search').'%')
                ->where('category', 'like', '%'.Request::input('trashed').'%')
                ->with('user')
                ->paginate(8)),
        ]);
    }
    public function show(int $id)
    {
        return Inertia::render('ProductDetail',[
            'product' => Product::where('id', $id)->with(['user.phone', 'images'])->first(),
        ]);
    }
}
