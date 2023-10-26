import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const TextField = ({
  type,
  label,
  name,
  ariaLabel,
  placeholder,
  error,
  colorText,
  errorMessage,
  bgColor,
  helperText,
  value,
  id,
  onChange,
}) => {
  const isError = error ? `error` : `no-error`;
  const [focus, setFocus] = useState(false);
  const [iconoPass, setIconoPass] = useState(false);
  const tipoOficial = type;

  if (tipoOficial === "password") {
    return (
      <div className={`w-full text-${colorText} text-[14px] leading-[12px]`}>
        <label
          htmlFor={name}
          className={focus ? "visible text-[10px]" : "invisible text-[10px]"}
        >
          {label}
        </label>
        <div className="relative">
        <div className="absolute top-1 right-1" onClick={() => setIconoPass(!iconoPass)}>
          {iconoPass ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
        </div>
        <input
          className={`appearance-none bg-${bgColor} border-b-[1px] w-full 
        text-gray-700 mr-3 py-1 px-2 focus:outline-none text-${colorText}
            hover:border-b-2 md:text-[16px]`}
          type={iconoPass ? "text" : "password"}
          placeholder={focus ? "" : placeholder}
          aria-label={ariaLabel}
          value={value}
          id={id}
          name={name}
          onChange={onChange}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
          autoComplete="current-password"
        />

        </div>
        <span
          className={focus ? `visible text-[10px]` : `invisible text-[10px]`}>
          {helperText}
        </span>
      </div>
    );
  }
  return (
    <div className={`w-full text-${colorText} text-[14px]  leading-[12px]`}>
      <label
        htmlFor={name}
        className={focus ? "visible text-[10px]" : "invisible text-[10px]"}
      >
        {label}
      </label>
      <input
        className={`appearance-none bg-${bgColor} border-b-[1px] w-full 
    text-gray-700 mr-3 py-1 px-2 focus:outline-none text-${colorText}
        hover:border-b-2 md:text-[16px]`}
        type={type}
        placeholder={focus ? "" : placeholder}
        aria-label={ariaLabel}
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        onFocus={() => setFocus(!focus)}
        onBlur={() => setFocus(!focus)}
      />
      <span className={focus ? `visible text-[10px]` : `invisible text-[10px]`}>
        {helperText}
      </span>
    </div>
  );
};

export default TextField;
