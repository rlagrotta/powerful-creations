import Image from "next/image";

export default function Home() {
  return (
    <div className="menu_container">
      <div className="menu_container__menu-title">
        Menu
      </div>
      <div className="menu_container__menu-links">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </div>
    </div>
  );
}
