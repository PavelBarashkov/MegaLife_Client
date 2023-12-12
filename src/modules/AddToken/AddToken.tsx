import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { Form } from "./components/Form/Form";
import { getStudents } from "./slice/studentSlice";

export const AddToken = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) dispatch(getStudents(token));
  }, []);

  return <Form />;
};
