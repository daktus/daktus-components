<div align="center">
  <a href="https://gitlab.com/conexasaude/design-system/hero">
    <img src="src/assets/logo-conexa.png" width="300px" />
  </a>
</div>

<br/>

<div align="center">
<h1>Conexa design system library for React</h1>
</div>

<br>

Hero provides a set of React
components to create Conexa webapps.

<h1 id="documentation">
Documentation 📝
</h1>

https://hero.conexasaude.com.br

# Installing Hero ⬇️

To use Hero components, all you need to do is install the
`@conexasaude/hero` package and its peer dependencies:

```sh
$ yarn add @conexasaude/hero @emotion/react

# or

$ npm i @conexasaude/hero @emotion/react
```

# Auth 🔑

To use `@conexasaude` packages, you need to authenticate on registry. Follow these steps:

1. Run:

```bash
yarn config set "npmRegistries['https://gitlab.com/api/v4/packages/npm/'].npmAuthToken" "<your_token>" --home
```

- `<your_token>` is your personal gitlab access token.

  To get your access token:

  - Access: [Personal tokens](https://gitlab.com/profile/personal_access_tokens)
  - Check the items on Scopes
  - Click 'create personal access token'
  - Copy the generated token

<br/>

You should now be able to install the packages in your project.

For more information: [Gitlab registry auth documentation](https://docs.gitlab.com/ee/user/packages/npm_registry/#instance-level-npm-endpoint)

<br>

# Usage 💻

To start using the components, please follow these steps:

1. Optionally, you can wrap your application with the `ThemeProvider` so you can user different themes.

```jsx
import { ThemeProvider } from '@conexasaude/hero'
import { theme } from './theme'

function App() {
  return <ThemeProvider theme={theme}>...</ThemeProvider>
}
```

2. Import components from `@conexasaude/hero` then use it:

```jsx
import { Button } from '@conexasaude/hero'

function Example() {
  return <Button>I am just a Hero Button</Button>
}
```

More on ([Documentation](#documentation)).
