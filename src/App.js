// import Counter from "./components/Counter";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Globals";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { Card, CardText } from "./components/styles/Card.styled";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container className="App">
          <h1>Hello World</h1>
          <Card>
            <img src="./images/logo.svg" />
            <CardText text1="text1" text2="this is text 2" />
          </Card>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
