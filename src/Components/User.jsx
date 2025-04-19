import {HiUser} from "react-icons/hi";

export default function UserMenu({ name }) {
    return (
      <div>
        <p><HiUser className="my-icon" size="48" /> {name}</p>
      </div>
    );
  };