function SelectOptions({ options, title }) {
  const elements = options.map((option) => (
    <option key={option.abbreviation} value={option.abbreviation} name={title}>
      {option.name}
    </option>
  ))

  return elements
}

export default SelectOptions
