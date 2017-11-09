import React from "react"
import { Container, CardHeader, Title, Subtitle } from "components/Card"
import Example from "components/Example"
import glamorous from "glamorous"
import materialColors from "utils/materialColors"
import Tip from "components/Tip"
import Animation from "utils/Animation"
import { css } from "glamor"

class PopularSearchCard extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: 50 }}>
        <CardHeader>
          <Animation
            animation={css.keyframes("fadeIn", {
              from: { opacity: 0, transform: "translateX(-10px)" },
              to: { opacity: 1, transform: "translateX(0)" },
            })}
            initialStyle={{
              opacity: 0,
            }}
            animationDuration={1}
            animationDelayOffset={0.8}
          >
            <Title>Trending</Title>
            <Subtitle>Popular Searches</Subtitle>
          </Animation>
        </CardHeader>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "19rem" }}>
            <ExampleTitle>Sciences</ExampleTitle>
            <ExampleContainer>
              <Example text="BIOL" performSearch={this.props.performSearch} />
              <Example text="CHEM" performSearch={this.props.performSearch} />
              <Example text="KIN" performSearch={this.props.performSearch} />
              <Example text="PHYS" performSearch={this.props.performSearch} />
              <Example text="PSYC" performSearch={this.props.performSearch} />
            </ExampleContainer>
          </div>

          <div style={{ width: "19rem" }}>
            <ExampleTitle>Logic and Numbers</ExampleTitle>
            <ExampleContainer>
              <Example text="MATH" performSearch={this.props.performSearch} />
              <Example text="CSC" performSearch={this.props.performSearch} />
              <Example text="ACCT" performSearch={this.props.performSearch} />
              <Example text="CHE" performSearch={this.props.performSearch} />
              <Example text="ME" performSearch={this.props.performSearch} />
            </ExampleContainer>
          </div>

          <div style={{ width: "19rem" }}>
            <ExampleTitle>Social Sciences</ExampleTitle>
            <ExampleContainer>
              <Example text="HNRS" performSearch={this.props.performSearch} />
              <Example text="CMST" performSearch={this.props.performSearch} />
              <Example text="ECON" performSearch={this.props.performSearch} />
              <Example text="POLI" performSearch={this.props.performSearch} />
              <Example text="MC" performSearch={this.props.performSearch} />
            </ExampleContainer>
          </div>

          <div style={{ width: "19rem" }}>
            <ExampleTitle>Other</ExampleTitle>
            <ExampleContainer>
              <Example text="ENGL" performSearch={this.props.performSearch} />
              <Example text="HIST" performSearch={this.props.performSearch} />
              <Example text="CMST" performSearch={this.props.performSearch} />
              <Example text="ART" performSearch={this.props.performSearch} />
              <Example text="MUS" performSearch={this.props.performSearch} />
            </ExampleContainer>
          </div>
        </div>

        <Tip
          title="Tip"
          text="You can search any department, class name, or class number"
        />

        <div />
      </Container>
    )
  }
}

const ExampleTitle = glamorous.h3({
  textAlign: "left",
  color: materialColors.grey[500],
  textTransform: "uppercase",
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: "0.85rem",
})

const ExampleContainer = glamorous.div({
  display: "flex",
  flexWrap: "wrap",
})

export default PopularSearchCard
