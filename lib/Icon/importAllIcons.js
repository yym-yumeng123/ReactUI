let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../../assert/icons/', true, /\.svg$/))
} catch (error) {
}
