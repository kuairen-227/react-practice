import { Button } from "@headlessui/react";

type CustomButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const CustomButton = ({ onClick }: CustomButtonProps) => {
  return (
    <Button onClick={onClick} className="border">
      保存
    </Button>
  );
};
