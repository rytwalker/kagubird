import BaseDatePicker from "react-datepicker";
import { textInputStyles } from "./TextInput";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({
  selected,
  onChange,
  isTimePicker = false,
  layoutStyles = "",
  label,
  ...props
}: any) => {
  const timePickerProps = isTimePicker
    ? {
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 15,
        timeCaption: "Time",
        dateFormat: "h:mm aa",
      }
    : {};

  return (
    <div className={`flex flex-col mb-8 ${layoutStyles}`}>
      {label ? (
        <label
          className="text-xs mb-1 font-semibold uppercase text-gray-400"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
      ) : null}
      <BaseDatePicker
        className={textInputStyles()}
        selected={selected}
        onChange={onChange}
        {...timePickerProps}
      />
    </div>
  );
};

export default DatePicker;
