import * as React from "react"
import CodeArea from "../../components/CodeArea"
import accessibleCodeBase from "../../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../../components/codeExamples/accessibleCodeFinal"
import { step1, step2, step3 } from "../../components/codeExamples/formWizard"
import * as CodeExampleTestingForm from "../../components/codeExamples/testingForm"
import smartForm from "../../components/codeExamples/smartForm"
import form from "../../components/codeExamples/form"
import input from "../../components/codeExamples/input"
import { Link as PageLink } from "gatsby"
import typographyStyles from "../../styles/typography.module.css"
import buttonStyles from "../../styles/button.module.css"
import customHookWithValidationResolver from "../../components/codeExamples/customHookWithValidationResolver"
import virtualizedList from "../../components/codeExamples/virtualizedList"
import strictlyTyped from "../../components/codeExamples/strictlyTyped"

export default {
  title: "进阶",
  header: {
    title: "进阶",
    description: "使用 React Hook Form 建设复杂且易于访问的表单.",
  },
  controlledMixedWithUnControlled: {
    title: "受控组件与非控制组件共存",
    description: (
      <p>
        React Hook Form 拥抱非受控组件，与此同时也兼容受控组件。
        大多数UI库仅限于支持受控组件，如
        <a
          href="https://github.com/mui-org/material-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material-UI
        </a>
        和
        <a
          href="https://github.com/ant-design/ant-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          And
        </a>
        。此外,受控组件的重渲染 React Hook Form 也做了优化。
        以下表单验证的例子包含了受控组件和非受控组件。
      </p>
    ),
  },
  errorMessage: {
    title: "错误信息",
    description: (
      <p>
        错误信息是对用户非正确输入的可视化反馈。React Hook Form
        提供的错误对象可以让你轻松地定位错误。有很多不同的方式更好地在屏幕上展示错误。
      </p>
    ),
    register: (
      <>
        你可以通过校验规则对象中的<code>message</code>属性将错误信息传递给
        <code>register</code>, 就像这样:
      </>
    ),
    component: "Create a ErrorMessage component to help your print out error.",
    get: (
      <p>
        如果你的项目中引入了{" "}
        <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">
          lodash
        </a>
        , 那么可以使用{" "}
        <code>
          <a
            href="https://lodash.com/docs/4.17.15#get"
            target="_blank"
            rel="noopener noreferrer"
          >
            get
          </a>
        </code>{" "}
        函数。例如:
        <br />
        <br />
        <code>{`get(errors, 'firstName.message')`}</code>
      </p>
    ),
    optionalChaining: (
      <>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >
            optional chaining
          </a>
          运算符<code>?.</code>
          。允许您读取错误对象，而不必担心由于<code>null</code>或
          <code>undefined</code>而导致错误。
        </p>
        <p>
          <code>{`errors?.firstName?.message`}</code>
        </p>
      </>
    ),
  },
  accessibility: {
    title: "辅助功能 (A11y)",
    description: (
      <>
        <p>
          React Hook Form
          支持表单本地校验，它也允许你使用自定义的规则校验输入组件的值。由于我们大多数人都必须在自定义设计和布局中构建表单，因此我们有责任去确保表单校验过程具有可访问性（A11y）。
        </p>

        <p>下面的代码示例展示了如何校验；但是, 它可以提高可访问性。</p>

        <CodeArea rawData={accessibleCodeBase} />

        <p>
          下面的代码示例是利用
          <a
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
            target="_blank"
          >
            ARIA
          </a>
          后的改进版本。
        </p>
        <CodeArea rawData={accessibleCodeFinal} />

        <p>
          改进后，屏幕阅读器会念出:{" "}
          <i>"Name, edit, invalid entry, This is required.”</i>
        </p>
      </>
    ),
  },
  wizard: {
    title: "多步骤表单/漏斗",
    description: (
      <>
        <p>
          通过不同的页面和部分收集用户信息是很常见的。
          我们建议使用状态管理库通过不同的页面/部分去存储用户输入的值。
          在这个例子中，我们将使用
          <a
            className={buttonStyles.links}
            href="https://github.com/bluebill1049/little-state-machine"
            target="_blank"
            rel="noopener noreferrer"
          >
            little state machine
          </a>
          作为我们的状态管理库（如果您更熟悉
          <a
            className={buttonStyles.links}
            href="https://github.com/reduxjs/redux"
            target="_blank"
            rel="noopener noreferrer"
          >
            redux
          </a>
          ，可以直接替代）。
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>步骤1:</b>{" "}
          设置你的routes和store。
        </p>
        <CodeArea
          rawData={step1}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <b className={typographyStyles.note}>步骤2:</b>{" "}
          创建页面，收集、提交数据到 store 中，并推送到下一个表单/页面。
        </p>
        <CodeArea
          rawData={step2}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <b className={typographyStyles.note}>步骤3:</b> 最终提交 store
          里的所有数据，或者展示出来。
        </p>
        <CodeArea
          rawData={step3}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          按照上述模式，您应该能够构建多步骤表单/漏斗以收集来自多个页面的用户输入数据。
        </p>
      </>
    ),
  },
  smartForm: {
    title: "智能表单组件",
    description: (
      <>
        <p>
          它的思想是，你可以很容易地用输入组件来组合你的表单。
          我们将创建一个表单组件来自动收集表单数据。
        </p>

        <CodeArea
          rawData={smartForm}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p style={{ textAlign: "center" }}>♦</p>

        <p>让我们来逐个看下这些组件。</p>

        <div className={typographyStyles.codeHeading}>
          <h2>Form</h2>
        </div>

        <p>
          <code>Form</code>组件的职责是将<code>react-hook-form</code>
          所有的方法注入到子组件中
        </p>

        <CodeArea
          rawData={form}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <div className={typographyStyles.codeHeading}>
          <h2>Input / Select</h2>
        </div>

        <p>
          这些输入组件的职责是将它们注册到 <code>react-hook-form</code>中。
        </p>
        <CodeArea
          rawData={input}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p>
          随着<code>Form</code>组件将<code>react-hook-form's props</code>
          注入到子组件中，您可以轻松地在应用中组合各种复杂的表单。
        </p>
      </>
    ),
  },
  fieldArrays: {
    title: "列表式表单项",
    description: (
      <>
        <p>
          这是React Hook
          Form的最佳功能之一：您可以利用现有的HTML，而不需要引入其他的组件来实现此功能。
          关键在于name属性，在 React Hook Form
          中，name属性代表了要使用的数据结构。
        </p>

        <p>
          <b className={typographyStyles.note}>注意:</b> 我们还提供了自定义 hook
          用于复杂场景:{" "}
          <PageLink to="/api#useFieldArray">useFieldArray</PageLink>.
        </p>

        <p>
          下面的示例演示了如何通过操作输入组件的 name 属性来创建列表式表单。
        </p>

        <p>
          <b className={typographyStyles.note}>注意:</b>
          如果您的应用需要一些功能，例如：删除，插入，追加，前置， 此处是结合了
          <PageLink to="/api#Controller">Controller</PageLink>
          <a
            href="https://codesandbox.io/s/react-hook-form-v6-controller-append-prepepend-insert-7clz7"
            target="_blank"
            rel="noreferrer noopener"
          >
            的实现链接
          </a>
          。
        </p>
      </>
    ),
  },
  connectForm: {
    title: "连接表单",
    description: (
      <p>
        当我们构建表单时，有时输入组件在组件树中嵌套的很深，这正是
        <a href="/api#useFormContext">FormContext</a>的使用场景。
        然而，我们可以通过创建 ConnectionForm 组件并利用React的
        <a href="https://reactjs.org/docs/render-props.html">renderProps</a>
        来进一步改善开发体验。它的好处是可以更简单地连接输入组件与 React Hook
        Form。
      </p>
    ),
  },
  conditionalControlledComponent: {
    title: "条件式受控组件",
    description: (
      <>
        <p>
          React Hook
          Form处理条件式表单项非常简单，因为当你从组件树中移除了输入组件，它会自动变为
          <code>unregistered</code>，
          <a
            href="https://codesandbox.io/s/13ykqx4wx7"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看示例
          </a>
          。但是，由于没有注册ref，对受控组件来说并不一样。这种情况下，我们可以用下列方式：
        </p>
        <ul>
          <li>
            <p>折叠起输入组件</p>
          </li>
          <li>
            <p>为遮罩或弹出框构建分离的表单</p>
          </li>
          <li>
            <p>
              利用
              <code>
                <a
                  href="https://reactjs.org/docs/hooks-effect.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  useEffect
                </a>
              </code>
              和自定义注册来实现。
            </p>
          </li>
          <li>
            <p>
              使用
              <PageLink to="/api#Controller">Controller</PageLink>
              来包裹您的组件，让它管理注册与取消注册。
            </p>
          </li>
        </ul>
        <p>例子如下:</p>
      </>
    ),
  },
  formContext: {
    title: "FormProvider 性能优化",
    description: (
      <p>
        React Hook Form的
        <PageLink to="/api/#FormProviderPerformance">FormProvider</PageLink>
        是建立在React的
        <a
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          Context
        </a>
        API上。它解决了在组件树中数据需要逐级手动传递的问题。
        但是同时它也会导致组件树在 React Hook Form
        状态更新时触发重渲染，而下方的示例展示了——如果需要，我们仍然可以继续优化它。
      </p>
    ),
  },
  customHookwithResolver: {
    title: "Resolver 与自定义Hook",
    description: (
      <>
        <p>
          您可以构建一个自定义hook 作为
          resolver。作为校验方法，yup/Joi/Superstruct可以非常方便地集成到自定义hook中
          ，并在校验 resolver 中使用。
        </p>
        <ul>
          <li>
            定义一个缓存的校验结构（或者在没有任何依赖的前提下定义在组件外部）
          </li>
          <li>传入校验结构，使用自定义hook</li>
          <li>将校验 resolver 传递给 useForm hook</li>
        </ul>

        <CodeArea rawData={customHookWithValidationResolver} />
      </>
    ),
  },
  workingWithVirtualizedList: {
    title: "使用虚拟列表",
    description: (
      <>
        <p>
          想象一下您有一个表。该表可能包含数百或数千行，并且每一行都可以输入。
          一种常见的做法是仅渲染视窗内的部分，但是这会引起问题，因为这些表格会在脱离视窗时被移出DOM，反之则重新添加。这样就会导致这些表格
          在进入视窗时被重置为默认值。
        </p>

        <p>若要解决此问题，您可以手动注册字段，然后命令式地设置字段的值。</p>

        <p>
          下面是一个使用示例{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/bvaughn/react-window"
          >
            react-window
          </a>
          .
        </p>

        <CodeArea
          rawData={virtualizedList}
          url="https://codesandbox.io/s/react-hook-form-with-react-window-b4j8n"
        />
      </>
    ),
  },
  testingForm: {
    title: "测试表单",
    description: (
      <>
        <p>
          测试是非常重要的，因为它避免代码错误或
          人为错误，并在重构时确保代码的安全性。
        </p>

        <p>
          我们建议使用
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://testing-library.com/"
          >
            testing-library
          </a>
          ，因为它很简单，而且更聚焦用户的行为。
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>步骤 1:</b> 设置您的测试环境。
        </p>

        <p>
          请安装
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/testing-library/jest-dom"
          >
            @testing-library/jest-dom
          </a>{" "}
          ，以及<code>jest</code>的最新版本，因为 react-hook-form 使用{" "}
          <code>MutationObserver</code> 来探测输入组件是否从DOM中移除。
        </p>

        <p>
          <b className={typographyStyles.note}>注意：</b> 如果您使用的是React
          Native，你不需要安装{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/testing-library/jest-dom"
          >
            @testing-library/jest-dom
          </a>
          .
        </p>

        <CodeArea rawData={"npm install -D @testing-library/jest-dom"} />

        <p>
          创建<code>setup.js</code>来导入
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/testing-library/jest-dom"
          >
            @testing-library/jest-dom
          </a>
          。
        </p>

        <p>
          <b className={typographyStyles.note}>注意:</b> 如果您使用的是React
          Native，你需要创建{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/react-hook-form/react-hook-form/blob/master/setup.native.ts"
          >
            setup.js
          </a>{" "}
          , 并定义 <code>window</code>对象。
        </p>

        <CodeArea
          rawData={'import "mutationobserver-shim";'}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/setup.js"
        />

        <p>
          最后，你必须更新<code>jest.config.js</code>中的<code>setup.js</code>
          来包含该文件。
        </p>

        <CodeArea
          rawData={CodeExampleTestingForm.step1}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/setup.js"
        />

        <p>
          <b className={typographyStyles.note}>步骤 2:</b> 创建登录表单。
        </p>

        <p>
          我们已经针对性地设置了 role 的属性。
          在您编写测试和提高可访问性时，这些属性很有帮助。您可以参考。
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://testing-library.com/"
          >
            testing-library
          </a>
          文档获取更多信息。
        </p>

        <CodeArea
          rawData={CodeExampleTestingForm.step2}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/src/App.js"
        />

        <p>
          <b className={typographyStyles.note}>Step 3:</b> 编写测试。
        </p>

        <p>以下标准是我们在测试中试图涵盖的内容。</p>

        <ul>
          <li>
            <p>测试提交失败。</p>

            <p>
              我们使用<code>waitFor</code>和<code>find*</code>方法来
              检测提交反馈，因为<code>handleSubmit</code>方法是异步执行的。
            </p>
          </li>
          <li>
            <p>测试每个输入组件的校验。</p>

            <p>
              我们使用<code>*ByRole</code>方法查询不同的
              元素，因为这就是用户使用你的UI组件的方式。
            </p>
          </li>
          <li>
            <p>测试提交成功。</p>
          </li>
        </ul>

        <CodeArea
          rawData={CodeExampleTestingForm.step3}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/src/App.test.js"
        />
      </>
    ),
  },
  strictlyTyped: {
    title: "严格类型",
    description: (
      <>
        <p>
          由于注册过程中天然松散的 name
          属性，为输入组件/表单构建严格的类型非常具有挑战。我们创建了一个额外的插件，使之成为可能。
        </p>

        <CodeArea rawData={"npm install @hookform/strictly-typed"} />

        <p>
          必须使用<code>TypedController</code>
          来包装输入组件，才可以将输入的 name 字符串转换成数组形状。
        </p>

        <CodeArea
          tsRawData={strictlyTyped}
          tsUrl="https://codesandbox.io/s/react-hook-form-usetypedcontroller-23qv1"
        />
      </>
    ),
  },
}
