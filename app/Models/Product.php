<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var $fillable
     */
    protected $fillable = [
        'name',
        'price',
        'count',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function option()
    {
        return $this->hasOne(ProductOption::class);
    }
}
