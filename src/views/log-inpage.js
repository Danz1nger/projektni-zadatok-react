import React from 'react'

import { Helmet } from 'react-helmet'

import './log-inpage.css'

const LogInpage = (props) => {
  return (
    <div className="log-inpage-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="log-inpage-log-inpage">
        <div className="log-inpage-bg">
          <img
            src="/external/ellipse4130-wss-800h.png"
            alt="Ellipse4130"
            className="log-inpage-ellipse"
          />
          <img
            src="/external/ellipse4131-ual8.svg"
            alt="Ellipse4131"
            className="log-inpage-ellipse1"
          />
          <img
            src="/external/ellipse4132-sgmp.svg"
            alt="Ellipse4132"
            className="log-inpage-ellipse2"
          />
          <img
            src="/external/vector4133-ayb.svg"
            alt="Vector4133"
            className="log-inpage-vector"
          />
        </div>
        <div className="log-inpage-form">
          <div className="log-inpage-username">
            <span className="log-inpage-text">
              <span>Username</span>
            </span>
            <img
              src="/external/user4138-7fpe.svg"
              alt="user4138"
              className="log-inpage-user"
            />
          </div>
          <div className="log-inpage-password">
            <span className="log-inpage-text2">
              <span>password</span>
            </span>
            <img
              src="/external/lock4144-h99t.svg"
              alt="lock4144"
              className="log-inpage-lock"
            />
          </div>
          <div className="log-inpage-loginbtn">
            <span className="log-inpage-text4">
              <span>login</span>
            </span>
          </div>
          <span className="log-inpage-text6">
            <span>Forgot password?</span>
          </span>
          <div className="log-inpage-group">
            <img
              src="/external/vector4152-zllr.svg"
              alt="Vector4152"
              className="log-inpage-vector1"
            />
            <img
              src="/external/vector4153-08xv.svg"
              alt="Vector4153"
              className="log-inpage-vector2"
            />
            <img
              src="/external/vector4154-no9.svg"
              alt="Vector4154"
              className="log-inpage-vector3"
            />
            <img
              src="/external/vector4155-5tw9.svg"
              alt="Vector4155"
              className="log-inpage-vector4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogInpage
