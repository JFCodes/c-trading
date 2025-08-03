import type { Response } from 'express'

export function BadRequest (res: Response): void {
  res.sendStatus(400)
}

export function InternalError (res: Response): void {
  res.sendStatus(500)
}

export function NotFound (res: Response): void {
  res.sendStatus(404)
}