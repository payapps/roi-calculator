const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: 'none',
    cursor: 'pointer',
    height: '42px'
  }),
  menu: () => ({
    background: '#13242E',
    width: '200px'
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    display: 'flex',
    alignItems: 'center',
    height: '42px',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return {
      ...provided, opacity, transition,
      background: 'none',
      display: 'flex',
      color: '#ffffff',
      height: '42px',
      alignItems: 'center',
    }
  },
  indicatorSeparator: () => ({
    display: 'none'
  })
}

export {
  customStyles
}