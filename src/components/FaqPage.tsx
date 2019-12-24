import * as React from "react"
import {
  HeadingWithTopMargin,
  SubHeading,
  QuestionTitle,
} from "../styles/typography"
import SideMenu from "../components/SideMenu"
import { Container, Wrapper } from "../styles/containers"
import CodeArea, { CopyIcon } from "../components/CodeArea"
import Footer from "../components/Footer"
import manualValidation from "../components/codeExamples/manualValidation"
import accessibleCode from "../components/codeExamples/accessibleCode"
import shareRef from "../components/codeExamples/shareRef"
import initialValue from "../components/codeExamples/initialValue"
import copyClipBoard from "../components/utils/copyClipBoard"
import { CopyButton, InstallCode } from "./GetStarted"
import StarRepo from "../components/StarRepo"
import faqContent from "../data/faq"
import { useStateMachine } from "little-state-machine"
import controlled from "./codeExamples/controlled"
import TabGroup from "./TabGroup"
import controlledRHFInput from "./codeExamples/control"

const { useRef } = React

const enLinks = faqContent["en"].questions

const Faq = ({ defaultLang }: { defaultLang: string }) => {
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const faq = faqContent[currentLanguage]
  const links = faq.questions

  const sectionsRef = useRef({
    question0: null,
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null,
    question10: null,
    question11: null,
    question12: null,
    question13: null,
  })

  const goToSection = name => {
    const filterName = name.replace(/[^\w\s]| /g, "")
    const path = enLinks.findIndex(
      ({ title }) =>
        title.replace(/[^\w\s]| /g, "").toLowerCase() ===
        filterName.toLowerCase()
    )

    if (sectionsRef.current[`question${path + 1}`]) {
      sectionsRef.current[`question${path + 1}`].scrollIntoView({
        behavior: "smooth",
      })
    }

    const url = window.location.href
    const hashIndex = url.indexOf("#")

    if (hashIndex < 0) {
      history.pushState({}, null, `${url}#${filterName}`)
    } else {
      history.pushState({}, null, `${url.substr(0, hashIndex)}#${filterName}`)
    }

    if (path > -1) {
      sectionsRef.current[`question${path}`].scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  React.useEffect(() => {
    if (location.hash)
      setTimeout(() => goToSection(location.hash.substr(1)), 10)
  }, [])

  return (
    <Container>
      <HeadingWithTopMargin id="main">{faq.header.title}</HeadingWithTopMargin>
      <SubHeading>{faq.header.description}</SubHeading>

      <Wrapper>
        <SideMenu
          enLinks={enLinks}
          isStatic
          links={links}
          goToSection={goToSection}
          currentLanguage={currentLanguage}
        />

        <main>
          <QuestionTitle ref={ref => (sectionsRef.current.question0 = ref)}>
            {faq.questions[0].title}
          </QuestionTitle>
          {faq.questions[0].description}

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question1 = ref)}>
            {faq.questions[1].title}
          </QuestionTitle>
          {faq.questions[1].description}
          <CodeArea rawData={accessibleCode} />

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question2 = ref)}>
            {faq.questions[2].title}
          </QuestionTitle>

          {faq.questions[2].description}

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question3 = ref)}>
            {faq.questions[3].title}
          </QuestionTitle>
          {faq.questions[3].description}

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question4 = ref)}>
            {faq.questions[4].title}
          </QuestionTitle>

          {faq.questions[4].description}
          <CodeArea rawData={initialValue} />

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question5 = ref)}>
            {faq.questions[5].title}
          </QuestionTitle>

          {faq.questions[5].description}

          <CodeArea rawData={shareRef} />
          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question6 = ref)}>
            {faq.questions[6].title}
          </QuestionTitle>

          {faq.questions[6].description}

          <CodeArea rawData={manualValidation} />
          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question7 = ref)}>
            {faq.questions[7].title}
          </QuestionTitle>

          {faq.questions[7].description}

          <CodeArea
            rawData={`import { useForm } from 'react-hook-form/dist/react-hook-form.ie11'`}
            withOutCopy
          />

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question8 = ref)}>
            {faq.questions[8].title}
          </QuestionTitle>

          {faq.questions[8].description}

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question9 = ref)}>
            {faq.questions[9].title}
          </QuestionTitle>

          {faq.questions[9].description}

          <InstallCode>
            npm i mutationobserver-shim
            <CopyButton
              onClick={() => {
                copyClipBoard("npm i mutationobserver-shim")
                alert("Code copied into your clipboard.")
              }}
            >
              <CopyIcon>
                <span />
              </CopyIcon>{" "}
              Copy
            </CopyButton>
          </InstallCode>

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question10 = ref)}>
            {faq.questions[10].title}
          </QuestionTitle>

          {faq.questions[10].description}

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question11 = ref)}>
            {faq.questions[11].title}
          </QuestionTitle>

          {faq.questions[11].description}

          <TabGroup buttonLabels={["Controller", "Custom Register"]}>
            <CodeArea rawData={controlledRHFInput} />
            <CodeArea
              rawData={controlled}
              url="https://codesandbox.io/s/react-hook-form-controlled-input-gr478"
            />
          </TabGroup>

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question12 = ref)}>
            {faq.questions[12].title}
          </QuestionTitle>

          {faq.questions[12].description}

          <StarRepo currentLanguage={currentLanguage} />

          <Footer currentLanguage={currentLanguage} />
        </main>
      </Wrapper>
    </Container>
  )
}

export default Faq
