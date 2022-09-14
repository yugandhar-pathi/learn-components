import {Button, Text} from './components'
import Row from './components/Row/Row';
import Column from './components/Column/Column';

function App() {
  return (
    <>
      <Button label="Test Button"/>
      <Text dataTestId="medium-id">Medium</Text>
      <Text dataTestId="smalll-id" size="small">Small Text</Text>
      <Text dataTestId="large-id" size="large">Large Text</Text>
      <Row dataTestId="row-id">
        <Text dataTestId="row-one" size="small">Row One</Text>
        <Text dataTestId="row-two" size="small">Row Two</Text>
        <Text dataTestId="row-three" size="small">Row Three</Text>
        <Text dataTestId="row-four" size="small">Row Four</Text>
      </Row>
      <Column data-testid="column-id">
        <Text dataTestId="column-one" size="small">Column One</Text>
        <Text dataTestId="column-two" size="small">Column Two</Text>
        <Text dataTestId="column-three" size="small">Column Three</Text>
        <Text dataTestId="column-four" size="small">Column Four</Text>
      </Column>
    </>
  );
}

export default App;
