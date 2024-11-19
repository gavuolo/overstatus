import styled from "styled-components";
import { ContentBox, Description } from "./Styles";
import { useContext, useEffect, useState, useRef } from "react";
import React from "react";

import { ThreeDots } from "react-loader-spinner";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { theme } from "../../../assets/Colors";
import { getRoles, getSvg } from "../../../services/overFastApi/rolesService";
import UserContext, { UserProvider } from "../../../context/useContext";
import { Loader } from "../../../components/Loader/ThreeDots";

import { ReactSVG } from "react-svg";

export default function RolesMap() {
  const [roles, setRoles] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  async function apiResponse() {
    try {
      const response = await getRoles();
      setRoles(response);
    } catch (error) {
      setRoles(error);
      return;
    }
  }

  useEffect(() => {
    apiResponse();
  }, []);

  function selectRole(key) {
    navigate(`/role/${key}`);
  }

  return (
    <RoleMapBox>
      <Loader
        height={"70%"}
        width={"30%"}
        color={`${theme.white}`}
        visible={!isLoading}
      />
      {roles ? (
        <>
          {roles.map((a, index) => {
            return (
              <RoleIcon key={index} onClick={() => selectRole(a.key)}>
                <h2>{a.name}</h2>
                <StyledSVG src={a.icon} />
              </RoleIcon>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </RoleMapBox>
  );
}

const RoleMapBox = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: auto;
  justify-content: space-around;
  overflow: visible;
`;

const RoleIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 220px;
  cursor: pointer;
  background-size: 0% 100%;
  h2 {
    margin-bottom: 20px;
    color: ${theme.white};
    padding: 1%;
  }
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.14);
    z-index: 0;
    cursor: pointer;
    border: 2px solid ${theme.white};
    border-radius: 2px;

    /* background-repeat: no-repeat; */
    /* background-size: 100% 100%;  */
    /* transition: background-size 0.4s ease, color 0.4s ease; */

    /* background: linear-gradient(to right, ${theme.green} 0%, ${theme.blue} 100%);
    background-repeat: no-repeat;
    background-size: 100% 100%; 
    transition: background-size 0.4s ease, color 0.4s ease;  */

    /* svg{
      path{
        fill: ;
        
      }
    }
    h2 {
      color: ${theme.skyBlue}
    } */
  }
`;

const StyledSVG = styled(ReactSVG)`
  svg {
    width: 6rem;
    height: 6rem;
    path {
      fill: ${theme.white};
      /* stroke: blue; */
    }
  }
`;
