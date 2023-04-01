<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserLoginRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        $rules = ['password' => 'required|string'];

        if (request()->input('phone')) {
            $rules['phone'] = 'required|string|exists:users,phone|regex:/^\+7 \(\d{3}\) \d{3}-\d{4}$/';
        } else {
            $rules['email'] = 'required|email|exists:users,email';
        }
        return $rules;
    }
}
