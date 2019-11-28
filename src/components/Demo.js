import React from "react";
import Button from "@material-ui/core/Button";

const Demo = props => {
  const handleClick = event => {
    // do something
    props.onClose();
  };

  const getBaseAddress = () => {
    let baseAddress = "http://localhost:8001" + props.data.path;
    if (props.data.type === "GET") {
      if (props.data.requestParams.length > 0) {
        let params = "?";
        props.data.requestParams.map(r => {
          params += r.fieldName + "=1";
        });
        baseAddress += params;
      }
    }

    return baseAddress;
  };

  return (
    <div>
      <div>
        <span>请求地址：</span>
        <span>{getBaseAddress()}</span>
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={handleClick}>
          关闭
        </Button>
      </div>
    </div>
  );
};

export default Demo;
