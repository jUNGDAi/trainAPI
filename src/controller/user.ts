import { Router, Request, Response } from 'express'
import { UserService } from '../shared/user'
import { jwt } from '../shared/auth'

const router = Router();

router.get('/', jwt.authenticate(), (req: Request, res: Response) => {
    UserService.list((err, result) => {
        if (err)
            res.json(err)
        else
            res.json(result)
    })
    // res.json({ success: true })
});

export const UserController: Router = router 