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
      "Hello!",
      seen: true,
    },
    {
      name: "Leonardo DiCaprio",
      image: "https://www.randomlists.com/img/people/leonardo_dicaprio.webp",
      lastMsg: "Good afternoon!",
      seen: false,
    },
    {
      name: "Eminem",
      image: "https://www.randomlists.com/img/people/eminem.webp",
      lastMsg: "Nice to meet you",
      seen: false,
    },
    {
      name: "Morgan Freeman",
      image: "https://www.randomlists.com/img/people/morgan_freeman.webp",
      lastMsg: "How's your day",
      seen: true,
    },
    {
      name: "Taylor Swift",
      image: "https://www.randomlists.com/img/people/taylor_swift.webp",
      lastMsg: "See you later!",
      seen: true,
    },
    {
      name: "Jennifer Lopez",
      image: "https://www.randomlists.com/img/people/jennifer_lopez.webp",
      lastMsg: "Hey",
      seen: false,
    },
    {
      name: "Cameron Diaz",
      image: "https://www.randomlists.com/img/people/cameron_diaz.webp",
      lastMsg: "Hows it going",
      seen: true,
    },
    {
      name: "Jeniffer Aniston",
      image: "https://www.randomlists.com/img/people/jennifer_aniston.webp",
      lastMsg: "Take care!",
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
