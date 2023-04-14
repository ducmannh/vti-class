import "../../App.css";
import styled from "styled-components";
export default function Bai1c() {
  const fullName = () => {
    const fName = "Trần Đức";
    const lName = "Mạnh";
    return (
      <div style={{ border: "2px solid red", width: "200px" }}>
        <p>fName: {fName}</p>
        <p>lName: {lName}</p>
        <p>fullName: {fName + " " + lName}</p>
      </div>
    );
  };
  const userBlogs = () => {
    const userName = "Jo Bloggs";
    const userIntro =
      "Hi, I'm J, and I want to be a software tester. I'm currently studying mechatronics with the a minor in visual communication design at the University of New Zealand. My pas...";
    const userText = "more about me";
    return (
      <div
        style={{
          display: "flex",
          marginLeft: "20px",
          backgroundColor: "#E8E8E8",
          height: "200px",
          width: "550px",
        }}
      >
        <img
          src="src/assets/Jisoo.jpg"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        />
        <div style={{ marginLeft: "20px" }}>
          <p style={{ fontSize: "25px" }}>{userName}</p>
          <p>{userIntro}</p>
          <p style={{ color: "blue", cursor: "pointer" }}>{userText}</p>
        </div>
      </div>
    );
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "40px" }}>
        <h3 style={{ border: "2px solid orange", width: "200px" }}>
          Hello World
        </h3>
        <h3 style={{ border: "2px solid blue", width: "200px" }}>
          Hello World
        </h3>
        <h3 className="textH3">Hello World</h3>
        {fullName()}
      </div>

      <div style={{ width: "300px" }}>
        <h2>Học lập trình web có đơn giản không?</h2>
        <img src="src/assets/vti.jpg" style={{ width: "300px" }} />
        <h3>Đây là tiêu đề của bài viết</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
          velit at quam ultricies, nec varius nunc tristique. Nullam vel
          hendrerit eros. Vestibulum pharetra libero sed nisi viverra, eu
          molestie velit bibendum. Aenean ut est tellus. Pellentesque ultrices
          orci vel nibh bibendum, at efficitur turpis posuere. Nullam luctus
          arcu eu tortor malesuada venenatis.
        </p>
        <button
          style={{
            float: "right",
            backgroundColor: "blue",
            border: "none",
            borderRadius: "6px",
            padding: "5px",
            color: "white",
          }}
        >
          Đọc thêm
        </button>
      </div>

      <div
        style={{
          width: "300px",
          marginLeft: "50px",
          border: "2px solid blue",
          textAlign: "center",
        }}
      >
        <h1>Login Form</h1>
        <InputText type="text" placeholder="Email or Username" />
        <InputText type="text" placeholder="Password" />
        <br />
        <ButtonLogin>Login</ButtonLogin>
        <div>
          <p>Or login with</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextP style={{ marginRight: "10px" }}>Facebook</TextP>
            <TextP style={{ color: "red" }}>Google</TextP>
          </div>
        </div>
        <p>
          Not a member?{" "}
          <a style={{ color: "blue", cursor: "pointer" }}>Signup now</a>
        </p>
      </div>
      {userBlogs()}
    </div>
  );
}

export const InputText = styled.input`
  padding: 10px 10px;
  width: 230px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid gray;
`;
export const ButtonLogin = styled.button`
  width: 250px;
  padding: 7px;
  font-size: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid gray;
  background: linear-gradient(to left, #33ccff 0%, #ff99cc 100%)
`;
export const TextP = styled.p`
  color: blue;
  border: 1px solid gray;
  padding: 5px;
  width: 80px;
  margin-top: 0px;
  cursor: pointer;
  border-radius: 5px;
`;