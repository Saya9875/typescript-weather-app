import { Button, TextField } from "@material-ui/core";

type Props = {
  getWeather: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<Props> = ({ getWeather, onChange }) => {
  return (
    <form>
      <TextField
        type='text'
        placeholder='都道府県名を入力してね'
        name="input"
        onChange={onChange}
        id="outlined-basic"
        variant="outlined"
        style={{width: '14em'}}
      />
      <Button
        type="button"
        onClick={getWeather}
        variant="contained"
        style={{marginLeft: '1em',marginTop: '0.5em'}}
        >検索
      </Button>
    </form>
  )
}

export default Form;
