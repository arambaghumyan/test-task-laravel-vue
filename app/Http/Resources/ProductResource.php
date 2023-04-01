<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'author_name' => $this->user->name,
            'name' => $this->name,
            'count' => $this->count,
            'price' => $this->price,
            'color' => $this->color,
            'weight' => $this->weight,
            'created_at' => $this->created_at,
        ];
    }

}
