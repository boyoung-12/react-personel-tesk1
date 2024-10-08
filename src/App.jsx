// App.jsx
import { useState } from "react";
import "./App.css";

function App() {


  // 국가 이름을 입력하는 Input 값을 상태관리하기 위한 useState
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("");
  const [sliver, setSliver] = useState("");
  const [bronze, setBronze] = useState("");
  const [countries, setCountries] = useState([]);
  // 금메달, 은메달, 동메달이 추가로 필요하겠죠?
  //숫자인풋도 스트링로 받는게 좋음 현업에서

  const handleAddCountry = (event) => {
    event.preventDefault();
console.log(event.target)
const existCountry = countries.find((item) => { return item.country === country })
if(existCountry){
  alert("이미 있는 국가입니다.")
  return
}
    const newCountries =
    {
      id: new Date().getTime(),
      country: country, //country는 변수인데 왜 {}이걸 안씌워져도됨? -> 이건 return문 밑에에서만 여기선 jvscript gram as is 
      gold: gold,
      sliver: sliver,
      bronze: bronze
    };
    console.log(countries)
    setCountries([...countries, newCountries]) //이부분 이해가안됨 {,[]newcountries 객체}?   
    console.log(countries)
    // 메달 메달 갯수를 입력하는 로직이 필요할 거에요. 
  };

  const handleUpdateCountry = (event) => {
    event.preventDefault();
    const existCountry = countries.find((item) => { return item.country === country })
    console.log(existCountry);
    if (existCountry) {
      setCountries(
        countries.map((item) => {
          if (item.country === country) {
            return {
              id: new Date().getTime(),
              country: country,
              gold: gold,
              sliver: sliver,
              bronze: bronze
            }
          } else {
            return item
          }
        })
      )
    } else {
      alert("없는 국가입니다.")
    }
    // 수정로직
  };

  const handleDeleteCountry = (id) => {
    // 삭제로직
    console.log(id);
    const filteredId = countries.filter((item) => { return item.id !== id })
    // list에 있는 목록들중 id가 
    //유저가 클릭한 버튼 id 필터
    setCountries(filteredId)
   
    //유저가 누른것만 빼고 새배열 만들기 
  };



  const inputCountryHandler = (event) => {
    setCountry(event.target.value)
    console.log(event.target)
    // return country
  };

  const inputGoldHandler = (event) => {
    setGold(event.target.value)
    // return gold
  };

  const inputSliverHandler = (event) => {
    setSliver(event.target.value)
    // return sliver
  };

  const inputBronzeHandler = (event) => {
    setBronze(event.target.value)
    // return bronze
  };



  return (
    <div className="container">
      <h1 style={{ color: "navy" }}>2024 파리 올릭픽</h1>
      <div>
        <div className="inputContents">
          <p className="inputContentsBox">국가명</p>
          <p className="inputContentsBox">금메달</p>
          <p className="inputContentsBox">은메달</p>
          <p className="inputContentsBox">동메달</p>
          <p className="inputContentsBox"></p>
        </div>
        

        {/* value랑 onchange는 항상 같이 간다  */}
        {/* onclick이나 onchange가 일어나면 onclick은 event를 인자로 함수에게넘겨주고 onchange는 사용자가 입력한 값을 인자로 함수에게 넘겨준다. */}
        <form className="input-group">
          <input type="text" className="inputTextBox" placeholder="국가를 입력하세요" value={country} onChange={inputCountryHandler} /> 
          <input type="text" className="inputTextBox" value={gold} onChange={inputGoldHandler} />
          <input type="text" className="inputTextBox" value={sliver} onChange={inputSliverHandler} />
          <input type="text" className="inputTextBox" value={bronze} onChange={inputBronzeHandler} />
          <button className="inputButtonBox" type="button" onClick={handleAddCountry}>국가 추가</button>
          <button className="inputButtonBox" type="button" onClick={handleUpdateCountry}>업데이트</button>
        </form>
      </div>

      <div className="list">
        <div className="listContents">
          <p className="listContentsBox">국가명</p>
          <p className="listContentsBox">금메달</p>
          <p className="listContentsBox">은메달</p>
          <p className="listContentsBox">동메달</p>
          <p className="listContentsBox">액션</p>
        </div>

        {countries.map((country) => {
          return (<div className="listResult" key={country.id} >
            <p className="listResultBox">{country.country}</p>
            <p className="listResultBox">{country.gold}</p>
            <p className="listResultBox">{country.sliver}</p>
            <p className="listResultBox">{country.bronze}</p>
            <button className="deleteButton" type="button"onClick={() => handleDeleteCountry(country.id)}>삭제</button>
          </div>)
        })}


      </div>

    </div>
  );
}

export default App;
