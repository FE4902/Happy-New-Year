import { Button } from './components/Button/Button';
import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, fontFamily: 'inherit' },

  body: {
    fontFamily: '$pretendard',
  }
})

function App() {
  globalStyles();

  return (
    <div>
      Hello Rabbit! 🐇 <br/>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px'}}>
        <Button size='small' color="dark">Button</Button>
        <Button>Button</Button>
        <Button size='large' color="light">Button</Button>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px'}}>
        <Button size='small' color="dark" outlined>Button</Button>
        <Button outlined>Button</Button>
        <Button size='large' color="light" outlined>Button</Button>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px'}}>
        <Button size='small' color="dark" disabled>Button</Button>
        <Button disabled>Button</Button>
        <Button size='large' color="light" disabled>Button</Button>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px'}}>
        <Button size='small' color="dark" outlined disabled>Button</Button>
        <Button outlined disabled>Button</Button>
        <Button size='large' color="light" outlined disabled>Button</Button>
      </div>
    </div>
  )
}

export default App
