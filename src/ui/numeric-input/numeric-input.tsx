import { TextInput } from "../text-input/text-input"

type NumericInputProps = {
  value: number | undefined
  onChange: (value: number | undefined) => void
  placeholder: string
  maxCount?: number
}

export function NumericInput(props: NumericInputProps) {
  const maxCount = props.maxCount ?? Infinity
  return (
    <TextInput
      placeholder={props.placeholder}
      value={props.value?.toString() ?? ""}
      onChange={(e) => {
        let result = e.target.value

        if (result.length > maxCount) return

        result = filterStringFromDigits(result)

        if (!result) {
          props.onChange(undefined)
        } else {
          props.onChange(Number(result))
        }
      }}
    />
  )
}

function filterStringFromDigits(str: string) {
  return str
    .split("")
    .filter((char) => !isNaN(Number(char)))
    .join("")
}
