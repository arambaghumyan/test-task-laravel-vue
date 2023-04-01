<?php

namespace App\Repositories;

use App\Contracts\ProductInterface;
use App\Models\Product;

class ProductRepository implements ProductInterface
{
    /**
     * @var Product
     */
    protected Product $product;

    /**
     * ProductRepository constructor.
     */
    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    /**
     * @param $filter
     * @return mixed
     */
    public function index($filter): mixed
    {
        return $this->product->leftJoin('product_options', 'products.id', '=', 'product_options.product_id')
            ->when($filter && $filter->searchQuery, function ($query) use ($filter) {
                $query->where('products.name', 'like', '%'.$filter->searchQuery.'%');
            })
            ->when($filter && $filter->color, function ($query) use ($filter) {
                $query->whereIn('product_options.color', $filter->color);
            })
            ->when($filter && $filter->weight, function ($query) use ($filter) {
                $query->where('product_options.weight', $filter->weight);
            })->paginate(40);
    }

    public function store(array $storeBrandData) : Product
    {
        return $this->product->create($storeBrandData);
    }

    public function update(int $productId, array $updateModelData) : bool
    {
        return $this->product->find($productId)->update($updateModelData);
    }

    public function delete(int $productId)
    {
        $this->product->find($productId)->delete();
    }
}
