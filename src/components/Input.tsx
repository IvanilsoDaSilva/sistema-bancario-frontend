const InputField = ({ value, label, name, placeholder, type, onChange }: any) => (
  <>
    <label htmlFor="input-field">{label}</label>
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  </>
);

export default InputField;