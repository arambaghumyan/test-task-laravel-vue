<?php

namespace App\Http\Controllers;

use App\Contracts\ProductInterface;
use App\Http\Requests\ProductStoreRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{

    /**
     * Get list of products
     *
     * @return JsonResponse
     */
    public function index(ProductInterface $productInterface) : JsonResponse
    {
        $filter = request()->has('filter') ? json_decode(request()->input('filter')) : null;
        return ProductResource::collection($productInterface->index($filter))->response()->setStatusCode(Response::HTTP_OK);
    }

    /**
     * Create new product
     *
     * @param ProductStoreRequest $productStoreRequest
     * @param ProductInterface $productInterface
     *
     * @return JsonResponse
     */
    public function store(ProductStoreRequest $productStoreRequest, ProductInterface $productInterface) : JsonResponse
    {
        $createdModel = $productInterface->store([
            'name' => $productStoreRequest->get('name'),
            'price' => $productStoreRequest->get('price'),
            'count' => $productStoreRequest->get('count'),
            'user_id' => Auth::user()->id
        ]);
        $createdModel->option()->create($productStoreRequest->get('options'));
        return ProductResource::make($createdModel)->response()->setStatusCode(Response::HTTP_CREATED);
    }

    /**
     * Update product
     *
     * @param ProductStoreRequest $productStoreRequest
     * @param Product $product
     *
     * @param ProductInterface $productInterface
     *
     * @return JsonResponse
     */
    public function update(ProductStoreRequest $productStoreRequest, Product $product, ProductInterface $productInterface):JsonResponse
    {
        $productInterface->update($product->id, [
                'name' => $productStoreRequest->get('name'),
                'user_id' => Auth::user()->id
        ]);

        return ProductResource::collection([])->response()->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * Remove product
     *
     * @param Product $product
     * @param ProductInterface $productInterface
     *
     * @return JsonResponse
     */
    public function destroy(Product $product, ProductInterface $productInterface): JsonResponse
    {
        $productInterface->delete($product->id);
        return ProductResource::collection([])->response()->setStatusCode(Response::HTTP_NO_CONTENT);
    }

    /**
     *  Show product
     *
     * @param Product $product
     *
     * @return JsonResponse
     */
    public function show(Product $product): JsonResponse
    {
        return ProductResource::make($product)->response()->setStatusCode(Response::HTTP_OK);
    }
}
