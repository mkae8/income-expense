export const Select = ({ onChange }) => {
  return (
    <div>
      <select
        className="select select-bordered w-[384px] h-[64px] text-[16px] font-semibold "
        onChange={onChange}
      >
        <option disabled selected>
          Select Currency
        </option>
        <option>MNT - Mongolian Tugrik</option>
        <option>USD - Usa Dollar</option>
      </select>
    </div>
  );
};
