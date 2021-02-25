import { useHistory } from "react-router-dom";

export default function LogoutButton() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <p onClick={handleLogout}>Log out</p>
    </div>
  );
}
