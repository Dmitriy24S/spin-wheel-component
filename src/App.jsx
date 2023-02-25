import SpinWheel from './components/SpinWheel'

function App() {
  const segments = [
    'better luck next time',
    'won 70',
    'won 10',
    'better luck next time',
    'won 2',
    'won uber pass',
    'better luck next time',
    'won a voucher',
    'won 70',
    'won 10',
    'better luck next time',
    'won 2',
    'won uber pass',
    'better luck next time',
    'won a voucher',
  ]
  // console.log('segments length', segments.length) // segments length 15

  const segmentColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
  ]

  const onFinished = (winner) => {
    console.log(winner)
  }

  return (
    <div className='App'>
      <h1>Spin Wheel - Vite + React</h1>
      <SpinWheel
        segments={segments}
        segmentColors={segmentColors}
        // winningSegment={segments[0]}
        onFinish={(winner) => onFinished(winner)}
        upDuration={300}
        downDuration={600}
      />
    </div>
  )
}

export default App
