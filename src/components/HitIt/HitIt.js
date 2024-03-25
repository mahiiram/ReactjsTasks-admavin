import React, { useEffect, useState } from "react";
import "./hitIt.css";
import { FcAlarmClock } from "react-icons/fc";

function HitIt() {
  const [score, setScore] = useState(0);
  const [x, setX] = useState(0);
  const [disable, setDisable] = useState(false);
  const [time, setTime] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if(prevTime===0){
          return 60
        }else{
           return prevTime - 1
        }
      });
    }, 1000);
    const reloadPage=setTimeout(()=>{
      window.location.reload()
    },61000)

    return(() => {
      clearInterval(interval);
      clearTimeout(reloadPage)
      setDisable(true);
      setX(0);
    });
  },[]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisable(false);
      setX(Math.floor(Math.random() * 9 + 1.5));
    }, 1000);
    setTimeout(() => {
      clearInterval(intervalId);
      setDisable(true);
      setX(0);
    }, 60000);
  }, []);

  const handleClick = (number) => {
    if (number === x) setScore(score + 5);
    else {
      setScore(score - 2.5);
    }
  };

  return (
    <>
      <h3 className="title"> Hit It</h3>

      <div className="container hitItContainer">
        <div className="row timerRow">
          <div className="col timerCol text-center">
            <FcAlarmClock /> {time === 0 ? "Time Up" : "00:" + time}
          </div>
        </div>
        <div className="row hitBoxRow">
          <div className="col-9 hitBoxCol">
            <button
              className="col btn btn-outline-dark  hitBox"
              disabled={disable}
              onClick={() => {
                handleClick(1);
                setDisable(true);
                return;
              }}
            >
              {x === 1 ? "Hit" : " "}
            </button>
            <button
              className="col btn btn-outline-dark  hitBox"
              disabled={disable}
              onClick={() => {
                handleClick(2);
                setDisable(true);
                return;
              }}
            >
              {x === 2 ? "Hit" : " "}
            </button>
            <button
              className="col btn btn-outline-dark  hitBox"
              disabled={disable}
              onClick={() => {
                handleClick(3);
                setDisable(true);
                return;
              }}
            >
              {x === 3 ? "Hit" : " "}
            </button>
            <button
              className="col btn btn-outline-dark  hitBox"
              disabled={disable}
              onClick={() => {
                handleClick(4);
                setDisable(true);
                return;
              }}
            >
              {x === 4 ? "Hit" : " "}
            </button>
            <button
              className="col btn btn-outline-dark  hitBox"
              disabled={disable}
              onClick={() => {
                handleClick(5);
                setDisable(true);
                return;
              }}
            >
              {x === 5 ? "Hit" : " "}
            </button>
            <button
              className="col btn btn-outline-dark  hitBox"
              disabled={disable}
              onClick={() => {
                handleClick(6);
                setDisable(true);
                return;
              }}
            >
              {x === 6 ? "Hit" : " "}
            </button>
            <button
              className="col btn btn-outline-dark  hitBox"
              disabled={disable}
              onClick={() => {
                handleClick(7);
                setDisable(true);
                return;
              }}
            >
              {x === 7 ? "Hit" : " "}
            </button>
            <button
              className="col btn btn-outline-dark  hitBox"
              disabled={disable}
              onClick={() => {
                handleClick(8);
                setDisable(true);
                return;
              }}
            >
              {x === 8 ? "Hit" : " "}
            </button>
            <button
              className="col btn btn-outline-dark  hitBox"
              disabled={disable}
              onClick={() => {
                handleClick(9);
                setDisable(true);
                return;
              }}
            >
              {x === 9 ? "Hit" : " "}
            </button>
          </div>
        </div>
        <div className="row resultRow">
          <div className="col resultCol text-center">
            <b>Score:</b> {score}
          </div>
        </div>
      </div>
    </>
  );
}

export default HitIt;