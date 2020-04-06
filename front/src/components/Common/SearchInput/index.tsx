import React, { useMemo, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import SplitButton from "./SplitButton";
import { SearchFormContainer } from "./SearchInput.styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

export default function SearchInput() {
  const classes = useStyles();
  const options = useMemo(() => {
    const options = [
      {
        id: 1,
        value: "Titulo",
      },
      {
        id: 2,
        value: "Autor",
      },
      {
        id: 3,
        value: "Género",
      },
    ];
    return options;
  }, []);

  const defaultOption = options.find((option) => option.id === 1);
  const [selectedOption, setSelectedOption] = useState(defaultOption || null);
  const [text, setText] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.info(`text: ${text}`);
    console.info(`option selected: ${selectedOption && selectedOption.value}`);
  };

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    // height={"60px"} for now, then change with props
    <SearchFormContainer
      height={"60px"}
      onSubmit={handleSubmit}
      id="search-input"
    >
      <SearchIcon className={classes.iconButton} />
      <InputBase
        className={classes.input}
        placeholder="Search By"
        value={text}
        onChange={handleChange}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <SplitButton
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        handleSubmit={handleSubmit}
      />
    </SearchFormContainer>
  );
}
