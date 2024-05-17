import React, { useRef, useState } from 'react'
import circle from "../assets/circle.gif";
import cross from "../assets/cross.gif";
let data = ["", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];


    const toggle = (e, num) => {
        if(lock || data[num] !== "") {
            return;
        } 
        if(count % 2 === 0) {
            e.target.innerHTML = `<img class="logo" src="${cross}" alt="cross">`;
            data[num] = "x";
        } else {
            e.target.innerHTML = `<img class="logo" src="${circle}" alt="circle">`;
            data[num] = "o";
        }
        data.map((value, index) => {
            console.log(index + " "+ value);
        })
        setCount(count + 1);
        checkWin();
    }


    const checkWin = () => {

        const winData = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];


        for(let win of winData) {
            const[a, b, c] = win;
            if(data[a] === data[b] && data[b] === data[c] && data[c] !== "") {
                won(data[a]);
                return;
            }
        }


        let checkDraw = true;
        data.map((value) => {
            if(value === "") {
                checkDraw = false;
                return;
            }
        });
        if(checkDraw) {
            draw();
        }

        // if(data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
        //     won(data[2]);
        // } else if(data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
        //     won(data[6]);
        // } else if(data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
        //     won(data[8]);
        // } else if(data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
        //     won(data[8]);
        // } else if(data[2] === data[4] && data[4] === data[6] && data[6] !== "" ) {
        //     won(data[6]);
        // } else if(data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
        //     won(data[7]);
        // } else if(data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
        //     won(data[5]);
        // } else if(data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
        //     won(data[8]);
        // }
    }

    const draw = () => {
        setLock(true);
        titleRef.current.innerHTML = `<span>MATCH DRAW</SPAN>`;
    }
    
    const won = (winner) => {
        setLock(true);
        if(winner === "x") {
            titleRef.current.innerHTML = `<span>The winner is</span> <img class="logo_cross" src="${cross}" alt="cross">`;
        } else {
            titleRef.current.innerHTML = `<span>The winner is</span><img class="logo_circle" src="${circle}" alt="circle">`;
        }
    }

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = `Tic Tac Toe <span>GAME</span>`;
        boxArray.map((box) => {
            box.current.innerHTML = "";
        });
        setCount(0);
    }

    return (
        <div className="outside">
            <h1 className="title" ref={titleRef}>Tic Tac Toe <span>GAME</span></h1>
            <div className="container">
                <div className="row">
                    <div className="box" ref={box1} onClick={(e) => {toggle(e, 0)}}></div>
                    <div className="box" ref={box2} onClick={(e) => {toggle(e, 1)}}></div>
                    <div className="box" ref={box3} onClick={(e) => {toggle(e, 2)}}></div>
                </div>
                <div className="row">
                    <div className="box" ref={box4} onClick={(e) => {toggle(e, 3)}}></div>
                    <div className="box" ref={box5} onClick={(e) => {toggle(e, 4)}}></div>
                    <div className="box" ref={box6} onClick={(e) => {toggle(e, 5)}}></div>
                </div>
                <div className="row">
                    <div className="box" ref={box7} onClick={(e) => {toggle(e, 6)}}></div>
                    <div className="box" ref={box8} onClick={(e) => {toggle(e, 7)}}></div>
                    <div className="box" ref={box9} onClick={(e) => {toggle(e, 8)}}></div>
                </div>
            </div>
            <button className="reset-btn" onClick={() => {reset()}}>RESET</button>
        </div>
    )
}

export default TicTacToe
