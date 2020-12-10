import * as React from "react"
import CodeArea from "./CodeArea"
import controller from "./codeExamples/controller"
import reactNativeController from "./codeExamples/reactNativeController"
import generic from "../data/generic"
import TabGroup from "./TabGroup"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import controllerTs from "./codeExamples/controllerTs"
import VideoList from "./VideoList"
import useController from "./codeExamples/useController"

export default function UseController({
  api,
  currentLanguage,
}: {
  api: any
  currentLanguage: string
}) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          useController:{" "}
          <span
            className={typographyStyles.typeText}
          >{`({ name: string, control: object }) => object`}</span>
        </h2>
      </code>

      {api.useController.description}

      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th width="130px">Object Name</th>
            <th width="150px">{generic.name[currentLanguage]}</th>
            <th width="160px">{generic.type[currentLanguage]}</th>
            <th>{generic.description[currentLanguage]}</th>
          </tr>
          <tr>
            <td>
              <code>input</code>
            </td>
            <td>
              <code>onChange</code>
            </td>
            <td>
              <code
                className={typographyStyles.typeText}
              >{`(value: any) => void`}</code>
            </td>
            <td>
              <p>
                A function which send value to hook form and should be assigned
                with <code>onChange</code> prop.
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>onBlur</code>
            </td>
            <td>
              <code
                className={typographyStyles.typeText}
              >{`(value: any) => void`}</code>
            </td>
            <td>
              <p>
                A function which send value to hook form and should be assigned
                with <code>onBlur</code> prop.
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>value</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>unknown</code>
            </td>
            <td>
              <p>The value of this controlled component.</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>ref</code>
            </td>
            <tr>
              <code className={typographyStyles.typeText}>React.RefObject</code>
            </tr>
            <td>
              <p>
                Assign <code>ref</code> to component's input ref, so hook form
                can focus on the error input.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <code>meta</code>
            </td>
            <td>
              <code>invalid</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>Invalid state for current input.</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>isTouched</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>Touched state for current controlled input.</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>isDirty</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>Dirty state for current controlled input.</p>
            </td>
          </tr>
        </thead>
      </table>

      <CodeArea
        rawData={useController}
        url="https://codesandbox.io/s/react-hook-form-v6-controller-qsd8r"
      />
    </>
  )
}
