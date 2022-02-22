import { useState } from "react";
import { connect } from "react-redux";
import { setInfo } from "../redux/actions/main";

function Home(props: { name: any; setInfo: any }) {
  const { name, setInfo } = props;
  const [newName, setName] = useState("");

  return (
    <div>
      <p>Enter a Name : {name}</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setInfo(newName)}>submit</button>
    </div>
  );
}

const mapStateToProps = (state: { main: { name: any } }) => {
  return { name: state.main.name };
};

const mapDispatchToProps = {
  setInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
