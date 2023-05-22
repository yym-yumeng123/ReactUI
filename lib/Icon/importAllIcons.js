let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('lib/assets/icons', true, /\.svg$/))
} catch (error) {
}
