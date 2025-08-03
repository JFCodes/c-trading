import { Request, Response, NextFunction } from 'express'
import { CONFIG } from 'ct-config'

export default function (req: Request, res: Response, next: NextFunction) {
  const cors = CONFIG.ENDPOINTS.APPS.TESTING

  res.setHeader('Access-Control-Allow-Origin', cors)
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Accept, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  if (req.method === 'OPTIONS') {
    return res.status(200).send()
  }

  next()
}
