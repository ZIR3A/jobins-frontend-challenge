import { memo } from "react";
import { CircleBlueIcon, PERSONAL_INFORMATION_TITLE, SHIPPING_ADDRESS_TITLE } from "../../../utils";
import PropTypes from "prop-types";
const PersonalSalesInfo = memo(function PersonalSalesInfo() {
  const _contact_name = "Saran Baral";
  const _contact_email = "saranbrl35@gmail.com";
  const _contact_number = "(+977) 9817178937";
  const _contact_dob = "23 Nov, 1998";
  const _contact_member_since = "26 September, 2024";
  const _total_order = "150";
  const _total_completed = "140";
  const _total_canceled = "10";
  const _shipping_address = "Dhahara Margg, Fulbari 11, Pokhara, Nepal";
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 space-y-4">
      <div className="flex flex-wrap items-center gap-4 border-r-0 md:border-r">
        <img src={CircleBlueIcon} />
        <div>
          <p className="text-lg font-semibold">{_contact_name}</p>
          <p className="text-[15px] text-secondary">{_contact_email}</p>
        </div>
      </div>
      <div className="px-0 md:px-5 border-r-0 md:border-r">
        <p className="text-[13px] text-secondary uppercase font-medium mb-4">{PERSONAL_INFORMATION_TITLE}</p>
        <tbody className="text-[13px] text-[rgba(35, 39, 46, 1)]">
          <PersonalInfo label="Contact Number" value={_contact_number} />
          <PersonalInfo label="Date of Birth" value={_contact_dob} />
          <PersonalInfo label="Member Since" value={_contact_member_since} />
        </tbody>
      </div>
      <div className="px-0 md:px-5">
        <p className="text-[13px] text-secondary uppercase font-medium">{SHIPPING_ADDRESS_TITLE}</p>
        <p className="text-[13px] text-primary uppercase font-medium mt-4">{_shipping_address}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
          <ShipingInfo count={_total_order} title="Total Order" />
          <ShipingInfo count={_total_completed} title="Completed" />
          <ShipingInfo count={_total_canceled} title="Canceled" />
        </div>
      </div>
    </div>
  );
});

export default PersonalSalesInfo;
const PersonalInfo = memo(function ShippingInfo({ label, value }) {
  return (
    <tr>
      <td className="w-[120px] pb-3">{label}</td>
      <td className="max-w-[220px] pb-3 font-semibold">{value}</td>
    </tr>
  );
});
PersonalInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
const ShipingInfo = memo(function ShippingInfo({ count, title }) {
  return (
    <div>
      <p className="text-xl font-bold">{count}</p>
      <p className="text-[13px] text-secondary">{title}</p>
    </div>
  );
});
ShipingInfo.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
