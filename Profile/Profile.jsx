import React from "react";
import propTypes from "prop-types";

function Profile({ FullName, Bio, Profession, handleName }) {
    return (
        <div style={{}}>
            <h3>
                Name :<span style={{ color: "lightblue" }}>{FullName}</span>
            </h3>
            <h4>
                bio :<span style={{ color: "lightblue" }}>{Bio}</span>
            </h4>

            <h5>
                <span style={{ color: "lightblue" }}>{Profession}</span>
            </h5>

            <button onClick={() => handleName(FullName)}>clik</button>
        </div>
    );
}
Profile.defaultProps = {
    FullName: "default FullName",
};
Profile.propTypes = {
    FullName: propTypes.string,
    Bio: propTypes.string,
    Profession: propTypes.string,
    handleName: propTypes.func,
};
export default Profile;
