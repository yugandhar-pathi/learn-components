import {Button, Text} from './components'
import Row from './components/Row/Row';
import Column from './components/Column/Column';

function App() {
  return (
    <>
      <Button label="Test Button"/>
      <Text>Medium</Text>
      <Text size="small">Small Text</Text>
      <Text size="large">Large Text</Text>
      <Row>
        <Text size="small">Row Onee</Text>
        <Text size="small">Row Two</Text>
      </Row>
      <Column>
        <Text size="small">Column Onee</Text>
        <Text size="small">Column Two</Text>
      </Column>
    </>
  );
}

export default App;
