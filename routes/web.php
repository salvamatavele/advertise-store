<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ProductsController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductsController as ProductController;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('products', [ProductController::class, 'index'])->name('products');

Route::middleware(['auth', 'verified'])->group(function (){
    Route::get('dashboard', [AdminController::class, 'index'])->name('dashboard');
    Route::get('admin/products', [ProductsController::class, 'index'])->name('admin.products');
    Route::get('admin/product/{id}', [ProductsController::class, 'show'])->name('admin.products.show');
    Route::get('admin/products/create', [ProductsController::class, 'create'])->name('admin.products.create');
    Route::post('admin/products/store', [ProductsController::class, 'store'])->name('admin.products.store');
    Route::get('admin/products/edit/{id}', [ProductsController::class, 'edit'])->name('admin.products.edit');
    Route::put('admin/products/update/{id}', [ProductsController::class, 'update'])->name('admin.products.update');
    Route::post('admin/products/image_update/{id}', [ProductsController::class, 'updateImage'])->name('admin.products.image_update');
    Route::delete('admin/products/delete/{id}', [ProductsController::class, 'destroy'])->name('admin.products.delete');
    Route::get('admin/products/images', [ProductsController::class, 'addImages'])->name('admin.products.images');
    Route::post('admin/products/images', [ProductsController::class, 'uploadImages'])->name('admin.products.images.upload');
    Route::get('admin/users', [UsersController::class, 'index'])->name('admin.users');
});


require __DIR__.'/auth.php';
