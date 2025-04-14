import "./Alert.css";

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
  
    return <p className={classNames.join(" ")}>{children}</p>;
  };