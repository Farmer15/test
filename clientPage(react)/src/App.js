import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [pageIdStorage, setPageIdStorage] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const tempToken = searchParams.get("code");

  const authonticateUrl = "https://api.notion.com/v1/oauth/authorize?client_id=f97cf45f-d9a4-41f2-9d96-8427b0f9eeed&response_type=code&owner=user&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F";

  const exchangeToken = async () => {
    const response = await fetch("http://localhost:3001/exchangeToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: tempToken,
      }),
    });

    const result = await response.json();
    console.log(result);
    setAccessToken(result.access_token);
  }

  const getTokken = async () => {
    const response = await fetch("http://localhost:3001/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accessToken,
      }),
    });

    const result = await response.json();
    console.log(result);
    // setPageIdStorage(result)
  }

  const getPageInfo = async () => {
    const response = await fetch("http://localhost:3001/page", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accessToken,
      }),
    });

    const result = await response.json();
    console.log(result);
  }

  return (
    <div>
      <a href={authonticateUrl}>이동 하기</a>
      <button onClick={exchangeToken}>임시 토큰 교환해줘!!</button>
      <button onClick={getTokken}>페이지 정보줘!!</button>
      <button onClick={getPageInfo}>페이지 정보줘~~!!!</button>
    </div>
  );
}

export default App;
