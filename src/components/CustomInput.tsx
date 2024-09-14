import { Input } from "@headlessui/react";

type CustomInputProps = {
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomInput = ({
  name,
  placeholder,
  onChange,
}: CustomInputProps) => {
  return (
    <Input
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="border"
    />
  );
};
