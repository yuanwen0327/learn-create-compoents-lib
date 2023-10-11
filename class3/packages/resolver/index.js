function GieResolver () {
  return {
    type: 'component',
    resolve: (name) => {
      if (name.startsWith('Gie')) {
        
        const partialName = name.slice(3)
        return {
          name: 'Gie' + partialName,
          from: `@giegie/components`,
          sideEffects: `@giegie/components/es/${partialName}/style/index.css`
        }
      }
    }
  }
}

module.exports = {
  GieResolver
}