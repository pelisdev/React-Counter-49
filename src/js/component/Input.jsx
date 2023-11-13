import React from "react";

const InputDigitCard = (props) => {

    return (

        <div className="card container-fluid col-sm-8 col-md-8 col-lg-8 bg-body-dark text-center p-1">
            <div className="card-header">
				<center><b>Contador de Segundos</b></center>
            </div>
            <div className="card-body d-flex flex-row justify-content-center bg-dark bg-opacity-25 fs-1 text-light" style={{ height: "12rem" }}>
                <div className="Watcher col-sm-1 col-md-1 col-lg-1 bg-dark rounded border border-info-subtle position-relative py-3 px-6 ">
                    <i className="fa-brands fa-watchman-monitoring fa-spin" style={{ color: "#4cddbf4" }}></i>
                </div>
                <div className="digitSix col-sm-1 col-md-1 col-lg-1 bg-dark rounded border border-info-subtle position-relative py-3 px-3 " style={{fontSize:66}}>{props.digitSix} </div>
                <div className="digitFive col-sm-1 col-md-1 col-lg-1 bg-dark rounded border border-info-subtle position-relative py-3 px-3 " style={{fontSize:66}}>{props.digitFive} </div>
                <div className="digitFour col-sm-1 col-md-1 col-lg-1 bg-dark  rounded border border-info-subtle position-relative py-3 px-3 " style={{fontSize:66}}>{props.digitFour}</div>
                <div className="digitThree col-sm-1 col-md-1 col-lg-1 bg-dark rounded border border-info-subtle position-relative py-3 px-3 " style={{fontSize:66}}>{props.digitThree}</div>
                <div className="digitTwo col-sm-1 col-md-1 col-lg-1 bg-dark rounded border border-info-subtle position-relative py-3 px-3 " style={{fontSize:66}}>{props.digitTwo}</div>
                <div className="digitOne col-sm-1 col-md-1 col-lg-1 bg-dark rounded border border-info-subtle position-relative py-3 px-3 " style={{fontSize:66}}>{props.digitOne}</div>
            </div>
        </div>

    )
};

export default InputDigitCard;