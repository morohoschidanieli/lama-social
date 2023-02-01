/* React */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

/* Components */
import Box from "../../components/Box/Box";
import Layout from "../../components/Layout/Layout";

/* Font awesome */
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import Href from "../../components/Href/Href";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const baseClass = "checked-icon";
const templateClass = "!h-32 text-[#c3beff]";

const ConfirmRegister = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    axios
      .post(
        `http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/api/auth/confirm/${token}`
      )
      .then((resp) => console.log(resp))
      .catch((error) => {
        navigate("/login");
      });
  });
  const className = `${baseClass} ${templateClass}`;

  return (
    <Layout extraStyle={{ backgroundColor: "#c3beff" }}>
      <Container width="1/2" height="1/2">
        <Box
          flexDirection="column"
          extraStyle={{ width: "100%", height: "100%" }}
        >
          {" "}
          <FontAwesomeIcon icon={faCircleCheck} className={className} />
          <Heading extraStyle={{ padding: "10px" }}>Verified!</Heading>
          <Text extraStyle={{ padding: "10px" }}>
            You have successfully verified account.
          </Text>
          <Href href="/#/login">
            <Button type="button" size="small" extraStyle={{ margin: "20px" }}>
              Go to Login page
            </Button>
          </Href>
        </Box>
      </Container>
    </Layout>
  );
};

export default ConfirmRegister;
