import { memo } from "react";
import { _tableHeaders } from "../constants";
import { Table } from "../../../shared";
import { TableColumn } from "../../../shared/Table";

const OrdersListing = memo(function OrdersListing() {
  return (
    <div className="mt-4">
      <div className="card">
        <Table headers={_tableHeaders}>
          <tr className="bg-white border-b hover:bg-tertiary text-primary text-[15px]">
            <TableColumn value="#5089" />
            <TableColumn value="Joseph Wheeler" />
            <TableColumn value="6 April, 2023" />
            <TableColumn value="$2999" />
            <TableColumn value="CC" />
            <TableColumn value={<span>Pending</span>} />
            <TableColumn
              value={
                <a href="#" className="font-medium text-blue-primary hover:underline">
                  View Details
                </a>
              }
            />
          </tr>
          <tr className="bg-white border-b hover:bg-tertiary text-primary text-[15px]">
            <TableColumn value="#5089" />
            <TableColumn value="Joseph Wheeler" />
            <TableColumn value="6 April, 2023" />
            <TableColumn value="$2999" />
            <TableColumn value="CC" />
            <TableColumn value={<span>Pending</span>} />
            <TableColumn
              value={
                <a href="#" className="font-medium text-blue-primary hover:underline">
                  View Details
                </a>
              }
            />
          </tr>
          <tr className="bg-white border-b hover:bg-tertiary text-primary text-[15px]">
            <TableColumn value="#5089" />
            <TableColumn value="Joseph Wheeler" />
            <TableColumn value="6 April, 2023" />
            <TableColumn value="$2999" />
            <TableColumn value="CC" />
            <TableColumn value={<span>Pending</span>} />
            <TableColumn
              value={
                <a href="#" className="font-medium text-blue-primary hover:underline">
                  View Details
                </a>
              }
            />
          </tr>
          <tr className="bg-white border-b hover:bg-tertiary text-primary text-[15px]">
            <TableColumn value="#5089" />
            <TableColumn value="Joseph Wheeler" />
            <TableColumn value="6 April, 2023" />
            <TableColumn value="$2999" />
            <TableColumn value="CC" />
            <TableColumn value={<span>Pending</span>} />
            <TableColumn
              value={
                <a href="#" className="font-medium text-blue-primary hover:underline">
                  View Details
                </a>
              }
            />
          </tr>
        </Table>
      </div>
    </div>
  );
});

OrdersListing.propTypes = {};

export default OrdersListing;
