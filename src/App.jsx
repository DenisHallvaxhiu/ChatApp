import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Background from "./components/Background/Background";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedUser, setSelectedUser] = useState({
    name: "",
    image: "",
  });

  function selectUser(index) {
    setSelectedUser({
      name: this.users[index].name,
      image: this.users[index].image,
    });
  }

  let users = [
    {
      name: "Denzel Washington",
      image: "https://www.randomlists.com/img/people/denzel_washington.webp",
      lastMsg:
        "asdfhjbasdhasdddddddddddddddddddddddddddddddddddjfvasdfvasdfuvsadufasvdfhasdo",
      seen: true,
    },
    {
      name: "Leonardo DiCaprio",
      image: "https://www.randomlists.com/img/people/leonardo_dicaprio.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: false,
    },
    {
      name: "Eminem",
      image: "https://www.randomlists.com/img/people/eminem.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: false,
    },
    {
      name: "Morgan Freeman",
      image: "https://www.randomlists.com/img/people/morgan_freeman.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: true,
    },
    {
      name: "Taylor Swift",
      image: "https://www.randomlists.com/img/people/taylor_swift.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: true,
    },
    {
      name: "Jennifer Lopez",
      image: "https://www.randomlists.com/img/people/jennifer_lopez.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: false,
    },
    {
      name: "Cameron Diaz",
      image: "https://www.randomlists.com/img/people/cameron_diaz.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: true,
    },
    {
      name: "Jeniffer Aniston",
      image: "https://www.randomlists.com/img/people/jennifer_aniston.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: true,
    },
    {
      name: "Denzel Washington",
      image: "https://www.randomlists.com/img/people/denzel_washington.webp",
      lastMsg:
        "asdfhjbasdhasdddddddddddddddddddddddddddddddddddjfvasdfvasdfuvsadufasvdfhasdo",
      seen: true,
    },
    {
      name: "Leonardo DiCaprio",
      image: "https://www.randomlists.com/img/people/leonardo_dicaprio.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: false,
    },
    {
      name: "Eminem",
      image: "https://www.randomlists.com/img/people/eminem.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: false,
    },
    {
      name: "Morgan Freeman",
      image: "https://www.randomlists.com/img/people/morgan_freeman.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: true,
    },
    {
      name: "Taylor Swift",
      image: "https://www.randomlists.com/img/people/taylor_swift.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: true,
    },
    {
      name: "Jennifer Lopez",
      image: "https://www.randomlists.com/img/people/jennifer_lopez.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: false,
    },
    {
      name: "Cameron Diaz",
      image: "https://www.randomlists.com/img/people/cameron_diaz.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: true,
    },
    {
      name: "Jeniffer Aniston",
      image: "https://www.randomlists.com/img/people/jennifer_aniston.webp",
      lastMsg: "asdfhjbasdhjfvasdfvasdfuvsadufasvdfhasdo",
      seen: true,
    },
  ];
  return (
    <div className="screen">
      <div className="left">
        <Menu users={users} selectUser={selectUser} />
      </div>
      <div className="right">
        {selectedUser.name === "" ? (
          <Background />
        ) : (
          <>
            <Header user={selectedUser} />
            <Background selected={selectedUser}/>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
