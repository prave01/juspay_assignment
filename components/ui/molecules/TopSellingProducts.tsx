interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

interface TopSellingProductsProps {
  data: Product[];
}

export function TopSellingProducts({ data }: TopSellingProductsProps) {
  return (
    <div className="w-full max-w-[662px] bg-sky-100/20 rounded-lg p-6">
      <h3 className="text-[14px] font-semibold text-black mb-6">
        Top Selling Products
      </h3>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="w-[40%] text-left text-[12px] font-normal text-gray-400 pb-4 pl-1">
                Name
              </th>
              <th className="w-[20%] text-left text-[12px] font-normal text-gray-400 pb-4">
                Price
              </th>
              <th className="w-[20%] text-left text-[12px] font-normal text-gray-400 pb-4">
                Quantity
              </th>
              <th className="w-[20%] text-left text-[12px] font-normal text-gray-400 pb-4">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={index} className="">
                <td className="py-4 text-[12px] text-black font-medium pl-1">
                  {product.name}
                </td>
                <td className="py-4 text-[12px] text-black">{product.price}</td>
                <td className="py-4 text-[12px] text-black">{product.quantity}</td>
                <td className="py-4 text-[12px] text-black">{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
