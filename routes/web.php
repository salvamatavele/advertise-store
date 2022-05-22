<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ProductsController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductsController as ProductController;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('products', [ProductController::class, 'index'])->name('products');
Route::get('products/{id}', [ProductController::class, 'show'])->name('products.show');
Route::inertia('about', 'About')->name('about');

Route::middleware(['auth', 'verified'])->group(function (){
    Route::get('dashboard', [AdminController::class, 'index'])->name('dashboard');
    /**
     * product routes
     */
    Route::get('admin/products', [ProductsController::class, 'index'])->name('admin.products');
    Route::get('admin/product/{id}', [ProductsController::class, 'show'])->name('admin.products.show');
    Route::get('admin/products/create', [ProductsController::class, 'create'])->name('admin.products.create');
    Route::post('admin/products/store', [ProductsController::class, 'store'])->name('admin.products.store');
    Route::get('admin/products/edit/{id}', [ProductsController::class, 'edit'])->name('admin.products.edit');
    Route::put('admin/products/update/{id}', [ProductsController::class, 'update'])->name('admin.products.update');
    Route::post('admin/products/image_update/{id}', [ProductsController::class, 'updateImage'])->name('admin.products.image_update');
    Route::delete('admin/products/delete/{id}', [ProductsController::class, 'destroy'])->name('admin.products.delete');
    Route::get('admin/products/{id}/images', [ProductsController::class, 'addImages'])->name('admin.products.images');
    Route::post('admin/products/images', [ProductsController::class, 'uploadImages'])->name('admin.products.images.upload');
    /**
     * user routes
     */
    Route::get('admin/users', [UsersController::class, 'index'])->name('admin.users');
    Route::post('admin/users/active/{id}', [UsersController::class, 'activeUser'])->name('admin.users.active');
    Route::post('admin/users/desactive/{id}', [UsersController::class, 'desactiveUser'])->name('admin.users.desactive');
    Route::post('admin/users/standard/{id}', [UsersController::class, 'standardUser'])->name('admin.users.standard');
    Route::post('admin/users/pro/{id}', [UsersController::class, 'proUser'])->name('admin.users.pro');
    Route::post('admin/users/block/{id}', [UsersController::class, 'blockUser'])->name('admin.users.block');
    Route::post('admin/users/desblock/{id}', [UsersController::class, 'desblockUser'])->name('admin.users.desblock');

});


require __DIR__.'/auth.php';
