"use client";

import { useEffect, useState } from "react";
import { IProduct } from "@/types/product";
import { Skeleton } from "@/components/ui/skeleton";
import ActionButton from "@/components/ui/ActionButton";
import ViewProductModal from "../products/ViewProductModal";
import EditProductModal from "../products/EditProductModal";
import { deleteProduct } from "@/services/admin/productManagement";
import { toast } from "sonner";
import DeleteConfirmDialog from "../products/DeleteProduct";

interface Props {
  products: IProduct[];
  loading?: boolean;
}

const AllProduct = ({ products = [], loading = false }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [modalType, setModalType] = useState<"view" | "edit" | null>(null);
  // ✅ Delete states
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    setProductList(products);
  }, [products]);
  const handleView = (product: IProduct) => {
    setSelectedProduct(product);
    setModalType("view");
  };

  const handleEdit = (product: IProduct) => {
    setSelectedProduct(product);
    setModalType("edit");
  };

  // ✅ FINAL DELETE FUNCTION
  const handleDeleteConfirm = async () => {
    if (!deleteId) return;

    try {
      setDeleteLoading(true);

      const result = await deleteProduct(deleteId);
      console.log(result);

      if (result?.success) {
        setProductList((prev) => prev.filter((item) => item._id !== deleteId));

        toast.success("Product deleted successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Delete failed");
    } finally {
      setDeleteLoading(false);
      setDeleteId(null);
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
      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 font-sans text-gray-700 ">
          <thead className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                Barcode
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                Purchase Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                Available
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product, index) => {
              let stockClass = "";
              if (product.stock > 10) {
                stockClass = "bg-green-500  text-gray-200";
              } else if (product.stock > 0 && product.stock <= 10) {
                stockClass = "bg-yellow-500 text-gray-200 ";
              } else {
                stockClass = "bg-red-500 text-gray-200 ";
              }

              return (
                <tr
                  key={product._id}
                  className="hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{product.barcode ?? "N/A"}</td>
                  <td className="px-6 py-4 font-medium">{product.name}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">
                    {product.purchasePrice ?? "N/A"}
                  </td>
                  <td className="px-6 py-4">{product.productAvailable}</td>
                  <td
                    className={`px-6 py-2 text-center font-semibold rounded-full ${stockClass}`}
                  >
                    {product.stock ?? 0}
                  </td>
                  <td className="px-6 py-4 text-center space-x-2">
                    <ActionButton
                      label="View"
                      color="blue"
                      onClick={() => handleView(product)}
                    />
                    <ActionButton
                      label="Edit"
                      color="green"
                      onClick={() => handleEdit(product)}
                    />
                    <ActionButton
                      label="Delete"
                      color="red"
                      onClick={() => setDeleteId(product._id)}
                    />
                  </td>
                </tr>
              );
            })}
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
              <ActionButton
                label="View"
                color="blue"
                onClick={() => handleView(product)}
              />
              <ActionButton
                label="Edit"
                color="green"
                onClick={() => handleEdit(product)}
              />
              <ActionButton
                label="Delete"
                color="red"
                onClick={() => setDeleteId(product._id)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {modalType === "view" && selectedProduct && (
        <ViewProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}

      {modalType === "edit" && selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}

      {/* ✅ DELETE CONFIRMATION DIALOG */}
      <DeleteConfirmDialog
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDeleteConfirm}
        loading={deleteLoading}
      />
    </div>
  );
};

export default AllProduct;
