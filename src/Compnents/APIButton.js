import React from "react";
import { useRecordContext, Button, useMutation } from "react-admin";

export const APIButton = (props) => {
  const { type, resource, payload_data, label } = props;
  const record = useRecordContext(props);

  const [mutate, { loading }] = useMutation();

  const approve = (event) => {
    event.stopPropagation();

    return mutate({
      type: type,
      resource: resource,
      payload: {
        id: record.id,
        data: payload_data,
      },
    });
  };

  return (
    <Button
      label={label}
      color="primary"
      onClick={approve}
      disabled={loading}
    />
  );
};
