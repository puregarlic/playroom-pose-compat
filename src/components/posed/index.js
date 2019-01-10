import posed from 'react-pose'

const Demo = posed.div({
  enter: { background: '#000', width: '500px', height: '500px' },
  exit: {
    background: '#FFF',
    width: '0px',
    height: '0px',
    transition: {
      duration: 1000,
      flip: Infinity
    }
  }
})

export default Demo
