<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'user_id' => ['required'],
            'name' => ['required','max:255'],
            'quantity' => ['required','numeric'],
            'total_price' => ['nullable'],
            'price' => ['nullable'],
            'price_details' => ['nullable'],
            'currency' => ['required'],
            'site' => ['nullable', 'url'],
            'details' => ['required','min:5'],
            'image_path' => ['nullable','image'],
            'category' => ['required','max:50'],
        ];
    }
}
