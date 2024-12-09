import css from "/src/styles/create.module.css";

type NumericInputProps = {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  placeholder: string;
  maxCount?: number;
};

export function NumericInput(props: NumericInputProps) {
  const maxCount = props.maxCount ?? Infinity;
  return (
    <input
      className={css.input}
      type="text"
      placeholder={props.placeholder}
      value={props.value ?? ""}
      onChange={(e) => {
        let result = e.target.value;
        if (result.length > maxCount) {
          return;
        }
        result = result.replace(/\D+/g, "");

        if (result === "") {
          props.onChange(undefined);
        } else {
          props.onChange(Number(result));
        }
      }}
    />
  );
}
