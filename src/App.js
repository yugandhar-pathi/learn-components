import {Button, Text, Card, Column, Row, Input, Typography} from './components'

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
      <Card heading="Header two" content='Main Content' buttonName="Learn More"></Card>
      <Card heading="Header three" picture="https://www.bing.com/th?id=OIP.Ky0Jd3zUxcwi7S5XWV2bxAHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" altText="rose" buttonName="Learn More"></Card>
      <Card heading="Header One" content="main content one" picture="https://www.bing.com/th?id=OIP.Ky0Jd3zUxcwi7S5XWV2bxAHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" altText="rose" buttonName="Learn More"></Card>
      <Input placeHolder="Test Input"/>
      <Typography text="Hello" variant6/>
      </>
  );
}

export default App;
 