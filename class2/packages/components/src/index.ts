import { makeInstaller } from './utils/install'
import installs from './installs'

export * from './components'


export default makeInstaller([...installs])