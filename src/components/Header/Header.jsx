import "./Header.css";
import PropTypes from "prop-types"

export default function Header({user}) {

  Header.propTypes = {
    user: PropTypes.object.isRequired
  }

  return (
    <header>
      <img src={user.image} alt="" />
      <div>
        <h4>{user.name}</h4>
        <span>online</span>
      </div>
    </header>
  );
}
