import "./Alert.module.css";
import clsx from "clsx";

//   const getBgColor = variant => {
//     switch (variant) {
//       case "info":
//         return "blue";
//       case "success":
//         return "green";
//       case "error":
//         return "red";
//       case "warning":
//         return "orange";
//       default:
//         throw new Error(`Unsupported variant prop value - ${variant}`);
//     }
//   };
  
  export const Alert = ({ variant, outlined, elevated, children }) => {
    const classNames = ["alert", variant];
  
    if (outlined) {
          classNames.push("is-outlined");
      }
  
    if (elevated) {
          classNames.push("is-elevated");
      }
  
      return (
        <p
          className={clsx("alert", variant, {
            "is-outlined": outlined,
            "is-elevated": elevated,
          })}
        >
          {children}
        </p>
      );
  };