import React from "react";
import "../../main.css";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { DeleteIcon } from "../../assets/DeleteIcon";
import { Arrowdown } from "../../assets/Arrowdown";
import { ClearIcon } from "../../assets/ClearIcon";
import { useSelector } from "react-redux";
import { IStudent, setSelectedUsers } from "../../slice/studentSlice";
import { useAppDispatch } from "../../../../redux/hooks/hooks";
import { updateName } from "../../helpers/updateName";

export const InputUsers = () => {
  const dispatch = useAppDispatch();
  const { students } = useSelector((state: any) => state.students);

  const Tag = ({ id, label, onDelete }: any) => (
    <Chip
      className="tag"
      onDelete={onDelete}
      deleteIcon={<DeleteIcon />}
      label={label}
      id={id}
    />
  );

  return (
    <>
      {students && (
        <Stack spacing={3} sx={{ width: 500 }}>
          <Autocomplete
            multiple
            popupIcon={<Arrowdown />}
            clearIcon={<ClearIcon />}
            onChange={(event, newValue: IStudent[]) => {
              const selectedIds = newValue.map((item) => item.id);
              dispatch(setSelectedUsers(selectedIds));
            }}
            id="tags-standard"
            options={students}
            getOptionLabel={(option: IStudent) => option.name}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Tag
                  {...getTagProps({ index })}
                  id={option.id}
                  label={updateName(option.name)}
                />
              ))
            }
            renderInput={(params) => (
              <>
                <TextField
                  {...params}
                  variant="standard"
                  placeholder="Выбрать"
                />
              </>
            )}
          />
        </Stack>
      )}
    </>
  );
};
