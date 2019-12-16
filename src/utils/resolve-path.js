import { withPrefix } from "gatsby"

// this is a workaround to https://github.com/gatsbyjs/gatsby/issues/8479
// until that is fixed this will add the path prefix as needed for production.
const resolvePath = path => {
  const resolvedPath = withPrefix(path)
  return resolvedPath
}

export default resolvePath
