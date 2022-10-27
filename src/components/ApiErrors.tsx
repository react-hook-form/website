import * as React from "react"
import CodeArea from "./CodeArea"
import errorCode from "./codeExamples/errorCode"
import errorCodeTs from "./codeExamples/errorCodeTs"
import errorCodeTypes from "./codeExamples/ErrorCodeTypes"
import generic from "../data/generic"
import multipleErrorCode from "./codeExamples/multipleErrorCode"
import multipleErrorCodeTs from "./codeExamples/multipleErrorCodeTs"
import TabGroup from "./TabGroup"
import * as typographyStyles from "../styles/typography.module.css"
import * as tableStyles from "../styles/table.module.css"

export default React.memo(
  ({
    api,
    currentLanguage,
    goToSection,
  }: {
    api: any
    currentLanguage: string
    goToSection: (name: string, animate?: boolean) => void
  }) => {
    return (
      <>
        <code className={typographyStyles.codeHeading}>
          <h2>
            errors:{" "}
            <span
              className={typographyStyles.typeText}
            >{`Record<string, object>`}</span>
          </h2>
        </code>

        {api.errors.description(currentLanguage)}

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>{generic.name[currentLanguage]}</th>
                <th
                  style={{
                    minWidth: 250,
                  }}
                >
                  {generic.type[currentLanguage]}
                </th>
                <th>{generic.description[currentLanguage]}</th>
              </tr>
              <tr>
                <td>
                  <code>type</code>
                </td>
                <td>
                  <span className={typographyStyles.typeText}>string</span>
                </td>
                <td>
                  Error {generic.type[currentLanguage]}. eg: required, min, max,
                  minLength
                </td>
              </tr>
              <tr>
                <td>
                  <code>types</code>
                </td>
                <td>
                  <span
                    className={typographyStyles.typeText}
                  >{`Record<{ string, string | boolean }>`}</span>
                </td>
                <td>{api.errors.types}</td>
              </tr>
              <tr>
                <td>
                  <code>message</code>
                </td>
                <td>
                  <span className={typographyStyles.typeText}>
                    string | React.ReactElement
                  </span>
                </td>
                <td>{api.errors.message}</td>
              </tr>
              <tr>
                <td>
                  <code>ref</code>
                </td>
                <td>
                  <span className={typographyStyles.typeText}>React.Ref</span>
                </td>
                <td>{api.errors.ref}</td>
              </tr>
            </tbody>
          </table>
          {api.errors.note(goToSection)}
        </div>

        <TabGroup buttonLabels={["First error detected", "Display all errors"]}>
          <CodeArea
            rawData={errorCode}
            tsRawData={errorCodeTs}
            rawTypes={errorCodeTypes}
            url="https://codesandbox.io/s/react-hook-form-error-v6-rcpm8"
            tsUrl="https://codesandbox.io/s/react-hook-form-error-ts-v6-500eo"
          />
          <CodeArea
            rawData={multipleErrorCode}
            tsRawData={multipleErrorCodeTs}
            url="https://codesandbox.io/s/react-hook-form-validatecriteriamode-v6-tixtl"
            tsUrl="https://codesandbox.io/s/react-hook-form-validatecriteriamode-v6-ts-r51li"
          />
        </TabGroup>

        <hr />
      </>
    )
  }
)
