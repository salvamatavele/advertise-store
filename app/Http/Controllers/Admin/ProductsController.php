<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ImageRequest;
use App\Http\Requests\Product\ProductStoreRequest;
use App\Http\Requests\Product\ProductUpdateRequest;
use App\Http\Resources\ProductCollection;
use App\Models\Contact;
use App\Models\Product;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductsController extends Controller
{
    /*
     * index
     */
    public function index()
    {
        return Inertia::render('Admin/Products/Index', [
            'filters' => Request::all('search', 'trashed'),
            'products' => new ProductCollection(Product::where('name', 'like', '%'.Request::input('search').'%')
                ->where('category', 'like', '%'.Request::input('trashed').'%')
                ->paginate(6)),
        ]);
    }

    /*
     * create
     */
    public function create()
    {

        return Inertia::render('Admin/Products/New');
    }

    /*
     * store
     */
    public function store(ProductStoreRequest $productRequest)
    {
        $products = $productRequest->validated();
        $image = $productRequest->file('image_path');
        $path = $image->move('images/products', 'pro' . uniqid() . trim($image->getClientOriginalName()));
        $products['image_path'] = $path;
        $saved = Product::create($products);
        if ($saved) {
            return Redirect::route('admin.products')->with('success', 'Produto registado com sucesso');
        } else {
            return Redirect::back()->with('error', 'Produto nao registado com sucesso');
        }
    }

    /*
     * show
     */
    public function show(int $id)
    {
        $product = Product::where('id',$id)->with(['user.phone', 'images'])->first();
        return Inertia::render('Admin/Products/Show', [
            'product' => $product,

        ]);
    }

    /*
     * edit
     */
    public function edit(int $id)
    {
        $product = Product::findOrFail($id);
        return Inertia::render('Admin/Products/Edit', [
            'product' => $product
        ]);
    }

    /*
     * update
     */
    public function update(int $id, ProductUpdateRequest $productUpdateRequest)
    {
        $product = Product::findOrFail($id);
        $inputs = $productUpdateRequest->validated();

            $saved = $product->update($inputs);
            if ($saved) {
                return Redirect::route('admin.products')->with('success', 'Produto actualizado com sucesso');
            } else {
                return Redirect::back()->with('error', 'Produto nao foi actualizado com sucesso');
            }

    }
    /*
     * update image
     */
    public function updateImage(int $id, ImageRequest $imageRequest)
    {
        $product = Product::findOrFail($id);
        $image = $imageRequest->file('image_path');
        Storage::delete($product->image_path);
        $path = $image->move('images/products', 'pro' . uniqid() . trim($image->getClientOriginalName()));
        $saved = $product->update(['image_path' => $path]);
        if ($saved && $path) {
            return Redirect::back()->with('success', 'Imagem actualizada com sucesso');
        } else {
            return Redirect::back()->with('error', 'Imagem nao foi actualizada com sucesso');
        }
    }
    /*
     * destroy product
     */
    public function destroy(int $id)
    {
        Storage::delete(Product::find($id)->image_path);
        $deleted = Product::destroy($id);
        if ($deleted) {
            return Redirect::back()->with('success', 'Produto eliminado com sucesso');
        } else {
            return Redirect::back()->with('error', 'Ooops! Produto nao foi eliminado');
        }
    }
}
