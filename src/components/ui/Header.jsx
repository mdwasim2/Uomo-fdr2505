import { navitems } from "../../api/navbardata";
import Image from "../common/Image";
import Container from "./Container";

const Header = () => {
  return (
    <header>
      <nav>
        <Container>
          <Image src="images/logo.png" alt="logo" />
          <ul>
            {navitems?.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
