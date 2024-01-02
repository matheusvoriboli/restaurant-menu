import { ButtonSize } from "@/enums/ButtonSize";
import { useAppSelector } from "@/redux/store";
import { ReactNode } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  fullScreen?: boolean;
  disabled?: boolean;
  circleButton?: boolean;
  size?: ButtonSize;
  type?: "submit" | "reset" | "button"
  className?: string;
  icon?: ReactNode;
};

export default function Button({
  children,
  onClick,
  backgroundColor,
  textColor = "#FFFFFF",
  fullScreen = false,
  disabled = false,
  circleButton = false,
  size = ButtonSize.Medium,
  type,
  className,
  icon
}: ButtonProps) {
  var buttonPadding = "7px 7px";
  var buttonFontSize = "16px";
  const restaurantResponse = useAppSelector((state) => state.restaurant.value);
  if (!backgroundColor)
    backgroundColor = restaurantResponse.webSettings.primaryColour;
  if (disabled) {
    backgroundColor = "#E5E5E5";
    textColor = "#BDBDBD";
  }
  if (size === ButtonSize.Small) {
    buttonPadding = "4px 4px";
    buttonFontSize = "12px";
  } else if (size === ButtonSize.Large) {
    buttonPadding = "14px 14px";
    buttonFontSize = "18px";
  } else {
    buttonPadding = "7px 7px";
    buttonFontSize = "16px";
  }

  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: buttonPadding,
        fontSize: buttonFontSize
      }}
      className={`flex justify-center items-center font-semibold ${fullScreen && "w-full"} ${
        circleButton ? "rounded-full" : "rounded-[40px]"
      } ${className}}`}
      onClick={onClick}
      type={type && type}
    >
      {icon && (
        <div className="me-1">
          {icon}
        </div>
      )}
      {children}
    </button>
  );
}
