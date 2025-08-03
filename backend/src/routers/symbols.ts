import { Router } from 'express'
// Controller
import GetKLinesTimeline from '../controllers/symbols/get-k-lines-timeline'

export const router = Router()

router.get('/:symbol/k-lines-timeline', GetKLinesTimeline)
