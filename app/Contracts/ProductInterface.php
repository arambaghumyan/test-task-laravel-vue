<?php

namespace App\Contracts;

use App\Models\Product;

interface ProductInterface
{

    /**
     * @param $filter
     * @return mixed
     */
    public function index($filter): mixed;

    /**
     * store product.
     *
     * @param array $storeProductData
     * @return Product
     */
    public function store(array $storeProductData) : Product;

    /**
     * update product.
     *
     * @param int $productId
     * @param array $updateProductData
     * @return bool
     */
    public function update(int $productId, array $updateProductData) : bool;

    /**
     * remove product.
     *
     * @param int $productId
     *
     * @return bool
     */
    public function delete(int $productId);
}
