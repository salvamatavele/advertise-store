<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Users', [
            'filters' => Request::all('search', 'trashed'),
            'users' => new UserCollection(User::where('name', 'like', '%'.Request::input('search').'%')
            ->paginate(6)),
        ]);
    }

    /**
     * active user
     */
    public function activeUser(int $id)
    {
        $user = User::find($id);
        if ($user->update(['status' => true])) {
            return Redirect::back()->with('success', 'Activado com sucesso');
        }else {
            return Redirect::back()->with('error', 'Ooops! Falha ao tentar activar');
        }
    }
    /**
     * desactive user
     */
    public function desactiveUser(int $id)
    {
        $user = User::find($id);
        if ($user->update(['status' => false])) {
            return Redirect::back()->with('success', 'Desactivado com sucesso');
        }else {
            return Redirect::back()->with('error', 'Ooops! Falha ao tentar desactivar');
        }
    }

    /**
     * standard user
     */
    public function standardUser(int $id)
    {
        $user = User::find($id);
        if ($user->update(['subscribe_id' => 2])) {
            return Redirect::back()->with('success', 'Subscricao actualiza com sucesso');
        }else {
            return Redirect::back()->with('error', 'Ooops! Falha ao tentar subscrever');
        }
    }
    /**
     * pro user
     */
    public function proUser(int $id)
    {
        $user = User::find($id);
        if ($user->update(['subscribe_id' => 3])) {
            return Redirect::back()->with('success', 'Subscricao actualiza com sucesso');
        }else {
            return Redirect::back()->with('error', 'Ooops! Falha ao tentar subscrever');
        } 
    }
    /**
     * block user
     */
    public function blockUser(int $id)
    {
        $user = User::find($id);
        if ($user->update(['blocked' => true])) {
            return Redirect::back()->with('success', 'Bloqueado com sucesso');
        }else {
            return Redirect::back()->with('error', 'Ooops! Falha ao tentar bloquear');
        }
    }
    /**
     * desblock user
     */
    public function desblockUser(int $id)
    {
        $user = User::find($id);
        if ($user->update(['blocked' => false])) {
            return Redirect::back()->with('success', 'Desbloqueado com sucesso');
        }else {
            return Redirect::back()->with('error', 'Ooops! Falha ao tentar desbloquear');
        }
    }
}
