import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { Form } from "./components/Form/Form";
import { getStudents } from "./slice/studentSlice";
import { MainContainer } from "./components/MianContainer/MainContainer";
import { Title } from "../../components/UI/Title/Title";

export const AddToken = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) dispatch(getStudents(token));
  }, []);

  return (
    <MainContainer>
      <Title title={"Начисление/списание умников"} />
      <Form />
    </MainContainer>
  );
};
