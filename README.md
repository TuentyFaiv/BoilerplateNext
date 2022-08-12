# Template Frontend with Next.js
<p align="center">
  <img src="https://img.shields.io/badge/next.js%20-%23222222.svg?&style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js badge" />
  <img src="https://img.shields.io/badge/i18next%20-%2326a69a.svg?&style=for-the-badge&logo=i18next&logoColor=white" alt="I18next badge" />
  <img src="https://img.shields.io/badge/styled components%20-%23db7093.svg?&style=for-the-badge&logo=styledcomponents&logoColor=white" alt="Sass badge" />
  <img src="https://img.shields.io/badge/typescript%20-%233178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript badge" />
  <img src="https://img.shields.io/badge/eslint%20-%234b32c3.svg?&style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint badge" />
  <img src="https://img.shields.io/badge/formik%20-%231d4ed8.svg?&style=for-the-badge&logo=formik&logoColor=white" alt="Formik badge" />
  <img src="https://img.shields.io/badge/yup%20-%23111827.svg?&style=for-the-badge&logo=yup&logoColor=white" alt="Yup badge" />
  <img src="https://img.shields.io/badge/sweetalert%20-%23f27474.svg?&style=for-the-badge&logo=sweetalert&logoColor=white" alt="Sweetalert badge" />
</p>


This template is made in Typescript, Next.js, i18n for the locales, Formik for the logic in forms and Yup for validations, Sweetalert and Styled Components for the styles.

## Docs

- [Next.js Documentation](https://nextjs.org/docs)
- [API routes](https://nextjs.org/docs/api-routes/introduction)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js deployment documentation](https://nextjs.org/docs/deployment)

## Getting Started
### Scripts:
- `npm install` to install all dependencies
- `npm run dev` for development mode and start with the creation of a new universe
- `npm run build` to make the project build
- `npm run start` to start the project in production mode
- `npm run lint` for eslint validation

## Environment variables
To use environment variables copy the file `.env.local.example` and rename as `.env.local`.

> ### Note:
> Never put variables in `.env.local.example`

## Alias
| Name              | Description                                                  | Example        |
| ----------------- | ------------------------------------------------------------ | -------------- |
| @components       | All components on src/components/index.ts                    | `import { Header } from "@components";` |
| @containers       | All containers on src/containers/index.ts                    | `import { SigninForm } from "@containers";` |
| @context          | All contexts on src/context/index.ts                         | `import { AppProvider } from "@context";` |
| @hooks            | All custom hooks on src/hooks/index.ts                       | `import { useModal } from "@hooks";` |
| @hoc              | All custom hoc(higher-order component) on src/hoc/index.ts   | `import { withAuth } from "@hoc";` |
| @pages            | All pages on src/pages/*                                     | `const Home = lazy(() => import("@pages/Home"));` or `import Home from "@pages/Home";` |
| @utils            | All functions on src/common/utils.ts                         | `import { PaymentError } from "@utils` |
| @typing           | All typing on src/common/typing/index.ts                     | `import { SigninValues } from "@typing` |
| @config           | Global config on src/common/config.ts                        | `import config from "@config";` |
| @schemas          | All schemas for formik on src/common/schemas/index.ts        | `import { SigninSchema } from "@schemas";` |
| @services         | All services for connections on src/common/services/index.ts | `import { signin } from "@services";` |
| @stylesComponents | All styles for components on src/styles/components/index.ts  | `import { Header as Styles } from "@stylesComponents";` |
| @stylesPages      | All styles for pages on src/styles/pages/index.ts            | `import "import { Home as Styles } from "@stylesPages";` |
| @styles           | Globals styles on src/styles/Globals.ts                      | `import GlobalStyle from "@styles";` |
| @images           | All images on src/assets/images/*                            | `import Background from "@images/background.png";` | 
| @icons            | All icons on src/assets/images/icons/*                       | `import Logo from "@icons/logo.svg";` |
| @videos           | All videos on src/assets/videos/*                            | `import Video from "@videos/video.mp4";` |
| @fonts            | All fonts on src/assets/fonts/*                              | `url("@fonts/Lato.ttf");` |


## Folder architecture

> - public/
>     - locales/
>       - lang/namespace.json // Example: es/translation.json
> - src/
>   - common/
>     - typing/
>       - index.ts
>       - interface.ts
>       - proptypes.ts
>       - types.ts
>     - schemas/
>       - index.ts
>       - auth.ts
>     - services/
>       - index.ts
>       - auth.ts
>     - config.ts
>     - utils.ts
>   - components/
>     - Header.tsx
>     - index.ts
>   - containers/
>     - ContainerExample.tsx
>     - index.ts
>   - context/
>     - app/
>       - AppContext.tsx
>       - reducer.ts
>     - service/
>       - ServiceContext.tsx
>       - http.ts
>     - index.ts
>   - hoc/
>     - withCustomHoc.tsx
>     - index.ts
>   - hooks/
>     - index.ts
>     - useCustomHook.ts
>   - pages/
>     - api/
>       - custom.ts // Example route: /api/hello
>     - _app.tsx
>     - _document.tsx
>     - index.tsx
>   - styles/
>     - components/
>       - responsive/
>         - _Header.ts
>       - Header.ts
>       - index.ts
>     - pages/
>       - responsive/
>         - _Home.ts
>       - Home.ts
>       - index.ts
>     - Mixins.ts
>     - Globals.ts
