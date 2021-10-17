import { Router } from 'express'
import ContainerModule from '../modules/container/container.module'
import FileModule from '../modules/file/file.module'

const router = Router()

router.get('/container', ContainerModule.createContainer)
router.get('/container/:containerID/files', FileModule.getFolderInfo)
router.post('/container/:containerID/files', FileModule.createFile)
router.get('/container/:containerID/files/:fileName', FileModule.getFile)
router.put('/container/:containerID/files/:fileName', FileModule.saveFile)
router.get('/container/:containerID/files/:fileName/run', FileModule.executeFile)

export default router
