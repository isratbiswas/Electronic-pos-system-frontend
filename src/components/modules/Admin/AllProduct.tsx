"use client";

import { useState } from "react";
import { IProduct } from "@/types/product";
import { Skeleton } from "@/components/ui/skeleton";
import ActionButton from "@/components/ui/ActionButton";
import ViewProductModal from "../products/ViewProductModal";
import EditProductModal from "../products/EditProductModal";
import { deleteProduct } from "@/services/admin/productManagement";


interface Props {
  products: IProduct[];
  loading?: boolean;
}

const AllProduct = ({ products = [], loading = false }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [modalType, setModalType] = useState<"view" | "edit" | null>(null);

  const handleView = (product: IProduct) => {
    setSelectedProduct(product);
    setModalType("view");
  };

  const handleEdit = (product: IProduct) => {
    setSelectedProduct(product);
    setModalType("edit");
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;
    try {
      console.log("Deleting product:", id);
      const result = await deleteProduct(id);
      if(result.success){
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalType(null);
  };

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="bg-white rounded-xl shadow border">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Barcode</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Purchase Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-6 text-center text-red-700">
                  No Products Found
                </td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={product._id} className="border-t hover:bg-gray-50 transition">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{product.barcode ?? 0}</td>
                  <td className="p-4 font-medium">{product.name}</td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4">{product.purchasePrice ?? "N/A"}</td>
                  <td className="p-4">{product.stock ?? 0}</td>
                  <td className="p-4 text-center space-x-2">
                    <ActionButton label="View" color="blue" onClick={() => handleView(product)} />
                    <ActionButton label="Edit" color="green" onClick={() => handleEdit(product)} />
                    <ActionButton label="Delete" color="red" onClick={() => handleDelete(product._id)} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y">
        {products.map((product) => (
          <div key={product._id} className="p-4 space-y-2 border-b">
            <div className="font-semibold">{product.name}</div>
            <div className="text-sm text-gray-500">{product.category}</div>
            <div className="flex justify-between text-sm">
              <span>Price:</span>
              <span>৳{product.purchasePrice ?? "N/A"}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Stock:</span>
              <span>{product.stock ?? 0}</span>
            </div>

            <div className="flex gap-2 pt-2">
              <ActionButton label="View" color="blue" onClick={() => handleView(product)} />
              <ActionButton label="Edit" color="green" onClick={() => handleEdit(product)} />
              <ActionButton label="Delete" color="red" onClick={() => handleDelete(product._id)} />
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {modalType === "view" && selectedProduct && (
        <ViewProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}

      {modalType === "edit" && selectedProduct && (
        <EditProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default AllProduct;
