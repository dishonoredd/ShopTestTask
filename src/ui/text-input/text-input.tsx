import css from "./text-input.module.css"

type Props = {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function TextInput(props: Props) {
  return (
    <>
      <input
        className={css.input}
        type="text"
        placeholder={props.placeholder}
        value={props.value ?? ""}
        onChange={props.onChange}
      />
    </>
  )
}
