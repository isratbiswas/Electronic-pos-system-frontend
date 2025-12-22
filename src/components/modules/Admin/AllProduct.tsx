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
  userRole: "ADMIN" | "MANAGER" | "CASHIER";
}

const AllProduct = ({ products = [], loading = false, userRole }: Props) => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [modalType, setModalType] = useState<"view" | "edit" | null>(null);

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

  const handleDeleteConfirm = async () => {
    if (!deleteId) return;

    try {
      setDeleteLoading(true);
      const result = await deleteProduct(deleteId);

      if (result?.success) {
        setProductList((prev) =>
          prev.filter((item) => item._id.toString() !== deleteId)
        );
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
    return <Skeleton className="h-[400px] w-full rounded-xl" />;
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden font-inter">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-600">
        <h1 className="text-2xl font-semibold text-white tracking-wide">
          📦 All Products
        </h1>
        <span className="text-base text-indigo-100">
          Total : {productList.length}
        </span>
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-sm text-slate-700">
          <thead className="bg-slate-100 sticky top-0 z-10">
            <tr>
              {[
                "#",
                "Barcode",
                "Name",
                "Category",
                "Purchase",
                "Status",
                "Stock",
                "Actions",
              ].map((head) => (
                <th
                  key={head}
                  className="px-6 py-4 text-left  font-semibold text-slate-600 uppercase tracking-wider"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y ">
            {productList.map((product, index) => {
              const stockBadge =
                product.stock > 25
                  ? "bg-green-100 text-green-700"
                  : product.stock > 10
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700";

              return (
                <tr key={product._id} className="hover:bg-indigo-50 transition">
                  <td className="px-6 py-4 font-medium">{index + 1}</td>
                  <td className="px-6 py-4 text-slate-500">
                    {product.barcode ?? "—"}
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-800">
                    {product.name}
                  </td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">
                    ৳{product.purchasePrice ?? "N/A"}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
                      {product.productAvailable}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${stockBadge}`}
                    >
                      {product.stock ?? 0}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center space-x-2">
                    <ActionButton
                      label="View"
                      color="blue"
                      onClick={() => handleView(product)}
                    />

                    {(userRole === "ADMIN" || userRole === "MANAGER") && (
                      <>
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
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARD VIEW ================= */}
      <div className="md:hidden p-4 space-y-4">
        {productList.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow border p-4 space-y-3"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-slate-800">{product.name}</h2>
              <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">
                {product.productAvailable}
              </span>
            </div>

            <p className="text-sm text-slate-500">{product.category}</p>

            <div className="flex justify-between text-sm">
              <span>Purchase Price</span>
              <span className="font-medium">
                ৳{product.purchasePrice ?? "N/A"}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Stock</span>
              <span className="font-semibold">{product.stock ?? 0}</span>
            </div>

            <div className="flex gap-2 pt-2">
              <ActionButton
                label="View"
                color="blue"
                onClick={() => handleView(product)}
              />
              {(userRole === "ADMIN" || userRole === "MANAGER") && (
                <>
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
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODALS ================= */}
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

      {/* ================= DELETE CONFIRM ================= */}
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
